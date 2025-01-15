import React from 'react';

const DobGender = (props) => {
    const { data, handleChange ,errors } = props;
    
    return (
        <div className="mx-auto">
            <form className="rounded pt-6 pb-8 mb-4">
                <h2 className="text-[22px] font-bold text-black">General Information</h2><br className="hidden md:block" />
                
                <div className="inline-block relative w-full mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        Which Leadership Circle are you applying for? *
                    </label>
                    <select
                        className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_13"
                        value={data.input_13 || ""}
                        onChange={handleChange}
                    >
                        <option value="">Select Option</option>
                        <option value="Global Leadership Circle (Fall 2024)">Global Leadership Circle (Fall 2024)</option>
                        <option value="Denver Leadership Circle (Fall 2024)">Denver Leadership Circle (Fall 2024)</option>
                        <option value="Washington D.C. Leadership Circle (Fall 2024)">Washington D.C. Leadership Circle (Fall 2024)</option>
                    </select>
                    {errors.input_13 && <p className="text-red-500 pt-5 text-m">{errors.input_13}</p>}
                </div>

                <div className="py-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        First Name *
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_6"
                        type="text"
                        value={data.input_6 || ""}
                        onChange={handleChange}
                    />
                       {errors.input_6 && <p className="text-red-500 pt-5 text-m">{errors.input_6}</p>}
                </div>

                <div className="py-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        Last Name *
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_14"
                        type="text"
                        value={data.input_14 || ""}
                        onChange={handleChange}
                    />
                      {errors.input_14 && <p className="text-red-500 pt-5 text-m">{errors.input_14}</p>}
                </div>

                <div className="py-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        Mobile (include country code) *
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_15"
                        type="text"
                        value={data.input_15 || ""}
                        onChange={handleChange}
                    />   {errors.input_15 && <p className="text-red-500 pt-5 text-m">{errors.input_15}</p>}
                </div>

                <div className="py-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        City *
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_16"
                        type="text"
                        value={data.input_16 || ""}
                        onChange={handleChange}
                    />{errors.input_16 && <p className="text-red-500 pt-5 text-m">{errors.input_16}</p>}
                </div>

                <div className="py-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        Country *
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_17"
                        type="text"
                        value={data.input_17 || ""}
                        onChange={handleChange}
                    />{errors.input_17 && <p className="text-red-500 pt-5 text-m">{errors.input_17}</p>}
                </div>

                <div className="py-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        How did you hear about the Leadership Circle? *
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_18"
                        type="text"
                        value={data.input_18 || ""}
                        onChange={handleChange}
                    />{errors.input_18 && <p className="text-red-500 pt-5 text-m">{errors.input_18}</p>}
                </div>

                <div className="py-3">
                    <label className="block text-gray-700 text-sm font-bold mb-3">
                        Best contact info for the person who referred you. *
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_19"
                        type="text"
                        value={data.input_19 || ""}
                        onChange={handleChange}
                    />{errors.input_19 && <p className="text-red-500 pt-5 text-m">{errors.input_19}</p>}
                </div>

            </form>
        </div>
    );
}

export default DobGender;
