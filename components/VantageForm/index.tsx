"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import VantageStripe from "@/components/VantageForm/VantageStripe";
import { countries } from '@/components/CountryList';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  amount: string;
  agreeToTerms: boolean;
};

const SecondSection = () => {
  const [isPanelOneOpen, setIsPanelOneOpen] = useState(true);
  const [isPanelTwoOpen, setIsPanelTwoOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const myRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log("Form submitted:", data);
    setFormData(data)
    setSuccessMessage(null)
    myRef.current?.scrollIntoView()
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
    <>
      <section>
        <div className="flex flex-wrap md:flex-nowrap gap-3 justify-between">
          {/* Form Section */}
          <div className="md:w-8/12">
            <div className="w-full mt-10">
            {successMessage && (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
                {successMessage}
              </div>
            )}
              <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                {/* Panel 1 */}
                <div className="mb-6">
                  <div
                    onClick={() => setIsPanelOneOpen(!isPanelOneOpen)}
                    className="flex items-center justify-between border-b border-[#414141] cursor-pointer rounded-t py-4"
                  >
                    <h2 className="text-[20px] text-black font-medium">
                      Fill in the following information to complete your purchase.
                    </h2>
                    <span className="text-xl transform transition-transform duration-300">
                      {isPanelOneOpen ? "▲" : "▼"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden rounded-b transition-all duration-300 ${
                      isPanelOneOpen ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="flex gap-10 flex-wrap md:flex-nowrap mt-10 md:mt-0">
                      <div className="md:w-6/12 w-full">
                        <input
                          type="text"
                          placeholder="First Name"
                          id="detail_first_name"
                          className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                          {...register("firstName", { required: "First Name is required" })}
                        />
                        {errors.firstName && (
                          <p className="text-red-500">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="md:w-6/12  w-full">
                        <input
                          type="text"
                          placeholder="Last Name"
                          id="detail_last_name"
                          className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                          {...register("lastName", { required: "Last Name is required" })}
                        />
                        {errors.lastName && (
                          <p className="text-red-500">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-10 flex-wrap md:flex-nowrap mt-10 md:mt-5">
                      <div className="md:w-6/12 w-full">
                        <input
                          type="email"
                          placeholder="Email"
                          id="detail_email"
                          className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="md:w-6/12 w-full">
                        <input
                          type="text"
                          placeholder="Phone"
                          id="detail_phone"
                          className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                          {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                              value: /^\+?[0-9 ]{10,20}$/,
                              message: "Phone number must be 10 to 15 digits and can optionally start with +",
                            },
                          })}
                        />
                        {errors.phone && (
                          <p className="text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mt-10 md:mt-5">
                      <input
                        type="text"
                        placeholder="Street Address"
                        id="detail_street"
                        className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                        {...register("streetAddress", { required: "Street Address is required" })}
                      />
                      {errors.streetAddress && (
                        <p className="text-red-500">{errors.streetAddress.message}</p>
                      )}
                    </div>
                    <div className="flex gap-10  flex-wrap md:flex-nowrap mt-10 md:mt-5">
                      <div className="md:w-6/12 w-full">
                        <input
                          type="text"
                          placeholder="City"
                          id="detail_city"
                          className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                          {...register("city", { required: "City is required" })}
                        />
                        {errors.city && (
                          <p className="text-red-500">{errors.city.message}</p>
                        )}
                      </div>
                      <div className="md:w-6/12 w-full">
                        <input
                          type="text"
                          placeholder="State"
                          id="detail_state"
                          className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                          {...register("state", { required: "State is required" })}
                        />
                        {errors.state && (
                          <p className="text-red-500">{errors.state.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-10 mt-5">
                      <div className="md:w-6/12">
                        <input
                          type="text"
                          placeholder="Zip Code"
                          id="detail_zip"
                          className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                          {...register("zip", { required: "Zip Code is required" })}
                        />
                        {errors.zip && (
                          <p className="text-red-500">{errors.zip.message}</p>
                        )}
                      </div>
                      <div className="md:w-6/12">
                      <select
                        id="detail_country"
                        {...register("country", { required: "Country is required" })}
                        className="bg-transparent w-full border-b py-3 border-[#CDCDCD]"
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                        {errors.country && (
                          <p className="text-red-500">{errors.country.message}</p>
                        )}
                      </div>
                    </div>
                    <input
                      type="hidden"
                      id="amount"
                      value={24.99}
                      {...register("amount")}
                    />
                  </div>
                </div>

                {/* Panel 2 */}
                <div>
                  <div
                    onClick={() => setIsPanelTwoOpen(!isPanelTwoOpen)}
                    className="flex items-center justify-between border-b border-[#414141] cursor-pointer rounded-t py-4"
                  >
                    <h2 className="text-[20px] text-black font-medium">
                      Purchasing from Outside the US
                    </h2>
                    <span className="text-xl transform transition-transform duration-300">
                      {isPanelTwoOpen ? "▲" : "▼"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden rounded-b transition-all duration-300 ${
                      isPanelTwoOpen ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="mt-8 p-4 bg-gray-100">
                      <p className="text-black text-[16px]">
                        This is the content for the second panel. You can add more details
                        here to review the purchase information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="term-condition mt-10">
                  <h2 className="text-[20px] text-black leading-[24px] font-medium">Terms and Services</h2>
                  <p className="text-[14px] mt-4 text-black leading-[24px]">Please review our  <Link className="text-[#A1CF5F] text-underline" href="#">Services and Data Agreement</Link>  carefully. By clicking 'Check', you agree to comply with all the policies and guidelines outlined in the document.</p>
                  <p className="text-[15px] p-2 font-normal text-left decoration-slice"> 
                    <input
                    {...register("agreeToTerms", {
                      required: "You must agree to the terms and conditions",
                    })}
                    type="checkbox"
                    className="me-3 mt-1"
                  /> I have read and agree to CPG's Services and Data Agreement</p>
                  {errors.agreeToTerms?.message && (
                    <p className="text-red-500 text-sm">{String(errors.agreeToTerms.message)}</p>
                  )}
              </div>

                <button
                  type="submit"
                  className="flex w-fit items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit & Pay $24.99
                </button>
              </form>
            </div>
          </div>

          {/* Payment Info Section */}
          <div className="md:w-4/12">
            <div className="bg-[#F7F7F7] rounded-lg p-6 max-w-md mx-auto mt-10">
              <h2 className="text-[20px] text-black font-medium mb-2">Payment Info</h2>
              <p className="text-[#808080] text-[14px] mb-4">
                Please provide your payment details below to complete your purchase.
              </p>
              <div className="mb-4" ref={myRef}>
                <label
                  htmlFor="payment-type"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Payment
                </label>
                <select
                  id="payment-type"
                  className=" w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent w-full border-b  border-[#CDCDCD]"
                >
                  <option value="1-license">1 License ($24.99)</option>
                </select>
              </div>
              {formData.firstName && (
                <VantageStripe
                  paymentMethod="card"
                  frequency="vantage"
                  amount={formData.amount}
                  firstName={formData.firstName}
                  lastName={formData.lastName}
                  email={formData.email}
                  phone={formData.phone}
                  postalCode={formData.zip}
                  street={formData.streetAddress}
                  city={formData.city}
                  state={formData.state}
                  country={formData.country}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
