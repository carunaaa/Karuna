import React from "react";
import SkillCard from "./Skillcard";

import htmlLogo from "../../assets/html-5.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import ts from "../../assets/typescript.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import flutter from "../../assets/flutter2.png";
import bootstrap from "../../assets/bootstrap.png";
import illustrator from "../../assets/illustrator.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import python from "../../assets/python2.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";

const Skill = () => {
  return (
    <section id="skills" className="py-24 p-8 ">
      <div className=" mx-auto ">
        <div className="mb-16 text-center text-black">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 max-w-7xl mx-auto">
            <SkillCard skillName="HTML" level={95} imageUrl={htmlLogo} />
            <SkillCard skillName="CSS" level={90} imageUrl={css} />
            <SkillCard skillName="JavaScript" level={80} imageUrl={js} />
            <SkillCard skillName="TypeScript" level={70} imageUrl={ts} />
            <SkillCard skillName="Tailwind" level={90} imageUrl={tailwind} />
            <SkillCard skillName="Bootstrap" level={90} imageUrl={bootstrap} />
            <SkillCard skillName="React" level={75} imageUrl={react} />
            <SkillCard skillName="Flutter" level={70} imageUrl={flutter} />
            <SkillCard
              skillName="Illustrator"
              level={70}
              imageUrl={illustrator}
            />
            <SkillCard skillName="Figma" level={70} imageUrl={figma} />
            <SkillCard skillName="Git" level={68} imageUrl={git} />
            <SkillCard skillName="Python" level={55} imageUrl={python} />
            <SkillCard skillName="MongoDB" level={90} imageUrl={mongodb} />
            <SkillCard skillName="MySql" level={85} imageUrl={mysql} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
