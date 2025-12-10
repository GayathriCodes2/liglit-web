"use client";

/**
 * Next and react 
 */
import Image from 'next/image';

/**
 * importing images
 */
import carousel from '../../../public/portfolio/carousel.png';
import Rectangle166 from '../../../public/portfolio/Rectangle 166.png';
import Rectangle163 from '../../../public/portfolio/Rectangle 163.png';
import Rectangle164 from '../../../public/portfolio/Rectangle 164.png';
import Rectangle165 from '../../../public/portfolio/Rectangle 165.png';
import react from '../../../public/portfolio/react.png'
import ASPNET from '../../../public/portfolio/ASP.NET.png'
import DigitalOcean from '../../../public/portfolio/DigitalOcean.png'
import Razarpay from '../../../public/portfolio/Razarpay.png'
import monogoDB from '../../../public/portfolio/monogoDB.png'
import nodejs from '../../../public/portfolio/nodejs.png'
import postgres from '../../../public/portfolio/postgres.png'
import mysql from '../../../public/portfolio/mysql.png'
import next from '../../../public/portfolio/nextjs.png'
import stripe from '../../../public/portfolio/stripe.png'

/**
 * importing components
 */
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export default function Protfolio() {

    return (
        <>
            <TopBar />

            <div className="relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,#fcd253_0%,#fff_70%)] pointer-events-none"></div>

                <section className="pt-32 pb-24 bg-white relative z-20">
                    <div className="max-w-7xl mx-auto px-6 text-center space-y-8">

                        <div className="space-y-3">
                            <HoverHeading as="h2" className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                A Glimpse Into Our Successful Creations
                            </HoverHeading>
                        </div>

                        <div className="group w-full flex justify-center">
                            <div className="relative">
                                <Image
                                    src={carousel}
                                    alt="XYZ Mobile App"
                                    width={940}
                                    className="rounded-4xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Explore the diverse projects we’ve crafted across industries with creativity, technology, and expertise.
                            </p>
                        </div>

                        <div className="pt-2">
                            <button className="bg-[#4b341d] text-[#fecd36] px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-xl hover:shadow-2xl">
                                Explore All Projects
                            </button>
                        </div>
                    </div>
                </section>

                <ProjectSection
                    id={1}
                    title="GHI Ecommerce Website"
                    image={Rectangle165}
                    bubbleColor="from-amber-400 to-yellow-500"
                    bubblePointer="border-r-amber-400"
                    about="We developed a fast and user-friendly Online Shopping Application that allows customers to browse products, place orders, and complete payments securely..."
                    tech={[
                        { name: "React", logo: react },
                        { name: "Node.js", logo: nodejs },
                        { name: "MongoDB", logo: monogoDB },
                        { name: "Razorpay", logo: Razarpay },
                    ]}
                    impact={['Faster Checkout', 'Secure Payments', 'Higher Sales', 'Better Engagement']}
                />

                <ProjectSection
                    id={2}
                    title="ABC Academy Website"
                    image={Rectangle163}
                    bubbleColor="from-indigo-600 to-purple-700"
                    bubblePointer="border-r-indigo-600"
                    about="A clean and user-friendly online bookstore where customers can browse, search, and purchase books effortlessly..."
                    tech={[
                        { name: "React", logo: react },
                        { name: "ASP.NET", logo: ASPNET },
                        { name: "MySQL", logo: mysql },
                        { name: "DigitalOcean", logo: DigitalOcean },
                    ]}
                    impact={['Easy Browsing', 'Boosted Sales', 'Better Visibility', 'Secure Checkout']}
                />

                <ProjectSection
                    id={3}
                    title="MNO Food Delivery Website"
                    image={Rectangle164}
                    bubbleColor="from-red-500 to-pink-500"
                    bubblePointer="border-r-red-500"
                    about="A fast and intuitive food delivery app that allows users to browse restaurants, track orders in real time, and make secure online payments..."
                    tech={[
                        { name: "React", logo: react },
                        { name: "Node.js", logo: nodejs },
                        { name: "MongoDB", logo: monogoDB },
                        { name: "Razorpay", logo: Razarpay },
                    ]}
                    impact={['Quick Orders', 'Fast Delivery', 'Secure Payments', 'High Engagement']}
                />

                <ProjectSection
                    id={4}
                    title="XYZ Academy Website"
                    image={Rectangle166}
                    bubbleColor="from-teal-500 to-cyan-600"
                    bubblePointer="border-r-teal-500"
                    about="A modern academy website offering course listings, admissions, student portal access, and online learning features with a clean, professional UI."
                    tech={[
                        { name: "Next.js", logo: next },
                        { name: "ASP.NET", logo: ASPNET },
                        { name: "PostgreSQL", logo: postgres },
                        { name: "Stripe", logo: stripe },
                    ]}
                    impact={['Smooth Navigation', 'Higher Admission', 'Improved Learning', 'Brand Growth']}
                />
            </div>
            <Footer />
        </>
    );
}

function ProjectSection({
    id, title, image, bubbleColor, bubblePointer, about, tech, impact
}: {
    id: number;
    title: string;
    image: any;
    bubbleColor: string;
    bubblePointer: string;
    about: string;
    tech: { name: string; logo: any }[];
    impact: string[];
}) {
    return (
        <section className="py-24 bg-linear-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">

                <HoverHeading as='h2' className="text-3xl md:text-5xl font-bold text-center mb-20">
                    {id}. {title}
                </HoverHeading>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    <div className="order-1">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={image}
                                alt={title}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="order-2 space-y-12">

                        <div className="relative">
                            <div className={`bg-linear-to-br ${bubbleColor} text-white rounded-3xl p-10 shadow-2xl`}>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="inline-block w-8 h-8 bg-white/20 rounded-full"></span>
                                    About
                                </h3>
                                <p className="text-lg leading-relaxed">{about}</p>
                            </div>

                            <div className={`absolute top-10 -left-6 w-0 h-0 
                                border-t-24 border-t-transparent 
                                border-b-24 border-b-transparent 
                                border-r-30 ${bubblePointer}`}>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="inline-block w-8 h-8 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full"></span>
                                Tech Used
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {tech.map((t) => (
                                    <div key={t.name} className="bg-gray-50 text-black rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                                        <Image src={t.logo} alt={t.name} width={28} height={28} className="object-contain" />
                                        <span className="font-medium">{t.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="inline-block w-8 h-8 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full"></span>
                                Impact
                            </h3>
                            <div className="bg-gray-800 text-white rounded-3xl p-8 shadow-xl">
                                <ul className="space-y-4 text-lg">
                                    {impact.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="inline-block w-3 h-3 bg-amber-400 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <button className="bg-[#4b341d] text-[#fecd36] px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all shadow-xl hover:shadow-2xl">
                            View Live Project →
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}
