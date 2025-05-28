import React from "react";

const SkillCard = ({ skillName, level, imageUrl }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <div className="w-full h-24 sm:h-40 lg:h-24 mb-4">
        <img
          src={imageUrl}
          alt={skillName}
          className="w-full h-full object-contain mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{skillName}</h3>
      <div className="mt-2">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#22a094] rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
