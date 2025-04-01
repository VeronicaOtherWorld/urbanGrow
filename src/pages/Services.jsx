import React from "react";
import Card from "../components/Card";
import specialist from "@/assets/homePic/specialist.png";

const experts = [
  {
    name: "Dr. Green",
    title: "Plant Health Advisor",
    desc: "Specializes in diagnosing plant issues and pest control.",
    image: specialist,
  },
  {
    name: "Lily Flora",
    title: "Gardening Coach",
    desc: "Offers home gardening guidance to create your dream green space.",
    image: specialist,
  },
];

const helpers = [
  {
    name: "Tom Leaf",
    title: "Plant Care Helper",
    desc: "Provides regular watering, pruning, and moving services.",
    image: specialist,
  },
  {
    name: "Emma Root",
    title: "At-home Plant Assistant",
    desc: "Focuses on balcony plants and succulent care.",
    image: specialist,
  },
  {
    name: "Sarah Bloom",
    title: "Weekend Plant Nanny",
    desc: "Available on weekends to water and check plant health.",
    image: specialist,
  },
  {
    name: "Ben Moss",
    title: "Succulent Care Specialist",
    desc: "Great with low-maintenance plants like succulents and cacti.",
    image: specialist,
  },
];

const ServicePage = () => {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-12 mt-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-2">Plant Care Services</h1>
        <p className="text-gray-600">
          Find a plant expert or part-time plant caretaker to help
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Plant Expert Consultations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experts.map((e, idx) => (
            <Card key={idx} person={e} />
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Manual helpers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {helpers.map((h, idx) => (
            <Card key={idx} person={h} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
