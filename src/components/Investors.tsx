import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

export default function Investors() {
  return (
<MaxWidthWrapper>
  <div className="py-16 sm:px-12 lg:px-16 text-center">
    <p className='text-base font-bold leading-7 text-blue-600'>
        INDIVIDUAL INVESTORS
    </p>
    <h2 className="mt-2 lg:text-4xl text-3xl font-bold tracking-tight text-gray-900">
      Partners who shaped our world
    </h2>
    <p className="mt-6 text-gray-700">
      Join hands with visionary partners driving innovative ventures and impactful growth.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {/* Partner Logos */}
      <div className="flex flex-col text-sm items-center justify-top p-4 bg-white hover:shadow-md rounded-md">
        <Image 
        src="/webimgs/avatars/profiles/default.png" 
        alt="Partner 1" 
        className="h-12 object-contain mb-4"
        width={100}
        height={100} />
        <h3 className='font-bold text-pretty'>Gaurav Ahuja</h3>
        <p className='font-light mt-2 text-pretty'>Managing Director, VMC Educational Institutes</p>
      </div>
      <div className="flex flex-col text-sm items-center justify-top p-4 bg-white hover:shadow-md rounded-md">
        <Image src="/webimgs/avatars/profiles/default.png" 
        alt="Partner 2" 
        className="h-12 object-contain mb-4"
        width={100}
        height={100} />
        <h3 className='font-bold text-pretty'>Shwetha M Srinivasana</h3>
        <p className='font-light mt-2 text-pretty'>Sr Team Lead, Kraftx Technologies</p>
      </div>
      <div className="flex flex-col text-sm items-center justify-top p-4 bg-white hover:shadow-md rounded-md">
        <Image src="/webimgs/avatars/profiles/default.png" 
        alt="Partner 3" 
        className="h-12 object-contain mb-4"
        width={100}
        height={100} />
        <h3 className='font-bold text-pretty'>Dr. Sunita Johari</h3>
        <p className='font-light mt-2 text-pretty'>MD, Medhealth</p>
      </div>
      <div className="flex flex-col text-sm items-center justify-top p-4 bg-white hover:shadow-md rounded-md">
        <Image src="/webimgs/avatars/profiles/default.png" 
        alt="Partner 4" 
        className="h-12 object-contain mb-4"
        width={100}
        height={100} />
        <h3 className='font-bold text-pretty'>Dr. Mrunal Triveni</h3>
        <p className='font-light mt-2 text-pretty'>Chief Surgeon, Onco Immunologist</p>
      </div>
      <div className="flex flex-col text-sm items-center justify-top p-4 bg-white hover:shadow-md rounded-md">
        <Image src="/webimgs/avatars/profiles/default.png" 
        alt="Partner 5" 
        className="h-12 object-contain mb-4"
        width={100}
        height={100} />
        <h3 className='font-bold text-pretty'>Pallavi Bhagavatula</h3>
        <p className='font-light mt-2 text-pretty'>Business Lead, Engineering Division</p>
      </div>
      <div className="flex flex-col text-sm items-center justify-top p-4 bg-white hover:shadow-md rounded-md">
        <Image src="/webimgs/avatars/profiles/default.png" 
        alt="Partner 6" 
        className="h-12 object-contain mb-4"
        width={100}
        height={100} />
        <h3 className='font-bold text-pretty'>Dr. Krishnan Shivkumar</h3>
        <p className='font-light mt-2 text-pretty'>Independent Investor</p>
      </div>
    </div>
    <div className="mt-8">
      <a
        href="/contact"
        className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Become a Partner
      </a>
    </div>
  </div>
  </MaxWidthWrapper>
  )
}
