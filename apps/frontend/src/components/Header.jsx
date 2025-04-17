import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Header({ name, contact }) {
  return (
    <header className="portfolio-header">
      <div className="container header-content">
        <h1 className="text-4xl font-bold text-center text-white mb-6">{name}</h1>
        <div className="header-links">
          <a href={`mailto:${contact.email}`} className="header-link">
            <Mail size={16} /> {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="header-link">
            <Phone size={16} /> {contact.phone}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="header-link">
            <Github size={16} /> GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="header-link">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}