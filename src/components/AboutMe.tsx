export const AboutMe = () => (
    <section className="px-4 py-12 border-b border-[#e7f0f3]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Left Column - Profile */}
            <div className="flex flex-col md:flex-row gap-6 flex-1">
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-40 w-40 shrink-0 mx-auto md:mx-0 shadow-lg"
                    style={{
                        backgroundImage:
                            'url("https://i.imgur.com/HDIeOaM.png")'
                    }}
                ></div>
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-2">Badia Benmouna</h2>
                    <p className="text-[#4e8597] text-base font-normal leading-normal mb-4">OFSTED-Registered Childminder</p>
                    <p className="text-[#4e8597] text-base font-normal leading-normal">
                        My philosophy is to create a nurturing space where children feel secure, happy, and inspired to learn through play.
                        I work closely with parents to ensure each child's needs are met with care and attention.
                    </p>
                </div>
            </div>

            {/* Right Column - Info */}
            <div className="flex flex-col gap-8 flex-1">
                <div className="bg-[#f8fafc] rounded-xl p-6">
                    <h3 className="text-[#0e181b] text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Location & Hours</h3>
                    <div className="flex flex-col gap-3">
                        <p className="text-[#4e8597] text-base font-normal leading-normal flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z" />
                            </svg>
                            Located in Upney, Barking, London
                        </p>
                        <p className="text-[#4e8597] text-base font-normal leading-normal flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                            </svg>
                            Open Monday to Friday, 7:00 AM – 7:00 PM
                        </p>
                        <p className="text-[#4e8597] text-base font-normal leading-normal flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M240,192h-8V168a8,8,0,0,0-16,0v24H168V168a8,8,0,0,0-16,0v24H40a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,168V64a8,8,0,0,1,16,0V168a8,8,0,0,1-16,0Zm48-56v56a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm48,24v32a8,8,0,0,1-16,0V136a8,8,0,0,1,16,0Z" />
                            </svg>
                            Easy access from Upney Station
                        </p>
                    </div>
                </div>

                <div className="bg-[#f8fafc] rounded-xl p-6">
                    <h3 className="text-[#0e181b] text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Contact</h3>
                    <div className="flex flex-col gap-3">
                        <p className="text-[#4e8597] text-base font-normal leading-normal flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z" />
                            </svg>
                            07533 904 894
                        </p>
                        <p className="text-[#4e8597] text-base font-normal leading-normal flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.19V181.81Z" />
                            </svg>
                            badiabenmouna@hotmail.com
                        </p>
                        <p className="text-[#4e8597] text-base font-normal leading-normal mt-2">
                            If you're interested in arranging a visit or have questions, feel free to get in touch. I'd love to hear from you!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);