"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";

const doctors = [
    {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        description: "Sarah believes in a holistic approach to heart health, focusing on lifestyle changes alongside medical treatment.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Dr. Michael Chen",
        specialty: "Neurologist",
        description: "With a passion for solving complex medical puzzles, Michael is dedicated to finding the best solutions for his patients.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Dr. Emily Williams",
        specialty: "Pediatrician",
        description: "Emily's warm and friendly nature makes her a favorite among children and parents alike.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Dr. James Wilson",
        specialty: "General Practitioner",
        description: "James takes the time to listen to his patients, ensuring they feel heard and understood.",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2128&auto=format&fit=crop"
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
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{doctor.name}</h3>
                                <p className="text-sky-500 font-medium text-sm mb-3">{doctor.specialty}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">
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
