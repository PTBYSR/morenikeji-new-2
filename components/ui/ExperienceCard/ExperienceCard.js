import React from "react";

const ExperienceCard = ({id, company, title, desc}) => {
  return (
    <div className="border-b border-opacity-40 border-black md:mx-9 mx-3 md:gap-32 flex md:justify-between justify-center gap-6 items-start md:flex-row flex-col h-[40vh] md:items-center">
      <div className="text-6xl md:w-1/3"><span className="text-base font-bold mr-2"> 0.{id}</span>{company}</div>
      <div>
        <div>
          <h1 className="font-semibold mb-2 text-2xl md:w-2/3">{title}</h1>
        </div>
        <div>
          <p className="md:w-2/3 text-gray-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
