import React from "react";
import Section from "./components/Section";


const backgroundOrange = "/backgrounds/orange_background.svg";
const backgroundBeje = "/backgrounds/beje_background.svg";
const backgroundBlue = "/backgrounds/blue_background.svg";
const backgroundRed = "/backgrounds/red_background.svg";


function App() {
  return (
    <div>
      <Section background={backgroundOrange}>
        <h1>Orange Section</h1>
      </Section>

      <Section background={backgroundBeje}>
        <h1>Beje Section</h1>
      </Section>

      <Section background={backgroundBlue}>
        <h1>Blue Section</h1>
      </Section>

      <Section background={backgroundRed}>
        <h1>Red Section</h1>
      </Section>
    </div>
  );
}

export default App;
