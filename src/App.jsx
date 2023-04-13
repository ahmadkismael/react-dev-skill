import { useState } from "react";
import "./App.css";
import SkillList from "./SkillList";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 4 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 4 },
  ]);

  // function handleAddSkills(){
  //   setSkills((skills) => [...skills, 'adding']);
  // }


  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>

      <SkillList skills={skills} />
    </div>
  );
}

export default App;
