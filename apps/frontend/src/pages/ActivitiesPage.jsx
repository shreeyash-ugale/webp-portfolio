import React from 'react';
import Activities from '../components/Activities';

export default function ActivitiesPage({ resume }) {
  if (!resume) return null;
  
  return (
    <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Activities activities={resume.activities} />
      </div>
    </main>
  );
}