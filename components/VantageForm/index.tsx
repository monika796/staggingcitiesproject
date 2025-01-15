"use client";
import React, { useState } from "react";
import Link from "next/link";


import Image from "next/image";
const SecondSection = () => {
  const [isPanelOneOpen, setIsPanelOneOpen] = useState(true);
  const [isPanelTwoOpen, setIsPanelTwoOpen] = useState(false);

  return (
    <>
   <section>
      <div className="flex flex-wrap md:flex-nowrap  gap-3 justify-between">
         <div className="md:w-8/12">
         <div className="w-full mt-10">
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
         <form className="mt-8">
                  <div className="flex gap-10">
                      <div className="md:w-6/12">
                      <input type="text" placeholder="First Name" id="detail_first_name" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>
                      <div className="md:w-6/12">
                      <input type="text" placeholder="Last Name" id="detail_last_name" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>
                  </div>
                  <div className="flex gap-10 mt-5">
                      <div className="md:w-6/12">
                      <input type="text" placeholder="Email" id="detail_email" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>
                      <div className="md:w-6/12">
                      <input type="text" placeholder="Phone" id="detail_phone" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>
                  </div>
                  <div className="flex gap-10 mt-5">
                      <div className="md:w-full">
                      <input type="text" placeholder="Street Address" id="detail_line1" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>                      
                  </div>
                  <div className="flex gap-10 mt-5">
                      <div className="md:w-4/12">
                      <input type="text" placeholder="City" id="detail_city" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>  
                      <div className="md:w-4/12">
                      <input type="text" id="detail_line2" placeholder="Street Address" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>  
                      <div className="md:w-4/12">
                      <input type="text" id="detail_zipcode" placeholder="Zip" className="bg-transprant w-full border-b py-3 border-[#CDCDCD]" />
                      </div>                      
                  </div>
              </form>
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
    </div>
        <div className="term-condition mt-10">
            <h2 className="text-[20px] text-black leading-[24px] font-medium">Terms and Services</h2>
            <p className="text-[14px] mt-4 text-black leading-[24px]">Please review our  <Link className="text-[#A1CF5F] text-underline" href="#">Services and Data Agreement</Link>  carefully. By clicking 'Check', you agree to comply with all the policies and guidelines outlined in the document.</p>
            <p className="text-[15px] p-2 font-normal text-left decoration-slice"><input className="me-3"  type="checkbox" /> I have read and agree to CPG's Services and Data Agreement</p>
        </div>
      </div>
      <div className="md:w-4/12">

      <div className="bg-[#F7F7F7] rounded-lg  p-6 max-w-md mx-auto mt-10">
  <h2 className="text-[20px] text-black font-medium mb-2">Payment Info</h2>
  <p className="text-[#808080] text-[14px] mb-4">
    Please provide your payment details below to complete your purchase.
  </p>
  <div className="mb-4">
    <label
      htmlFor="payment-type"
      className="block text-gray-700 text-sm font-bold mb-2"
    >
      Payment
    </label>
    <select
      id="payment-type"
      className="   w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent w-full border-b  border-[#CDCDCD]"
    >
      <option value="1-license">1 License ($24.99)</option>
    </select>
    <input
      type="hidden"
      id="stripe-amount"
      value={24.99}
      />
  </div>
  <div className="mb-4">
    <label
      htmlFor="card-name"
      className="block text-gray-700 text-sm font-bold mb-2"
    >
      Name on Card
    </label>
    <input
      type="text"
      id="card-name"
      placeholder="e.g. Johan Liebert"
      className=" w-full py-2 bg-transparent w-full border-b  border-[#CDCDCD] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="card-number"
      className="block text-gray-700 text-sm font-bold mb-2"
    >
      Credit/Debit Card Number
    </label>
    <input
      type="text"
      id="card-number"
      placeholder="XXXX XXXX XXXX XXXX"
      className="w-full py-2 bg-transparent w-full border-b  border-[#CDCDCD] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <div className="mb-4 flex">
    <div className="w-1/2 mr-2">
      <label
        htmlFor="expiry-date"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Expiry Date
      </label>
      <input
        type="text"
        id="expiry-date"
        placeholder="MM/YY"
        className=" rounded w-full py-2 bg-transparent w-full border-b  border-[#CDCDCD] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="w-1/2 ml-2 mb-10">
      <label
        htmlFor="cvv"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        CVV
      </label>
      <input
        type="text"
        id="cvv"
        placeholder="XXX"
        className=" w-full py-2 bg-transparent w-full border-b  border-[#CDCDCD] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  </div>
  <Link href="https://cityprojectglobal.vercel.app/" className=" flex w-fit  items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">Submit & Pay $24.99<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></Link>
</div>
</div>
</div>
</section>
</>
  );
};

export default SecondSection;
