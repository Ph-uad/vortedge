import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  InstagramOutlined,
  LinkedinOutlined,
  TikTokOutlined,
  XOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Marquee } from "@/components/magicui/marquee";
import Brain from "@/components/brain";

export default function Home() {
  return (
    <>
      <nav className="flex p-4 fixed w-screen top-0 z-50">
        <div className="mx-auto bg-gray-100/55 py-2 px-8 rounded-full mix-blend-color-difference backdrop-blur-md shadow-lg">
          <h1 className="text-3xl">
            Vort<span className="font-bold text-primary">Edge</span>
          </h1>
        </div>
      </nav>
      <header id="hero" className="h-screen w-screen relative ">
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

      <div id="about" className="py-20 border-t-2 border-gray-200">
        <section>
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
                manufacturing, and industrial automation. We leverage AI and
                cloud to edge technology to optimize real-time data
                processing—enabling healthcare, robotics, and next-gen factories
                to operate faster, smarter, and more efficiently.
              </p>
              <p className="text-xl mt-2.5">
                We are also committed to STEAM based youth empowerment,
                equipping the next generation with cutting-edge skills to drive
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
        </section>
      </div>
      <div
        id="missom"
        className=" mt-20 border-t-2 border-gray-200 max-w-1/5 lg:ml-auto"
      >
        <section className="">
          <article>
            <h2 className="text-5xl font-bold text-right p-8">Our Mission</h2>
            <p className="px-4 text-xl">
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
                  <p className="text-xl mt-2.5">
                    As technology races ahead, the global demand for AI and
                    semiconductor talent is surging—and our workforce is
                    struggling to keep pace. <em>STEAM UP</em> is a targeted
                    workforce development initiative created to bridge this
                    critical skills shortage in the U.S. and beyond.
                  </p>
                  <p className="text-xl mt-2.5">
                    Now is the moment for upskilling and reskilling. Recent data
                    shows a remarkable 191% surge in AI apprenticeships,
                    reflecting both strong interest and industry commitment. Yet
                    62% of these programs are clustered in just 10 states, and
                    overall completion rates remain below what's needed to power
                    tomorrow's innovations.
                  </p>
                  <p className="text-xl mt-2.5">
                    <em>STEAM UP</em> offers a more inclusive vision: a
                    nationwide network of training partners, employer-led
                    cohorts, and community hubs. By expanding access and
                    fostering learning communities, we ensure every region can
                    cultivate the talent that will drive the next wave of
                    technological breakthroughs.
                  </p>
                  <p className="text-xl mt-2.5">
                    Join us in shaping a future where every aspiring AI or
                    semiconductor professional has the support, curriculum, and
                    mentorship needed to succeed. Together, we can unlock the
                    full potential of our workforce—and fuel the innovations of
                    tomorrow.
                  </p>
                  <h3 className="text-3xl font-bold text-gray-400">
                    STEAM UP: Closing the AI &amp; Semiconductor Skills Gap
                  </h3>
                </section>
              </article>

              <div className="  mt-26">
                <Marquee
                  pauseOnHover
                  className="[--duration:20s] w-screen mix-blend-difference"
                >
                  <ul className="list-none flex gap-32 flex-no-wrap text-3xl bg-white min-w-full h-fit text-transparent bg-clip-text">
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent pl-24">
                        People
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Process
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Technology
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Innovation
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Partnership
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Empowerment
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Community
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Impact
                      </span>
                    </li>
                    {"|"}
                    <li className="special">
                      <span className="bg-white bg-clip-text text-transparent ">
                        Excellence
                      </span>
                    </li>
                    {"|"}
                  </ul>
                </Marquee>
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

      <div id="gallery" className="py-20">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          <Image
            src="/images/slideshow/g1.webp"
            alt="Gallery1"
            width={600}
            height={400}
            className="relative object-cover lg:w-1/3 aspect-video shadow-lg hover:scale-150 not-hover:grayscale-75 hover:z-30 not-hover:z-0 not-hover:scale-75 transition-transform duration-300 ease-in-out"
          />
          <Image
            src="/images/slideshow/g2.webp"
            alt="Gallery2"
            width={600}
            height={400}
            className="relative object-cover lg:w-1/3 aspect-video shadow-lg hover:scale-150 not-hover:grayscale-75 hover:z-30 not-hover:z-0 not-hover:scale-75 transition-transform duration-300 ease-in-out"
          />
          <Image
             src="/images/slideshow/g3.webp"
            alt="Gallery3"
            width={600}
            height={400}
            className="relative object-cover lg:w-1/3 aspect-video shadow-lg hover:scale-150 not-hover:grayscale-75 hover:z-30 not-hover:z-0 not-hover:scale-75 transition-transform duration-300 ease-in-out"
          />
          <Image
             src="/images/slideshow/g4.webp"
            alt="Gallery4"
            width={600}
            height={400}
            className="relative object-cover lg:w-1/3 aspect-video shadow-lg hover:scale-150 not-hover:grayscale-75 hover:z-30 not-hover:z-0 not-hover:scale-75 transition-transform duration-300 ease-in-out"
          />
          <Image
             src="/images/slideshow/g6.webp"
            alt="Gallery6"
            width={600}
            height={400}
            className="relative object-cover lg:w-1/3 aspect-video shadow-lg hover:scale-150 not-hover:grayscale-75 hover:z-30 not-hover:z-0 not-hover:scale-75 transition-transform duration-300 ease-in-out"
          />
        </Marquee>

        <h2 className="text-5xl font-bold">Gallery</h2>
      </div>

      <footer>
        <section className="border-t-2 flex flex-col lg:flex-row justify-center gap-0 mt-40">
          <div
            id="contact-details"
            className="border-2 border-gray-900 flex-1/3 p-6 border-b-0 border-l-0"
          >
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div
            id="contact-details"
            className="border-2 border-gray-900 flex-1/3 p-6 border-l-0 border-r-0 border-b-0"
          >
            <h2 className="text-2xl font-bold">Socials </h2>
            <ul className="list-none flex flex-wrap gap-4">
              <li className="flex items-center gap-0.5">
                <YoutubeOutlined style={{ fontSize: 24 }} />
                <span>Youtube</span>
              </li>
              <li className="flex items-center gap-0.5">
                <LinkedinOutlined style={{ fontSize: 24 }} />
                <span>LinkedIn</span>
              </li>
              <li className="flex items-center gap-0.5">
                <XOutlined style={{ fontSize: 24 }} />
                <span> X </span>
              </li>
              <li className="flex items-center gap-0.5">
                <InstagramOutlined style={{ fontSize: 24 }} />
                <span> Instagram</span>
              </li>
              <li className="flex items-center gap-0.5">
                <TikTokOutlined style={{ fontSize: 24 }} />
                <span> TikTok</span>
              </li>
            </ul>
          </div>
          <div
            id="contact-details"
            className="border-2 border-gray-900 flex-1/3 p-6 border-b-0 border-r-0"
          >
            <ul className="list-none">
              <li>
                <span>Accessibility Statement</span>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
            </ul>
            <p className="mt-2">© 2025 by VortEdge</p>
          </div>
        </section>
      </footer>
    </>
  );
}
