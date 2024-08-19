"use client"
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const MusicSchoolTestimonal = () => {
    const schoolTestimonials = [
        {
          name: "Emily Johnson",
          title: "Piano Student",
          quote: "The piano program at this school has truly transformed my playing. The personalized lessons and expert instructors have helped me grow as a musician and performer."
        },
        {
          name: "Michael Smith",
          title: "Guitar Enthusiast",
          quote: "I love the diverse range of guitar styles and techniques taught here. The community is supportive, and the facilities are top-notch for practice and performance."
        },
        {
          name: "Sophia Brown",
          title: "Voice Student",
          quote: "The vocal training I received was exceptional. The teachers are incredibly knowledgeable, and the performance opportunities have been invaluable to my growth as a singer."
        },
        {
          name: "James Wilson",
          title: "Drum Student",
          quote: "The drum lessons have been fantastic. The instructors provide clear guidance and constructive feedback, helping me develop my skills and confidence."
        },
        {
          name: "Olivia Davis",
          title: "Music Theory Student",
          quote: "The music theory classes are engaging and insightful. The curriculum is well-structured, and I've gained a deeper understanding of music that has enhanced my overall musicianship."
        },
        {
          name: "Liam Martinez",
          title: "Jazz Saxophonist",
          quote: "The jazz program is amazing! The ensemble sessions and masterclasses with experienced musicians have really expanded my playing and improvisational skills."
        },
        {
          name: "Isabella Garcia",
          title: "Composition Student",
          quote: "Learning composition here has been a game-changer. The feedback from professors and the collaborative environment have helped me refine my craft and creativity."
        },
        {
          name: "Benjamin Anderson",
          title: "Music Production Student",
          quote: "The music production courses are top-notch. The access to professional equipment and software, along with expert instruction, has greatly advanced my production skills."
        }
      ];
  return (
    <div className='py-10 w-full dark:bg-black
    dark:bg-grid-white/[0.2]'>
        <h2 className=' pt-10 text-3xl text-white font-bold text-center mb-8 z-10' >
            Hear our Harmony: Voices of Success
        </h2>
        <div className='flex justify-center w-full overflow-hidden
        px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-6xl'>
            <InfiniteMovingCards
        items={schoolTestimonials}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonal
