import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser} from '@/lib/actions/auth.action'
import {getInterviewsByUserId } from '@/lib/actions/general.action'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();
  const userInterviews = await getInterviewsByUserId(user?.id);

  const hasPastInterviews = userInterviews?.length > 0;
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

     <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>
     <section className='flex flex-col gap-6 mt-8'>
       <h2>Take Interviews </h2>

       <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {... interview} key={interview.id}/>
        ))}
        <p>There are no interviews available right now</p>

       </div>
     </section>
    </>
  )
}

export default page;