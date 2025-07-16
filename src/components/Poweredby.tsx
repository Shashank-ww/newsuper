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
    <div className="w-full overflow-hidden py-8 h-full">
      <h2 className="text-center text-sm font-bold text-blue-500 mb-6">
        &mdash;&mdash; POWERED BY &mdash;&mdash;
      </h2>

      <div className="relative w-full z-0">

        <div className="overflow-x-auto whitespace-nowrap md:overflow-hidden">
          <div className="flex space-x-12 md:animate-marquee md:group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={64}
                className="transition-transform transform grayscale hover:grayscale-0 active:scale-95 inline-block"
              />
            ))}
          </div>
        </div>

        {/* Fade overlays for large screens only */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 
                        bg-gradient-to-r from-white to-transparent hidden md:block" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 
                        bg-gradient-to-l from-white to-transparent hidden md:block" />
      </div>
    </div>
  );
}

export default Poweredby;
