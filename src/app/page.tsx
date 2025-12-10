"use client"

/**
 * Next and react 
 */
import Image from 'next/image';

/**
 * Importing icon 
 */
import {
  LightBulbIcon,
  SwatchIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,RocketLaunchIcon,ChartBarIcon
} from "@heroicons/react/24/outline";

/**
 * importing need images
 */
import heroImage from '../../public/home/Hero_section.png';
import aboutus from '../../public/home/aboutus.png';
import fletter from '../../public/home/Group 76.png';
import nodejs from '../../public/home/Group 74.png';
import vercel from '../../public/home/Group 70.png';
import nextjs from '../../public/home/Group 75.png';
import razerpay from '../../public/home/Group 74 (10).png';
import strip from '../../public/home/Group 74 (9).png';
import aws from '../../public/home/Group 74 (8).png';
import postgres from '../../public/home/Group 74 (7).png';
import mysql from '../../public/home/Group 74 (6).png';
import mongodb from '../../public/home/Group 74 (5).png';
import canvas from '../../public/home/Group 74 (4).png';
import figma from '../../public/home/Group 74 (3).png';
import aspnet from '../../public/home/Group 74 (2).png';
import react from '../../public/home/Group 74 (1).png';
import digitalocean from '../../public/home/Group 69.png';
import netlify from '../../public/home/Group 68.png';
import carousel from '../../public/home/carousel.png';
import transperancy from '../../public/home/transparent.png';
import expertdeveloper from '../../public/home/experdev.png';
import support from '../../public/home/customerSupport.png';
import customerstatisfation from '../../public/home/image.png';
import tetimonials from '../../public/home/scroller.png';
import profile1 from '../../public/home/Ellipse 41.png';
import profile2 from '../../public/home/Ellipse 42.png';

/**
 * importing need components
 */
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';


export default function Home() {

  const services = [
    { icon: LightBulbIcon, title: "Ideation & Strategy", desc: "Transform your vision into a winning product strategy" },
    { icon: SwatchIcon, title: "UX/UI Design", desc: "Beautiful, intuitive designs that users love" },
    { icon: GlobeAltIcon, title: "Web Development", desc: "Fast, scalable, and secure web applications" },
    { icon: DevicePhoneMobileIcon, title: "App Development", desc: "Native & cross-platform mobile apps" },
    { icon: RocketLaunchIcon, title: "Product Launch", desc: "Seamless deployment and go-to-market execution" },
    { icon: ChartBarIcon, title: "Growth & Analytics", desc: "Data-driven insights to scale your product" },
    { icon: BuildingOfficeIcon, title: "Enterprise Product Development", desc: "Robust solutions for complex business needs" },
    { icon: WrenchScrewdriverIcon, title: "UI Debugging & Optimization", desc: "Polish and perfect your existing product" },
  ];

  const technologies = [
    { image: nodejs, alt: "Node.js" },
    { image: aspnet, alt: "ASP.NET" },
    { image: react, alt: "React" },
    { image: nextjs, alt: "Next.js" },
    { image: fletter, alt: "Flutter" },
    { image: figma, alt: "Figma" },
    { image: canvas, alt: "Canva" },
    { image: mongodb, alt: "MongoDB" },
    { image: mysql, alt: "MySQL" },
    { image: postgres, alt: "PostgreSQL" },
    { image: razerpay, alt: "Razorpay" },
    { image: aws, alt: "AWS" },
    { image: digitalocean, alt: "DigitalOcean" },
    { image: netlify, alt: "Netlify" },
    { image: vercel, alt: "Vercel" },
    { image: strip, alt: "Stripe" },
  ];

  return (
    <>
      <TopBar />
      <div className="relative">
        {/* Hero Section with image at the end (right side) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,#fcd253_0%,#fff_70%)] pointer-events-none"></div>
        <section className="h-screen w-full overflow-hidden">
          <div className="h-full md:mx-16 xs:mx-0 pt-24 py-24 grid md:grid-cols-2 gap-12 relative">
            
            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center space-y-8 z-10">
              <p className="text-sm font-bold text-amber-700 tracking-wider uppercase">
                Creative Product Solution
              </p>

              <HoverHeading
                as="h1"
                className="inline-block text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text"
              >
                Building Smart Solutions for a Smarter Future
              </HoverHeading>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet consectetur. Urna tincidunt urna egestas rhoncus Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eius incidunt. Eligendi, tenetur maiores deserunt inventore doloribus mollitia nihil, eos fugiat quidem voluptate rem ab! Eius atque cupiditate quo optio?
              </p>
              
              <button className="bg-[#4b341d] text-[#fecd36] px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition w-fit">
                Get Started
              </button>
            </div>

            {/* RIGHT SIDE - Image at the end of section */}
            <div className="relative flex justify-end items-center h-full">
              <div className="relative w-full h-full max-w-[600px] max-h-[600px]">
                <Image
                  src={heroImage.src}
                  alt="Banner image"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-white">
          <div className="md:mx-16 xs:mx-0 px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="order-2 md:order-1">
              <Image
                src={aboutus.src}
                alt="Team member working on laptop"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl object-cover w-full h-auto"
                priority
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <HoverHeading as={'h2'} className="text-4xl md:text-5xl font-bold text-gray-900">
                About Us
              </HoverHeading>
              <HoverHeading as={'h3'} className="text-2xl md:text-3xl font-semibold text-amber-600">
                Get Started With Liglit
              </HoverHeading>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pharetra elit posuere
                  mauris nisl eget adipiscing et at. Lectus sed nulla faucibus lorem
                  sed. Sed elit eu vulputate leo nibh cursus donec. Id vitae nunc viverra
                  nibh id metus ut consectetur.
                </p>
                <p>
                  Duis mauris cursus malesuada
                  aliquam interdum malesuada fames ac ante ipsum primis in
                  faucibus. Vestibulum mattis eget eu blandit egestas ornare.
                  Adipiscing eu quisque vehicula.
                </p>
              </div>

              <button className="bg-[#4b341d] text-[#fecd36] px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition">
                Learn more
              </button>
            </div>
          </div>
        </section>

        {/* Services Section with Left-to-Right Marquee */}
        <section className="py-24 bg-white relative overflow-hidden w-full">
          <div className="absolute top-80 right-150 translate-x-1/3 -translate-y-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,#fcd253_0%,#fff_70%)] pointer-events-none z-0"></div>
          <div className="px-6 text-center space-y-12 relative z-10">
            <div className="space-y-4">
              <HoverHeading as={'h2'} className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</HoverHeading >
              <HoverHeading as='p' className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                End-to-end solutions crafted for every stage of your business journey.
              </HoverHeading>
            </div>

            {/* Left-to-Right Marquee Container */}
            <div className="relative overflow-hidden py-12">
              <div className="flex animate-marquee-left">
                {[...services, ...services].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="shrink-0 w-80 mx-4 bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:-translate-y-2"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
                        <Icon className="w-12 h-12 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8">
              <p className="text-lg text-gray-700 mb-6">
                Discover how our solutions can power your growth.
              </p>
              <button className="bg-[#4b341d] text-[#fecd36] px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition">
                Learn more
              </button>
            </div>

          </div>
          <style jsx>{`
            @keyframes marquee-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee-left {
              animation: marquee-left 30s linear infinite;
              display: flex;
              width: fit-content;
            }
            .animate-marquee-left:hover {
              animation-play-state: paused;
            }
          `}</style>
        </section>

        {/* Technologies Section - Hexagon Grid */}
        <section className="py-24 bg-white">
          <div className="md:mx-16 xs:mx-0 px-6 text-center space-y-12">
            <div className="space-y-4">
              <HoverHeading as='h2' className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Technologies
              </HoverHeading>
              <HoverHeading as='p' className="text-xl md:text-2xl text-amber-600 font-medium">
                The Technology That Defines Us.
              </HoverHeading>
            </div>

            {/* Hexagon Grid Container */}
            <div className="relative w-full max-w-6xl mx-auto min-h-[600px] flex items-center justify-center">
              <div className="relative hex-grid">
                {/* Row 1 - 3 hexagons */}
                <div className="hex-row hex-row-1">
                  {technologies.slice(0, 3).map((tech, index) => (
                    <div key={index} className="hexagon">
                      <div className="hexagon-inner">
                        <Image
                          src={tech.image}
                          alt={tech.alt}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Row 2 - 4 hexagons */}
                <div className="hex-row hex-row-2">
                  {technologies.slice(3, 7).map((tech, index) => (
                    <div key={index} className="hexagon">
                      <div className="hexagon-inner">
                        <Image
                          src={tech.image}
                          alt={tech.alt}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Row 3 - 5 hexagons */}
                <div className="hex-row hex-row-3">
                  {technologies.slice(7, 12).map((tech, index) => (
                    <div key={index} className="hexagon">
                      <div className="hexagon-inner">
                        <Image
                          src={tech.image}
                          alt={tech.alt}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Row 4 - 4 hexagons */}
                <div className="hex-row hex-row-4">
                  {technologies.slice(12, 16).map((tech, index) => (
                    <div key={index} className="hexagon">
                      <div className="hexagon-inner">
                        <Image
                          src={tech.image}
                          alt={tech.alt}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Discover how our solutions can power your growth.
              </p>
              <button className="bg-[#4b341d] text-[#fecd36] px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition">
                Explore Now
              </button>
            </div>
          </div>

          <style jsx>{`
            .hex-grid {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 30px;
            }
            
            .hex-row {
              display: flex;
              gap: 60px;
            }
            
            .hex-row-2 {
              margin-left: 90px;
            }
            
            .hex-row-4 {
              margin-left: 90px;
            }
            
            .hexagon {
              width: 120px;
              height: 138px;
              position: relative;
              background: linear-gradient(145deg, #ffffff, #f0f0f0);
              clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
            
            .hexagon:hover {
              transform: scale(1.1);
              background: linear-gradient(145deg, #fef3c7, #fde68a);
              box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
              z-index: 10;
            }
            
            .hexagon-inner {
              width: 100px;
              height: 115px;
              display: flex;
              align-items: center;
              justify-content: center;
              clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
              background: white;
            }
            
            /* Mobile responsiveness */
            @media (max-width: 768px) {
              .hex-grid {
                gap: 20px;
              }
              
              .hex-row {
                gap: 40px;
              }
              
              .hex-row-2,
              .hex-row-4 {
                margin-left: 60px;
              }
              
              .hexagon {
                width: 90px;
                height: 104px;
              }
              
              .hexagon-inner {
                width: 75px;
                height: 87px;
              }
            }
            
            @media (max-width: 480px) {
              .hex-row {
                gap: 20px;
              }
              
              .hex-row-2,
              .hex-row-4 {
                margin-left: 40px;
              }
              
              .hexagon {
                width: 70px;
                height: 81px;
              }
              
              .hexagon-inner {
                width: 60px;
                height: 69px;
              }
            }
          `}</style>
        </section>

        {/* Projects Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-16">

            <div className="space-y-4">
              <HoverHeading as='h2' className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Projects
              </HoverHeading>
              <HoverHeading as='p' className="text-xl md:text-2xl text-amber-600 font-medium">
                Some Featured Projects.
              </HoverHeading>
            </div>

            <div className="relative">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 bg-amber-100/60 rounded-full -z-10 blur-3xl"></div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 px-8">
                <div className="group">
                  <div className="relative">
                    <Image
                      src={carousel}
                      alt="XYZ Mobile App"
                      width={1040}
                      className="rounded-4xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our projects represent the blend of <span className="text-amber-600 font-semibold">creativity, technology, and precision</span> we bring to every idea.
                Each solution is crafted to solve real-world problems with efficiency and clarity.
                We focus on delivering seamless user experiences that truly make an impact.
                Explore our featured work to see how we transform concepts into meaningful digital products.
              </p>

              <button className="bg-[#4b341d] text-[#fecd36] px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition">
                Explore Now
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="md:mx-16 xs:mx-0 px-6 text-center space-y-16">

            <div className="space-y-4">
              <HoverHeading as='h2' className="text-4xl md:text-5xl font-bold text-gray-900">
                Choose Us
              </HoverHeading>
              <HoverHeading as='p' className="text-xl md:text-2xl text-amber-600 font-medium">
                Why Choose Us ?
              </HoverHeading>
            </div>

            <div className="relative">
              <div className="absolute top-34 left-1/2 -translate-x-1/2 w-full h-0.5 bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 hidden md:block"></div>

              <div className="grid md:grid-cols-4 gap-12 md:gap-8">

                <div className="relative space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src={customerstatisfation}
                        alt="Customer Satisfaction"
                        width={250}
                        height={250}
                        className="rounded-full object-cover border-8 border-amber-100 shadow-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-amber-600">
                    Customer Satisfaction
                  </h3>
                  <div className="bg-amber-50 rounded-3xl p-6 shadow-md border border-amber-100">
                    <p className="text-gray-700 leading-relaxed">
                      We are committed to delivering quality service that puts your satisfaction first in every interaction.
                    </p>
                  </div>
                </div>

                <div className="relative space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src={support}
                        alt="24/7 Customer Service"
                        width={250}
                        height={250}
                        className="rounded-full object-cover border-8 border-amber-100 shadow-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-amber-600">
                    24/7 Customer Service
                  </h3>
                  <div className="bg-amber-50 rounded-3xl p-6 shadow-md border border-amber-100">
                    <p className="text-gray-700 leading-relaxed">
                      We provide 24/7 service to ensure you receive instant, reliable support whenever you need it.
                    </p>
                  </div>
                </div>

                <div className="relative space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src={expertdeveloper}
                        alt="Expert Developers"
                        width={250}
                        height={250}
                        className="rounded-full object-cover border-8 border-amber-100 shadow-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-amber-600">
                    Expert Developers
                  </h3>
                  <div className="bg-amber-50 rounded-3xl p-6 shadow-md border border-amber-100">
                    <p className="text-gray-700 leading-relaxed">
                      We have a team of expert developers committed to delivering clean, efficient, and modern apps.
                    </p>
                  </div>
                </div>

                <div className="relative space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src={transperancy}
                        alt="Transparent Process"
                        width={250}
                        height={250}
                        className="rounded-full object-cover border-8 border-amber-100 shadow-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-amber-600">
                    Transparent Process
                  </h3>
                  <div className="bg-amber-50 rounded-3xl p-6 shadow-md border border-amber-100">
                    <p className="text-gray-700 leading-relaxed">
                      We follow transparent process, keeping you informed at every step for secure, timely, and complete trust.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-linear-to-b from-white to-amber-50">
          <div className="md:mx-16 xs:mx-0 px-6 text-center space-y-20">

            <div className="space-y-4">
              <HoverHeading as='h2' className="text-4xl md:text-5xl font-bold text-gray-900">
                Testimonials
              </HoverHeading>
              <p className="text-xl md:text-2xl text-amber-600 font-medium">
                Hear From Our Clients
              </p>
            </div>

            <div className="relative max-w-md mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-12 border border-amber-100">
                <div className="flex justify-center gap-4 mb-8">
                  <button className="text-amber-600 hover:text-amber-800 text-3xl">←</button>
                  <Image
                    src={tetimonials}
                    alt="Rohan"
                    width={140}
                    height={140}
                    className="rounded-full object-cover border-4 border-amber-200 shadow-lg"
                  />
                  <button className="text-amber-600 hover:text-amber-800 text-3xl">→</button>
                </div>
                <p className="text-2xl font-medium text-gray-800 italic leading-relaxed mb-6">
                  “Lorem ipsum dolor sit amet consectetur. Nullam platea lobortis a luctus ipsum velit aliquam purus. Suscipit enim.”
                </p>
                <p className="text-lg font-semibold text-gray-900">Rohan</p>
                <p className="text-amber-600">UX/UI Designer</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Aishwarya", role: "Marketing Director at XYZ", avatar: profile1 },
                { name: "Rohit", role: "CEO at ABC", avatar: profile2 },
                { name: "Aishwarya", role: "Startup Founder at PQR", avatar: profile1 },
              ].map((person, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-lg p-8 border border-amber-100 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={person.avatar}
                      alt={person.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover border-2 border-amber-200"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{person.name}</p>
                      <p className="text-sm text-amber-600">{person.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    “Lorem ipsum dolor sit amet consectetur. Nullam platea lobortis a luctus ipsum velit aliquam purus. Suscipit enim.”
                  </p>
                </div>
              ))}
            </div>

            <div className="relative max-w-5xl mx-auto bg-linear-to-r from-amber-100 to-amber-50 rounded-2xl py-16 px-12 shadow-2xl">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-700 font-medium">
                  Thinking of starting something new
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Your Vision, Our Innovation. Let's Begin.
                </h3>
                <div className="pt-6">
                  <button className="bg-[#4b341d] text-[#fecd36] px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition">
                    <a href="reach-us">Reach Us</a>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}