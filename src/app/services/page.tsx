"use client"

/**
 * importing need components
 */
import Footer from '@/components/Footer';
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';
import Image from 'next/image';

/**
 * importing need images
 */
import heroImage from '../../../public/services/62-621392_man-with-a-laptop-png-transparent-png-removebg-preview (1) 1.png';

import {
    LightBulbIcon,
    SwatchIcon,
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    BuildingOfficeIcon,
    WrenchScrewdriverIcon,
    RocketLaunchIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';

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

export default function ServicesPage() {
    return (
        <>
            <TopBar />
            <div className="relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,#fcd253_0%,#fff_70%)] pointer-events-none"></div>
                <section className="min-h-screen bg-white flex items-center w-full">
                    <div className="md:mx-16 xs:mx-0 px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 space-x-10">
                            <HoverHeading as={'h1'}
                                className="relative inline-block text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text transition-all duration-300 cursor-default"
                            >
                                Ligit Professional Services
                            </HoverHeading>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our experts are here to support you at every stage of your digital journey.
                                We collaborate closely to ensure your vision grows with full potential
                                and precision impact.
                            </p>
                            <div className="flex justify-center lg:justify-start pt-6">
                                <button className="bg-[#4b341d] text-[#fecd36] px-7 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition shadow-lg hover:shadow-xl">
                                    <a href="reach-us">Reach Us</a>
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
                    <div className="absolute top-80 right-160 translate-x-1/3 -translate-y-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,#fcd253_0%,#fff_70%)] pointer-events-none z-0"></div>
                    <div className="px-6 text-center space-y-12 relative z-10 mb-16">
                        <HoverHeading as='h2' className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Specialized Services
                        </HoverHeading>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Solutions tailored to meet your needs from the beginning to the end of your product journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 overflow-hidden transform hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 bg-linear-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative p-8 text-center">
                                        <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                                            <Icon className="w-12 h-12 text-amber-600 group-hover:text-amber-700 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}