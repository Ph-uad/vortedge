// 1. Install required packages
// Run in your terminal:
// npm install gsap

// 2. Create your Hero component (e.g., components/Hero.tsx)
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Brain from "@/components/brain";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!heroRef.current || !missionRef.current) return;

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        endTrigger: missionRef.current,
        end: "center bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false, // Enable markers for debugging
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative">
      <header
        ref={heroRef}
        id="hero"
        className="h-screen w-screen px-[10%] relative bg-center hero-bg"
      >
        <section className="h-full w-full flex flex-col items-center justify-center gap-8">
          {/* <div className="absolute top-0 left-0 w-fit p-4 z-50 bg-background">
            <h3 className="text-5xl lg:text-9xl font-bold text-gray-800 flex items-center gap-0 uppercase border-b-2 border-gray-800 w-full ">
              <span>Vort</span>
              <span className="font-bold text-primary">Edge</span>
            </h3>
          </div> */}
          <div className="flex items-center justify-center relative w-full h-full">
            <section className="pl-4">
              <div className="w-full text-left">
                <h1 className="text-6xl lg:text-9xl text-center mb-2.5">
                  Pioneering Industry 4.0 & AI Innovation
                </h1>

                {/* <Button id="cta">
                  <a href="#about" className="">
                    Get Started
                  </a>
                </Button> */}
              </div>
              <div className="w-11/12 m-auto">
                <Brain />
              </div>
            </section>
          </div>

          <ul className="absolute w-full bottom-10 bg-white bg-clip-text text-transparent mix-blend-difference font-bold list-none flex flex-wrap gap-0.5 items-center justify-center lg:gap-6 text-sm md:text-xl mt-96">
            <li>
              <span className="text-center max-w-2xl">
                <span className="font-bold">
                  <em>4.0</em>
                  <span className="text-sm">th </span>
                </span>
                <span>industrial revolution</span>
              </span>
            </li>
            {"|"}
            <li>
              <span className="">Smart manufacturing</span>
            </li>
            {"|"}
            <li>
              <span className="">Data-driven operations</span>
            </li>
            {"|"}
            <li>
              <span className="">Cyber physical systems</span>
            </li>
          </ul>
        </section>
      </header>
      <section
        ref={missionRef}
        className="h-[80vh] px-8 py-16 text-center relative"
      >
        <div className="flex flex-col items-center justify-center gap-8 p-8 lg:flex-row">
          <header className="flex-1/3">
            <h2 className="text-5xl font-bold">About Us</h2>
            <Image
              src="/images/sky-bg.webp"
              alt="About Us tile"
              width={200}
              height={100}
              className="mx-auto my-4"
            />
          </header>
          <article className="flex-2/5">
            <p className="text-xl mt-2.5">
              <span className="font-semibold">
                Vort<span className="text-primary">Edge</span>
              </span>{" "}
              is a Cloud-AI native technology company specializing in smart
              manufacturing, and industrial automation. We leverage AI and cloud
              to edge technology to optimize real-time data processing—enabling
              healthcare, robotics, and next-gen factories to operate faster,
              smarter, and more efficiently.
            </p>
            <p className="text-xl mt-2.5">
              We are also committed to STEAM based youth empowerment, equipping
              the next generation with cutting-edge skills to drive
              semiconductor advancements and shape the future of technology.
            </p>
          </article>

          {/* <Image
                     src="/images/about.svg"
                     alt="About Us"
                     width={600}
                     height={400}
                     className="h-[50vh] object-cover lg:w-1/2"
                   /> */}
        </div>
        <div
          id="missom"
          className=" mt-20 border-t-2 border-gray-200 max-w-1/5 lg:ml-auto"
        >
          <section className="">
            <article>
              <h2 className="text-5xl font-bold text-right p-8">Our Mission</h2>
              <p className="px-4 text-xl">
                To make AI products scalabale, accessible, and affordable
                driving the future of intelligent industries globally.
              </p>
            </article>
            {/* <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mx-auto my-8"
          /> */}
          </section>
        </div>
        Ÿ
      </section>
    </main>
  );
}
