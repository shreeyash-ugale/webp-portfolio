import React from 'react';
import Skills from '../components/Skills';

export default function SkillsPage({ resume }) {
  if (!resume) return null;
  
  return (
    <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Skills skills={resume.skills} />
      </div>
    </main>
  );
}