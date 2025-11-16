import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ i }) => {
  const {user_photoURL, review, userName, ratings} = i;
  return (
    <div className="my-24">
      <div className="card bg-white shadow-md p-6 rounded-xl border border-gray-200 max-w-md">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-3xl text-teal-300 mb-4" />

        {/* Review Text */}
        <p className="text-gray-700 leading-relaxed mb-6">{review}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 mb-4"></div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-teal-800 overflow-hidden">
            <img src={user_photoURL} alt={name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="font-semibold text-lg text-teal-900">{userName}</h3>
            <p className="text-gray-500 text-sm">{ratings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
