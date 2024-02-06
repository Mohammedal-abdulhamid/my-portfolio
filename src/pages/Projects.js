

import React from "react";
import "./Projects.css";

const Projects = () => {
  const shop = [
    "This App displays all products avaiable in a given shop on the main page",
    "Technology used are Handlebars,MongoDB,Express and CSS ",
    "Under each single product the customer can view details of a product and give thier reviews ",
    "The products are displayed in order starting from the high rated down",
    "Customer's input saved to the database and used accordingly",
    "Built the database from scratch with MongoDB and connected it to the App",
    "Made the app dynamic and added different routes for each product",
    "Users’ inputs were saved for each product and displayed",
    "Applied dynamic styling to the top-rated product and showed it at the top of the page",
  ];

  const caritas = [
    "The purpose of this App to help none-technical person to edit the database regularly",
    " To build an navegatable UI consistent with the existing Caritas webpage",
    "Technology used includes Gatsby, GraphQl, Wireframe, React Routes, Jest and TailWinds",
    "Set a daily stand-up and task distribution",
    "Worked with a team to design the layout of the webpage using Wireframe",
    "Set meetings with the customer at each stage of the work to get his feedback",
    "Coded the testing part using Jest Testing Library and carried out some debugging",
  ];
  const salon = [
    "First project to deal with an actual client",
    "Successfully delived on the time and met the client expectation",
    "Full-stack project using reack, Express, Node",
    "Regular team meeting and Agile method approach",
    "Used different styling such as flex box and grid",
    "Technolog Used Reach, react Routs, Express, CSS"
  ];
  const github_user = [
    
    "Creating a search UI that enables searching any github user",
    "Data was fetch from GitHub API and filtered to match the input",
    "Resuling Data was Filtered again to find the most used language",
    "Displayed the matched used names and their most used language ",
    "technology used React CSS"
  ];
  

  
  return (
    <div className="main-container">
      <div className="column">
        <h2>
          <a
            className="project-name"
            href="https://shop-products-project-440b7e5fb694.herokuapp.com/"
            target="_blank" rel="noopener noreferrer">
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
            target="_blank" rel="noopener noreferrer">
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
            target="_blank" rel="noopener noreferrer">
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
            target="_blank" rel="noopener noreferrer">
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
