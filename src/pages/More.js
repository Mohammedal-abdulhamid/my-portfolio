
import React from 'react';
import './More.css'

const More = () => {
  const education = [
    'Code Your Future, UK, Dec 2020 - Mar 2022,(Full Stack Web Developer)',
    'The Open University, UK, 2020 - Present,(finel year cumputing & IT student)',
    'Alfurat University, Syria, 2013,(Economic/Business Administration)'
  ];

  const languages = [
    'English, fluent',
    'Arabic, fluent',
    
  ];
  const hobbies = [
    'football',
    'coding & problem solving',
    'drawing & painting'
  ]

  const skillsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
   
  };

  const skillsColumnStyle = {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
  };

  const skillsListStyle = {
    listStyle: 'none',
    marging:'10px',
    padding:'5px'
  };

  const skillsItemStyle = {
    backgroundColor: '#444',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    border: 'none'
  };
  
  return (
    <div class="column" style={skillsContainerStyle}>
      <div style={skillsColumnStyle}>
        <h2>Education</h2>
        <ul style={skillsListStyle}>
          {education.map((study, index) => (
            <li  class ='list-group-item' key={index} style={skillsItemStyle}>
              {study}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2>Languages</h2>
        <ul style={skillsListStyle}>
          {languages.map((language, index) => (
            <li class ='list-group-item' key={index} style={skillsItemStyle}>
              {language}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2>Hobbies</h2>
        <ul style={skillsListStyle}>
          {hobbies.map((hobby, index) => (
            <li class ='list-group-item' key={index} style={skillsItemStyle}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default More;
