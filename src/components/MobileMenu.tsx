import React from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onContactClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onContactClick }) => {
    const { handleNavClick } = useSmoothScroll();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        handleNavClick(e);
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Slide-out menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-[#e7f0f3]">
                        <h2 className="text-[#0e181b] text-lg font-bold">Menu</h2>
                        <button
                            onClick={onClose}
                            className="p-2 text-[#4e8597] hover:text-[#19b2e5] transition-colors"
                            aria-label="Close menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#home"
                                    className="block text-[#0e181b] text-base font-medium hover:text-[#19b2e5] transition-colors"
                                    onClick={handleLinkClick}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="block text-[#0e181b] text-base font-medium hover:text-[#19b2e5] transition-colors"
                                    onClick={handleLinkClick}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="block text-[#0e181b] text-base font-medium hover:text-[#19b2e5] transition-colors"
                                    onClick={handleLinkClick}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="block text-[#0e181b] text-base font-medium hover:text-[#19b2e5] transition-colors"
                                    onClick={handleLinkClick}
                                >
                                    Gallery
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact Button */}
                    <div className="p-4 border-t border-[#e7f0f3]">
                        <button
                            onClick={() => {
                                onContactClick();
                                onClose();
                            }}
                            className="w-full rounded-full h-12 bg-[#19b2e5] text-white text-base font-bold tracking-[0.015em] hover:bg-[#1497c4] transition-colors"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}; 