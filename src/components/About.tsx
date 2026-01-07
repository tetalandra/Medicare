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
                        <div className="aspect-square rounded-2xl overflow-hidden relative shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                                alt="Doctor with Patient"
                                className="object-cover w-full h-full"
                            />
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
                                    <p className="text-sm text-slate-500">Years of Service</p>
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
                            More Than Just a Clinic, <span className="text-sky-500">We Are a Community</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            At MediCare, we understand that visiting a doctor can be stressful. That's why we've created an environment that feels more like a home than a hospital. Our team takes the time to get to know you, listening to your concerns and explaining your options in plain language.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Patient-Centered Approach</h3>
                                    <p className="text-slate-600">Your comfort and understanding are our top priorities.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Experienced Specialists</h3>
                                    <p className="text-slate-600">Access to top-tier medical professionals across various fields.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-sky-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Transparent Pricing</h3>
                                    <p className="text-slate-600">No hidden fees. We believe in clear, upfront communication about costs.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
