import React from "react";

const Skill = ({ skillData }) => {
  return (
    <div
      className={
        "inline-block px-1 rounded-md border-none me-2 mb-1 " +
        skillData.bgColor +
        " " +
        skillData.fontColor
      }
    >
      <p>
        {skillData.title} {skillData.emoji}
      </p>
    </div>
  );
};

export default Skill;
