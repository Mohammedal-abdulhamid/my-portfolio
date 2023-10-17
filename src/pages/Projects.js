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

import React from "react";
import "./Projects.css";

const Projects = () => {
  const shop = [
    "Built the database from scratch with MongoDB and connected it to the App",
    "Made the app dynamic and added different routes for each product",
    "Users’ inputs were saved for each product and displayed",
    "Applied dynamic styling to the top-rated product and showed it at the top of the page",
  ];

  const caritas = [
    "Set a daily stand-up and task distribution",
    "Worked with a team to design the layout of the webpage using Wireframe",
    "Set meetings with the customer at each stage of the work to get his feedback",
    "Coded the testing part using Jest Testing Library and carried out some debugging",
  ];
  const salon = [
    "first project to deal with an actual client",
    "successfully delived on the time and met the client expectation",
    "full-stack project using reack, Express, Node",
    "regular team meeting and Agile method approach",
    "used different styling such as flex box and grid",
  ];
  const github_user = [
    "creating a search UI and apply styling",
    " user input was dedected and saved",
    "fetch data that match the used input to desply the tagret used",
    "displayed the matched used names and their most used language ",
  ];
  

  
  return (
    <div className="main-container">
      <div className="column">
        <h2>
          <a
            className="project-name"
            href="https://shop-products-project-440b7e5fb694.herokuapp.com/"
          >
            {" "}
            Shop Products App{" "}
          </a>
        </h2>
        <ul className="single-pro-list">
          {shop.map((point, index) => (
            <li className="list-group-item" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h2>
          <a
            className="project-name"
            href="https://caritas-project-b7431297a251.herokuapp.com/"
          >
            {" "}
            Caritas
          </a>{" "}
        </h2>
        <ul className="single-pro-list">
          {caritas.map((point, index) => (
            <li className="list-group-item" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h2>
          <a
            className="project-name"
            href="https://zuhal-website-6f7248444e6d.herokuapp.com/"
          >
            {" "}
            Hair & Makeup Salon
          </a>
        </h2>
        <ul className="single-pro-list">
          {salon.map((point, index) => (
            <li className="list-group-item" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h2>
          <a
            className="project-name"
            href="https://lighthearted-pixie-af7fc6.netlify.app/"
          >
            {" "}
            GitHub User's Search
          </a>
        </h2>
        <ul className="single-pro-list">
          {github_user.map((point, index) => (
            <li className="list-group-item" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
