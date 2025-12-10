"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../../public/home/Logo.png';

const navItems = [
  "Home",
  "Technologies",
  "Services",
  "Portfolio",
  "Careers",
  "About Us",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getHref = (item: string) =>
    item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;

  const isActive = (item: string) => {
    const href = getHref(item);
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-8 py-2 flex items-center justify-between">

        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Liglit Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex space-x-10">
            {navItems.map((item) => {
              const active = isActive(item);
              const href = getHref(item);

              return (
                <Link
                  key={item}
                  href={href}
                  className={`font-semibold transition-colors ${active
                      ? "text-[#fecd36]"
                      : "text-[#4b341d] hover:text-[#fecd36]"
                    }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <button className="bg-[#4b341d] text-[#fecd36] px-6 py-3 rounded-xl shadow-lg font-semibold hover:opacity-90 transition">
            <a href="reach-us">Reach Us</a>
          </button>
        </div>

        <div className="flex md:hidden items-center space-x-4">
          {!open && (
            <button className="bg-[#4b341d] text-[#fecd36] px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">
              <a href="reach-us">Reach Us</a>
            </button>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="text-[#4b341d]"
            aria-label="Toggle Menu"
          >
            {open ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col space-y-4 px-8">
          {navItems.map((item) => {
            const href = getHref(item);
            return (
              <Link
                key={item}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-semibold transition ${isActive(item)
                    ? "text-[#fecd36]"
                    : "text-[#4b341d] hover:text-[#fecd36]"
                  }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="px-8 mt-4">
          <button className="bg-[#4b341d] text-[#fecd36] w-full py-3 rounded-xl shadow-md font-semibold">
            <a href="reach-us">Reach Us</a>
          </button>
        </div>
      </div>
    </header>
  );
}
