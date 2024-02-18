import React from 'react';
import SellerRegistrationSection from '../components/SellerRegistrationSection';
import BuyerRegistrationSection from '../components/BuyerRegistrationSection';

const Register: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <SellerRegistrationSection />
          <BuyerRegistrationSection />
        </div>
      </div>
    </div>
  );
};

export default Register;
