import React from 'react';
import Image from 'next/image';
import OpenAI from '@/assets/clientlogos/openai.svg';
import Mediafire from '@/assets/clientlogos/mediafire.svg';
import Yahoo from '@/assets/clientlogos/yahoo.svg';
import CloudPanel from '@/assets/clientlogos/cloudpanel.svg';
import Oreilly from '@/assets/clientlogos/oreilly.svg';
import Criteo from '@/assets/clientlogos/criteo.svg';
import DigitalOcean from '@/assets/clientlogos/digitalocean.svg';

const logos = [
  { src: CloudPanel, alt: 'CloudPanel', width: 128 },
  { src: Yahoo, alt: 'Yahoo', width: 96 },
  { src: Criteo, alt: 'Criteo', width: 110 },
  { src: Mediafire, alt: 'Mediafire', width: 144 },
  { src: OpenAI, alt: 'OpenAI', width: 110 },
  { src: DigitalOcean, alt: 'DigitalOcean', width: 110 },
  { src: Oreilly, alt: 'O’Reilly', width: 110 },
];

function Poweredby() {
  return (
    <div className="w-full overflow-hidden py-8">
      <h2 className="text-center text-sm font-bold text-blue-500 mb-6">
        &mdash;&mdash; POWERED BY &mdash;&mdash;
      </h2>

      <div className="relative w-full overflow-hidden z-0 group"> {/* z-0 for container */}

        <div className="flex animate-marquee space-x-12 z-0 relative group-hover:[animation-play-state:paused]"> {/* logos behind overlays */}
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={60}
              className="transition-transform transform grayscale hover:grayscale-0 hover:scale-105"
            />
          ))}
        </div>

        {/* Left fade overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 
                        bg-gradient-to-r from-white to-transparent" />

        {/* Right fade overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 
                        bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}

export default Poweredby;
