import React, { useState, useEffect } from 'react';

const Address = (props) => {
    const { data, handleChange ,errors } = props;

    // Handle change specifically for the checkboxes
    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        let updatedValues;

        if (checked) {
            // Add the value to the array
            updatedValues = [...data[name], value];
        } else {
            // Remove the value from the array
            updatedValues = data[name].filter(item => item !== value);
        }

        // Update the data with the new values
        handleChange({ target: { name, value: updatedValues } });
    };

    return (
        <form className="w-full mx-auto rounded pt-6 pb-8 mb-4">
            <h2 className="text-[22px] font-bold text-black">Tell us a little about yourself</h2><br className="hidden md:block" />
           
            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    Why do you want to be part of a Leadership Circle cohort? <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_20"
                    type="text"
                    value={data.input_20}
                    onChange={handleChange}
                />{errors.input_20 && <p className="text-red-500 pt-5 text-m">{errors.input_20}</p>}
            </div>

            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    What is your current vocation/occupation? <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_22"
                    type="text"
                    value={data.input_22}
                    onChange={handleChange}
                />{errors.input_22 && <p className="text-red-500 pt-5 text-m">{errors.input_22}</p>}
            </div>

            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    What leadership roles have you held? <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_23"
                    type="text"
                    value={data.input_23}
                    onChange={handleChange}
                />{errors.input_23 && <p className="text-red-500 pt-5 text-m">{errors.input_23}</p>}
            </div>

            <div className="py-3">
  <label className="block text-gray-700 text-sm font-bold mb-3">
    Which sphere(s) of society do you sense God's call on you to influence? (check all that apply)
    <span className="text-[#ff0000]">*</span>
  </label>
  <div className="space-y-2">
    {[
      "Family",
      "Economics",
      "Government",
      "Religion",
      "Education",
      "Media/Communications",
      "Celebration (arts, entertainment, and sports)",
    ].map((sphere) => (
      <label className="flex items-center space-x-2" key={sphere}>
        <input
          className="form-checkbox text-black"
          type="checkbox"
          name="input_25"
          value={sphere}
          checked={data.input_25.includes(sphere)}
          onChange={handleCheckboxChange}
        />
        <span className="text-black">{sphere}</span>
      </label>
    ))}
    {errors.input_25 && <p className="text-red-500 pt-5 text-m">{errors.input_25}</p>}
  </div>
</div>


            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    What do you believe is your calling? <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_26"
                    type="text"
                    value={data.input_26}
                    onChange={handleChange}
                />{errors.input_26 && <p className="text-red-500 pt-5 text-m">{errors.input_26}</p>}
            </div>

            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    How have you engaged your calling for the good of the city? <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_27"
                    type="text"
                    value={data.input_27}
                    onChange={handleChange}
                />{errors.input_27 && <p className="text-red-500 pt-5 text-m">{errors.input_27}</p>}
            </div>

            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    What do you see around you that is not the way it should be? (This can be in your industry and/or your city) <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_28"
                    type="text"
                    value={data.input_28}
                    onChange={handleChange}
                />{errors.input_28 && <p className="text-red-500 pt-5 text-m">{errors.input_28}</p>}
            </div>

            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    How do you envision yourself and others being a part of a solution for what you answered above? <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_29"
                    type="text"
                    value={data.input_29}
                    onChange={handleChange}
                />{errors.input_29 && <p className="text-red-500 pt-5 text-m">{errors.input_29}</p>}
            </div>

            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    Give an example of how you've seen the Holy Spirit work in your life in recent years to help you become the person God intended you to be. <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_30"
                    type="text"
                    value={data.input_30}
                    onChange={handleChange}
                />{errors.input_30 && <p className="text-red-500 pt-5 text-m">{errors.input_30}</p>}
            </div>

            <div className="py-3">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                    Describe your ability to convene other people of influence both in your sphere as well as from other spheres. <span className='text-[#ff0000]'>*</span>
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="input_31"
                    type="text"
                    value={data.input_31}
                    onChange={handleChange}
                />{errors.input_31 && <p className="text-red-500 pt-5 text-m">{errors.input_31}</p>}
            </div>

        </form>
    );
}

export default Address;