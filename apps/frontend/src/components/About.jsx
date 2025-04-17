import React from 'react';

export default function About({ education }) {
  return (
    <section className="portfolio-section fade-in">
      <div className="container p-6">
        <h2 className="section-heading">Education</h2>
        <div className="portfolio-card">
          <div className="flex justify-between flex-wrap mb-2">
            <h3 className="card-title text-lg">{education.degree}</h3>
            <span className="card-subtitle">{education.duration}</span>
          </div>
          <p className="mb-1 font-medium text-blue-700">{education.institute}</p>
          <p className="text-sm text-gray-600 mb-3">{education.location}</p>
          <p className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
            CGPA: {education.cgpa}
          </p>
        </div>
      </div>
    </section>
  );
}