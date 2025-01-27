import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { Button } from './ui/button'

const partners = [
  {
    name: 'Rahul Desai',
    title: 'Angel Investor & Advisor, Tech Ventures',
    image: '/webimgs/avatars/investors/rahul.jpg',
  },
  {
    name: 'Johnathan Wong',
    title: 'Partner, Venture Pathways',
    image: '/webimgs/avatars/investors/johnathanwong.jpg',
  },
  {
    name: 'Divya Singh',
    title: 'Chief Marketing Officer, NovaTech Solutions',
    image: '/webimgs/avatars/investors/divya.jpg',
  },
  {
    name: 'Dr. Ashwini Bhatia',
    title: 'Rheumatologist, Prime Health Group',
    image: '/webimgs/avatars/investors/suresh.jpg',
  },
  {
    name: 'Dr. Nithya Ramachandran',
    title: 'General Practitioner, Community Health Center',
    image: '/webimgs/avatars/investors/nithya.jpg',
  },
  {
    name: 'Erik Thompson',
    title: 'Chief Investment Officer, Horizon Capital',
    image: '/webimgs/avatars/investors/erik.jpg',
  }
];

export default function Investors() {
  return (
    <MaxWidthWrapper>
      <div className="py-16 sm:px-12 lg:px-16 text-center mx-auto">
        <p className='text-base font-bold leading-7 text-blue-600'>
          INDIVIDUAL INVESTORS
        </p>
        <h2 className="mt-2 lg:text-4xl text-3xl font-bold tracking-tight text-gray-900">
          Partners who shaped our world
        </h2>
        <p className="mt-6 max-w-screen-md text-gray-700 mx-auto">
          Our growing network of investors has fueled the endless possibilities of digital impact. The insight-driven approach comes from the experience and diverse network our partners bring with them. Join hands with us in driving innovative ventures and impactful growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {/* Partner Cards */}
          {partners.map((partner, index) => (
            <div key={index} className="group flex flex-col text-sm items-center justify-top p-4 hover:shadow-lg rounded-md">
              <div className="relative overflow-hidden">
                <Image 
                  src={partner.image} 
                  alt={partner.name} 
                  className="h-36 w-36 object-cover object-top mb-4 rounded-full transition-all duration-800 ease-in group-hover:rounded-sm group-hover:grayscale-0 grayscale"
                  style={{ objectPosition: '50% 40%' }}
                  width={400}
                  height={400} 
                />
              </div>
              <h3 className='font-bold underline underline-offset-2 text-pretty'>{partner.name}</h3>
              <p className='font-normal text-gray-600 mt-2 text-pretty'>{partner.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center space-x-4">
          <hr className="flex-grow border-t border-gray-500" />
          <Button variant="default" asChild>
            <a href="/contact">Become a Partner</a>
          </Button>
          <hr className="flex-grow border-t border-gray-500" />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
