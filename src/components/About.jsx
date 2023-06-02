import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis
          est blanditiis repellendus fugiat, eius reprehenderit, optio, officiis
          quia ullam facere sint atque vero nulla nam alias earum saepe
          voluptatum deserunt accusantium! Eius veniam molestiae deserunt minima
          fugiat ratione ea, deleniti rem, nisi eum distinctio eveniet ullam
          sint harum eligendi.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          blanditiis dolor dolorum ab commodi suscipit quasi veniam officia
          quis. Ut est ipsa cumque, officiis vel a iste, ex velit harum
          architecto soluta unde commodi quo veniam doloribus! Libero laudantium
          accusamus reprehenderit voluptates quisquam commodi eveniet?
          Reiciendis sapiente fugiat dolore quae.
        </p>
      </div>
    </div>
  );
};

export default About;
