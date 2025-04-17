import React from 'react';
import Achievements from '../components/Achievements';

export default function AchievementsPage({ resume }) {
  if (!resume) return null;
  
  return (
    <main className="flex-grow">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <Achievements achievements={resume.achievements} />
      </div>
    </main>
  );
}