import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Stats from "@/components/Stats";
import Investors from "@/components/Investors";
import Callaction from "@/components/Callaction";

const About = () => {
    return (
      <main className="relative flex flex-col min-h-screen">
      {/* Hero section with background image */}
      <div className="w-full h-[90vh] relative" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1562516881-e4936381c3fa')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}>
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-white opacity-50" style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(240, 255, 255, 1), rgba(30, 120, 255, 0))"
        }}></div>

        {/* About Us */}
        <div className="lg:sticky absolute top-64 px-2.5 flex items-center justify-center cursor-default w-full">
        <div className="pb-4 flex flex-col z-1 text-center max-w-4xl mx-auto">
          <p className="underline underline-offset-4 font-bold">ABOUT US</p>
          <h1 className="tracking-tight font-bold py-4 lg:text-6xl md:text-5xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400 hover:from-amber-500 hover:to-yellow-500 transition-colors duration-700">The Supersqad <span className="font-normal">story</span>
          </h1>
          <p className="my-4 text-md text-primary">
            <i>Transformation begins within...</i>
          </p>
          </div>
        </div>
      </div>

            <MaxWidthWrapper>
            <div className=" p-4 relative h-[auto] md:max-w-screen-lg mx-auto -mt-36 py-12 rounded-md text-center bg-white dark:bg-slate-900 items-center justify-center">
            <div className="px-4 mt-4 font-bold text-blue-500 md:mb-0 md:max-w-screen-md items-center justify-center mx-auto">
              OUR MISSION & VISION
            </div>
            <h2 className="px-4 py-2 mb-4 lg:text-4xl md:max-w-screen-md mx-auto md:text-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Brevity, integrity and wit </h2>
            <div className="md:max-w-screen-md items-center justify-center mx-auto text-gray-800">
              <ul> 
                <li className="py-2">We are Supersqad studios, the creative and technology trailblazers of the future.
                  </li>
                <li className="py-2">With over hundreds of projects rescued from the jaws of failure, we are not just rewriting the rules of media production and technology – we are redefining what it means to succeed in the digital realms of life.
                  </li>  
                <li className="py-2">And here&apos;s a kicker – our mission goes way beyond digital; <span className="font-bold"> we are in it to make real-world impact.</span>
                  </li>
                <li className="py-2">With a vision where capitalism isn&apos;t about making profits – but empowering people to make informed decisions.<span className="font-bold"> At Supersqad.com, we&apos;re using the power of media and technology to do just that.</span> 
                  </li>
                <li className="py-2">Join us on our quest of digital frontier. Reach out for consulting or maybe a cup of tea!
                  </li>    
              </ul>
            </div>
            </div>
            </MaxWidthWrapper>


<MaxWidthWrapper>
      <div id="values" className="py-16 sm:py-24 flex flex-col mx-auto items-center justify-center gap-4">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="text-base font-bold leading-7 text-blue-600">OUR VALUES</h2>
          <p className="mt-2 lg:text-4xl text-3xl font-bold tracking-tight text-gray-900">
            We believe in people, process and parity
          </p>
          <p className="mt-6 text-gray-700">
          Our principles ensure meticulous planning, fairness, and strategic alignment of people, driving innovative solutions and fostering an equitable and collaborative environment for all.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 font-medium text-center text-sm text-primary-background items-center rounded-md mt-6">
        <div className="p-4 border border-1 cursor-default rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-100"> Global Outreach</div>
        <div className="p-4 border border-1 cursor-default rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-100"> Agile Management</div>
        <div className="p-4 border border-1 cursor-default rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-100"> Precision Planning</div>
      </div>
      </div>
  </MaxWidthWrapper>

  {/* View Work */}

<MaxWidthWrapper>
      <div className='max-w-screen lg:py-24 sm:py-16 cursor-default'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='w-full mx-auto md:grid-cols-2 space-y-2 px-6'>
          {/* Large image on top row */}
          <div 
            className="w-full h-[200px] shadow-inner bg-cover bg-center p-4"
            style={{ 
            backgroundImage: `url(/webimgs/about/Planet-earth.jpg)`, 
            backgroundColor: 'lightgray',
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
            }}>
            </div>

          {/* Two smaller images on bottom row */}
          <div className="flex flex-row space-x-2">
          <div 
            className="w-1/2 h-[200px] shadow-inner bg-cover bg-center p-4" 
            style={{ 
            backgroundImage: "url('/webimgs/about/about-1.jpg')",
            backgroundPosition: 'center' 
            }}>
            </div>
          <div 
            className="w-1/2 h-[200px] shadow-inner bg-cover bg-top p-4" 
            style={{ 
              backgroundImage: "url('/webimgs/about/about-2.jpg')", 
              backgroundPosition: 'center' 
            }}></div>
        </div>
        <p className="text-xs text-right text-slate-300 hover:underline">Representational Images: <a href="https://unsplash.com/">Unsplash</a></p>
        </div>

      <div className='flex flex-col items-start justify-start text-center md:text-left md:pl-8'>
      <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-7 font-bold tracking-tight pb-6'>Digital solutions, real-world impact</h1>
      <p className="text-md ">
        Our innovative strategies drive growth through creativity and results, crafting impactful marketing strategies and media production that drive real-world change. <br/> <br/> Join us in revolutionizing the future of digital media with impactful solutions, visual storytelling that elevates brand making a meaningful difference.
        </p>     
        <a href="/explore#work"> 
        <button className='bg-slate-500 w-[200px] rounded-md text-white hover:bg-blue-600 font-medium my-12 mx-auto md:mx-0 py-3'>
        View Work
        </button>
        </a>
    </div>
  </div>
</div>
</MaxWidthWrapper>

<div className="bg-zinc-800">
  <MaxWidthWrapper>
  <div className="mx-auto max-w-screen-lg px-6 lg:px-8">
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 py-16 sm:py-24">
  <div className="lg:pl-8 lg:pt-4">
        <div className="lg:max-w-lg">
          <h2 className="text-base font-bold leading-7 text-blue-400">WHO WE ARE</h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-foreground sm:text-3xl">Partner in marketing solutions to maximize outreach</h1>
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
    <div className="w-full lg:h-auto bg-cover bg-center rounded-lg" 
      style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1634838872223-92ca3d20a927')", 
      backgroundSize: "cover", 
      backgroundPosition: "center" 
      }}>
      </div>
    </div>
</div>
  </MaxWidthWrapper>
</div>

<Stats/>



<Investors/>

{/* Call to action */}

<Callaction/>

        </main>
    );
};

export default About;
