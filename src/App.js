import logo from "./logo.svg";
import "./App.css";
import ExperienceItem from "./components/ExperienceItem/ExperienceItem";

import { experiences } from "./asset/experiences";

function App() {
  return (
    <div>
      {experiences.map((experience, index) => {
        return <ExperienceItem key={index} experience={experience} />;
      })}
    </div>
  );
}

export default App;
