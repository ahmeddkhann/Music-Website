"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Expert Instructors",
      description:
        "Learn from highly qualified and experienced instructors who are passionate about music education. Our faculty includes professional musicians and educators dedicated to helping you achieve your musical goals.",
    },
    {
      title: "Personalized Lessons",
      description:
        "Receive tailored lessons designed to fit your unique learning style and musical interests. Our personalized approach ensures that you get the most out of each lesson and progress at your own pace.",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Practice and perform in our modern, well-equipped facilities. Our school features high-quality instruments, soundproof practice rooms, and advanced technology to enhance your learning experience.",
    },
    {
      title: "Diverse Music Programs",
      description:
        "Explore a wide range of music programs, from classical to contemporary, and everything in between. Whether you're interested in piano, guitar, drums, or vocal training, we have a program for you.",
    },
    {
      title: "Performance Opportunities",
      description:
        "Showcase your skills through various performance opportunities. Participate in recitals, concerts, and masterclasses to gain stage experience and build confidence in your abilities.",
    },
    {
      title: "Community and Support",
      description:
        "Join a vibrant community of music enthusiasts and support each other in your musical journey. Our school fosters a collaborative and encouraging environment where you can connect with peers and mentors.",
    },
  ];

  return (
    <div className="bg-slate-700" >
      <div className="p-2">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
