"use client";

import { useState } from "react";
import {
    CheckCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import image from "../../../public/reachus/image 16.png"

/**
 * importing need components
 */
import Footer from '@/components/Footer';
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(true);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Valid email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowSuccess(true);

        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
    };

    return (
        <>
            <TopBar />
            <div className="min-h-screen bg-linear-to-b from-amber-50 to-white py-16 px-4 mt-20">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <HoverHeading as="h1" className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                            Reach Us</HoverHeading>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Got questions or looking for assistance? Reach out to our team anytime
                            and we’ll be happy to help you right away.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition"
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition"
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition"
                                            placeholder="+91 98765 43210"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition"
                                            placeholder="How can we help?"
                                        />
                                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition resize-none"
                                        placeholder="Tell us more about your query..."
                                    />
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition transform hover:scale-105 shadow-lg"
                                >
                                    {isSubmitting ? "Sending..." : "Submit"}
                                </button>
                            </form>
                        </div>

                        <div className="hidden lg:flex justify-center items-center h-full bg-white">
                            <img
                                src={image.src}
                                alt="Support Team"
                                className="max-w-lg drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            {showSuccess && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 text-center relative 
                        animate-[popup_0.35s_ease-out]">

                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>

                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircleIcon className="w-14 h-14 text-green-600" />
                        </div>

                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                            THANK YOU
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Your message has been received. We’ll get back to you shortly.
                        </p>

                        <button
                            onClick={() => setShowSuccess(false)}
                            className="mt-8 px-10 py-3 bg-green-600 hover:bg-green-700 text-white 
                           font-semibold rounded-xl transition shadow-lg"
                        >
                            Home
                        </button>
                    </div>

                </div>
            )}
        </>
    );
}