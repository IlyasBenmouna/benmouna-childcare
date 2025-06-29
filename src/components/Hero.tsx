
export const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="hero-section" className="relative">
            {/* Hero Image */}
            <div className="relative h-[480px] md:h-[640px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDVdEuoOKZlZ0ZBnOp_2q7MZPCeq_SuPBFBEwPdupO-hyDuODdOdpDAsLcoNBQtDmgHWxm5L7XUVSjf9bl_ofFYRekh0Ob5bO0401-clgSfWwES-0iYN7a4B-FXiqKNCPzFIIBROzLiOdBDx3FY1IoiwOQC7S1mWsU6Xw5VvXz5acAC_zWzqHT6LWSUozRqWxn-xuNlFwkXWI-4hRgdmTftzJgihdy6j3-ZWjmdPHEPQZR0hqjDpcZ5llMymbzEWuBiROYJjiI8POrB)',
                    }}
                />

                {/* Ofsted Badge Overlay */}
                <div className="absolute hidden md:!block top-4 right-4 md:top-6 md:right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 p-3">
                            <img
                                src="/ofsted-good.png"
                                alt="Ofsted Good Provider Badge"
                                className={`h-16 w-auto`}
                            />
                            <div className="text-left">
                                <p className="text-[#0e181b] text-sm font-medium">Ofsted Registered</p>
                                <p className="text-[#4e8597] text-xs">Rated 'Good' Provider</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4">
                        Barking and Dagenham Childcare
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-2xl">
                        Hi! I'm Badia Benmouna, a fully OFSTED-registered childminder with 23 years of experience. I provide care for children aged 6 months to 7 years in a loving and educational home environment.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="inline-flex items-center justify-center min-w-[160px] h-12 px-6 bg-[#19b2e5] text-white text-base font-bold tracking-[0.015em] rounded-full hover:bg-[#1497c4] transition-colors"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    );
};
