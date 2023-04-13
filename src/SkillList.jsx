import React from 'react'
import NewSkillForm from './NewSkillForm'
import './SkillList.css'
const SkillList = (props) => {
  return (
    <div>
        <ul >
          {props.skills.map((skill) => (
            <li className='SkillList' >
                {skill.name}
                <span className='level'>LEVEL: {skill.level}</span>
            </li>
          ))} 
        </ul>
        <NewSkillForm />

    </div>
  )
}

export default SkillList