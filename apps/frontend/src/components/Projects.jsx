import React from 'react';

export default function Projects({ projects }) {
  return (
    <section className="portfolio-section fade-in">
      <div className="container p-6">
        <h2 className="section-heading">Projects</h2>
        <div className="space-y-6">
          {projects.map((proj, i) => (
            <div key={i} className="portfolio-card">
              <div className="flex justify-between flex-wrap mb-2">
                <h3 className="card-title text-blue-700 text-lg">{proj.title}</h3>
                <span className="text-sm font-medium px-2 py-1 bg-purple-50 text-purple-600 rounded-md">
                  {proj.date}
                </span>
              </div>
              <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium mb-4">
                {proj.technologies}
              </div>
              <ul className="space-y-3">
                {proj.description.map((d, j) => (
                  <li key={j} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span className="text-sm text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}