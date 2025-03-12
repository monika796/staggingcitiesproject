import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function VantageCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${process.env.NEXT_STRIPE_DONATIONSEC_RETURN_URL}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message || "An error occurred");
        } else {
          setMessage("An unexpected error occurred.");
        }
      }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs" as const, // Explicitly define 'tabs' as a valid layout value
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <div className="flex justify-end">
      <button disabled={isLoading || !stripe || !elements} id="submit" className="mt-5 bg-[#A1CF5F] text-black py-2 px-4 rounded-md hover:bg-[#0f85c2] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Complete"}
        </span>
      </button></div>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
