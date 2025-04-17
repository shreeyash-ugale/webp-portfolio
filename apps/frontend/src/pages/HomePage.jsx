import React from 'react';
import About from '../components/About';
import Header from '../components/Header';

export default function HomePage({ resume }) {
  if (!resume) return null;
  
  return (
    <>
      <Header name={resume.name} contact={resume.contact} />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <About education={resume.education} />
        </div>
      </main>
    </>
  );
}