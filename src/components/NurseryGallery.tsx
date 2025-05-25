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
    const [isHoveringLeft, setIsHoveringLeft] = useState(false);
    const [isHoveringRight, setIsHoveringRight] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const galleryImages = [
        {
            title: "Playroom",
            desc: "A vibrant and engaging playroom filled with toys and activities.",
            img: "/gallery/playroom1.jpg"
        },
        {
            title: "Outdoor Area",
            desc: "Safe and fun outdoor space for children to explore and play.",
            img: "/gallery/outdoor1.jpg"
        },
        {
            title: "Learning Space",
            desc: "Dedicated area for learning and educational activities.",
            img: "/gallery/learning1.jpg"
        },
        {
            title: "Reading Corner",
            desc: "Cozy corner for storytelling and quiet activities.",
            img: "/gallery/reading1.jpg"
        }
    ];

    useEffect(() => {
        let scrollInterval: number;

        if (isHoveringLeft) {
            scrollInterval = window.setInterval(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft -= 5;
                }
            }, 16);
        } else if (isHoveringRight) {
            scrollInterval = window.setInterval(() => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft += 5;
                }
            }, 16);
        }

        return () => window.clearInterval(scrollInterval);
    }, [isHoveringLeft, isHoveringRight]);

    return (
        <section className="px-4 py-12 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-6">Nursery Gallery</h2>

                {/* Carousel Container with Navigation Areas */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6">
                    {/* Left Navigation Area */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-24 z-10 flex items-center justify-start pl-4 opacity-0 hover:opacity-100 transition-opacity"
                        onMouseEnter={() => setIsHoveringLeft(true)}
                        onMouseLeave={() => setIsHoveringLeft(false)}
                    >
                        <button
                            className="p-2 rounded-full bg-white shadow-lg text-[#0e181b] hover:bg-[#f0f5f7] transition-colors"
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Navigation Area */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-24 z-10 flex items-center justify-end pr-4 opacity-0 hover:opacity-100 transition-opacity"
                        onMouseEnter={() => setIsHoveringRight(true)}
                        onMouseLeave={() => setIsHoveringRight(false)}
                    >
                        <button
                            className="p-2 rounded-full bg-white shadow-lg text-[#0e181b] hover:bg-[#f0f5f7] transition-colors"
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
                        className="overflow-x-auto hide-scrollbar"
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