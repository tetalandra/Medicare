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
                            Trusted by 10,000+ Patients
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Your Health is Our <span className="text-sky-500">Top Priority</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities. We are dedicated to providing personalized care for you and your family.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
                            >
                                Book Appointment
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
                        {/* Abstract visual representation since we don't have an image asset yet */}
                        <div className="relative w-full aspect-square rounded-full bg-sky-100/50 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/30 to-transparent rounded-full animate-pulse" />
                            <motion.div
                                className="w-3/4 h-3/4 bg-white rounded-2xl shadow-xl flex items-center justify-center p-8"
                                animate={{ rotate: [0, -6, 0] }}
                                transition={{
                                    rotate: {
                                        repeat: Infinity,
                                        duration: 5,
                                        ease: "easeInOut"
                                    }
                                }}
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-sky-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <HeartPulse className="h-8 w-8 text-sky-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Care</h3>
                                    <p className="text-slate-500">Leading medical professionals at your service</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
