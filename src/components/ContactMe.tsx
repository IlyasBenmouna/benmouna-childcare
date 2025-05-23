export const ContactMe = () => (
    <section className="px-4 py-8 justify-self-center w-[70%] items-center">
        <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Contact Me</h2>
        <form className="space-y-6 w-full">
            <label className="flex flex-col">
                <span className="text-[#0e181b] text-base font-medium pb-2">Your Name</span>
                <input
                    placeholder="Enter your name"
                    className="border-none rounded-xl h-14 bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597]"
                />
            </label>
            <label className="flex flex-col">
                <span className="text-[#0e181b] text-base font-medium pb-2">Your Email</span>
                <input
                    placeholder="Enter your email"
                    className="border-none rounded-xl h-14 bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597]"
                />
            </label>
            <label className="flex flex-col">
                <span className="text-[#0e181b] text-base font-medium pb-2">Message</span>
                <textarea
                    placeholder="Enter your message"
                    className="border-none rounded-xl min-h-36 bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597]"
                ></textarea>
            </label>
            <button
                type="submit"
                className="w-full rounded-full h-10 bg-[#19b2e5] text-[#0e181b] text-sm font-bold tracking-[0.015em]"
            >
                Send Message
            </button>
        </form>
    </section>
);
