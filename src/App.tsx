// App.tsx
import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero.tsx";
import { HeroSection } from "./components/HeroSection";
import { AboutMe } from "./components/AboutMe";
import { NurseryGallery } from "./components/NurseryGallery";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer.tsx";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f0f5f7] flex justify-center items-center p-4 md:p-8">
            <div className="w-full max-w-7xl bg-white rounded-[32px] overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] border border-[#e7f0f3]">
                <Header />
                <Hero />
                <AboutMe />
                <HeroSection />
                {/*
                <Testimonials />
*/}
                <NurseryGallery />
                <ContactMe />
                <Footer />
            </div>
        </div>
    );
};

export default App;