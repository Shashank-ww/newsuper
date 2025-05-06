"use client"

import Head from "next/head";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Briefcase, Palette, Film, Lightbulb, Code, Wrench } from "lucide-react"
import {
  brandTransformationCaseStudy,
  creativeDesignCaseStudy,
  mediaProductionCaseStudy,
  strategyConsultingCaseStudy,
  developmentOpsCaseStudy,
  engineeringRAndDCaseStudy,
} from "@/data/Casestudy";
import Image from "next/image";

const Digital = () => {
  return (
    <main className="relative flex flex-col min-h-screen mx-auto max-w-screen-lg items-center justify-center">
      {/* Meta Tags */}
      <Head>
        <title>Digital Transformation Services - Supersqad studios</title>
        <meta
          name="description"
          content="Superstackstudios offers cutting-edge digital transformation services powered by AI and innovative technology. Transform your digital media with our expertise and drive business growth."
        />
        <meta
          name="keywords"
          content="digital transformation, AI, technology, digital media, business growth"
        />
        <meta name="author" content="Superstackstudios" />
        <meta
          property="og:title"
          content="Digital Transformation Services - Superstackstudios"
        />
        <meta
          property="og:description"
          content="Superstackstudios offers cutting-edge digital transformation services powered by AI and innovative technology. Transform your digital media with our expertise and drive business growth."
        />
        <meta property="og:image" content="/webimgs/services/digital.jpg" />
        <meta
          property="og:url"
          content="https://www.superstackstudios.com/services/digital"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Transformation Services - Supersqad studios"
        />
        <meta
          name="twitter:description"
          content="Supersqad studios offers cutting-edge digital transformation services powered by AI and innovative technology. Transform your digital media with our expertise and drive business growth."
        />
        <meta name="twitter:image" content="/webimgs/services/digital.jpg" />
      </Head>

      <MaxWidthWrapper>
      <div className="flex flex-col lg:flex-row gap-8">
    {/* Sticky Sidebar */}
    <nav className="lg:w-1/4 sticky top-24 self-start hidden lg:block py-16">
      <ul className="space-y-4 text-sm">
        <li>
          <a href="#brand-transformation" className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 
             text-sm font-medium text-gray-700 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:text-blue-700">
            <Briefcase className="w-5 h-5 mr-2" />
            Brand Transformation
          </a>
        </li>
        <li>
          <a href="#creative-design" className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 
             text-sm font-medium text-gray-700 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:text-blue-700">
            <Palette className="w-5 h-5 mr-2" />
            Creative Design
          </a>
        </li>
        <li>
          <a href="#media-production" onClick={(e) => {e.preventDefault; e.currentTarget.focus();}} className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 
             text-sm font-medium text-gray-700 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:text-blue-700">
            <Film className="w-5 h-5 mr-2" />
            Media Production
          </a>
        </li>
        <li>
          <a href="#strategy-consulting" className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 
             text-sm font-medium text-gray-700 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:text-blue-700">
            <Lightbulb className="w-5 h-5 mr-2" />
            Strategy Consulting
          </a>
        </li>
        <li>
          <a href="#development-ops" className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 
             text-sm font-medium text-gray-700 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:text-blue-700">
            <Code className="w-5 h-5 mr-2" />
            Development Ops
          </a>
        </li>
        <li>
          <a href="#engineering-rnd" className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 
             text-sm font-medium text-gray-700 hover:bg-blue-100 focus:bg-blue-200 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:text-blue-700">
            <Wrench className="w-5 h-5 mr-2" />
            Engineering R&D
          </a>
        </li>
      </ul>
    </nav>

    {/* Main Content */}
    <div className="lg:w-3/4 w-full">
        <div className="py-24 lg:py-16 leading-7 mt-24">
          <h1 className="font-bold mb-6 lg:text-5xl md:text-4xl text-3xl leading-7 tracking-normal">
            Revive your media presence with Supersqad
          </h1>
          <p>
            In today&apos;s rapidly evolving digital landscape, staying competitive requires more than just a strong online presence. It demands a strategic approach to digital transformation that leverages the latest technologies and innovative solutions.
          </p>
          <Image 
          src="/webimgs/services/casestudy/mobile.png"
          width={1000}
          height={1400} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto"
        />
          <p>
            At Supersqad studios, we understand the challenges businesses face in adapting to the digital age. That is why we offer cutting-edge digital transformation services designed to help you navigate this ever-changing landscape with confidence.
          </p>
          <div
            className="w-auto h-[500px] shadow-inner bg-cover bg-center relative group my-6 rounded-md"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/webimgs/services/services-3.jpg)`,
              backgroundColor: "lightgray",
            }}
          ></div>
          <p>
            Our team of experts specializes in harnessing the power of AI, machine learning, and data analytics to transform your digital media and drive business growth. Whether you are looking to optimize your website, enhance your social media presence, or implement advanced digital marketing strategies, we have the expertise and resources to help you succeed.
          </p>
        </div>

        <hr/>

        {/* Service Sections with Anchors */}
        <div className="space-y-10">
          <section id="brand-transformation">
            {brandTransformationCaseStudy()}
          </section>
          <section id="creative-design">{creativeDesignCaseStudy()}</section>
          <section id="media-production">{mediaProductionCaseStudy()}</section>
          <section id="strategy-consulting">{strategyConsultingCaseStudy()}</section>
          <section id="development-ops">{developmentOpsCaseStudy()}</section>
          <section id="engineering-rnd">{engineeringRAndDCaseStudy()}</section>
        </div>

        {/* Why Choose Us */}
        <div className="my-16">
          <h2 className="font-bold text-2xl mt-8 mb-4">
            Why Choose Supersqad studios for Digital Transformation?
          </h2>
          <ul className="list-disc ml-6 mb-6">
            <li>Expertise in cutting-edge technology and AI</li>
            <li>Customized solutions tailored to your business needs</li>
            <li>Proven track record of delivering results</li>
            <li>Dedicated team of experienced professionals</li>
            <li>Continuous support and guidance throughout the process</li>
          </ul>
          <h2 className="font-bold text-2xl mb-4">
            Our Digital Transformation Process
          </h2>
          <p>
            At Superstackstudios, we follow a comprehensive digital transformation process to ensure success:
          </p>
          <p className="mt-4">
            Our process involves in-depth analysis, strategic planning, implementation, and ongoing monitoring and optimization to drive continuous improvement and maximize results.
          </p>
        </div>
        </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Digital;
