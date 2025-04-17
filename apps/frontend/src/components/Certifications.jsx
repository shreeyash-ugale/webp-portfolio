import React from 'react';

export default function Certifications({ certifications }) {
  return (
    <section className="portfolio-section fade-in">
      <div className="container p-6">
        <h2 className="section-heading">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((group, i) => (
            <div key={i} className="portfolio-card">
              <h3 className="card-title text-blue-700 mb-3">{group.provider}</h3>
              <div className="pl-3 border-l-2 border-blue-200">
                {group.certificates.map((cert, j) => (
                  <div key={j} className="mb-2 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                    <span className="text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}