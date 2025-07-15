import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import heroImages from "@/assets/heroimages"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

import Brands from "@/components/Brands";
import FloatingBlock from "@/components/FloatingBlock";
import Poweredby from "@/components/Poweredby";
import Tabs from "@/components/Tabs";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function Home() {

  const currentImageIndex = Math.floor(Math.random() * heroImages.length);
  const images = [...heroImages];

  return (
    <main>

    <div className="relative h-[100vh] flex items-center justify-end bg-gradient-to-tr from-white via-blue-50 to-sky-100">

    {images && images[currentImageIndex] && (
      <Image
      src={images[currentImageIndex].src}
      alt={`Slide ${currentImageIndex + 1}`}
      width={images[currentImageIndex].width}
      height={images[currentImageIndex].height}
      className="w-full h-full object-cover absolute inset-0 transition-opacity duration-700 hidden lg:block"
      />
    )}

    <MaxWidthWrapper>
      <div className="relative flex flex-col z-10 text-center md:text-left py-6 max-w-xl mx-auto lg:-mx-20 lg:pl-10">
        <p>Independent Marketing Studio &mdash;</p>
        <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl tracking-tight bg-gradient-to-tr from-blue-600 to-sky-400 bg-clip-text text-transparent">
            Maximize market excellence in a connected world 
        </h1>
        <h2 className="mt-4 font-medium text-accent-foreground">Professional expertise for advanced marketing</h2>
          <p className="my-4 text-md text-primary">
            Global center for media agencies, corporate, IT hubs and healthcare groups, looking to outsource autonomous tasks and talent
          </p>
          <div className="mt-4 text-center md:text-left">
            <Link href={"/contact"} passHref>
            <Button 
            className="bg-[#0066ff] inline-block md:inline-block lg:block" 
            variant="default"
            size="xl"
            >
              Get Started <span>&rarr;</span>
            </Button>
            </Link>
          </div>
            <p className="mt-8 align-text-bottom text-xs place-items-end justify-items-end text-accent-foreground">
            Managed over $1mio accounts&apos; for 3+ global companies^
            </p>
        </div>
        <div id="floatingblock" className="lg:flex hidden">
          <FloatingBlock/>
        </div>
    </MaxWidthWrapper>
   </div>

   <MaxWidthWrapper>
    <div className="py-20 w-full flex flex-col items-center justify-center">
    <h2 className="mb-6 lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-gray-900"> 
      Redefine modern media marketing
      </h2>
        <p className="max-w-prose-lg text-center font-medium mb-6">
          We are shaping the future of digital, with research, creativity and technology</p>
        <p className="max-w-screen-md text-center mb-6">
          Our approach is centered on leveraging data-driven consumer insights that drives competitive advantage, to reimagine and reinvent creative brands for digital-age of the coming
        </p>
        <Poweredby/>
    </div>
   </MaxWidthWrapper>

   <MaxWidthWrapper>
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="mx-auto text-sky-500 text-sm text-center items-center justify-center font-bold">
        WHAT WE DO
      </p>
      <h2 className="mx-auto mb-6 lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-gray-900">
        Start up. Stack up. Scale up.
      </h2>
      <p className='mx-auto pb-4 items-center justify-center text-center md:max-w-screen-lg'>
        We help brands make confident marketing decisions through tailored media strategies and quality content execution.
        <br/>
        <br/>
        Unlike big agencies bound by conflicts of interest and top-down directives, we&apos;re proudly independent—focused solely on delivering smart, unbiased, and impactful results for our clients. Driven by truth, well told.
      </p>
    </div>
</MaxWidthWrapper>

    <Tabs/>

    <Features/>

    <Brands/>

<MaxWidthWrapper>
  <div className="py-20 flex flex-col items-center justify-center">
    <p className="mx-auto text-sky-500 text-sm text-center font-bold">
      CORE CAPABILITIES
    </p>
    <h2 className="font-bold mx-auto mt-2 lg:text-5xl md:text-4xl text-3xl tracking-tight text-gray-900">
      Discover services. Delivered seamlessly.
    </h2>
    <p className="mx-auto mt-6 text-gray-700 text-center md:max-w-screen-md">
      The belief we follow, the work we do, the brands we use, the bread we eat, everything revolves around the decisions we make. Discover how our services can maximize digital excellence in your connected world.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 md:p-12">
    {servicesData.map((service, index) => (
      <div
        key={index}
        className="relative group rounded-md overflow-hidden h-[400px] bg-gray-100 shadow-md"
      >
        {/* Background Image & Title */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-3000 ease-out group-hover:-translate-y-6"
          style={{
            backgroundImage: `url(${service.imageUrl})`,
          }}
        />
        <div className="absolute top-0 left-0 m-4 z-10 bg-slate-800 text-primary-foreground text-md font-semibold px-3 py-1 rounded-sm">
          {service.title}
        </div>

        {/* Slide-up Overlay on Hover */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white bg-opacity-90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
          <h3 className="text-pretty font-bold text-blue-400 mb-1">{service.useCase}</h3>
          <p className="text-sm text-gray-800">{service.description}</p>
          <span className="text-sm text-blue-500 mt-2 inline-block">
            <a href={service.link}>See More <span>&#10132;</span></a>
          </span>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      </div>
    ))}
  </div>
</MaxWidthWrapper>


  {/* Pointers Section 1 */}
   <MaxWidthWrapper>
      <div className='w-full bg-secondary-background py-24 sm:py-16'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center text-center md:text-right md:pr-8'>
            <p className='text-blue-500 font-bold'>FIND RESOURCES</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pb-6 tracking-tight'>Get skilled talent</h1>
            <p>Whether you are seeking innovative solutions, expert guidance, or specialized skills, we provide access to top talent across various industries. We prioritize quality and expertise, ensuring that you find the right individuals who can drive projects forward. <br/> <br/>
            Discover the difference that the right talent can make and start building your dream team today.
            </p>      
            <button className='bg-slate-500 w-[200px] text-white hover:bg-blue-800 rounded-md font-medium my-6 md:ml-auto mx-auto md:mx-0 py-3'><Link href={"./talent"}>Get Started</Link></button>
          </div>
          <div className='max-w-[500px] md:w-[auto] h-[auto] bg-slate-800 rounded-md bg-cover bg-center mx-auto my-4'>
          <div className='text-primary-foreground m-8 p-4'>
            <h1 className='font-bold text-xl'>Why Supersqadstudios?</h1> 
            <p className='py-4'>
            Access the top skilled talent-house on <a href="#"><u>Supersqad.com</u></a> and start working with contractors around the world without ever having to worry about the cost.
            </p>
            <div className='py-4'>
            <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
      </svg>
       <h3 className="group-hover:text-white text-sm font-semibold">Scalable Team</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">From one to many, get resources basis project requirements.
              </p>
              </div>
        <div className='py-4'> 
              <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <h3 className="group-hover:text-white text-sm font-semibold">Verified Resources</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">Based on skillsets, aptitude and location.
              </p>
              </div>
      </div>
      </div>
  </div>
</div>
</MaxWidthWrapper>

{/* Pointers Section 2*/}
<MaxWidthWrapper>
<div className='w-full bg-secondary-background py-24 sm:py-16'>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <div className='max-w-[500px] md:w-[auto] h-[auto] bg-gray-600 rounded-md bg-cover bg-center mx-auto my-4'>
      <div className='text-primary-foreground m-8 p-4'>
      <h1 className='font-bold text-primary-foreground text-xl'>Why work with us?</h1> 
      <p className='py-4'>
      Find top remote jobs with contractors and employers on <a href="#"><u>Supersqad.com</u></a> and start working with a client around the world.
      </p>
      <div className='py-4'>
      <div className="flex items-center space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
            </svg>
            <h3 className="group-hover:text-white text-sm font-semibold">Dedicated Hiring</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">Regular hiring for agile media and tech ops.
              </p>
              </div>
        <div className='py-4'>
              <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
              </svg>
              <h3 className="group-hover:text-white text-sm font-semibold">Direct Pay</h3>
              </div>
              <p className="text-slate-200 group-hover:text-white text-sm">UPI, Credit Card and Bank Remittance.
              </p>
              </div>
         </div>
      </div>
     <div className='flex flex-col justify-center text-center md:text-left md:pl-8'>
      <p className='text-blue-500 font-bold'>FIND WORK</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pb-6 tracking-tight'>Gateway to meaningful work</h1>
      <p>Enjoy work flexibility while collaborating on cutting-edge projects with leading companies. We help you connect with opportunities across diverse fields, allowing you to achieve your career goals from anywhere in the world. <br/> <br/> Discover the best remote jobs and become part of a thriving global workforce today.</p>      
      <button className='bg-slate-500 w-[200px] text-white hover:bg-blue-600 rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><Link href={"./resources"}>Get Started</Link></button>
    </div>
  </div>
</div>  
</MaxWidthWrapper> 

<Testimonials/>

  <MaxWidthWrapper>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-4">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl rounded-md sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 bg-gradient-to-bl from-slate-100 to-zinc-200">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary-background sm:text-4xl">
              Outsource with confidence
            </h2>
            <p className="mt-6 text-primary-background">
            With commitment to excellence and creative innovation, as your strategic partner, we provide solutions and opportunities for growth and success. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="./explore"
                className="bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Know More
              </a>
              <a href="./services" className="text-sm font-semibold leading-6 text-primary-background hover:underline underline-offset-2">
                Find Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
          <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-md bg-white/5 ring-1 ring-white/10"
            style={{
              backgroundImage: "url('/webimgs/album/Picture1.png')",
              backgroundSize: "contain",
              backgroundPosition: "top",
              backgroundRepeat:"no-repeat"
            }}>
            </div>
            </div>
          </div>
          </div>
          </MaxWidthWrapper>

    </main>
  );
} 
