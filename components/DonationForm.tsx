"use client";

import React, { useState, useEffect } from "react";
import Step1 from "./DonationStep1";
import Step2 from "./DonationStep2";
import Step3 from "./DonationStep3";

type DonationData = {
  frequency: string;
  amount: string;
  paymentMethod: "card" | "bank";
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  postalCode: string;
  street: string;
  city: string;
  state: string;
  country: string;
};


export default function App({ heading, description }) {
  const [step, setStep] = useState(1);
  const [donationData, setDonationData] = useState<Partial<DonationData>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleNext = (data: Partial<DonationData>) => {
    setDonationData({ ...donationData, ...data });
    setStep(step + 1);
    setSuccessMessage(null);
  };

  const handlePrevious = () => {
    setStep(step - 1);
    setSuccessMessage(null);
  };

  const handleSubmit = (data: Partial<DonationData>) => {
    const finalData = { ...donationData, ...data };
    console.log("Donation submitted:", finalData);
    // Send the data to your backend here
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('redirect_status') === 'succeeded') {
      setSuccessMessage('Payment succeeded! Thank you for your contribution.');
      
      // Automatically remove the success message after 5 seconds
      // const timer = setTimeout(() => {
      //   setSuccessMessage(null);
      // }, 5000);
  
      // // Cleanup function to clear the timer
      // return () => clearTimeout(timer);
    }
  }, []);  

  return (
      <div className="App">
        {successMessage && (
            <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
              {successMessage}
            </div>
          )}
            {step === 1 && (
            <Step1 
                onNext={handleNext}
                heading={heading}
                description={description}
                amount={donationData.amount}
                frequency={donationData.frequency}
                paymentMethod={donationData.paymentMethod}
             />
             )}
            {step === 2 && (
            <Step2 onNext={handleNext}
              onPrevious={handlePrevious}
              firstName= {donationData.firstName}
              lastName= {donationData.lastName}
              email= {donationData.email}
              phone= {donationData.phone}
              postalCode={donationData.postalCode}
              street={donationData.street}
              city={donationData.city}
              state={donationData.state}
              country={donationData.country}
            /> )}
            {step === 3 && (
              <Step3
                onSubmit={handleSubmit}
                onPrevious={handlePrevious}
                paymentMethod={donationData.paymentMethod}  
                frequency={donationData.frequency}            
                amount={donationData.amount}                
                firstName= {donationData.firstName}
                lastName= {donationData.lastName}
                email= {donationData.email}
                phone= {donationData.phone}
                postalCode={donationData.postalCode}
                street={donationData.street}
                city={donationData.city}
                state={donationData.state}
                country={donationData.country}
              />
            )}
          
          <div className="px-6 py-4 flex justify-between items-center">
            <div>Step {step} of 3</div>

        </div>
      </div>
  );
}