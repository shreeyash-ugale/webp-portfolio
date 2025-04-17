import React from 'react';

export default function Skills({ skills }) {
  // Generate a consistent but semi-random color for each category
  const getCategoryColor = (category) => {
    const colors = [
      { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100' },
      { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-100' },
      { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-100' },
      { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100' },
      { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100' },
      { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-100' },
    ];
    
    // Simple hash function for consistent color selection
    const hash = category.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  
  return (
    <section className="portfolio-section fade-in">
      <div className="container p-6">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items], i) => {
            const colorStyle = getCategoryColor(category);
            
            return (
              <div key={i} className="portfolio-card">
                <h3 className={`card-title mb-4 ${colorStyle.text}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span 
                      key={j} 
                      className={`px-3 py-1 text-xs font-medium rounded-full ${colorStyle.bg} ${colorStyle.text} border ${colorStyle.border} inline-block transition-all hover:shadow-md`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}