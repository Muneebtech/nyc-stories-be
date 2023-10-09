// src/SectionList.js
import React from 'react';
import './App.css'

const SectionList = ({ sections, selectedSection, onSelectSection }) => {
    return (
      <div className="section-list">
        <h2>Select a Section:</h2>
        <div className="tabs-container">
          <div className="tabs">
            {sections.map((section) => (
              <div
                key={section}
                className={`tab ${selectedSection === section ? 'active' : ''}`}
                onClick={() => onSelectSection(section)}
              >
                {section}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default SectionList;
