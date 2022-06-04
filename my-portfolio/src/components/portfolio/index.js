import React from "react";

function Portfolio() {
  const projects = [

    {
      name: "Race of The Year",
      id: "race-year",
      description: "Race of the year is an event application that provides registration-management, runner-support-products and marathon-information. Participants are able to sign-up, log-in & log-out buy products.",
      liveURL: "https://ancient-sierra-07886.herokuapp.com/",
      gitHub: "https://github.com/Mandrea30/race-of-the-year"
    },

    {
      name: "Popcorn Time",
      id: "popcorn_time",
      description: "Popcorn Time let's the user research movie titles and ratings before purchasing tickets to the theatre or purchasing it online .",
      liveURL: "https://aaguirre7.github.io/popcorn_time/",
      gitHub: "https://github.com/Mandrea30/Popcorn_Time"
    },

    {
      name: "Find It",
      id: "find_it",
      description: "FIND-IT allows users to buy and sell products via the FIND-IT market-place.",
      liveURL: "https://limitless-beach-87360.herokuapp.com/",
      gitHub: "https://github.com/Mandrea30/FIND-IT"
    },
    {
      name: "Password Generator",
      id: "password_generator",
      description:
        "Allows the user to generate a safe, random passwords according to the criteria selected..",
      liveURL: "https://mandrea30.github.io/password-generator/",
      gitHub: "https://github.com/Mandrea30/password-generator",
    },

    {
      name: "Weather Dashboard",
      id: "weather_dashboard",
      description:
        "This is a weather API that indicates the current weather at your chosen location.",
      liveURL: "https://mandrea30.github.io/weather-dashboard/",
      gitHub: "https://github.com/Mandrea30/weather-dashboard"
    },


  ];
  return (
    <section>
      <h2 className="text-center fw-bold my-3">My Projects</h2>
      {projects.map((proj, i) => (
        <div key={i} className="d-flex flex-column m-5 p-3 my-border card">
          <div className="text-center">
            <img
              className="p-image"
              src={require(`../../assets/images/${proj.id}.png`)}
              alt="Project Screenshot"
            ></img>
          </div>
          <div className="mx-auto text-center">
            <h3 className="fw-bold m-2">{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.liveURL} target="_blank" rel="noreferrer">
              View Deployed Application
            </a>{" "}
            <br></br>
            <a href={proj.gitHub} target="_blank" rel="noreferrer">
              View GitHub Repository
            </a>
          </div>
        </div>
      ))}
      {/*  */}
    </section>
  );
}

export default Portfolio;