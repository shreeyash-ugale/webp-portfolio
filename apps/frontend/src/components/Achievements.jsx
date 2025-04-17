import React from 'react';

export default function Achievements({ achievements }) {
  return (
    <section className="portfolio-section fade-in">
      <div className="container p-6">
        <h2 className="section-heading">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((ach, i) => (
            <div key={i} className="portfolio-card">
              <div className="flex justify-between flex-wrap mb-2">
                <h3 className="card-title">{ach.title}</h3>
                <span className="text-sm font-medium px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md">
                  {ach.date}
                </span>
              </div>
              <p className="text-sm text-gray-600">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}