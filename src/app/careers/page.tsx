"use client";

import Image from 'next/image';
import logo from '../../../public/careers/Logo (1).png';
/**
 * importing components
 */
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

export default function Careers() {
    const jobs = [
        {
            title: "Fullstack Developer [MERN]",
            desc: "Build end-to-end web applications using the MERN stack. Work across frontend, backend, and database layers to deliver scalable, high-performance solutions.",
            border: "border-blue-500",
            route: 'careers/mern_application'
        },
        {
            title: "Frontend Developer [REACT]",
            desc: "Create responsive and interactive UI components using React. Collaborate with designers to deliver smooth, intuitive user experiences.",
            border: "border-blue-400",
            route: 'careers/frontend_developer_application'
        },
        {
            title: "Business Analyst",
            desc: "Analyze business needs, gather requirements, translate them into functional specifications. Bridge communication between technical teams and stakeholders.",
            border: "border-gray-400",
            route: 'careers/business_analysist_application'
        },
        {
            title: "DevOps Engineer",
            desc: "Automate deployment pipelines, monitor system performance, and maintain CI/CD workflows. Ensure reliable, secure, and scalable infrastructure.",
            border: "border-gray-500",
            route: 'careers/devops_engineer_application'
        },
        {
            title: "Marketing Manager",
            desc: "Develop and execute marketing strategies to strengthen brand presence. Drive campaigns, analyze performance, and manage cross-channel marketing initiatives.",
            border: "border-amber-600",
            route: 'careers/marketing_manager_application'
        },
    ];

    return (
        <>
            <TopBar />

            <div className="relative overflow-hidden mt-12">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] bg-[radial-gradient(circle_at_top_right,#fcd253_0%,#fff_70%)] pointer-events-none -z-10"></div>

                <section className="min-h-screen flex items-center py-20 bg-white relative z-11">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="relative mb-12">
                                <Image
                                    src={logo}
                                    alt="Ligit Tree"
                                    width={350}
                                    height={400}
                                    className="drop-shadow-none"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-amber-400/40 to-transparent rounded-full blur-3xl -z-13"></div>
                            </div>
                        </div>

                        <div className="space-y-10 text-center md:text-left">
                            <p className="text-lg text-amber-700 font-medium tracking-widest">— Hello and Welcome —</p>

                            <HoverHeading as="h2" className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                                Start your career<br />in Liglit
                            </HoverHeading>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                We are a team that turns vision into action and ideas into impact.
                            </p>

                            <button className="bg-[#4b341d] text-[#fecd36] px-10 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-all shadow-xl hover:shadow-2xl">
                                View Open Careers
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <HoverHeading as='h2' className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Unlock your next career move.
                            </HoverHeading>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-18 max-w-5xl mx-auto">
                            {jobs.map((job, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-3xl shadow-xl p-8 border-l-8 ${job.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 justify-center flex-col`}
                                >
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-8">{job.desc}</p>
                                    <a
                                        href={job.route}
                                    > <button className="w-full bg-[#4b341d] text-[#fecd36] py-3 rounded-lg font-semibold hover:opacity-90 transition">
                                            View Description
                                        </button>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}