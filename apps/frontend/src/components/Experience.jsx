import React from 'react';

export default function Experience({ experience }) {
  return (
    <section className="portfolio-section fade-in">
      <div className="container p-6">
        <h2 className="section-heading">Experience</h2>
        {experience.map((job, i) => (
          <div key={i} className="portfolio-card">
            <div className="flex justify-between flex-wrap mb-2">
              <h3 className="card-title">
                <span className="text-blue-700">{job.title}</span> | {job.company}
              </h3>
              <span className="text-sm font-medium px-2 py-1 bg-green-50 text-green-600 rounded-md">
                {job.duration}
              </span>
            </div>
            <ul className="mt-3 space-y-2">
              {job.responsibilities.map((r, j) => (
                <li key={j} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                  <span className="text-sm text-gray-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}