import React from "react";
import ExpertModalContent from "./ExpertModalContent";
import HelperModalContent from "./HelperModalContent";

const BookingModal = ({ person, onClose }) => {
  const isExpert = person?.type === "expert";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 text-xl"
        >
          ×
        </button>
        {isExpert ? (
          <ExpertModalContent person={person} onClose={onClose} />
        ) : (
          <HelperModalContent person={person} onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default BookingModal;
