"use client";
import { useState } from "react";
import {
  MegaphoneIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  CheckCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

/**
 * importing components
 */
import HoverHeading from '@/components/HoverHeading';
import TopBar from '@/components/TopBar';

interface FormData {
  name: string;
  email: string;
  contact: string;
  gender: string;
  experience: string;
  resume: File | null;
}

export default function MarketingManagerPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    gender: "",
    experience: "",
    resume: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File size must be under 10MB" }));
        return;
      }
      setFormData((prev) => ({ ...prev, resume: file }));
      setSelectedFileName(file.name);
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Valid email is required";
    if (!formData.contact.match(/^\+?\d{10,16}$/)) newErrors.contact = "Valid contact (10-16 digits)";
    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.experience || Number(formData.experience) < 0) newErrors.experience = "Valid experience required";
    if (!formData.resume) newErrors.resume = "Please upload your resume";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Marketing Manager Application:", formData);
      setShowSuccess(true);
      setFormData({ name: "", email: "", contact: "", gender: "", experience: "", resume: null });
      setSelectedFileName("");
      setErrors({});
    }
  };

  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">

          <HoverHeading as='h1' className="text-center text-4xl md:text-5xl font-extrabold text-amber-600 mb-16 tracking-tight">
            Liglit Creations
          </HoverHeading>

          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">

            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <MegaphoneIcon className="w-8 h-8 text-amber-600" />
                </div>
                <HoverHeading as='h2' className="text-2xl md:text-3xl font-bold text-gray-900">
                  Marketing Manager
                </HoverHeading>
              </div>

              <p className="text-gray-600 mb-8 text-sm italic">
                Ensure you read the complete job details before applying.
              </p>

              <ul className="space-y-3">
                {[
                  "Develop and execute marketing strategies across digital channels.",
                  "Manage social media campaigns and content calendar.",
                  "Lead SEO/SEM initiatives and performance marketing.",
                  "Create compelling content for blogs, ads, and newsletters.",
                  "Analyze campaign performance using Google Analytics, Meta Ads, etc.",
                  "Plan and execute product launches and brand campaigns.",
                  "Collaborate with design and content teams for creative assets.",
                  "Manage marketing budget and ROI tracking.",
                  "Conduct market research and competitor analysis.",
                  "Build partnerships and influencer collaborations.",
                  "Organize events, webinars, and community engagement.",
                  "Improve brand visibility and customer acquisition.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-amber-500 font-bold mr-3 mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <HoverHeading as='h2' className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Liglit's Career Application Form
              </HoverHeading>
              <p className="text-center text-gray-600 mb-10">Fill your details here</p>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition"
                    placeholder="Enter your full name"
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
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact</label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 16) {
                        setFormData({ ...formData, contact: value });
                      }
                    }}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition"
                    placeholder="+91 98765 43210"
                    maxLength={16}
                  />
                  {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
                  <div className="flex gap-10">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-5 h-5 text-amber-600"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Female</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-5 h-5 text-amber-600"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Male</span>
                    </label>
                  </div>
                  {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Experience in Years</label>
                  <input
                    type="number"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-white text-black focus:border-amber-500 outline-none transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="e.g., 5"
                    min="0"
                    max="30"
                  />
                  {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Your Resume</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-amber-400 transition-all">
                    <DocumentTextIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                    <label className="cursor-pointer">
                      <span className="text-amber-600 font-bold underline">Browse</span>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                    </label>
                    {selectedFileName && (
                      <p className="mt-3 text-sm text-green-600 font-medium truncate max-w-xs mx-auto">
                        {selectedFileName}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX • Max 10MB</p>
                  </div>
                  {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <button
                    type="reset"
                    onClick={() => {
                      setFormData({ name: "", email: "", contact: "", gender: "", experience: "", resume: null });
                      setSelectedFileName("");
                      setErrors({});
                    }}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition"
                  >
                    <ArrowPathIcon className="w-5 h-5" />
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-4 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transform hover:scale-105 transition shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/careers">
              <button className="w-[220px] bg-[#4b341d] text-[#fecd36] py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center mx-auto">
                View all careers
                <ArrowUturnLeftIcon className="w-5 h-5 ml-2" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
          >
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">THANK YOU</h3>
            <p className="text-gray-600 mb-8">Form has been successfully submitted</p>

            <a href="/">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition shadow-md">
                Home
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}