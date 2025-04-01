import React, { useState } from "react";

const HelperModalContent = ({ person, onClose }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [note, setNote] = useState("");

  const timeOptions = ["Tue 9:00 AM", "Thu 3:00 PM", "Sat 11:00 AM"];

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
        <label className="block font-medium mb-1">Select Available Time:</label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">-- Choose a time --</option>
          {timeOptions.map((time, idx) => (
            <option key={idx} value={time}>
              {time}
            </option>
          ))}
        </select>
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
          disabled={!selectedTime}
          onClick={() => {
            if (selectedTime) {
              onClose();
            }
          }}
          className={`px-4 py-2 rounded text-white ${
            selectedTime
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

export default HelperModalContent;
