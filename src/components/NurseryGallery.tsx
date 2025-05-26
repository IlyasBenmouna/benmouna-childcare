import React, { useState, useRef, useEffect } from 'react';

interface ImageModalProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl"
                aria-label="Close modal"
            >
                ×
            </button>
            <img
                src={src}
                alt={alt}
                className="max-h-[90vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export const NurseryGallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const scrollSpeed = 2; // Pixels per frame
    const scrollThreshold = 0.2; // Percentage of container width for scroll zones
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 300; // Amount to scroll on button click

    const handleScroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const currentScroll = container.scrollLeft;
        const maxScroll = scrollWidth - clientWidth;

        let targetScroll = currentScroll + (direction === 'left' ? -scrollAmount : scrollAmount);

        // Ensure we don't scroll beyond bounds
        targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    const galleryImages = [
        {
            title: "Playroom Area",
            desc: "A bright and welcoming space for children to play and learn.",
            img: "/gallery/playroom1.jpg"
        },
        {
            title: "Outdoor Activities",
            desc: "Safe outdoor space for physical activities.",
            img: "/gallery/outdoor1.jpg"
        },
        {
            title: "Learning Space",
            desc: "Engaging educational activities for all ages.",
            img: "/gallery/learning1.jpg"
        },
        {
            title: "Reading Corner",
            desc: "Cozy space for storytelling and quiet activities.",
            img: "/gallery/reading1.jpg"
        },
        {
            title: "Play Area 1",
            desc: "Fun and educational play space for children.",
            img: "/gallery/image5.jpg"
        },
        {
            title: "Play Area 2",
            desc: "Interactive learning through play.",
            img: "/gallery/image6.jpg"
        },
        {
            title: "Play Area 3",
            desc: "Safe and engaging environment for children.",
            img: "/gallery/image7.jpg"
        },
        {
            title: "Play Area 4",
            desc: "Our main activity area for children.",
            img: "/gallery/image8.jpg"
        }
    ];

    useEffect(() => {
        let animationFrameId: number;
        const container = scrollContainerRef.current;

        if (container) {
            setContainerWidth(container.offsetWidth);
        }

        const scroll = () => {
            if (isHovering && container) {
                const mousePosition = mouseX / containerWidth;

                // Left scroll zone
                if (mousePosition < scrollThreshold) {
                    const scrollFactor = 1 - (mousePosition / scrollThreshold);
                    container.scrollLeft -= scrollSpeed * scrollFactor;
                }
                // Right scroll zone
                else if (mousePosition > (1 - scrollThreshold)) {
                    const scrollFactor = (mousePosition - (1 - scrollThreshold)) / scrollThreshold;
                    container.scrollLeft += scrollSpeed * scrollFactor;
                }

                animationFrameId = requestAnimationFrame(scroll);
            }
        };

        if (isHovering) {
            animationFrameId = requestAnimationFrame(scroll);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isHovering, mouseX, containerWidth]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (scrollContainerRef.current) {
            const rect = scrollContainerRef.current.getBoundingClientRect();
            setMouseX(e.clientX - rect.left);
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <section className="px-4 py-12 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">Nursery Gallery</h2>

                {/* Carousel Container with Navigation Areas */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6">
                    {/* Left Navigation Area */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-24 z-10 flex items-center justify-start pl-4 group"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleScroll('left');
                            }}
                            className="p-2 rounded-full bg-white shadow-lg text-[#0e181b] hover:bg-[#f0f5f7] transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Navigation Area */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-24 z-10 flex items-center justify-end pr-4 group"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleScroll('right');
                            }}
                            className="p-2 rounded-full bg-white shadow-lg text-[#0e181b] hover:bg-[#f0f5f7] transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Scroll right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto hide-scrollbar scroll-smooth"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="flex gap-6 pb-4">
                            {galleryImages.map((item, index) => (
                                <div key={index} className="flex-none w-[280px]">
                                    <div
                                        className="w-full h-[200px] bg-center bg-no-repeat bg-cover rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                        style={{ backgroundImage: `url(${item.img})` }}
                                        onClick={() => setSelectedImage(item.img)}
                                    ></div>
                                    <div className="mt-3">
                                        <p className="text-[#0e181b] text-base font-medium leading-normal">{item.title}</p>
                                        <p className="text-[#4e8597] text-sm font-normal leading-normal mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <ImageModal
                    src={selectedImage}
                    alt="Gallery image"
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </section>
    );
};