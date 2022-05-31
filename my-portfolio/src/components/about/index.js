import React from "react";

function About() {
  return (
    <div>
      <section className="my-5 d-flex flex-wrap justify-content-around">
        <img
          id="avatar"
          src={require("../../assets/images/IMG_2964.jpeg").src}
          alt="Placeholder avatar"
          className="m-1"
        ></img>
        <div className="m-5 text-left" id="aboutMe">
          <h2 className="fw-bold">About Me</h2>
          <p className="fw-bold lh-lg">
          I am an experienced Community Manager with a demonstrated history of working in the Customer Experience Area. I am skilled in Sales, Customer Service, and Management. 
          Currently enrolled in the University of Miami Coding Bootcamp to be certified as a Full Stack Web Developer. 
          Bachelor of Science - BS focused in Broadcast Journalism from Florida International University.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;