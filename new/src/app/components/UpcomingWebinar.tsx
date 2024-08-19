'use client'
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinar = () => {
  const featuredWebinars = [
    {
      title: "Sitar Fundamentals",
      slug: "sitar-fundamentals",
      description:
        "Learn the basics of drum playing drum with our comprehensive beginner course.",
      isFeatured: true,
    },
    {
      title: "Violent Fundamentals",
      slug: "violent-fundamentals",
      description:
        "Learn the basics of drum playing drum with our comprehensive beginner course.",
      isFeatured: true,
    },
    {
      title: "Piano Fundamentals",
      slug: "piano-fundamentals",
      description:
        "Learn the basics of drum playing drum with our comprehensive beginner course.",
      isFeatured: true,
    },
    {
      title: "Drum Fundamentals",
      slug: "drum-fundamentals",
      description:
        "Learn the basics of drum playing drum with our comprehensive beginner course.",
      isFeatured: true,
    },
    {
      title: "Guitar Fundamentals",
      slug: "guitar-fundamentals",
      description:
        "Learn the basics of drum playing drum with our comprehensive beginner course.",
      isFeatured: true,
    },
    {
      title: "Rabab Fundamentals",
      slug: "rabab-fundamentals",
      description:
        "Learn the basics of drum playing drum with our comprehensive beginner course.",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12  bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2
            className="text-base text-teal-600 font-semibold
             tracking-wide"
          >
            FEATURED WEBINARS
          </h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold 
            tracking-tight text-white sm:text-4xl"
          >
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect 
          items={featuredWebinars.map(webinar =>(
            {
                title: webinar.title,
                description: webinar.description,
                link: "/"
            }
          ))}/>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600
        bg-white text-neutral-700 hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
