"use client";

import Image from "next/image";
import Link from "next/link";
import logo from '../../public/home/Logo.png';

import {
    CameraIcon,
    HandThumbUpIcon,
    ChatBubbleLeftRightIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/solid";

const icons: any = {
    instagram: CameraIcon,
    facebook: HandThumbUpIcon,
    twitter: ChatBubbleLeftRightIcon,
    linkedin: BriefcaseIcon
};

export default function Footer() {
    return (
        <footer className="bg-white border-t-4 border-amber-500">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src={logo}
                                alt="Ligit Logo"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                            <span className="text-2xl font-bold text-gray-900">Ligit.</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed max-w-xs">
                            At Ligit, we build powerful, modern software that helps
                            businesses grow faster. We deliver reliable, scalable
                            solutions tailored to your unique needs.
                        </p>

                        <div className="flex gap-4">
                            {["instagram", "facebook", "twitter", "linkedin"].map((platform) => {
                                const Icon = icons[platform];
                                return (
                                    <a
                                        key={platform}
                                        href="#"
                                        className="w-10 h-10 bg-amber-100 hover:bg-amber-600 text-amber-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                                    >
                                        <span className="sr-only">{platform}</span>
                                        <Icon className="w-5 h-5" title={platform} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-amber-600 font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            {[
                                "Home",
                                "Technologies",
                                "Services",
                                "Portfolio",
                                "Careers",
                                "About Us",
                                "Reach Us",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={
                                            item === "Home"
                                                ? "/"
                                                : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                                        }
                                        className="text-gray-600 hover:text-amber-600 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-amber-600 font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            {[
                                "Web & Mobile Development",
                                "API Development",
                                "UI Designing",
                                "Enterprise Product Development",
                                "System Designing",
                                "Database Designing",
                                "Database & Project Management",
                            ].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:block"></div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © 2025 Ligit. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-sm">
                        <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                            Terms and Services
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
