import React from 'react';
import Certifications from '../components/Certifications';

export default function CertificationsPage({ resume }) {
  if (!resume) return null;
  
  return (
    <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Certifications certifications={resume.certifications} />
      </div>
    </main>
  );
}