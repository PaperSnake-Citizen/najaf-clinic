import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Doctor from "./components/Doctor";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import BookingForm from "./components/BookingForm";
import Hours from "./components/Hours";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Doctor />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <HowItWorks />
        <Reveal>
          <BookingForm />
        </Reveal>
        <Reveal>
          <Hours />
        </Reveal>
        <Reveal>
          <Location />
        </Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
