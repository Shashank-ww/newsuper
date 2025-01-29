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

const Digital = () => {
  return (
    <main className="relative flex flex-col min-h-screen mx-auto max-w-screen-lg items-center justify-center">
      {/* Meta Tags */}
      <Head>
        <title>Digital Transformation Services - Superstackstudios</title>
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
          content="Digital Transformation Services - Superstackstudios"
        />
        <meta
          name="twitter:description"
          content="Superstackstudios offers cutting-edge digital transformation services powered by AI and innovative technology. Transform your digital media with our expertise and drive business growth."
        />
        <meta name="twitter:image" content="/webimgs/services/digital.jpg" />
      </Head>

      <MaxWidthWrapper>
        <div className="py-24 lg:py-16 leading-7 mt-36">
          <h1 className="font-bold mb-6 lg:text-5xl md:text-4xl text-3xl tracking-tight">
            Revive your media presence
          </h1>
          <p>
            In today&apos;s rapidly evolving digital landscape, staying
            competitive requires more than just a strong online presence. It
            demands a strategic approach to digital transformation that
            leverages the latest technologies and innovative solutions.
          </p>
          <p>
            At Superstackstudios, we understand the challenges businesses face
            in adapting to the digital age. That is why we offer cutting-edge
            digital transformation services designed to help you navigate this
            ever-changing landscape with confidence.
          </p>
          <div
            className="w-auto h-[500px] shadow-inner bg-cover bg-center relative group m-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/webimgs/services/services-3.jpg)`,
              backgroundColor: "lightgray",
            }}
          ></div>
          <p>
            Our team of experts specializes in harnessing the power of AI,
            machine learning, and data analytics to transform your digital media
            and drive business growth. Whether you are looking to optimize your
            website, enhance your social media presence, or implement advanced
            digital marketing strategies, we have the expertise and resources to
            help you succeed.
          </p>
        </div>

        {/* Navigation Links for Anchor Jumping */}
        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <a href="#brand-transformation" className="flex items-center text-blue-500 hover:underline">
                <Briefcase className="w-5 h-5 mr-2" />
                Brand Transformation
              </a>
            </li>
            <li>
              <a href="#creative-design" className="flex items-center text-blue-500 hover:underline">
                <Palette className="w-5 h-5 mr-2" />
                Creative Design
              </a>
            </li>
            <li>
              <a href="#media-production" className="flex items-center text-blue-500 hover:underline">
                <Film className="w-5 h-5 mr-2" />
                Media Production
              </a>
            </li>
            <li>
              <a href="#strategy-consulting" className="flex items-center text-blue-500 hover:underline">
                <Lightbulb className="w-5 h-5 mr-2" />
                Strategy Consulting
              </a>
            </li>
            <li>
              <a href="#development-ops" className="flex items-center text-blue-500 hover:underline">
                <Code className="w-5 h-5 mr-2" />
                Development Ops
              </a>
            </li>
            <li>
              <a href="#engineering-rnd" className="flex items-center text-blue-500 hover:underline">
                <Wrench className="w-5 h-5 mr-2" />
                Engineering R&D
              </a>
            </li>
          </ul>
        </nav>

        {/* Service Sections with Anchors */}
        <div className="space-y-10">
          <section id="brand-transformation">
            {brandTransformationCaseStudy()}
          </section>
          <section id="creative-design">{creativeDesignCaseStudy()}</section>
          <section id="media-production">{mediaProductionCaseStudy()}</section>
          <section id="strategy-consulting">
            {strategyConsultingCaseStudy()}
          </section>
          <section id="development-ops">{developmentOpsCaseStudy()}</section>
          <section id="engineering-rnd">{engineeringRAndDCaseStudy()}</section>
        </div>

        {/* Why Choose Us */}
        <div className="my-16">
          <h2 className="font-bold text-2xl mt-8 mb-4">
            Why Choose Superstackstudios for Digital Transformation?
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
            At Superstackstudios, we follow a comprehensive digital
            transformation process to ensure success:
          </p>
          <p className="mt-4">
            Our process involves in-depth analysis, strategic planning,
            implementation, and ongoing monitoring and optimization to drive
            continuous improvement and maximize results.
          </p>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Digital;
