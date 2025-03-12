import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CheckoutForm from "@/components/DonationSecCheckoutForm";
import CompletePage from "@/components/CompletePage";

type Step3Props = {
  onSubmit: (data: any) => void
  onPrevious: () => void
  paymentMethod?: 'card' | 'check'
  frequency?: 'one-time' | 'monthly'
  amount?: string | number
  customAmount?: number
  designation?: string
  coverFee?: boolean
  newsletter?: boolean
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

export default function Step3({
  onSubmit,
  onPrevious,
  paymentMethod = 'card',
  frequency = 'one-time',
  amount,
  customAmount,
  designation,
  coverFee,
  newsletter,
  firstName,
  lastName,
  email,
  postalCode,
  street,
  city,
  state,
  country,
}: Step3Props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && frequency) {
    const finalAmount = amount === "custom" ? customAmount : amount;

      const body = {
        items: [
          {
            id: "Payment",
            amount: finalAmount,
            frequency,
            designation,
            coverFee,
            newsletter,
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
    <div className="space-y-6">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-center">Payment</h3>   
        </div>

      {paymentMethod === 'check' ? (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Bank Information</h3>
          <div className="space-y-2">
            <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
            <input
              id="bankName"
              {...register('bankName', { required: 'Bank name is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Bank Account Number</label>
            <input
              id="accountNumber"
              type="password"
              {...register('accountNumber', { required: 'Account number is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-700">Bank Routing Number</label>
            <input
              id="routingNumber"
              {...register('routingNumber', { required: 'Routing number is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.routingNumber && <p className="text-red-500 text-sm">{errors.routingNumber.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Account Type</label>
            <select
              id="accountType"
              {...register('accountType', { required: 'Account type is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="checking">Checking</option>
              <option value="savings">Savings</option>
            </select>
            {errors.accountType && <p className="text-red-500 text-sm">{errors.accountType.message as string}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700">Account Holder</label>
            <select
              id="accountHolder"
              {...register('accountHolder', { required: 'Account holder type is required' })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>
            {errors.accountHolder && <p className="text-red-500 text-sm">{errors.accountHolder.message as string}</p>}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Card Information</h3>
          <div className="space-y-2">
          </div>
        </div>
      )}

    {paymentMethod === 'check' && (
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {`Donate $${amount || '0'}`}
        </button>
    )}
    </form>

    {paymentMethod === 'card' && clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {confirmed ? <CompletePage /> : <CheckoutForm />}
        </Elements>
      )}
        <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        {/* <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {`Donate $${amount || '0'}`}
        </button> */}
      </div>
    </div>
  )
}

