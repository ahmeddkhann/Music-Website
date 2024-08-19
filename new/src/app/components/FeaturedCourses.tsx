"use client"
import React from 'react'
import Link from 'next/link'
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title : string,
    description : string,
    isFeatured: boolean,
    price: number,
    slug: string,
    instructor: string
}

const FeaturedCourses = () => {

  const FeaturedCourses =  courseData.courses.filter((course:Course)=> course.isFeatured)

  return (
    <div className='bg-gray-700 text-white py-12'>
      <div>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 
              font-semibold tracking-wide '>
                FEATURED COURSES
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold
                tracking-tight text-white sm:text-4xl'>
                Learn with the best
            </p>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2
              lg:grid-cols-3 gap-8 justify-center'>
                {FeaturedCourses.map((course:Course)=>(
                    <div key={course.id} className='flex justify-center'>
                        <BackgroundGradient 
                        className='flex flex-col rounded-[22px]
                        bg-white dark:bg-zinc-900 overflow-hidden
                         h-full max-w-sm' >
                            <div className='p-4 sm:p-6 flex flex-col
                            items-center text-center flex-grow'>
                                <p className=' sm:text-xl text-gray-300
                                mt-2 mb-2 dark:next-neutral-200'>
                                    {course.title}
                                </p>
                                <p className='text-sm mt-2 text-neutral-600
                                 dark:text-neutral-400'>
                                    {course.description}
                                </p>
                                <Link className='mt-4 bg-gray-700 p-2 rounded-lg' href={`/course/${course.slug}`}>
                                      Learn more
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"}
            className='px-4 py-2 rounded border border-neutral-600
        bg-white text-neutral-700 hover:bg-gray-100 transition duration-200'>
            View All courses
            </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCourses
