import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { SectionIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
     <section className='card-cta'>
       <div className='flex flex-col gap-6 max-w-lg'>
         <h2>Get Interview-Ready with AI-powered Practice & FeedBack</h2>

         <p className='text-lg'>
         Practice on real time interview questions and get instant feedback from the top ai tutors
         </p>

         <Button asChild className='btn-primary max-sm:w-full'>
          <Link href='/interview'>Start Practicing and Interview</Link>
         </Button>
       </div>

       <Image src="/robot.png" alt="robot-dude" width={400} height={400} className='max-sm:hidden' />
        
     </section>

     <section className='flex flex-col gap-6 mt-8'>
      <h2>Your Interviews</h2>

      <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {... interview} key={interview.id}/>
        ))}
      </div>
     </section>

     <section className='flex flex-col gap-6 mt-8'>
       <h2>Take Interviews </h2>

       <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {... interview} key={interview.id}/>
        ))}
                <p>you haven&apos;t taken any interviews yet</p>
        <p>There are no interviews available right now</p>

       </div>
     </section>
    </>
  )
}

export default page;