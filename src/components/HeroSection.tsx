export const HeroSection = () => {
    return (
        <>
            <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5">
                Our Services
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {/* Card 1 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e1e7] p-4 flex-col">
                    <div className="text-[#0e181b]" data-icon="House" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor"
                             viewBox="0 0 256 256">
                            <path
                                d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#0e181b] text-base font-bold leading-tight">Home Nursery</h2>
                        <p className="text-[#4e8597] text-sm font-normal leading-normal">A warm and welcoming home
                            environment for your child.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e1e7]  p-4 flex-col">
                    <div className="text-[#0e181b]" data-icon="PuzzlePiece" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#0e181b] text-base font-bold leading-tight">Play-Based Learning</h2>
                        <p className="text-[#4e8597] text-sm font-normal leading-normal">
                            Engaging activities that promote learning through play.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e1e7] p-4 flex-col">
                    <div className="text-[#0e181b]" data-icon="BookOpen" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#0e181b] text-base font-bold leading-tight">Early Literacy</h2>
                        <p className="text-[#4e8597] text-sm font-normal leading-normal">
                            Developing a love for reading and language skills.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
