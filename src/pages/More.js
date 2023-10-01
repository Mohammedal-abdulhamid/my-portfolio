import React from "react";

function More() {
  return (
    <section id="projects" class="bg-dark text-light py-5">
      <div class="container">
        {/* More card */}
        <div class="row">
          {/* Card for Education */}
          <div class="col-md-6 col-lg-4 mb-8">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title text-primary">Education</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Code Your Future, UK, Dec 2020 - Mar 2022
                </h6>
                <ul class="card-text">
                  <li class="projectText text-muted ">
                    Full Stack Web Developer
                  </li>
                </ul>
                <h6 class="card-subtitle mb-2 text-muted">
                  The Open University, UK,2020 - Present
                </h6>
                <ul class="card-text">
                  <li class="projectText text-muted ">
                    Computer Science Student
                  </li>
                </ul>
                <h6 class="card-subtitle mb-2 text-muted">
                  Alfurat University, Syria,2013
                </h6>
                <ul class="card-text">
                  <li class="projectText text-muted ">
                    Economic/Business Administration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* <div class="row"> */}
          {/* Card for Languages */}
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title text-primary">Languges</h5>
               
                <ul class="card-text">
                  <li class="projectText text-muted ">
                    English
                  </li>
                  <li class="projectText text-muted ">
                    Arabic
                  </li>
                </ul>
                
                
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* <div class="row"> */}
          {/* Card for Hobbies */}
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card border-light">
              <div class="card-body">
                <h5 class="card-title text-primary">Hobbies</h5>
               
                <ul class="card-text">
                  <li class="projectText text-muted ">
                    Football
                  </li>
                  <li class="projectText text-muted ">
                    Coding
                  </li>
                  <li class="projectText text-muted ">
                    Drawing
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

export default More;
