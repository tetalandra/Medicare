import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <AppointmentForm />
      <Footer />
    </main>
  );
}
