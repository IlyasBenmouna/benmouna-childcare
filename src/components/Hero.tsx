export const Hero = () => {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                <div
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDVdEuoOKZlZ0ZBnOp_2q7MZPCeq_SuPBFBEwPdupO-hyDuODdOdpDAsLcoNBQtDmgHWxm5L7XUVSjf9bl_ofFYRekh0Ob5bO0401-clgSfWwES-0iYN7a4B-FXiqKNCPzFIIBROzLiOdBDx3FY1IoiwOQC7S1mWsU6Xw5VvXz5acAC_zWzqHT6LWSUozRqWxn-xuNlFwkXWI-4hRgdmTftzJgihdy6j3-ZWjmdPHEPQZR0hqjDpcZ5llMymbzEWuBiROYJjiI8POrB)',
                    }}
                >
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                            Benmouna Childcare
                        </h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                            Hi! I'm Badia Benmouna, a fully OFSTED-registered childminder with 23 years of experience. I provide care for children aged 6 months to 7 years in a loving and educational home environment.
                        </h2>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#19b2e5] text-[#0e181b] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Contact Me</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
