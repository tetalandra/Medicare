"use client";

import { Stethoscope, Baby, Brain, Activity, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Cardiology",
        description: "Comprehensive heart care including diagnostics, treatment, and rehabilitation.",
        icon: Heart,
    },
    {
        title: "Pediatrics",
        description: "Specialized care for infants, children, and adolescents.",
        icon: Baby,
    },
    {
        title: "Neurology",
        description: "Expert diagnosis and treatment for disorders of the nervous system.",
        icon: Brain,
    },
    {
        title: "General Medicine",
        description: "Primary care services for all ages, focusing on prevention and wellness.",
        icon: Stethoscope,
    },
    {
        title: "Ophthalmology",
        description: "Advanced eye care services including surgery and vision correction.",
        icon: Eye,
    },
    {
        title: "Diagnostics",
        description: "State-of-the-art laboratory and imaging services for accurate diagnosis.",
        icon: Activity,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Our Medical Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        We offer a wide range of specialized medical services to ensure you receive the best possible care.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500 transition-colors duration-300">
                                <service.icon className="h-7 w-7 text-sky-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
