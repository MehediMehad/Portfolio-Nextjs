"use client";
import React from "react";
import Image from "next/image";
import { Github, LucideView } from "lucide-react";
import ButtonLink from "../ui/Button";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      image:
        "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
      tags: ["#react", "#mongodb", "#tailwind"],
    },
    {
      id: 2,
      title: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      image:
        "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
      tags: ["#react", "#restapi", "#css"],
    },
    {
      id: 3,
      title: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg",
      tags: ["#nextjs", "#supabase", "#css"],
    },
    {
      id: 4,
      title: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      image:
        "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
      tags: ["#nextjs", "#supabase", "#css"],
    },
  ];

  return (
    <section className="py-10 md:py-20 text-white bg-gradient-to-b from-[#121126] to-[#1b0b37]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex justify-between ">
          <div className="text-start mb-7 md:mb-10 md:w-1/2 ">
            <h2 className="text-4xl font-bold">Projects.</h2>
            <p className="mt-4 text-gray-400">
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </div>
          <div className="items-center content-end pb-6">
            <ButtonLink href="/projects" className="text-sm font-sans">
              All Projects
            </ButtonLink>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative border-2 bg-gradient-to-b from-[#0a0d16] to-[#21073e] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#722585] text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View BTN & Github BTN */}
              <div className="absolute flex justify-between px-3 w-full top-5 z-50">
                <LucideView
                  size={40}
                  className="p-2 bg-[#26171794] rounded-full cursor-pointer"
                />
                <Github
                  size={40}
                  className="p-2 bg-[#26171794] rounded-full cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
