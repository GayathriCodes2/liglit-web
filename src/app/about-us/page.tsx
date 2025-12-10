"use client";

import Image from 'next/image';
import person from '../../../public/aboutus/hero image.png';
import rectangle from '../../../public/aboutus/Rectangle 57.png';
import rectangle7 from '../../../public/aboutus/Rectangle 7.png';
import imagedeask from '../../../public/aboutus/image table.png';
import image12 from '../../../public/aboutus/image 12.png';
import image13 from '../../../public/aboutus/image 13.png';
import Vector from '../../../public/aboutus/Vector.png';
import Arrow from '../../../public/aboutus/fluent_target-arrow-20-filled.png';
import image1 from '../../../public/aboutus/image 56.png';
import image2 from '../../../public/aboutus/Customer service.png';
import image3 from '../../../public/aboutus/Leader.png';
import image4 from '../../../public/aboutus/image 57.png';

/**
 * importing need components
 */
import Footer from '@/components/Footer';
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';

export default function AboutUs() {
    return (
        <>
            <TopBar />

            <section className="min-h-screen bg-white flex items-center mt-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-10">
                        <HoverHeading as="h1" className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Transforming Ideas Into High-Impact Digital<br />
                            Experiences
                        </HoverHeading>

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur. Pharetra elit posuere mauris eget adipiscing et at. Lectus sed nulla faucibus lorem sed.
                            Sed sit tate leo nibh cursus donec. Id vitae nunc viverra nibh id metus ut magna cursus malesuada aliquet nibh dictumst malesuada.
                        </p>

                        <p className="text-lg italic text-gray-600 font-medium">
                            Venenatis tristique
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            <Image
                                src={person}
                                alt="Ligit Team Member"
                                width={400}
                                height={600}
                                className="rounded-3xl shadow-2xl object-cover"
                                priority
                            />
                            <div className="absolute -inset-4 bg-amber-300/30 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-linear-to-b from-white to-amber-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src={rectangle7}
                        alt=""
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                </div>

                <div className="bg-[#4b341d] py-6 text-center">
                    <h2 className="text-4xl font-bold text-white flex items-center justify-center gap-4">
                        ABOUT US
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {[
                            { name: "Professional", icon: imagedeask, desc: "Trusted engineers delivering reliable, scalable software solutions." },
                            { name: "Creative", icon: image12, desc: "Design-led development that turns ideas into delightful experiences." },
                            { name: "Talented", icon: image13, desc: "Design-led development that turns ideas into delightful experiences." },
                        ].map((item, i) => (
                            <div key={item.name} className="space-y-6">
                                <div className="w-24 h-24 mx-auto bg-amber-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4"
                                        quality={90}
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-32 bg-linear-to-b from-amber-50 to-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <HoverHeading as='h2' className="text-5xl md:text-6xl font-bold text-gray-900 mb-20">
                        Mission & Vision
                    </HoverHeading>

                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">

                        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-amber-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">

                            <div className="w-20 h-20 mx-auto mb-8 bg-amber-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                <Image
                                    src={Arrow}
                                    alt="Mission"
                                    fill
                                    className="object-contain p-4"
                                    quality={90}
                                />
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To build innovative and scalable digital solutions that empower businesses to grow and succeed.
                                We strive to deliver technology that makes processes smarter, faster, and more efficient.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-amber-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">

                            <div className="w-20 h-20 mx-auto mb-8 bg-amber-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                <Image
                                    src={Vector}
                                    alt="Vision"
                                    fill
                                    className="object-contain p-4"
                                    quality={90}
                                />
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To become a global leader in transformative software solutions that shape the future of digital innovation.
                                We aim to create meaningful impact by driving progress through technology.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-3xl shadow-2xl border border-amber-100 p-12 md:p-20">

                        <div className="text-center mb-16">
                            <HoverHeading as='h2' className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                                Why Choose Us ?
                            </HoverHeading>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We deliver innovative, high-quality solutions with a commitment to excellence and customer success.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 items-center">

                            <div className="space-y-12">

                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                        <Image
                                            src={image1}
                                            alt="Vision"
                                            fill
                                            className="object-contain p-4"
                                            quality={90}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team & Proven Expertise</h3>
                                        <p className="text-gray-600">
                                            Skilled professionals delivering high-quality solutions with industry best practices.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                        <Image
                                            src={image2}
                                            alt="Vision"
                                            fill
                                            className="object-contain p-4"
                                            quality={90}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation & Reliability</h3>
                                        <p className="text-gray-600">
                                            Modern technologies, scalable architecture, and consistent performance you can trust.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-center">
                                <div className="relative">
                                    <Image
                                        src={rectangle}
                                        alt="Ligit Team Member"
                                        width={400}
                                        height={500}
                                        className="rounded-3xl shadow-2xl object-cover"
                                        priority
                                    />
                                    <div className="absolute -inset-4 bg-amber-300/20 rounded-full blur-3xl -z-10"></div>
                                </div>
                            </div>

                            <div className="space-y-12">

                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                        <Image
                                            src={image3}
                                            alt="Client First"
                                            fill
                                            className="object-contain p-4"
                                            quality={90}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Client-First Approach</h3>
                                        <p className="text-gray-600">
                                            We listen, understand, and build solutions tailored to your business goals.
                                        </p>
                                    </div>
                                </div>


                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center relative overflow-hidden">
                                        <Image
                                            src={image4}
                                            alt="On Time Delivery"
                                            fill
                                            className="object-contain p-4"
                                            quality={90}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Delivery & Transparent Process</h3>
                                        <p className="text-gray-600">
                                            Clear communication, agile execution, and commitment to meeting deadlines.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}