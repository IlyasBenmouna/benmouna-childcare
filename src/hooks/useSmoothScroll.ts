import { useCallback } from 'react';

export const useSmoothScroll = () => {
    const scrollToSection = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 80; // Account for fixed header height
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, []);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href && href !== '#') {
            const sectionId = href.replace('#', '');
            scrollToSection(sectionId);
        } else if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [scrollToSection]);

    return {
        scrollToSection,
        handleNavClick
    };
}; 