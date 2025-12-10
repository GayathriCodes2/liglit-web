"use client"
/**
 * Next and react 
 */
import Image from 'next/image';


import {
    WindowIcon,
    CommandLineIcon,
    SwatchIcon,
    CreditCardIcon,
    ServerStackIcon,
    DevicePhoneMobileIcon, CloudArrowUpIcon
} from "@heroicons/react/24/outline";

/**
 * importing need images
 */
import heroImage from '../../../public/technology/abc__1_-removebg-preview 1.png';
import fletter from '../../../public/technology/image 23.png';
import nodejs from '../../../public/technology/image 34.png';
import vercel from '../../../public/technology/image 28.png';
import nextjs from '../../../public/technology/NJ 1.png';
import razerpay from '../../../public/technology/image 26.png';
import strip from '../../../public/technology/image 36.png';
import aws from '../../../public/technology/image 31.png';
import postgres from '../../../public/technology/postgresql-removebg-preview 1.png';
import mysql from '../../../public/technology/logo-mysql-database-phpmyadmin-oracle-sql-logo-removebg-preview 2.png';
import mongodb from '../../../public/technology/Mdb 1.png';
import canvas from '../../../public/technology/image 34 (1).png';
import figma from '../../../public/technology/image 35.png';
import aspnet from '../../../public/technology/184-1841941_net-application-development-company-site-development-asp-net-removebg-preview 1.png';
import react from '../../../public/technology/rjj-removebg-preview 1.png';
import digitalocean from '../../../public/technology/image 30.png';
import netlify from '../../../public/technology/image 29.png';

/**
 * importing need components
 */
import Footer from '@/components/Footer';
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';

export default function TechnologiesPage() {
    return (
        <>
            <TopBar />

            <section className="pt-32 pb-24 bg-white min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <HoverHeading as='h1' className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Ligit Technology Expertise
                        </HoverHeading>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            We build modern, high-performance solutions using the latest and most
                            reliable technologies. Our approach ensures speed, security, and seamless
                            scalability for your business. From development to deployment, we use the
                            best tools to deliver results that truly stand out.
                        </p>
                        <div className="pt-6">
                            <button className="bg-[#4b341d] text-[#fecd36] px-7 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">
                                Get Start
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src={heroImage}
                            alt="Ligit Technology Expertise Illustration"
                            width={650}
                            height={550}
                            className="drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden w-full">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                        <WindowIcon className="w-12 h-12 text-amber-300" />
                        <HoverHeading as='h2' className="text-4xl font-bold text-gray-900">Frontend Technologies</HoverHeading>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Delivering seamless and high-performance frontends using React.js and Next.js
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <TechCard
                            logo={react}
                            title="React"
                            color="blue"
                            description="We use React.js to build fast, dynamic, and responsive user interfaces."
                        />
                        <TechCard
                            logo={nextjs}
                            title="NEXT.js"
                            color="black"
                            description="We use Next.js to build fast, dynamic, and responsive user interfaces."
                        />
                    </div>
                </div>
            </section>

            <section className="py-34 bg-white relative overflow-hidden w-full">
                <div className="absolute top-60 right-150 translate-x-1/3 -translate-y-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,#fcd253_0%,#fff_70%)] pointer-events-none z-0"></div>
                <div className="px-6 text-center space-y-12 relative z-10">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                        <CommandLineIcon className="w-12 h-12 text-amber-300" />
                        <HoverHeading as='h2' className="text-4xl font-bold text-gray-900">Backend Technologies</HoverHeading>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Building powerful, scalable server engines using Node.js and .NET.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <TechCard
                            logo={nodejs}
                            title="node.js"
                            color="green"
                            description="We use Node.js to develop scalable and efficient backend services."
                        />
                        <TechCard
                            logo={aspnet}
                            title="ASP.NET"
                            color="blue"
                            description="We use .NET to deliver secure, robust, and enterprise-grade backend solutions."
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden w-full">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                        <SwatchIcon className="w-12 h-12 text-amber-300" />
                        <HoverHeading as='h2' className="text-4xl font-bold text-gray-900">Designing Tool</HoverHeading>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Transforming ideas into stunning visuals through Figma and Canva.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <TechCard
                            logo={canvas}
                            title="Canva"
                            color="purple"
                            description="We use Canva to create quick, visually appealing graphics and marketing materials."
                        />
                        <TechCard
                            logo={figma}
                            title="Figma"
                            color="red"
                            description="We use Figma to design clean, modern, and user-focused interfaces."
                        />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden w-full">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                        <CreditCardIcon className="w-12 h-12 text-amber-300" />
                        <HoverHeading as='h2' className="text-4xl font-bold text-gray-900">Payment Gateway</HoverHeading>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Enabling effortless, secure online payments with Razorpay and Stripe.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <TechCard
                            logo={strip}
                            title="stripe"
                            color="indigo"
                            description="We use Stripe to support global, fast, and secure payment processing."
                        />
                        <TechCard
                            logo={razerpay}
                            title="Razorpay"
                            color="blue"
                            description="We use Razorpay to enable secure and seamless online payments in India."
                        />
                    </div>
                </div>
            </section>

            <section className="py-44 bg-white relative overflow-hidden w-full">
                <div className="absolute top-50 right-150 translate-x-1/3 -translate-y-1/3 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,#fcd253_0%,#fff_70%)] pointer-events-none z-0"></div>
                <div className="px-6 text-center space-y-12 relative z-10">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                        <ServerStackIcon className="w-12 h-12 text-amber-300" />
                        <HoverHeading as='h2' className="text-4xl font-bold text-gray-900">Database Management</HoverHeading>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        <TechCard logo={mongodb} title="MongoDB" color="green" description="We use MongoDB to handle flexible, high-performance NoSQL database storage." />
                        <TechCard logo={mysql} title="MySQL" color="blue" description="We use MySQL to manage structured, reliable, and scalable relational databases." />
                        <TechCard logo={postgres} title="PostgreSQL" color="blue" description="We use PostgreSQL for advanced, standards-compliant relational database solutions." />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden w-full">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                        <CloudArrowUpIcon className="w-12 h-12 text-amber-300" />
                        <HoverHeading as='h2' className="text-4xl font-bold text-gray-900">Deployment</HoverHeading>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Delivering fast, reliable deployments on AWS, DigitalOcean, Netlify, and Vercel.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                        <TechCard logo={aws} title="AWS" color="orange" description="We use AWS for highly scalable, secure, and cloud-optimized deployments." />
                        <TechCard logo={digitalocean} title="DigitalOcean" color="blue" description="We use DigitalOcean for fast, lightweight, cost-effective, scalable deployments." />
                        <TechCard logo={netlify} title="netlify" color="cyan" description="We use Netlify for ultra-fast, serverless static site and function deployments." />
                        <TechCard logo={vercel} title="Vercel" color="black" description="We use Vercel for the best lightweight, cost-effective, production-ready deployments." />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden w-full">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                        <DevicePhoneMobileIcon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300" />
                        <HoverHeading as="h2" className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Mobile-App Development
                        </HoverHeading>
                    </div>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Crafting smooth, high-performance mobile experiences with Flutter.
                    </p>
                    <div className="w-[400px] gap-10 max-w-xl mx-auto">
                        <TechCard logo={fletter} title="Flutter" color="blue" description="We use Flutter to build beautiful, natively compiled apps for mobile, web, and desktop from a single codebase." />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

function TechCard({ logo, title, color, description }: {
    logo: any;
    title: string;
    color: string;
    description: string;
}) {
    const borderColor = {
        blue: 'border-blue-400',
        black: 'border-gray-800',
        green: 'border-green-400',
        red: 'border-red-400',
        purple: 'border-purple-400',
        indigo: 'border-indigo-400',
    }[color];

    return (
        <div className={`bg-white rounded-3xl shadow-xl p-10 border-l-8 ${borderColor} hover:shadow-2xl transition-all duration-300 `}>
            <Image
                src={logo}
                alt={title}
                width={120}
                height={120}
                className="object-contain mb-6 mx-auto"
            />
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}