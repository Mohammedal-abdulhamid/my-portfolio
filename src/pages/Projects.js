// import React from 'react'
// import './Project.css'
// function Projects() {
//   return (
//     // <div className="vh-100 d-flex container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
//     // HTML code for the project section 
//     <section id="projects" class="bg-dark text-light py-5">
//       <div class="container">
//         <h2 class="text-center mb-5">Projects</h2>
    
//          {/* Project cards  */}
//         <div class="row">
    
//           {/* Card for the Shop Comments App */}
//           <div class="col-md-6 col-lg-4 mb-4">
//             <div class="card border-light">
//               <div class="card-body">
//                 <h5 class="card-title text-primary"><a href="https://shop-products-project-440b7e5fb694.herokuapp.com/"> Shop Products App </a></h5>
//                 <h6 class="card-subtitle mb-2 text-muted">Handlebars, MongoDB, Heroku</h6>
//                 <ul class="card-text">
//                   <li class ="projectText text-muted ">Built the database from scratch with MongoDB and connected it to the front-end.</li>
//                   <li class ="projectText text-muted ">Made the app dynamic and added different routes for each product.</li>
//                   <li class ="projectText text-muted ">Users’ inputs were saved for each product and displayed.</li>
//                   <li class ="projectText text-muted ">Applied dynamic styling to the top-rated product and showed it at the top of the page.</li>
//                 </ul>
//                 <a href="https://github.com/Mohammedal-abdulhamid/group-project-shop-comments" class="card-link text-primary" target="_blank">View on GitHub</a>
//               </div>
//             </div>
//           </div>
    
//           {/* Card for Caritas Education */}
//           <div class="col-md-6 col-lg-4 mb-4">
//             <div class="card border-light">
//               <div class="card-body">
//                 <h5 class="card-title text-primary"><a href="https://caritas-project-b7431297a251.herokuapp.com/">  Caritas</a> </h5>
//                 <h6 class="card-subtitle mb-2 text-muted">Gatsby, Contentful, TailWind, GraphQL, Jest, Figma, Netlify</h6>
//                 <ul class="card-text">
//                   <li class ="projectText text-muted">Set a daily stand-up and task distribution.</li>
//                   <li class ="projectText text-muted " >Worked with a team to design the layout of the webpage using Wireframe.</li>
//                   <li class ="projectText text-muted  ">Set meetings with the customer at each stage of the work to get his feedback.</li>
//                   <li class ="projectText text-muted ">Coded the testing part using Jest Testing Library and carried out some debugging.</li>
//                 </ul>
//                 <a href="https://github.com/Mohammedal-abdulhamid/caritas-final-project" class="card-link text-primary" target="_blank">View on GitHub</a>
//               </div>
//             </div>
//           </div>
//                 {/* Card for Caritas Education */}
//           <div class="col-md-6 col-lg-4 mb-4">
//             <div class="card border-light">
//               <div class="card-body">
//                 <h5 class="card-title text-primary"> <a href="https://zuhal-website-6f7248444e6d.herokuapp.com/"> Hair & Makeup Salon</a></h5>
//                 <h6 class="card-subtitle mb-2 text-muted">React, Node js, Express, React routs</h6>
//                 <ul class="card-text">
//                   <li class ="projectText text-muted">Set a daily stand-up and task distribution.</li>
//                   <li class ="projectText text-muted " >Worked with a team to design the layout of the webpage using Wireframe.</li>
//                   <li class ="projectText text-muted  ">Set meetings with the customer at each stage of the work to get his feedback.</li>
//                   <li class ="projectText text-muted "> </li>
//                 </ul>
//                 <a href="https://github.com/Mohammedal-abdulhamid/Zuhal-website" class="card-link text-primary" target="_blank">View on GitHub</a>
//               </div>
//             </div>
//             </div>
//              {/* Card for Caritas Education */}
//           <div class="col-md-6 col-lg-4 mb-4">
//             <div class="card border-light">
//               <div class="card-body">
//                 <h5 class="card-title text-primary"> <a href="https://lighthearted-pixie-af7fc6.netlify.app/"> GitHub User's Search</a></h5>
//                 <h6 class="card-subtitle mb-2 text-muted"> </h6>
//                 <ul class="card-text">
//                   <li class ="projectText text-muted"></li>
//                   <li class ="projectText text-muted " ></li>
//                   <li class ="projectText text-muted  "></li>
//                   <li class ="projectText text-muted "></li>
//                 </ul>
//                 <a href="https://github.com/Mohammedal-abdulhamid/github-api-search" class="card-link text-primary" target="_blank">View on GitHub</a>
//               </div>
//             </div>
//             </div>
//              {/* Card for Caritas Education */}
//           <div class="col-md-6 col-lg-4 mb-4">
//             <div class="card border-light">
//               <div class="card-body">
//                 <h5 class="card-title text-primary"></h5>
//                 <h6 class="card-subtitle mb-2 text-muted"></h6>
//                 <ul class="card-text">
//                   <li class ="projectText text-muted"></li>
//                   <li class ="projectText text-muted " ></li>
//                   <li class ="projectText text-muted  "></li>
//                   <li class ="projectText text-muted "></li>
//                 </ul>
//                 <a href="https://github.com/Mohammedal-abdulhamid/caritas-final-project" class="card-link text-primary" target="_blank">View on GitHub</a>
//               </div>
//             </div>
//             </div>
//              {/* Card for Caritas Education */}
//           <div class="col-md-6 col-lg-4 mb-4">
//             <div class="card border-light">
//               <div class="card-body">
//                 <h5 class="card-title text-primary"></h5>
//                 <h6 class="card-subtitle mb-2 text-muted"></h6>
//                 <ul class="card-text">
//                   <li class ="projectText text-muted"></li>
//                   <li class ="projectText text-muted " ></li>
//                   <li class ="projectText text-muted  "></li>
//                   <li class ="projectText text-muted "></li>
//                 </ul>
//                 <a href="https://github.com/Mohammedal-abdulhamid/caritas-final-project" class="card-link text-primary" target="_blank">View on GitHub</a>
//               </div>
//             </div>
//             </div>
          
    
//         </div>
//       </div>
//     </section>
    
    
//   )
// }

// export default Projects

import React from 'react';
import './Projects.css'

const Projects = () => {
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
    display: 'grid',
   'grid-template':'grid-area',
    'flex-wrap': 'wrap'
   
  };

  const skillsColumnStyle = {
    flex: '1 1 1 1 ',
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
        <h2><a href="https://shop-products-project-440b7e5fb694.herokuapp.com/"> Shop Products App </a></h2>
        <ul style={skillsListStyle}>
          {education.map((study, index) => (
            <li  class ='list-group-item' key={index} style={skillsItemStyle}>
              {study}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2><a href="https://caritas-project-b7431297a251.herokuapp.com/">  Caritas</a> </h2>
        <ul style={skillsListStyle}>
          {languages.map((language, index) => (
            <li class ='list-group-item' key={index} style={skillsItemStyle}>
              {language}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2><a href="https://zuhal-website-6f7248444e6d.herokuapp.com/"> Hair & Makeup Salon</a></h2>
        <ul style={skillsListStyle}>
          {hobbies.map((hobby, index) => (
            <li class ='list-group-item' key={index} style={skillsItemStyle}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2><a href="https://lighthearted-pixie-af7fc6.netlify.app/"> GitHub User's Search</a></h2>
        <ul style={skillsListStyle}>
          {hobbies.map((hobby, index) => (
            <li class ='list-group-item' key={index} style={skillsItemStyle}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2><a href="https://zuhal-website-6f7248444e6d.herokuapp.com/"> Hair & Makeup Salon</a></h2>
        <ul style={skillsListStyle}>
          {hobbies.map((hobby, index) => (
            <li class ='list-group-item' key={index} style={skillsItemStyle}>
              {hobby}
            </li>
          ))}
        </ul>
      </div>
      <div class="column" style={skillsColumnStyle} >
        <h2><a href="https://zuhal-website-6f7248444e6d.herokuapp.com/"> Hair & Makeup Salon</a></h2>
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

export default Projects