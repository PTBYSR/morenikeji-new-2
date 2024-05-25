import React from "react";

const ExperienceCard = ({id, company, title, desc}) => {
  return (
    <div className="border-b border-opacity-40 border-black px-9 gap-32 flex justify-between h-[40vh] items-center">
      <div className="text-6xl w-1/3"><span className="text-base font-bold mr-2"> 0.{id}</span>{company}</div>
      <div>
        <div>
          <h1 className="font-semibold text-2xl w-2/3">{title}</h1>
        </div>
        <div>
          <p className="w-2/3">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
