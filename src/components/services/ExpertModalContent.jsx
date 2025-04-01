import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpertModalContent = ({ person, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [note, setNote] = useState("");

  return (
    <div className="space-y-4">
      <div className="text-center">
        <img
          src={person.image}
          alt={person.name}
          className="mx-auto w-20 h-20 rounded-full"
        />
        <h3 className="text-xl font-bold mt-2">{person.name}</h3>
        <p className="text-gray-500">{person.title}</p>
        <p className="text-sm mt-1 text-gray-700">{person.desc}</p>
      </div>

      <div>
        <label className="block font-medium mb-1">Choose a Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="w-full border rounded px-3 py-2"
          placeholderText="Select date and time"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Notes:</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border rounded px-3 py-2"
          rows={3}
        />
      </div>

      <div className="text-right">
        <button
          disabled={!selectedDate}
          onClick={() => {
            if (selectedDate) {
              onClose();
            }
          }}
          className={`px-4 py-2 rounded text-white ${
            selectedDate
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ExpertModalContent;
