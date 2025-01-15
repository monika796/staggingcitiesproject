import React from 'react';

const UserNameEmail = ({ data, handleChange ,errors }) => {
    return (
        <div className=" mx-auto">
            <form className="bg-white rounded pt-6 pb-8 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input_5">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        name="input_5" type="email" placeholder="Email..." value={data.input_5} onChange={handleChange} required />
                {errors.input_5 && <p className="text-red-500 pt-5 text-m">{errors.input_5}</p>}
                </div>
            </form>
        </div>
    );
};

export default UserNameEmail;
