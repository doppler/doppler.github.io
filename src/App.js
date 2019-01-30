import React from "react";
import ColorWheel from "./components/ColorWheel";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <ColorWheel numberOfRadials={55} />
      <ColorWheel numberOfRadials={55} reverse />
      <About />
    </div>
  );
};

export default App;

const About = () => (
  <div className="About">
    <article>
      <header>
        <div className="title">David Rose</div>
        <div className="email">
          <a href="mailto:doppler@gmail.com">doppler@gmail.com</a>
        </div>
      </header>
      <section>
        <header>2014 - present:</header>
        <p>
          Full-time{" "}
          <a
            href="https://uspa.org"
            title="United States Parachute Association"
          >
            USPA
          </a>{" "}
          skydiving instructor, videographer and{" "}
          <abbr title="Safety and Training Advisor">S&amp;TA</abbr> at{" "}
          <a
            href="https://atlanta.skydivespaceland.com"
            title="Skydive Spaceland Atlanta"
          >
            Skydive Spaceland Atlanta
          </a>
          , holding Tandem, AFF, Static Line and IAD instructional ratings.
        </p>
      </section>
      <section>
        <header>1999 - 2014:</header>
        <p>
          Lead web application developer at{" "}
          <a
            href="https://sxsw.com"
            title="South by Southwest Conferences and Festivals (SXSW)"
          >
            South by Southwest (SXSW)
          </a>
        </p>
      </section>
    </article>
  </div>
);
