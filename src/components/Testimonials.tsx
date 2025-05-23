// Testimonials.tsx

"use client";

import { useState } from 'react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Testimonialsdb from '@/data/Testimonialsdb';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {Array(5).fill(0).map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? "text-yellow-500" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.465 10.9 0 6.36l6.23-.938L10 0l3.77 5.422L20 6.36l-5.465 4.54 1.343 7.19L10 15z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) >= Testimonialsdb.length ? 0 : prevIndex + 2);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Testimonialsdb.length - 2 : prevIndex - 2));
  };

  return (
      <MaxWidthWrapper>
    <div className="py-24 sm:py-16 mx-auto text-center">
        <h2 className="font-bold mx-auto mt-2 lg:text-5xl md:text-4xl text-3xl tracking-tight text-gray-900">What Our Clients Say</h2>
        <div className="w-full flex items-center justify-center mb-12 px-4">
          <p className="max-w-prose mt-6 text-gray-700">
            Our clients value our innovative solutions, strategic planning, and responsive support. Their feedback highlights our dedication to top-quality, timely delivery, and consistent results.
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {Testimonialsdb.map((Testimonial, index) => (
                <div key={index} className="inline-block w-full md:w-1/2 p-4">
                  <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <div className="flex items-center mb-4">
                      <Image className="h-24 w-24 rounded-full mr-4" 
                      src={Testimonial.imagePath} 
                      width={100} 
                      height={100} 
                      alt={`Profile of ${Testimonial.name}`}
                      onError={(e) => e.currentTarget.src = '/webimgs/avatars/profiles/default.png'} />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{Testimonial.name}</h3>
                        <p className='text-gray-400 text-xs'>{Testimonial.title}</p>
                        <div className="flex items-center mt-2">
                          <StarRating rating={Testimonial.rating} />
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 text-center overflow-hidden overflow-ellipsis whitespace-pre-line">&ldquo;{Testimonial.text}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between">
            <button onClick={prevSlide} className="p-2 bg-gray-400 text-white rounded-full w-10 hover:bg-gray-700">
              &#10094;
            </button>
            <button onClick={nextSlide} className="p-2 bg-gray-400 text-white rounded-full w-10 hover:bg-gray-700">
              &#10095;
            </button>
          </div>
        </div>
    </div>
      </MaxWidthWrapper>
  );
};

export default Testimonials;
