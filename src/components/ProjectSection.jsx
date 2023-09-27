import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsArrowUpRightSquare} from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
      name: "Shuleni",
      description:
        "Shuleni app is a web application for managing schools. It is designed to help school administrators, teachers, and parents to communicate effectively, manage school activities, and monitor student's progress.",
      image: "/shuleni.png",
      github: "https://github.com/Shuleni-Project/Shuleni",
      link: "https://shuleni-client.netlify.app/",
    },
    {
      name: "Book-Bros",
      description: "Book-Bros is a web application where users can post and read book reviews. Build using React, Ruby on Rails and SQLite3.",
      image: "/book_bros.png",
      github: "https://github.com/Book-Bros",
      link: "https://ubiquitous-manatee-cc6e00.netlify.app/home",
    },
    {
      name: "Poetry Hub",
      description:
        "Poetry Hub is a web application where users can get to read poems from different poets.",
      image: "/poetry_hub.png",
      github: "https://github.com/Samueelx/poetry-hub",
      link: "https://poetry-hub.vercel.app/",
    },
    {
        name: "Pimo Pizza Palace",
        description:
          "This is a (simple) restaurant's web page.",
        image: "/pimo_pizza_palace.png",
        github: "https://github.com/Samueelx/pimo-pizza-palace",
        link: "https://samueelx.github.io/pimo-pizza-palace/",
      },
      {
        name: "Restaurant",
        description:
          "This is a restaurant web application that allows users to order their meals and the restaurant management to manage their inventory.",
        image: "/restaurant_project.png",
        github: "https://github.com/Samueelx/restaurant",
        link: "",
      },
      {
        name: "Task Train API",
        description:
          "An task Management API. You can integrate it with any client (frontend), be it a mobile application, web or desktop application. Since it's an API, you can test it using Postman.",
        image: "/task_train_api.png",
        github: "https://github.com/Samueelx/task-train",
        link: "https://task-train-rails-bi28.onrender.com/",
      },
  ]

const ProjectSection = () => {
  return (
    <section id='projects'>
        <h1 className="text-center font-bold text-4xl">Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
        </h1>

        <div className='flex flex-col space-y-28'>
            {projects.map((project, index) => {
                return (
                    <div key={index}>
                        <SlideUp offset='-300px 0px -300px 0px'>
                        <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                            <div className='md:w-1/2 mt-8'>
                                <Link href={project.link} target='_blank'>
                                <Image src={project.image} alt='project image' 
                                width={1000} height={1000} 
                                className='rounded-xl shadow-xl hover:opacity-70' />
                                </Link>
                            </div>
                            <div className='md:w-1/2 mt-12'>
                                <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                                <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.description}</p>
                                <div className='flex flex-row align-bottom space-x-4'>
                                    <Link href={project.github} target='_blank'>
                                        <BsGithub size={30} 
                                        className='hover:-translate-y-1 transition-transform cursor-pointer'/>
                                    </Link>
                                    <Link href={project.link} target='_blank'>
                                        <BsArrowUpRightSquare size={30} 
                                        className='hover:-translate-y-1 transition-transform cursor-pointer'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </SlideUp>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default ProjectSection