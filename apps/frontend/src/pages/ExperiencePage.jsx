import React from 'react';
import Experience from '../components/Experience';

export default function ExperiencePage({ resume }) {
  if (!resume) return null;
  
  return (
    <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Experience experience={resume.experience} />
      </div>
    </main>
  );
}