import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "@/components/VantageCheckoutForm";
import CompletePage from "@/components/CompletePage";

type VantageStripe = {
  paymentMethod?: 'card' | 'bank'
  frequency?: string
  amount?: string | number
  firstName?: string
  lastName?: string
  email?: string
  postalCode?: string
  street?: string;
  city?: string;
  state?: string;
  country?: string;
}

const stripePromise = loadStripe(`${process.env.NEXT_STRIPE_PUBLISH_KEY}`);

export default function VantageStripeForm({
  paymentMethod = 'card',
  frequency = 'one-time',
  amount,
  firstName,
  lastName,
  email,
  postalCode,
  street,
  city,
  state,
  country,
}: VantageStripe) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && frequency) {
      const finalAmount = amount;
      const body = {
        items: [
          {
            id: "Payment",
            amount: finalAmount,
            frequency,
            paymentMethod,
          },
        ],
        customer: {
          firstName,
          lastName,
          email,
          postalCode,
          street,
          city,
          state,
          country,
        },
      };

      fetch(`${process.env.NEXT_BACKEND_STRIPE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((error) => console.error("Error fetching client secret:", error));
    }
  }, [frequency]);

  const appearance = {
    theme: "stripe" as "stripe", 
  };
  const options = clientSecret ? { clientSecret, appearance } : undefined;

  return (
    <div className="space-y-6 relative">
        {paymentMethod === 'card' && clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            {confirmed ? <CompletePage /> : <CheckoutForm />}
          </Elements>
        ) : (
          <div className='pt-20 pb-20'><p>Loading...</p></div>
        )}
    </div>
  );
}
