import React from 'react';

const BuyerRegistrationSection: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 p-8 bg-white rounded-lg shadow-lg m-10">
      <h2 className="text-3xl font-bold mb-6 text-sky-900">Buyer Registration</h2>
      <form className="space-y-6">
        <label className="block text-sky-900">
            <label className=' mr-5'>Full Name : </label>
            <input type="text" className="form-input mt-1 text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:shadow-outline-purple" placeholder="Enter your name" />
        </label>
        <label className="block text-sky-900">
            <label className=' mr-5'>Email : </label>
            <input type="email" className="form-input mt-1 text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:shadow-outline-purple" placeholder="Enter your email" />
        </label>
        <label className="block text-sky-900">
            <label className=' mr-5'>Password : </label>
            <input type="password" className="form-input mt-1 text-gray-800 bg-white bg-opacity-20 focus:outline-none focus:shadow-outline-purple" placeholder="Enter your password" />
        </label>

        <button type="submit" className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-500">
          Register as Buyer
        </button>
      </form>
    </div>
  );
};

export default BuyerRegistrationSection;
