import React, { useState } from "react";
import "./NewSkillForm.css";

const NewSkillForm = (props) => {
  const [newSkill, setNewSkill] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState(1); 

  function handleInputChange(e) {
    setNewSkill(e.target.value);
  }

  function handleLevelChange(e) {
    setNewSkillLevel(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();
    props.handleAddSkill({ name: newSkill, level: newSkillLevel });
    setNewSkill("");
  }

  return (
    <div>
      <form className="NewSkillForm" onSubmit={handleAdd}>
        <label htmlFor="skill">Skill</label>
        <input
          type="text"
          placeholder="NewSkill"
          value={newSkill}
          onChange={handleInputChange}
        />

        <label htmlFor="level">Level</label>
        <select
          id="level"
          name="level"
          value={newSkillLevel}
          onChange={handleLevelChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default NewSkillForm;
