"use client";

import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { workItems, WorkItem } from "@/data/workData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const WorkPreview = () => {
  const previewItems: WorkItem[] = workItems.slice(0, 12); // show 6 in preview

  return (
    <>
    <MaxWidthWrapper>
      <div id="core" className="py-24 sm:py-16 flex flex-col mx-auto items-center justify-center gap-4">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-base font-bold leading-7 text-blue-600">EXPLORE OUR WORK</h2>
          <p className="mt-2 lg:text-5xl md:text-4xl text-3xl font-bold tracking-tight text-gray-900">
            Marketing that works. Work that wins.
          </p>
          <p className="mt-6 text-gray-700 mx-auto">
          We help brands tell their story through smart media management, innovative technology, and high-quality content. Our tailored solutions ensure seamless execution and measurable growth for your business.
          </p>
        </div>
      </div>
  </MaxWidthWrapper>
  
    <MaxWidthWrapper>
      <section className="py-12">

        {/* Carousel Wrapper */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {previewItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative overflow-hidden rounded-2xl group shadow-md hover:shadow-lg transition">
                  <Image
                    src={item.image}
                    alt={item.description}
                    width={item.width}
                    height={item.height}
                    unoptimized={item.unoptimized}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition">
                    <p className="text-white text-sm text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="text-center mt-10">
              <Link href='/explore#work'>
              <Button variant={'default'} className='mt-12 hover:bg-blue-600'>
                See All work
              </Button>
              </Link>
        </div>
      </section>
    </MaxWidthWrapper>
    </>
  );
};

export default WorkPreview;
