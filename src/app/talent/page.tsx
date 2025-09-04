import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Workwithus from "@/components/Workwithus";
import Image from "next/image";
import TalentGrid from "@/components/TalentGrid";

const Talent = () => {
    return (
        <>
        <div
          className="w-full h-[400px] relative items-center justify-center bg-gradient-to-r from-blue-500 via-slate-400 to-gray-100 lg:bg-none lg:block"
          style={{
            backgroundImage: 'none',
          }}
        >
          {/* Image background only on large screens */}
          <div
            className="hidden lg:block absolute inset-0 bg-cover bg-[center_10%]"
            style={{
              backgroundImage: `url("/webimgs/mastheads/side1.png")`,
            }}
          ></div>


          <MaxWidthWrapper>
            <div className="mx-auto py-20 min-h-[400px] flex flex-col items-start justify-center relative z-10">
              <div className="mx-4 p-2 font-bold text-blue-500 mb-4 md:mr-4 md:mb-0">
                &#129174; FIND YOUR TALENT
              </div>
              <h2 className="mx-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-light mb-4 md:mr-4 md:mb-0 text-accent-foreground">
                Gateway to World-Class Expertise
              </h2>
            </div>
          </MaxWidthWrapper>
        </div>

        <MaxWidthWrapper>
          <div className="py-16 sm:py-24 flex flex-col mx-auto items-center justify-center gap-4">
            <div className="mx-auto max-w-screen-md text-center">
              <h2 className="text-base font-bold leading-7 text-blue-600">TALENT SUPERSQAD</h2>
              <h1 className="mt-2 lg:text-4xl text-3xl font-bold tracking-tight text-gray-900">
              Meet our squad with niche skillset
              </h1>
              <p className="mt-6 text-gray-700">
              We offer scalable and flexible media and tech squads who can tackle in-house challenges such as resource constraints, seasonal workload fluctuations, and a shortage of specialized expertise in media agencies, corporate, IT hubs and healthcare groups.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>

{/* Top Highlights */}

        <MaxWidthWrapper>
              <div className="max-w-400 text-center items-center justify-center lg:flex flex-row">
                <div className="my-6 p-4 sm:text-center sm:justify-center">
                  <div>
                  <h3 className="font-thin lg:text-7xl md:text-6xl text-5xl lg:text-right my-4">100%</h3>
                  <p className="lg:text-right font-bold">FTE Resources</p>
                  <hr className="my-6"></hr>
                  </div>
                  <div>
                  <h3 className="font-thin lg:text-7xl md:text-6xl text-5xl lg:text-right my-4">+6H</h3>
                  <p className="lg:text-right font-bold">Overlapped Timezone</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center px-4">
                <Image
                  src="/webimgs/talent/talent5.png"
                  alt="About Pic"
                  width="500"
                  height={300}
                  objectFit="cover"
                />
                </div>
                
                <div className="my-6 p-4">
                  <div>
                  <h3 className="font-thin lg:text-7xl text-5xl lg:text-left my-4">1.5+</h3>
                  <p className="font-bold lg:text-left">Industry YoE</p>
                  <hr className="my-6"></hr>
                  </div>
                  <div>
                  <h3 className="font-thin lg:text-7xl text-5xl lg:text-left my-4">^12</h3>
                  <p className="font-bold lg:text-left">Category Experts</p>
                  </div>
                </div>
              </div>
        </MaxWidthWrapper>

<div className="bg-gray-700 text-white flex flex-col items-center justify-center sm:flex-row">                   
     <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row px-8 items-center justify-evenly">
      <div className="p-4 cursor-default transition-transform duration-300 rounded-sm shadow-md hover:scale-110 hover:bg-gray-900">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-9 w-9 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
            </svg>
          </div>
          <p className="pt-2 font-bold">Verified Resources</p>
          </div>
      
          <div className="p-4 cursor-default transition-transform duration-300 rounded-sm shadow-md hover:scale-110 hover:bg-gray-900">  
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-9 w-9 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
          </div>
          <p className="pt-2 font-bold">Global Inclusivity</p>
          </div>
          <div className="p-4 cursor-default transition-transform duration-300 rounded-sm shadow-md hover:scale-110 hover:bg-gray-900">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-9 w-9 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
          </div>
          <p className="pt-2 font-bold">95% Attrition Rate</p>
        </div>
        <div className="p-4 cursor-default transition-transform duration-300 rounded-sm shadow-md hover:scale-110 hover:bg-gray-900">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="h-9 w-9 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <p className="pt-2 font-bold">Work Security</p>
          </div>
        </div>
</MaxWidthWrapper>
    </div>

<TalentGrid/>

{/* Talent Propositions */}

<MaxWidthWrapper>
  <div id="careers" className="max-w-screen mx-auto m-4 md:py-12 flex flex-col lg:flex-row lg:flex">
    <div className="w-full lg:w-2/3 p-12 flex items-center justify-center">
      <div>
        <h1 className="font-bold lg:text-3xl md:text-2xl text-xl sm:text-lg">Global Workforce</h1>
        <p className="py-4">Our core philosophy is people over process. This is rooted in our culture making it instrumental to our success. It has helped us attract and retain exceptional colleagues, making work here much satisfying.</p>
        <Button variant="outline" className="my-4" size="default">Get Started &#10132;</Button>
      </div>
    </div>
    <div className="w-6 shadow-lg bg-blue-500"></div>
        {/* Background image content */} 
        <div className="w-full lg:w-1/3 lg:h-auto">
      <div className="h-80 lg:h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          backgroundSize: "cover", 
          backgroundPosition: "center 80%" }}>
      </div>
    </div>
  </div>
</MaxWidthWrapper>

<MaxWidthWrapper>
  <div className="max-w-screen mx-auto m-4 md:py-12 flex flex-col lg:flex-row lg:flex">
    <div className="w-full lg:w-1/3 lg:h-auto">
      {/* Background image content */} 
      <div className="h-80 lg:h-full bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1569617084133-26942bb441f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover", 
        backgroundPosition: "center 80%" }}>
      </div>
    </div>
    <div className="w-6 shadow-lg bg-blue-500"></div>
    <div className="w-full lg:w-2/3 p-12 flex items-center justify-center">
      <div>
        <h1 className="font-bold lg:text-3xl md:text-2xl text-xl sm:text-lg">Freedom and Equality</h1>
        <p className="py-4">People share equal responsibility when they have the courage to face what is next. We build their tomorrow alongside our businesses, ensuring mutual respect for both clients and employees.</p>
        <Button variant="outline" className="my-4" size="default">Get Started &#10132;</Button>
      </div>
    </div>
  </div>
</MaxWidthWrapper>

<Workwithus/>


        </>
    );
};

export default Talent;