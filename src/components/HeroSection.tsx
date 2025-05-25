export const HeroSection = () => {
    return (
        <>
            <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5">
                Our Services
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {/* Full-Day Childcare */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e1e7] p-4 flex-col">
                    <div className="text-[#0e181b]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h40A8,8,0,0,1,176,128Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#0e181b] text-base font-bold leading-tight">Full-Day Childcare</h2>
                        <p className="text-[#4e8597] text-sm font-normal leading-normal">7:00 AM – 7:00 PM</p>
                    </div>
                </div>

                {/* After School Pickup */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e1e7] p-4 flex-col">
                    <div className="text-[#0e181b]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M240,128a8,8,0,0,1-8,8H216v64a8,8,0,0,1-16,0V136H160a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v32h32V56a8,8,0,0,1,16,0v64h16A8,8,0,0,1,240,128ZM144,96v40a48.05,48.05,0,0,1-48,48c-26.47,0-48-21.53-48-48V96A48.05,48.05,0,0,1,96,48c26.47,0,48,21.53,48,48ZM96,168a32,32,0,0,0,32-32V96A32,32,0,0,0,96,64,32,32,0,0,0,64,96v40A32,32,0,0,0,96,168ZM56,96v40a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#0e181b] text-base font-bold leading-tight">After School Pickup</h2>
                        <p className="text-[#4e8597] text-sm font-normal leading-normal">Safe transport from school</p>
                    </div>
                </div>

                {/* Healthy Meals */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e1e7] p-4 flex-col">
                    <div className="text-[#0e181b]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M224,104h-8V88a8,8,0,0,0-16,0v16H168V88a8,8,0,0,0-16,0v16H120V88a8,8,0,0,0-16,0v16H72V88a8,8,0,0,0-16,0v16H48V88a8,8,0,0,0-16,0v16H24A16,16,0,0,0,8,120v48a16,16,0,0,0,16,16h8v16a8,8,0,0,0,16,0V184H80v16a8,8,0,0,0,16,0V184h32v16a8,8,0,0,0,16,0V184h32v16a8,8,0,0,0,16,0V184h8a16,16,0,0,0,16-16V120A16,16,0,0,0,224,104Zm0,64H24V120H224Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#0e181b] text-base font-bold leading-tight">Healthy Meals</h2>
                        <p className="text-[#4e8597] text-sm font-normal leading-normal">Nutritious meals provided</p>
                    </div>
                </div>

                {/* Learning Through Play */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d0e1e7] p-4 flex-col">
                    <div className="text-[#0e181b]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[#0e181b] text-base font-bold leading-tight">Learning Through Play</h2>
                        <p className="text-[#4e8597] text-sm font-normal leading-normal">Structured activities & play</p>
                    </div>
                </div>
            </div>
        </>
    );
};
