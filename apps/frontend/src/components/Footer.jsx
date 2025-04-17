import React from 'react';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Shreeyash Santosh Ugale. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Cybersecurity Enthusiast | Computer Science Student
        </p>
      </div>
    </footer>
  );
}