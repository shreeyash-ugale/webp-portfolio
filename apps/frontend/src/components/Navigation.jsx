import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <NavLink to="/" className="font-bold text-blue-600 text-lg hover:text-blue-800 transition-colors">
            Portfolio
          </NavLink>
          
          <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto hide-scrollbar">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
              end
            >
              About
            </NavLink>
            
            <NavLink 
              to="/experience" 
              className={({isActive}) => 
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Experience
            </NavLink>
            
            <NavLink 
              to="/projects" 
              className={({isActive}) => 
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Projects
            </NavLink>
            
            <NavLink 
              to="/activities" 
              className={({isActive}) => 
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Activities
            </NavLink>
            
            <NavLink 
              to="/skills" 
              className={({isActive}) => 
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Skills
            </NavLink>
            
            <NavLink 
              to="/certifications" 
              className={({isActive}) => 
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Certifications
            </NavLink>
            
            <NavLink 
              to="/achievements" 
              className={({isActive}) => 
                `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Achievements
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}