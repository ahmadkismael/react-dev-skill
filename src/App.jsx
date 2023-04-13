import "./App.css";
import SkillList from "./SkillList";

function App() {
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 4 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 4 },
  ];
  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>

      <SkillList skills={skills} />
    </div>
  );
}

export default App;
