import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML & CSS" },
  { skill: "TailwindCSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "jQuery" },
  { skill: "Go" },
  { skill: "C++" },
  { skill: "MariaDB" },
  { skill: "PostgreSQL" },
  { skill: "Database Design" },
  { skill: "Version Control(git)" }
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {" "}
              Hi, my name is Samuel and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software developer
              based in Nairobi, Kenya.
            </p>
            <br />
            <p>
              I graduated from The Catholic University of Eastern Africa in 2022
              with a BSc in Computer Science and have been working in the field
              ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, hiking, runnig, to trying out new cooking recipes, I
              am always seeking new experiences and love to keep myself engaged
              and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
            <p>
              <div className="flex flex-wrap flex-row justify-center md:justify-start">
                {skills.map((item, index) => {
                  return <p key={index} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
                })}
              </div>
            </p>
            <Image className="hidden md:block md:relative md:bottom-4 md:left-16 md:z-0 mt-6" 
            src="/about_image.png" alt="about image" width={400} height={400}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
