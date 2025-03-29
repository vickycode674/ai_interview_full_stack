import React from 'react'
import dayjs from 'dayjs';
import Image from 'next/image';
import {getRandomInterviewCover} from '../lib/utils';
import { Bitter } from 'next/font/google';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({interviewId,userId,role,type,techstack,createdAt}:InterviewCardProps) => {

    const feedback = null as Feedback | null;
    

    //technical 
    const normailizedType = /mix/gi.test(type) ? "Technical" : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM  D YYYY");
  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
    <div className='card-interview'>
        <div>
             <div className='absolute top-0 right-0 w-fit px-4'>
                <p className='badge-text'>{normailizedType}</p>
             </div>
        </div>
        <Image src={getRandomInterviewCover()} alt="interview-cover" width={90} height={90} className='rounded-full object-fit 
        size-[90px]' />
        <h3 className='mt-5 capitalize'>
            {role} Interview 
        </h3>

        <div className='flex flex-row gap-5 mt-3'>
            <div className='flex flex-row gap-2'>
             <Image src="/calendar.svg" alt='calendar'  width={22} height={22} />
             <p>{formattedDate}</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <Image src="./star.svg"  alt='star' width={22} height={22} />
                <p>{feedback?.totalScore || '----'}/100</p>
        </div>
    </div>
     <p className='line-clamp-2 mt-5'>
        {feedback?.finalAssessment || 'you havent taken your interview yet take it now to imporve your skills'}
     </p>
    <div className='flex flex-row justify-between'>
     <DisplayTechIcons techStack={techstack} />

     <Button className='btn-primary'>
      <Link href={feedback?`/interview/${interviewId}/feedback`:`/interview/${interviewId}`}>
       {feedback ? 'Check Feedback' : 'view Interview'}
      </Link>
     </Button>
    </div>
    </div>
 </div>
  )
}

export default InterviewCard