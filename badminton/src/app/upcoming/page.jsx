"use client";

import React from "react";

/**
 * @typedef {Object} EventCardProps
 * @property {string} title
 * @property {string} image
 * @property {string} description
 * @property {string} formUrl
 */

/**
 * @param {EventCardProps} props
 */
const EventCard = ({ title, image, description, formUrl }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-gray-600 text-center mt-2">{description}</p>
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all"
      >
        Register Now
      </a>
    </div>
  );
};

const UpcomingEvents = () => {
  const events = [
    {
      title: "ASA Badminton Championship",
      image:
        "https://images.pexels.com/photos/1142961/pexels-photo-1142961.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Join our annual championship! Compete with the best players in the club and showcase your skills on the court.",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc8phrumoYk1Ge1ZyhqhkY7GsFBkpHsb-AvFCZX-yV9c0bKKQ/viewform?usp=dialog",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Upcoming Badminton Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            image={event.image}
            description={event.description}
            formUrl={event.formUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
