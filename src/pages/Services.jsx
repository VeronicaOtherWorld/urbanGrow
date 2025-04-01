import React, { useState } from "react";
import Card from "../components/Card";
import specialist from "@/assets/homePic/specialist.png";
import BookingModal from "@/components/services/BookingModal";

const experts = [
  {
    name: "Dr. Green",
    title: "Plant Health Advisor",
    desc: "Specializes in diagnosing plant issues and pest control.",
    image: specialist,
    type: "expert",
  },
  {
    name: "Lily Flora",
    title: "Gardening Coach",
    desc: "Offers home gardening guidance to create your dream green space.",
    image: specialist,
    type: "expert",
  },
  {
    name: "Dr. Green",
    title: "Plant Health Advisor",
    desc: "Specializes in diagnosing plant issues and pest control.",
    image: specialist,
    type: "expert",
  },
  {
    name: "Lily Flora",
    title: "Gardening Coach",
    desc: "Offers home gardening guidance to create your dream green space.",
    image: specialist,
    type: "expert",
  },
];

const helpers = [
  {
    name: "Tom Leaf",
    title: "Plant Care Helper",
    desc: "Provides regular watering, pruning, and moving services.",
    image: specialist,
    type: "helper",
  },
  {
    name: "Emma Root",
    title: "At-home Plant Assistant",
    desc: "Focuses on balcony plants and succulent care.",
    image: specialist,
    type: "helper",
  },
  {
    name: "Sarah Bloom",
    title: "Weekend Plant Nanny",
    desc: "Available on weekends to water and check plant health.",
    image: specialist,
    type: "helper",
  },
  {
    name: "Ben Moss",
    title: "Succulent Care Specialist",
    desc: "Great with low-maintenance plants like succulents and cacti.",
    image: specialist,
    type: "helper",
  },
];

const Services = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleBook = (person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-12 mt-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-2">Plant Care Services</h1>
        <p className="text-gray-600">
          Find a plant expert or part-time plant caretaker to help
        </p>
      </section>

      <section className="text-center" id="experts">
        <h2 className="text-2xl font-semibold mb-4">
          Plant Expert Consultations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experts.map((e, idx) => (
            <Card key={idx} person={e} onBook={handleBook} />
          ))}
        </div>
      </section>

      <section className="text-center" id="helpers">
        <h2 className="text-2xl font-semibold mb-4">Manual helpers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {helpers.map((h, idx) => (
            <Card key={idx} person={h} onBook={handleBook} />
          ))}
        </div>
      </section>

      {modalOpen && selectedPerson && (
        <BookingModal
          person={selectedPerson}
          onClose={() => setModalOpen(false)}
        />
      )}
    </main>
  );
};

export default Services;
