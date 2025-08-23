import Features from "@/components/Features";
import Calltoaction from "@/components/Callaction";
import Faqs from "@/components/Faqs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { servicesData } from "@/lib/servicesData";
import ContactForm from "@/components/ContactForm";

const Services = () => {
    return (
        <main className="relative flex flex-col min-h-screen">
        <div
          className="w-full h-[400px] relative items-start justify-center bg-gradient-to-r from-white to-gray-100 lg:bg-none"
          style={{
            backgroundImage: 'none',
          }}
        >

          <div
            className="hidden lg:block absolute inset-0 bg-cover bg-[center_10%]"
            style={{
              backgroundImage: `url("/webimgs/mastheads/side5.png")`,
            }}
          ></div>

          <MaxWidthWrapper>
            <div className="mx-auto py-20 min-h-[400px] flex flex-col items-start justify-center relative z-10">
              <div className="mx-4 p-2 font-bold text-blue-500 mb-4 md:mr-4 md:mb-0">
                &#129174; FIND YOUR WORK
              </div>
              <h2 className="mx-4 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-light mb-4 md:mr-4 md:mb-0 text-accent-foreground">
                Top-Tier Outsourcing
              </h2>
            </div>
          </MaxWidthWrapper>
        </div>


<Features/>

<MaxWidthWrapper>
    <div className="py-20 flex flex-col items-center justify-center">
      <p className="mx-auto text-sm text-center items-center justify-center font-bold">
        CORE CAPABILITIES
      </p>
      <h2 className="text-gray-900 font-bold tracking-tight mx-auto mb-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
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

  <MaxWidthWrapper>
<div id="contactus" className="col-start-2 col-span-2 p-6">
  <div className="py-10 sm:py-16 flex flex-col mx-auto items-center justify-center gap-4">
        <div className="mx-auto max-w-screen-md text-center">
          <h1 className="mt-2 lg:text-4xl text-3xl font-bold tracking-tight text-gray-900">
          Contact us
          </h1>
          <p className="mt-6 text-gray-700">
          Share a project brief or request a full time resource. Enhance customer experiences, streamline work processes, and facilitate data-driven decision-making.
          </p>
        </div>
      </div>
      <div className="pb-24">
        <ContactForm/>
      </div>
</div>  
</MaxWidthWrapper>

<Faqs/>

<Calltoaction/>

        </main>
    );
};

export default Services;
