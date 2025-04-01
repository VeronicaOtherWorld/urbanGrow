import React from "react";
const Card = ({ person, onBook }) => (
  <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition">
    <img
      src={person.image}
      alt={person.name}
      className="w-20 h-20 rounded-full object-cover"
    />
    <div>
      <h3 className="text-lg font-semibold">{person.name}</h3>
      <p className="text-sm text-gray-500">{person.title}</p>
      <p className="text-sm mt-1 text-gray-700">{person.desc}</p>
    </div>
    <button
      className="mt-2 px-4 py-1.5 text-sm bg-green-600 text-white rounded-full hover:bg-green-700"
      onClick={() => onBook(person)}
    >
      Book
    </button>
  </div>
);

export default Card;
