import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const logos = [
  { src: '/webimgs/teamlogos/Godrej.svg', alt: 'Godrej', width: 120, height: 24 },
  { src: '/webimgs/teamlogos/bsc-blue.svg', alt: 'Bostons', width: 140, height: 60 },
  { src: '/webimgs/teamlogos/David.svg', alt: 'Davidp', width: 140, height: 90 },
  { src: '/webimgs/teamlogos/Oxfam.svg', alt: 'Oxfam', width: 120, height: 60 },
  { src: '/webimgs/teamlogos/MaxIndia.svg', alt: 'Max', width: 160, height: 80 },
  { src: '/webimgs/teamlogos/GIZ.svg', alt: 'GIZ', width: 160, height: 60 },
  { src: '/webimgs/teamlogos/Greenpeace.svg', alt: 'Greenpeace', width: 160, height: 80 },
  { src: '/webimgs/teamlogos/lg-logo.svg', alt: 'Omron', width: 110, height: 55 },
]

function Brands() {
  return (
    <MaxWidthWrapper>
      <div className='w-full bg-secondary-background py-24 sm:py-16'>
        <div className='mx-auto grid md:grid-cols-2 gap-6'>
          <div className='lg:sticky top-24 self-start flex flex-col items-center justify-start md:pr-8'>
            <div className="max-w-md text-center lg:text-left items-center justify-end my-6 px-4">
              <p className='text-blue-500 font-bold'>TOP CLIENTELES</p>
              <h1 className='mb-6 lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-gray-900'>Global visionaries</h1>
              <p>
              We are privileged to collaborate, represent diverse clients with global reach, reflecting their trust and excellence, cultivated through times. <br/> <br/> Built upon innovation and partnership, we are reinforcing our commitment in delivering impactful results.
              </p>
              <Link href='/explore#work'>
              <Button variant={'default'} className='mt-12 hover:bg-blue-600'>
                See All work
              </Button>
              </Link>
            </div>
          </div>
          <div className='lg:w-full md:w-[auto] h-[auto] bg-cover bg-center mx-auto rounded-xl shadow-lg border-2 border-gray-300'>
            <div className='text-primary-background m-6'>
              <div className="w-full grid grid-cols-2 gap-y-12 py-12 items-center mx-auto">
                {logos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center w-full h-full p-2">
                    <Image
                      className="object-contain max-h-24 max-w-full grayscale transition-transform duration-600 hover:grayscale-0 hover:scale-105"
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}  
                      height={logo.height}  
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Brands
