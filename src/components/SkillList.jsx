import React from "react";
import Skill from "./Skill";

const SkillList = ({ skills }) => {
  return (
    <div className="flex flex-row flex-wrap mx-3 my-2">
      {skills.map((skill, index) => (
        <Skill skillData={skill} />
      ))}
    </div>
  );
};

export default SkillList;
