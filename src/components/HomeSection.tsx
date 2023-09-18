"use client";
import React from "react";
import { Link } from "react-scroll/modules";
import {HiArrowDown} from 'react-icons/hi'

function HomeSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:py-48 sm:py-32">
        <div className="md:w-3/4">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hello, I&#39;m Samuel</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am an{" "}
            <span className="font-semibold text-teal-600">
              Application Developer{" "}
            </span>
            based in Nairobi, Kenya. <br /> Working towards solving problems through
            design & developing software that makes life easier and more meaningful.
          </p>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center mb-4">
        <Link
        to="about"
        activeClass="active" 
        spy={true} 
        smooth={true} 
        offset={-100}
        duration={500} 
        >
            <HiArrowDown size={35} className="animate-bounce"/>
        </Link>
      </div>
    </section>
  );
}

export default HomeSection;
