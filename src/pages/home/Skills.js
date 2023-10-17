import React from 'react';
import './Skills.css'

const Skills = () => {
  const technicalSkills = [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'HTML/CSS',
    'RESTful APIs',
    'Git/GitHub',
    'Responsive Web Design',
  ];

  const softSkills = [
    'Problem Solving',
    'Teamwork',
    'Communication',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'Critical Thinking',
    'Self-Motivation',
    'Creativity',
    'Leadership',
  ];

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
        <h2 className='project-name'>Technical Skills</h2>
        <ul style={skillsListStyle}>
          {technicalSkills.map((skill, index) => (
            <li  class ='list-group-item' key={index} style={skillsItemStyle}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2 className='project-name'>Soft Skills</h2>
        <ul style={skillsListStyle}>
          {softSkills.map((skill, index) => (
            <li class ='list-group-item' key={index} style={skillsItemStyle}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
