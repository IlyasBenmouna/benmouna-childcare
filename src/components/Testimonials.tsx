export const Testimonials = () => {
    return (
        <>
            <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Testimonials
            </h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
                {[
                    {
                        name: "Emily Carter",
                        date: "2023-08-15",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuDW7xfqS9dRj6iYg3Qzp72ra7mORLbDbaBhZGs6Rjb6kv03_Jzo4l0UBGD3kKwWzF7y5NVFAn5NS739qZkjTqiHrwQrO9tn0siTGWemqicU8RmxnRuyIjRuE5dcl9tiDlHLi4rLaHUmnL-Eo4xcdDUTAhERdvHhMsGcZdPS2PuD0rPAT7bLxrKZf4d64J2pKOF3rCrbV6ePvcJuHxP-Mh82Gq6a4RKkY0ToHlNbx6nTp01nYILRL_3n0fnpx556adSjS2wWpTBJnaH5",
                        review:
                            "My daughter has been attending Little Sprouts for a year now, and we couldn't be happier. The staff is incredibly caring and attentive, and my daughter has thrived in their play-based learning environment. I highly recommend Little Sprouts to any parent looking for quality childcare.",
                        likes: 5,
                        dislikes: 1,
                    },
                    {
                        name: "David Thompson",
                        date: "2023-09-20",
                        image:
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuCG1y5jQFnUostSNMtksfHhoaHl8O_wmAunLC7EkOomCwHv1IqFHX_ykzd3swl0nn0m8WqHI_-0TpvVh6uD_CjLVDPDV1vFKoQ5ZRccCSv0Wp4phHSZeiNg0ONTVTR_V-8e4lzrl-UIG4dQ9HBDz2OpeYDyz2fPyVfaXeXJf4hqWcLg-ljmBHS2D4xU3CR3CyukKVgTvzsLWbllIzAAFpEifH4rVitArw0VO9h0KVM06dC-v2JKilH60NrFMmT3wU6M1PAzhnK_7HZc",
                        review:
                            "Little Sprouts has been an amazing experience for our son. He’s made so many friends and loves his teachers. The curriculum is well thought out and engaging.",
                        likes: 3,
                        dislikes: 0,
                    },
                ].map((testimonial, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{ backgroundImage: `url("${testimonial.image}")` }}
                            ></div>
                            <div className="flex-1">
                                <p className="text-[#0e181b] text-base font-medium leading-normal">
                                    {testimonial.name}
                                </p>
                                <p className="text-[#4e8597] text-sm font-normal leading-normal">
                                    {testimonial.date}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className="text-[#19b2e5]"
                                    data-icon="Star"
                                    data-size="20px"
                                    data-weight="fill"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l59.44,5.15A16,16,0,0,1,234.5,114.38Z" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <p className="text-[#0e181b] text-base font-normal leading-normal">
                            {testimonial.review}
                        </p>
                        <div className="flex gap-9 text-[#4e8597]">
                            <button className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z" />
                                </svg>
                                <p>{testimonial.likes}</p>
                            </button>
                            <button className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z" />
                                </svg>
                                <p>{testimonial.dislikes}</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
