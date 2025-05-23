export const AboutMe = () => (
    <section className="px-4 py-8">
        <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">About Me</h2>
        <div className="flex flex-row md:flex-row gap-4 items-center">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                    backgroundImage:
                        'url("https://i.imgur.com/HDIeOaM.png")'
                }}
            ></div>
            <div className="flex flex-col justify-center">
                <p className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em]">Badia Benmouna</p>
                <p className="text-[#4e8597] text-base font-normal leading-normal">Experienced Childcare Provider</p>
                <p className="text-[#4e8597] text-base font-normal leading-normal">
                    With over 10 years of experience in early childhood education, I am dedicated to providing a nurturing and stimulating environment for children to thrive. My approach
                    focuses on play-based learning, fostering creativity, and supporting each child's individual development.
                </p>
            </div>
        </div>
    </section>
);