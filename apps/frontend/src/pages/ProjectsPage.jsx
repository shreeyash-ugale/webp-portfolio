import React from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage({ resume }) {
  if (!resume) return null;
  
  return (
    <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Projects projects={resume.projects} />
      </div>
    </main>
  );
}