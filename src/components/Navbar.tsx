"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <HeartPulse className="h-8 w-8 text-sky-500" />
                            <span className="font-bold text-xl text-slate-900">MediCare</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#services" className="text-slate-600 hover:text-sky-500 transition-colors">
                            Services
                        </Link>
                        <Link href="#doctors" className="text-slate-600 hover:text-sky-500 transition-colors">
                            Doctors
                        </Link>
                        <Link href="#about" className="text-slate-600 hover:text-sky-500 transition-colors">
                            About
                        </Link>
                        <Link href="#contact" className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors">
                            Book Appointment
                        </Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="#services"
                                className="block px-3 py-2 text-slate-600 hover:text-sky-500 hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="#doctors"
                                className="block px-3 py-2 text-slate-600 hover:text-sky-500 hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Doctors
                            </Link>
                            <Link
                                href="#about"
                                className="block px-3 py-2 text-slate-600 hover:text-sky-500 hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#contact"
                                className="block px-3 py-2 text-sky-500 font-medium hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
