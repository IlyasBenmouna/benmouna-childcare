export const Footer = () => {

    return (
        <>
            <footer className="flex justify-center mb-2">
                <div className="flex max-w-[960px] flex-1 flex-col">
                    <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                        <div
                            className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                            <a className="text-[#4e8597] text-base font-normal leading-normal min-w-40" href="#">Privacy
                                Policy</a>
                            <a className="text-[#4e8597] text-base font-normal leading-normal min-w-40" href="#">Terms
                                of Service</a>
                        </div>
                        <p className="text-[#4e8597] text-base font-normal leading-normal">@2025 Benmouna Childcare. All
                            rights reserved.</p>
                    </footer>
                </div>
            </footer>
        </>
    )

}