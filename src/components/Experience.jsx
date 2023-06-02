import React from "react";
import csharp from "../assets/csharp.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import machinelearn from "../assets/machinelearn.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import reactImage from "../assets/react.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: csharp,
      link: "C#",
      style: "shadow-purple-500",
    },
    {
      id: 2,
      src: css,
      link: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: git,
      link: "Git",
      style: "shadow-gitShadow",
    },
    {
      id: 4,
      src: github,
      link: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: html,
      link: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: javascript,
      link: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: machinelearn,
      link: "Machine Learning",
      style: "shadow-blue-300",
    },
    {
      id: 8,
      src: php,
      link: "PHP",
      style: "shadow-phpShadow",
    },
    {
      id: 9,
      src: python,
      link: "Python",
      style: "shadow-pythonShadow",
    },
    {
      id: 10,
      src: reactImage,
      link: "React",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: sql,
      link: "SQL Server",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: tailwind,
      link: "Tailwind CSS",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b  from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, link, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{link}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
