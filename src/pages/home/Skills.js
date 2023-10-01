import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
function Skills() {
  return (
    <section id="projects" class="bg-dark text-light py-5">
      <div class="container">
        <h2 class="text-center mb-5">Skills</h2>

        {/* technical skills */}
        <div class="row">
          {/* Card for the Shop Comments App */}
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title text-primary">Technical Skills</h5>

                <ul class="card-text">
                  <li class="projectText text-muted ">
                    HTML, CSS, JavaScript, Node js React, Bootstrap GitHub,
                    Expres SQL, MongoDB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         {/* technical skills */}
         <div class="row">
          {/* Card for the Shop Comments App */}
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title text-primary">Soft Skills</h5>

                <ul class="card-text">
                  <li class="projectText text-muted ">
                  Teamwork
Communication
Adaptability
Creativity
Agile Methodology
Time Management
Problem Solving


                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
