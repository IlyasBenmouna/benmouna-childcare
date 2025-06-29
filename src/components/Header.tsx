export const Header = () => {
    return (
        <header className="flex items-center justify-between border-b border-solid border-b-[#e7f0f3] px-4 py-3 md:px-10">
            <div className="flex items-center gap-4 text-[#0e181b] mx-auto md:mx-0">
                <div className="size-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h2 className="text-[#0e181b] text-lg font-bold leading-tight tracking-[-0.015em]">Benmouna Childcare</h2>
            </div>

            {/* Hide this part on small screens */}
            <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <a className="text-[#0e181b] text-sm font-medium leading-normal" href="#">Home</a>
                    <a className="text-[#0e181b] text-sm font-medium leading-normal" href="#">Services</a>
                    <a className="text-[#0e181b] text-sm font-medium leading-normal" href="#">About</a>
                </div>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#19b2e5] text-[#0e181b] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Contact Me</span>
                </button>
            </div>
        </header>
    );
};
