import Link from "next/link";
import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <HeartPulse className="h-8 w-8 text-sky-500" />
                            <span className="font-bold text-xl text-white">MediCare</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Providing world-class healthcare services with a focus on patient comfort and safety. Your health is our priority.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-sky-500 transition-colors">Home</Link></li>
                            <li><Link href="#services" className="hover:text-sky-500 transition-colors">Services</Link></li>
                            <li><Link href="#doctors" className="hover:text-sky-500 transition-colors">Doctors</Link></li>
                            <li><Link href="#about" className="hover:text-sky-500 transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-sky-500 transition-colors">Cardiology</Link></li>
                            <li><Link href="#" className="hover:text-sky-500 transition-colors">Neurology</Link></li>
                            <li><Link href="#" className="hover:text-sky-500 transition-colors">Pediatrics</Link></li>
                            <li><Link href="#" className="hover:text-sky-500 transition-colors">Orthopedics</Link></li>
                            <li><Link href="#" className="hover:text-sky-500 transition-colors">Dental Care</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Contact Info</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-sky-500 flex-shrink-0" />
                                <span>123 Medical Center Dr,<br />Healthcare City, HC 12345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-sky-500 flex-shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-sky-500 flex-shrink-0" />
                                <span>info@medicare.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} MediCare. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
