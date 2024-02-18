import React from 'react';
import SellerRegistrationSection from './SellerRegistrationSection';
import BuyerRegistrationSection from './BuyerRegistrationSection';

const RegistrationPage: React.FC = () => {
  return (
    <div className="py-16 px-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row rounded-md overflow-hidden py-10">
          <SellerRegistrationSection />
          <BuyerRegistrationSection />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
