import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import heroImages from "@/assets/heroimages"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

import Callaction from "@/components/Callaction"
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import FloatingBlock from "@/components/FloatingBlock";
import Poweredby from "@/components/Poweredby";
import Tabs from "@/components/Tabs";
import Features from "@/components/Features";

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
        <p>Independent Media and Tech Studio &mdash;</p>
        <h1 className="font-bold lg:text-6xl md:text-5xl text-4xl tracking-tight bg-gradient-to-tr from-blue-600 to-sky-400 bg-clip-text text-transparent">
            Maximize digital excellence in a connected world 
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
            Managed over $1mio accounts' for 3+ global companies^
            </p>
        </div>
        <div id="floatingblock" className="lg:flex hidden">
          <FloatingBlock/>
        </div>
    </MaxWidthWrapper>
   </div>

   <MaxWidthWrapper>
    <div className="py-20 w-full flex flex-col items-center justify-center">
    <h2 className="font-bold mb-6 lg:text-5xl md:text-4xl text-3xl lg:text-secondary-foreground tracking-tight text-center text-gray-900">
      Integrated media management agency
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
      <h2 className="mx-auto mb-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold tracking-tight text-gray-900 ">
        Start up, Stack up, Scale up
      </h2>
      <p className='mx-auto pb-4 items-center justify-center text-center md:max-w-screen-md'>
        With over 12 years of extensive experience in media management and technology operations, we excel in providing top-quality content execution and tailored solutions to meet the diverse media and marketing needs. Our expertise ensures unparalleled client-services and result-driven execution
      </p>
    </div>
</MaxWidthWrapper>

    <Tabs/>

   <Brands/>

   <Features/>

<MaxWidthWrapper>
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="mx-auto text-sky-500 text-sm text-center items-center justify-center font-bold">
        CORE CAPABILITIES
      </p>
      <h2 className="font-bold mx-auto mb-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
        Discover Our Services
      </h2>
      <p className='mx-auto pb-4 items-center justify-center text-center md:max-w-screen-md'>
      The belief we follow, the work we do, the brands we use, the bread we eat, everything revolves around the decisions we make. Discover how our services can maximize digital excellence in your connected world
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 md:p-12">
      {servicesData.map((service, index) => (
        <div key={index} className="relative w-full overflow-hidden rounded-md group">
          {/* Background Image */}
          <div className="w-full h-[300px] bg-cover bg-top"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${service.imageUrl})`,
              backgroundColor: 'lightgray',
            }}>
            <h2 className="absolute z-10 w-fit text-md font-semibold m-4 p-2 bg-slate-800 rounded-sm text-primary-foreground">{service.title}</h2>
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-4 py-6 bg-white bg-opacity-100 transition-opacity duration-100 opacity-0 group-hover:opacity-100">
              {/* Content */}
              <h3 className="text-sm font-light text-blue-400 mb-2">{service.useCase}</h3>
              <p className="text-sm">
                {service.description}
              </p>
              <span className="text-sm py-2">
                <a href={service.link}>See More <span>&#10132;</span></a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </MaxWidthWrapper>

  <Testimonials/>
  <MaxWidthWrapper>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-4">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl rounded-md sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 bg-gradient-to-bl from-slate-100 to-zinc-200">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-primary-background sm:text-4xl">
              Outsource business processes and tech ops
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
              backgroundImage: "url('https://images.unsplash.com/photo-1576267423429-569309b31e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            </div>
            </div>
          </div>
          </div>
          </MaxWidthWrapper>

    </main>
  );
} 
