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
        <p>Advertising Media and Tech Studio &mdash;</p>
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
            Managing $1mio ad revenue for 3+ global companies^
            </p>
        </div>
        <div id="floatingblock" className="lg:flex hidden">
          <FloatingBlock/>
        </div>
    </MaxWidthWrapper>
   </div>

   <MaxWidthWrapper>
    <div className="py-20 w-full flex flex-col items-center justify-center">
    <h2 className="font-bold mb-6 lg:text-5xl md:text-4xl text-3xl lg:text-secondary-foreground tracking-tight text-center">
      Integrated media marketing agency
      </h2>
        <p className="max-w-prose-lg text-center font-medium mb-6">
         We are shaping the future of digital, with research, creativity and technology</p>
        <p className="max-w-screen-md text-center mb-6">
        Our approach is centered on leveraging data-driven consumer insights that drives competitive advantage, to reimagine and reinvent brands for digital-age of the coming
        </p>
        <Poweredby/>
    </div>
   </MaxWidthWrapper>

   <div className="bg-zinc-800">
  <MaxWidthWrapper>
  <div className="mx-auto max-w-screen-lg px-6 lg:px-8">
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 py-16 sm:py-24">
  <div className="lg:pl-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-bold leading-7 text-blue-400">WHO WE ARE</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-3xl">Partner in delivering digital solutions to maximize presence</h1>
          <p className="mt-6 leading-7 text-white">A go-to hub for businesses undergoing digital transformation, asset production or technology integration into all aspects of executable operations, client experiences, optimized processes, and data-driven decision-making.</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
            <div className="relative pl-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 absolute left-0 top-1 text-inherit">
                <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
              </svg>
              <dt className="inline-flex font-semibold text-white">
                Media and Tech Studio
              </dt>
              <dd className="inline-block font-light">Streamline service-ops, media production or tailored marketing solutions by experts.</dd>
            </div>
            <div className="relative pl-12">
              <dt className="inline-flex font-semibold text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 absolute left-0 top-1 text-inherit">
                  <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clipRule="evenodd" />
                </svg>
                Talented Offshore Experts
              </dt>
              <dd className="inline-block font-light">Maximize productivity with Full-Time Equivalent (FTE) resources dedicated to projects, while seamlessly integrating with your existing teams.</dd>
            </div>
          </dl>
        </div>
      </div>
    <div className="w-full lg:h-auto bg-cover bg-center" 
      style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1663645446482-8c4d17787448?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3')", 
      backgroundSize: "cover", 
      backgroundPosition: "center" 
      }}>
      </div>
    </div>
</div>
  </MaxWidthWrapper>
</div>

   <MaxWidthWrapper>
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="mx-auto text-sm text-center items-center justify-center font-bold">
        WHAT WE DO
      </p>
      <h2 className="text-sky-500 font-bold mx-auto mb-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl tracking-tight">
        Start up, Stack up, Scale up
      </h2>
      <p className='mx-auto pb-4 items-center justify-center text-center md:max-w-screen-md'>
        With over 12 years of extensive experience in media management and technology operations, we excel in providing top-quality content execution and tailored solutions to meet the diverse media and marketing needs. Our expertise ensures unparalleled client-services and result-driven execution
      </p>
    </div>
</MaxWidthWrapper>

    <Tabs/>

   <Brands/>

<MaxWidthWrapper>
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="mx-auto text-sm text-center items-center justify-center font-bold">
        CORE CAPABILITIES
      </p>
      <h2 className="text-sky-500 font-bold mx-auto mb-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
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

  <Callaction/>

    </main>
  );
} 
