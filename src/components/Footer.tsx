import React from 'react'
import {
    SlSocialSkype,
    SlSocialGoogle,
    SlSocialInstagram,
    SlSocialLinkedin,
    SlSocialYoutube
} from 'react-icons/sl'
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className="bg-stone-100 shadow-inner">
    <MaxWidthWrapper>
    <div className='max-w-[1240px] mx-auto items-start justify-start px-4 py-16 grid lg:grid-cols-3 gap-8'>
        <div> 
            <div>
            <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <div className="FooterLogo">
                                              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    width="48"
                    height="48"
                  >
                    <defs>
                      <radialGradient
                        id="a"
                        cx="708.08"
                        cy="303.55"
                        r="430.34"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#0a99ff" />
                        <stop offset="1" stopColor="#0042e9" />
                      </radialGradient>
                    </defs>

                    {/* Background */}
                    <rect x={0} y={-5} width={600} height={1010} fill="none" />

                    {/* Gradient logo */}
                    <polygon
                      points="788.1 349.63 688.13 750.61 562.82 750.61 637.8 449.88
                              512.5 449.88 537.49 349.63 412.19 349.63 362.2 550.12
                              487.5 550.12 462.51 650.37 211.9 650.37 311.87 249.39
                              687.79 249.39 662.8 349.63 788.1 349.63"
                      fill="url(#a)"
                    />
                  </svg>
                        </div>
                        <div className='font-black text-lg tracking-tight cursor-pointer text-transparent bg-gradient-to-l from-zinc-700 to-slate-800 bg-clip-text transition ease-in-out duration-300 hover:from-blue-500 hover:to-sky-600'>
                            <i className="pr-2">SUPERSQAD.COM</i> 
                        </div>
                    </div>
                </Link>
            </div>
            
            <p className='py-4 w-[80%] text-xs'>
            Outsource marketing production and media tech ops with our niche supersqads.
            </p>
           <div className='flex justify-start py-4 gap-4 md:w[50% my-4]'>
                <SlSocialGoogle size={20} />
                <SlSocialInstagram size={20} />
                <SlSocialLinkedin size={20} />
                <SlSocialYoutube size={20} />
                <SlSocialSkype size={20} />
            </div>
            <div className='text-slate-300 hidden lg:block mt-4'>
                Technical Info:
          <p className='text-xs'>pre-build:25.8 rv27.7</p>
          <p className='text-xs'>v27.7 w.d:43.6</p>
          </div>
        </div>
        <div className='flex lg:grid-cols-2 gap-8 justify-items-center'>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Company</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs block hover:underline'>
                <Link href="./about">About us</Link>
                </li>
                <li className='py-2 text-xs hover:underline'>
                    <Link href="/talent">Top Talent</Link>
                    </li>
                <li className='py-2 text-xs hover:underline'>
                    <Link href={"./about#investors"}>Investors</Link>
                    </li>
                <li className='py-2 text-xs hover:underline'>
                    <Link href={"./explore"}>Explore</Link>
                    </li>
            </ul>
        </div>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Clients</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs hover:underline'><Link href={"./services#contactus"}>Get Consultation</Link></li>
                <li className='py-2 text-xs hover:underline'><Link href={"./services#contactus"}>Hire Contractors</Link></li>
                <li className='py-2 text-xs hover:underline'><Link href={"./contact"}>Buy Services</Link></li>
            </ul>
        </div>
        </div>

        <div className='flex lg:grid-cols-2 space-x-8 justify-stretch'>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Media</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs block hover:underline'>
                <Link href="/blog">Blogs</Link>
                </li>
                <li className='py-2 text-xs hover:underline'><Link href={"./talent#workwithus"}>Parternships</Link></li>
                <li className='py-2 text-xs hover:underline'><Link href={"./services#contactus"}>Media Centre</Link></li>
            </ul>
        </div>
        <div className='flex-1'>
            <h6 className='font-medium text-base border-b border-1 border-gray-700 py-2 mb-2'>Support</h6>
            <ul className='text-muted-foreground'>
                <li className='py-2 text-xs hover:underline'><Link href={"./services#contactus"}>Raise Issue</Link></li>
                <li className='py-2 text-xs hover:underline'><Link href={"./contact"}>Contact</Link></li>
                <li className='py-2 text-xs hover:underline'><Link href={"./talent#careers"}>Careers</Link></li>
                </ul>
        </div>
        </div>
</div>
</MaxWidthWrapper>
<div className='flex items-center justify-center text-center border-t border-gray-600 text-muted-foreground cursor-default'> 
    <ul className='mx-auto hidden lg:flex lg:items-center py-2 text-xs'>
        <li className='p-1 hover:underline'>Terms of Service</li>
        <li className='p-1 hover:underline'>Cookie Settings</li>
    </ul>
    <p className='py-4 px-2 mx-auto text-xs text-muted-foreground'>
        <span>&copy; 2024 - {new Date().getFullYear()} Supersqad.com&#8482;</span> {'\n'} All Rights Reserved. 
        Developed by Werbex Inc.
    </p>
</div>
</div>
</>
  );
};

export default Footer;