import React from 'react';

export default function Activities({ activities }) {
  return (
    <section className="portfolio-section fade-in">
      <div className="container p-6">
        <h2 className="section-heading">Co-Curricular Activities</h2>
        {activities.map((act, i) => (
          <div key={i} className="portfolio-card">
            <div className="flex justify-between flex-wrap mb-2">
              <h3 className="card-title">
                <span className="text-blue-700">{act.organization}</span> | {act.position}
              </h3>
              <span className="text-sm font-medium px-2 py-1 bg-amber-50 text-amber-600 rounded-md">
                {act.duration}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{act.location}</p>
            <ul className="space-y-3 pl-2">
              {act.details.map((d, j) => (
                <li key={j} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span className="text-sm text-gray-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}