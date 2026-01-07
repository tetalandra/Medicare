"use client";

import Link from "next/link";
import { ArrowRight, Phone, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative bg-slate-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white z-0" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6">
                            Trusted by 10,000+ Families
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Compassionate Care, <span className="text-sky-500">Close to Home</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We believe that great healthcare starts with listening. Our dedicated team of specialists is here to provide personalized, expert care that puts you and your family first.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium shadow-lg shadow-sky-200"
                            >
                                Book an Appointment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="tel:+1234567890"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                            >
                                <Phone className="mr-2 h-5 w-5 text-sky-500" />
                                (555) 123-4567
                            </Link>
                        </div>
                        <div className="mt-12 flex items-center gap-8 text-slate-500">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">50+</p>
                                <p className="text-sm">Specialists</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">24/7</p>
                                <p className="text-sm">Emergency Care</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">15k+</p>
                                <p className="text-sm">Happy Patients</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="relative hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=2787&auto=format&fit=crop"
                                alt="Medical Team"
                                className="object-cover w-full h-full"
                            />
                            <motion.div
                                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <HeartPulse className="h-6 w-6 text-sky-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Top-Rated Care</h3>
                                        <p className="text-slate-600 text-sm">Voted #1 in Patient Satisfaction</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
