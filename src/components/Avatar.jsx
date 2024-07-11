import React from "react";

const Avatar = () => {
  return (
    <div>
      <img src="av.jpg" alt="profile" className=" w-full mb-2" />
      <div className="mx-3 my-2">
        <h1 className=" text-3xl font-bold mb-2">Bahaa Abou Yassine</h1>
        <p>
          A dedicated full-stack and mobile developer with a Master of Science
          in Computer and Communication Engineering.
        </p>
      </div>
    </div>
  );
};

export default Avatar;
