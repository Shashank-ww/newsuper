"use client";

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Image from 'next/image';
import { workItems, WorkItem } from "@/data/workData";

const Work = () => {
  const [likes, setLikes] = useState<number[]>([]);
  const [totalLikes, setTotalLikes] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  // Load likes from localStorage on mount or initialize
  useEffect(() => {
    const stored = localStorage.getItem("workLikes");
    if (stored) {
      const parsed = JSON.parse(stored);
      setLikes(parsed);
      setTotalLikes(parsed.reduce((sum: number, val: number) => sum + val, 0));
    } else {
      const initial = workItems.map(item => item.likes);
      setLikes(initial);
      setTotalLikes(initial.reduce((sum, val) => sum + val, 0));
    }
    setMounted(true); 
  }, []);

    if (!mounted) {
    // Prevents server-client mismatch or hydration error
    return null; 
  }

  // Handle like click
  const handleLike = (index: number) => {
    const updated = [...likes];
    updated[index]++;
    setLikes(updated);
    setTotalLikes(updated.reduce((sum, val) => sum + val, 0));
    localStorage.setItem("workLikes", JSON.stringify(updated));
  };

const triggerConfetti = () => {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = ["🎉", "✨", "💥", "🌟", "💫", "❤️", "💛"][Math.floor(Math.random() * 7)];

    confetti.className = `fixed z-50 text-xl animate-float pointer-events-none`;

    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vh`;
    confetti.style.fontSize = `${Math.random() * 24 + 16}px`;
    confetti.style.animationDuration = `${1 + Math.random()}s`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1500);
  }
};



// const Work = () => {
//     const [likes, setLikes] = useState(workItems.map(item => item.likes));

//     const handleLike = (index: number) => {
//         const newLikes = [...likes];
//         newLikes[index]++;
//         setLikes(newLikes);
//     };

    const getSpanClass = (width: number, height: number) => {
        const largeWidth = 800; // Considered large width for horizontal banners
        const largeHeight = 600; // Considered large height for vertical images
    
        if (width > largeWidth && height < largeHeight) {
            // Wider banners take up 3 columns
            return 'col-span-3';
        } else if (height > largeHeight && width < largeWidth) {
            // Taller images take up 2 rows
            return 'row-span-2';
        } else if (width > largeWidth && height > largeHeight) {
            // Large images in both dimensions take up 3 columns and 2 rows
            return 'col-span-3 row-span-2';
        } else {
            // Regular images
            return '';
        }
    };
 
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8">
            <button
            onClick={() => triggerConfetti()}
            className="group border text-black font-semibold py-2 px-6 rounded-full shadow transition-all duration-200 active:scale-95 focus:ring-2 focus:ring-yellow-300 focus:bg-yellow-400 hover:border-yellow-400 hover:shadow-[0_0_10px_2px_rgba(255,255,0,0.6)]">
            {totalLikes}{" "}
            <span className="group-hover:hidden inline">💛 </span>
            <span className="hidden group-hover:inline">❤️ </span>
            Love this!
            </button>

                <a
                href="#"
                onClick={(e) => e.preventDefault()}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:bg-amber-700 hover:text-white font-semibold py-2 px-6 rounded-full border border:ring-amber-200 shadow transition-all duration-200"
                >
                <span className="group-focus:hidden inline">☕ </span>
                <span className="hidden group-focus:inline">🫗 </span>
                Coffee?
                </a>
            </div>

            <div id='work' className="grid grid-cols-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[200px] grid-auto-flow-dense py-16">
                {workItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative overflow-hidden rounded-lg ${getSpanClass(item.width, item.height)} w-full group`}>
                        <a href={item.image} target='_blank' className="block h-full">
                            <Image
                                src={item.image}
                                alt={item.description}
                                width={item.width}
                                height={item.height}
                                unoptimized={item.unoptimized}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-blue-900 bg-opacity-80 flex items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="text-white p-4 text-sm text-muted-foreground">{item.description}</div>
                            </div>
                        </a>
                        <div className="absolute bottom-2 left-2 p-2">
                            <button
                                className="bg-white rounded-full w-12 h-8 border-dotted border-2 border-white text-xs cursor-pointer items-end justify-center transform group-hover:translate-y-0 sm:translate-y-16 duration-100 ease-in-out group-hover:border-yellow-400 group-hover:shadow-[0_0_10px_2px_rgba(255,255,0,0.6)]"
                                onClick=
                                {(e) => {
                                    e.preventDefault();
                                    handleLike(index);
                                    triggerConfetti();
                                }}
                            >
                                &#x1F496;<span>{likes[index]}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
};

export default Work;
