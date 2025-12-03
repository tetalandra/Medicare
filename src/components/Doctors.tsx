"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";

const doctors = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        description: "20+ years of experience in cardiovascular medicine.",
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        description: "Specializing in complex neurological disorders and treatment.",
    },
    {
        name: "Dr. Emily Williams",
        specialty: "Pediatrician",
        description: "Dedicated to the health and well-being of children.",
    },
    {
        name: "Dr. James Wilson",
        specialty: "General Practitioner",
        description: "Expert in family medicine and preventive care.",
    },
];

export default function Doctors() {
    return (
        <section id="doctors" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                    >
                        Meet Our Specialists
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Our team of experienced doctors is dedicated to providing you with expert medical care.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center">
                                {/* Placeholder for doctor image */}
                                <User className="h-20 w-20 text-slate-400" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{doctor.name}</h3>
                                <p className="text-sky-500 font-medium text-sm mb-3">{doctor.specialty}</p>
                                <p className="text-slate-600 text-sm">
                                    {doctor.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
