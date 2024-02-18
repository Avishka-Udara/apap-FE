import React from 'react';

const AnnouncementsSection: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
      <div className="bg-white p-8 rounded-md shadow-md space-y-4">
        <h2 className="text-4xl font-bold mb-4 text-sky-900">Bidding Announcements</h2>
        <div className="space-y-4">
          <a href="#announcement1" className="block transition duration-300 ease-in-out transform hover:scale-105">
            <div className="bg-slate-100 p-4 rounded-md">
              <p className="text-sky-900">Exciting new feature coming soon!</p>
            </div>
          </a>
          <a href="#announcement2" className="block transition duration-300 ease-in-out transform hover:scale-105">
            <div className="bg-slate-100 p-4 rounded-md">
              <p className="text-sky-900">Join our exclusive live auctions.</p>
            </div>
          </a>
          <a href="#announcement3" className="block transition duration-300 ease-in-out transform hover:scale-105">
            <div className="bg-slate-100 p-4 rounded-md">
              <p className="text-sky-900">Latest updates on crop availability.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsSection;
