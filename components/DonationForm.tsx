"use client";

import React, { useState, useEffect } from "react";
import Step1 from "./DonationStep1";
import Step2 from "./DonationStep2";
import Step3 from "./DonationStep3";

type DonationData = {
  frequency: string;
  amount: number;
  paymentMethod: "card" | "bank";
  firstName: string;
  lastName: string;
  email: string;
  postalCode: string;
  street: string;
  city: string;
  state: string;
  country: string;
};


export default function App({ heading, description }) {
  const [step, setStep] = useState(1);
  const [donationData, setDonationData] = useState<Partial<DonationData>>({});

  const handleNext = (data: Partial<DonationData>) => {
    setDonationData({ ...donationData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data: Partial<DonationData>) => {
    const finalData = { ...donationData, ...data };
    console.log("Donation submitted:", finalData);
    // Send the data to your backend here
  };

  return (
      <div className="App">
            {step === 1 && (
            <Step1 
                onNext={handleNext}
                heading={heading}
                description={description}
             />
             )}
            {step === 2 && (
            <Step2 onNext={handleNext}
             onPrevious={handlePrevious}
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
                postalCode={donationData.postalCode}
                street={donationData.street}
                city={donationData.city}
                state={donationData.state}
                country={donationData.country}
              />
            )}
          
          <div className=" p-0 mt-10 md:mt-0 md:px-6 md:py-4 flex justify-between items-center">
            <div>Step {step} of 3</div>

        </div>
      </div>
  );
}