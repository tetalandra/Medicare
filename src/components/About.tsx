"use client";

import { CheckCircle, Award, Clock, Shield } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden relative">
                            {/* Placeholder for about image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
                                <span className="text-lg font-medium">About Us Image</span>
                            </div>
                        </div>
                        <motion.div
                            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden lg:block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                                    <Award className="h-6 w-6 text-sky-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">15+</p>
                                    <p className="text-sm text-slate-500">Years Experience</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Leading the Way in <span className="text-sky-500">Medical Excellence</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            At MediCare, we are committed to providing the highest quality healthcare services to our community. Our team of dedicated professionals works tirelessly to ensure your well-being.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Modern Technology</h3>
                                    <p className="text-slate-600">We use the latest medical technology for accurate diagnosis and treatment.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Professional Doctors</h3>
                                    <p className="text-slate-600">Our team consists of highly qualified and experienced medical specialists.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Affordable Care</h3>
                                    <p className="text-slate-600">We believe quality healthcare should be accessible to everyone.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
