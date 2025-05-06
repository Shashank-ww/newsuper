import Image from "next/image";

// 1. Brand Transformation Case Study
export const brandTransformationCaseStudy = () => (
    <div className="case-study py-20 space-y-4">
      <h2 className="text-3xl font-bold">Brand Transformation</h2>
      <p><strong>How We Helped Revamp a Leading Retail Brand’s Identity</strong></p>
      <p>
        In a competitive retail industry, maintaining a fresh and dynamic brand image is essential to staying relevant and engaging customers. One of our clients, a well-established retail brand, faced challenges with outdated brand visuals and an unclear market position.
      </p>
      <h3 className="text-xl font-semibold">Our Approach:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li><strong>Brand Audit & Research:</strong> In-depth audit of the brand’s current identity, market positioning, and customer perception.</li>
        <li><strong>Creative Redesign:</strong> Crafted a bold, modern visual identity with a refreshed logo, color scheme, and typography.</li>
        <li><strong>Brand Guidelines & Rollout:</strong> Developed comprehensive brand guidelines and managed a smooth rollout.</li>
      </ul>
      {/* Collage Image */}
      <div className="my-12">
        <Image 
          src="/webimgs/services/casestudy/brandboard.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
      </div>
      <h3 className="text-xl font-semibold">Results:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li>40% increase in brand engagement across digital platforms.</li>
        <li>Positive media coverage in industry publications.</li>
        <li>Refreshed public image aligning with future brand direction.</li>
      </ul>
    </div>
  );
  
  
  // 2. Creative Design Case Study
  export const creativeDesignCaseStudy = () => (
    <div className="case-study py-20 space-y-4">
      <h2 className="text-3xl font-bold">Creative Design</h2>
      <p><strong>How We Helped a Tech Startup Design Its User-Centric Product Interface</strong></p>
      <p>
        A growing tech startup faced difficulties with user adoption of its platform. The product had powerful features but suffered from a cluttered, unintuitive interface that made it difficult for users to navigate.
      </p>
      <h3>Our Approach:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li><strong>User Research & Personas:</strong> Conducted user interviews and created personas to understand user needs.</li>
        <li><strong>UX/UI Overhaul:</strong> Redesigned the platform with a clean, minimalist interface to improve usability.</li>
        <li><strong>Responsive Design:</strong> Ensured a seamless experience across all devices with fluid interactions.</li>
      </ul>
        {/* Collage Image */}
        <div className="my-12 relative">
        <Image 
          src="/webimgs/services/casestudy/deck1.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
                <Image 
          src="/webimgs/services/casestudy/deck2.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
                <Image 
          src="/webimgs/services/casestudy/deck3.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
                <Image 
          src="/webimgs/services/casestudy/deck4.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
                <Image 
          src="/webimgs/services/casestudy/deck5.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
      </div>
      <h3>Results:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li>Increased user adoption by 50% within three months.</li>
        <li>Improved user satisfaction by 30% based on surveys.</li>
        <li>Elevated customer retention with an improved user experience.</li>
      </ul>
    </div>
  );
  
  // 3. Media Production Case Study
  export const mediaProductionCaseStudy = () => (
    <div className="case-study py-20 space-y-4">
      <h2 className="text-3xl font-bold">Media Production</h2>
      <p><strong>How We Helped a Global Brand Elevate Their Digital Presence with Engaging Video Content</strong></p>
      <p>
        A global consumer brand wanted to enhance its online presence by creating impactful video content for digital marketing campaigns. Their goal was to create a stronger emotional connection with their audience and promote product launches effectively.
      </p>
      <h3>Our Approach:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li><strong>Storytelling Strategy:</strong> Crafted compelling narratives that resonated with the audience emotionally.</li>
        <li><strong>Full-Service Production:</strong> Handled everything from scripting and filming to post-production.</li>
        <li><strong>Social Media Optimization:</strong> Optimized videos for different platforms to maximize reach and engagement.</li>
      </ul>
        {/* Collage Image */}
        <div className="my-12">
        <Image 
          src="/webimgs/services/casestudy/1.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
                <Image 
          src="/webimgs/services/casestudy/3.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
                <Image 
          src="/webimgs/services/casestudy/7.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
                <Image 
          src="/webimgs/services/casestudy/8.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
      </div>
      <h3>Results:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li>60% increase in social media engagement.</li>
        <li>Over 3 million views in the first month of the video release.</li>
        <li>Boosted product sales with high-impact video ads.</li>
      </ul>
    </div>
  );
  
  // 4. Strategy Consulting Case Study
  export const strategyConsultingCaseStudy = () => (
    <div className="case-study py-20 space-y-4">
      <h2 className="text-3xl font-bold">Strategy Consulting</h2>
      <p><strong>How We Helped a Health-Tech Company Streamline Their Operations and Expand Market Reach</strong></p>
      <p>
        A rapidly expanding health-tech company was struggling with operational inefficiencies and lacked a clear growth strategy. They needed to optimize their processes and identify new markets for expansion.
      </p>
      <h3>Our Approach:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li><strong>Business Diagnosis:</strong> Analyzed sales, customer service, and marketing processes to identify key issues.</li>
        <li><strong>Strategic Roadmap:</strong> Developed a tailored strategy to improve efficiency and enter new markets.</li>
        <li><strong>Implementation Support:</strong> Worked closely with leadership to implement the strategy and monitor progress.</li>
      </ul>
        {/* Collage Image */}
        <div className="my-12">
        <Image 
          src="/webimgs/services/casestudy/strat.png"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
      </div>
      <h3>Results:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li>Reduced operational costs by 35%.</li>
        <li>Successfully entered two new markets, increasing revenue by 25%.</li>
        <li>Created a more agile business model for sustainable growth.</li>
      </ul>
    </div>
  );
  
  // 5. Development Ops Case Study
  export const developmentOpsCaseStudy = () => (
    <div className="case-study py-20 space-y-4">
      <h2 className="text-3xl font-bold">Development Ops</h2>
      <p><strong>How We Helped an E-Commerce Platform Scale Their Infrastructure to Handle Increased Traffic</strong></p>
      <p>
        A rapidly growing e-commerce platform faced performance issues during peak traffic periods, leading to slow page load times and lost sales. They needed a scalable infrastructure to handle high traffic while maintaining optimal performance.
      </p>
      <h3>Our Approach:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li><strong>Infrastructure Assessment:</strong> Identified bottlenecks and scalability issues in their infrastructure.</li>
        <li><strong>Scalable Architecture Design:</strong> Designed a cloud-based solution using a microservices architecture for horizontal scaling.</li>
        <li><strong>DevOps Automation:</strong> Implemented CI/CD pipelines to automate deployments and improve release reliability.</li>
      </ul>
        {/* Collage Image */}
        <div className="my-12">
        <Image 
          src="/webimgs/services/casestudy/landing.jpg"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
        />
      </div>
      <h3>Results:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li>99.9% uptime during high-traffic events.</li>
        <li>50% improvement in page load speed.</li>
        <li>Seamless user experience, leading to a 20% increase in conversions.</li>
      </ul>
    </div>
  );
  
  // 6. Engineering R&D Case Study
  export const engineeringRAndDCaseStudy = () => (
    <div className="case-study py-20 space-y-4">
      <h2 className="text-3xl font-bold">Engineering R&D</h2>
      <p><strong>How We Helped a Manufacturing Company Improve Product Quality with Advanced R&D Solutions</strong></p>
      <p>
        A leading manufacturing company wanted to improve the quality of its products by integrating more advanced technology into their R&D processes. They needed a partner to implement innovative solutions to enhance product performance and reduce production costs.
      </p>
      <h3>Our Approach:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li><strong>R&D Strategy:</strong> Collaborated with the client’s R&D team to identify key areas for improvement and emerging tech solutions.</li>
        <li><strong>Prototype Development:</strong> Designed and developed prototypes using cutting-edge technologies like AI for testing.</li>
        <li><strong>Manufacturing Process Enhancement:</strong> Integrated data analytics to monitor product quality in real-time.</li>
      </ul>
        {/* Collage Image */}
        <div className="my-12">
        <Image 
          src="/webimgs/services/casestudy/rnd-engineering-1.jpg"
          width={1200}
          height={2048} 
          alt="Brand Transformation Collage" 
          className="w-full h-auto my-12 rounded-lg shadow-lg"
          unoptimized={true}
        />
      </div>
      <h3>Results:</h3>
      <ul className="list-disc pl-12 space-y-2">
        <li>15% reduction in production costs through process optimization.</li>
        <li>25% improvement in product durability.</li>
        <li>Successful integration of AI-driven testing protocols, accelerating the R&D cycle.</li>
      </ul>
    </div>
  );
  