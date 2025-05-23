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
        <div className="min-h-screen bg-rgb(221 234 238) flex justify-center items-center p-4">
            <div className="w-full max-w-8xl rounded-[50px] border-1 bg-white overflow-hidden shadow-lg gap-10">
                <Header />
                <Hero />
                <HeroSection />
{/*
                <Testimonials />
*/}
                <AboutMe />
                <NurseryGallery />
                <ContactMe />
                <Footer />
            </div>
        </div>
    );
};

export default App;
