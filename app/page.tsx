import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header id="hero" className="h-screen w-screen relative ">
        <section className="h-full w-full flex flex-col items-center justify-center gap-8">
          <div className="absolute top-0 left-0 w-fit p-4 z-50 bg-background">
            <h3 className="text-5xl lg:text-9xl font-bold text-gray-800 flex items-center gap-0 uppercase border-b-2 border-gray-800 w-full ">
              <span>Vort</span>
              <span className="font-bold text-primary">Edge</span>
            </h3>
          </div>
          <div className="flex items-center justify-center relative w-full h-full">
            <Image
              src="/images/ski.svg"
              alt="Hero"
              width={1000}
              height={1000}
              className="hidden lg:block object-cover lg:flex-1/3 h-full relative order-12"
              fetchPriority="high"
            />
            <section className="lg:flex-1/2 h-4/5 flex items-center justify-start text-center pl-4">
              <div className="w-3/4 text-left">
                <h1 className="text-7xl ">
                  Pioneering Industry 4.0 & AI Innovation
                </h1>

                <Button id="cta">
                  <a href="#about" className="">
                    Get Started
                  </a>
                </Button>
              </div>
            </section>
          </div>

          <ul className="absolute w-full -bottom-10 bg-white bg-clip-text text-transparent mix-blend-difference font-bold list-none flex flex-wrap gap-0.5 items-center justify-center lg:gap-6 text-sm md:text-xl mt-96">
            <li>
              <span className="text-center max-w-2xl">
                <span className="font-bold underline">
                  <em>4.0</em>
                </span>{" "}
                <span> the fourth industrial revolution</span>
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

      <div id="about" className=" mt-20 border-t-2 border-gray-200">
        <section>
          <div className="flex flex-col items-center justify-center gap-8 ">
            <article className="max-w-2xl text-center p-8">
              <h2 className="text-5xl font-bold">About Us</h2>
              <p className="">
                VortEdge is a Cloud-AI native technology company specializing in
                smart manufacturing, and industrial automation. We leverage AI
                and cloud to edge technology to optimize real-time data
                processing—enabling healthcare, robotics, and next-gen factories
                to operate faster, smarter, and more efficiently.
              </p>
              <p>
                We are also committed to STEAM based youth empowerment,
                equipping the next generation with cutting-edge skills to drive
                semiconductor advancements and shape the future of technology.
              </p>
            </article>
            <Image
              src="/images/about.svg"
              alt="About Us"
              width={600}
              height={400}
              className="h-[50vh] object-cover lg:w-1/2"
            />
          </div>
        </section>
      </div>
      <div id="missom" className=" mt-20 border-t-2 border-gray-200">
        <section className="">
          <article>
            <h2 className="text-5xl font-bold text-center p-8">Our Mission</h2>
            <p className="text-center px-4">
              To make AI products scalabale, accessible, and affordable driving
              the future of intelligent industries globally.
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

      <div
        id="solutions"
        className="overflow-x-hidden w-screen  mt-20 border-t-2 border-gray-200"
      >
        <section className="flex flex-col lg:flex-row gap-2" id="">
          <div className="lg:p-16">
            <div className=" bg-gray-950 lg:w-1/2 my-6 p-8">
              <h2 className=" text-5xl text-white text">Why we exist?</h2>
              <article className=" flex flex-col items-start gap-4 text-white">
                <section className="workforce-development">
                  <h3>
                    STEAM UP: Closing the AI &amp; Semiconductor Skills Gap
                  </h3>
                  <p>
                    As technology races ahead, the global demand for AI and
                    semiconductor talent is surging—and our workforce is
                    struggling to keep pace. <em>STEAM UP</em> is a targeted
                    workforce development initiative created to bridge this
                    critical skills shortage in the U.S. and beyond.
                  </p>
                  <p>
                    Now is the moment for upskilling and reskilling. Recent data
                    shows a remarkable 191% surge in AI apprenticeships,
                    reflecting both strong interest and industry commitment. Yet
                    62% of these programs are clustered in just 10 states, and
                    overall completion rates remain below what's needed to power
                    tomorrow's innovations.
                  </p>
                  <p>
                    <em>STEAM UP</em> offers a more inclusive vision: a
                    nationwide network of training partners, employer-led
                    cohorts, and community hubs. By expanding access and
                    fostering learning communities, we ensure every region can
                    cultivate the talent that will drive the next wave of
                    technological breakthroughs.
                  </p>
                  <p>
                    Join us in shaping a future where every aspiring AI or
                    semiconductor professional has the support, curriculum, and
                    mentorship needed to succeed. Together, we can unlock the
                    full potential of our workforce—and fuel the innovations of
                    tomorrow.
                  </p>
                </section>
              </article>

              <div className="marquee  mt-26">
                <ul className="list-none flex gap-32 flex-no-wrap text-5xl bg-white bg-clip-text text-transparent marquee--scroll ">
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      People
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Process
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Technology
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Innovation
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Partnership
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Empowerment
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Community
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Impact
                    </span>
                  </li>
                  {"|"}
                  <li className=" ">
                    <span className="bg-white bg-clip-text text-transparent ">
                      Excellence
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Image
            src="/images/about.svg"
            alt="About Us"
            width={600}
            height={400}
            className="h-[50vh] object-cover lg:w-1/2 lg:order-first"
          />
        </section>
      </div>
    </>
  );
}
