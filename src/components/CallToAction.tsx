export const AboutMe = () => (
    <section className="px-4 py-8">
        <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">About Me</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                    backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASHehvp__16hQc3SqyshiB5Aggsv0MYnPW7BRWcLUcU_cvbG4bFhd1L2xktmcP7vrS8wZ-jxrmd4wTDMH-VlnpwPCs2vb4N6k6RyZKY1baOfcLI1iB6JuoUjngNZnDpPPYxsZDwP35hnWnZd0PwPbqyQk3mj86thau8teDu6Q3ii7GKEUnsTflEvlmXy23TOccD9rYRoVtQgyh0XYyNmM0ArDxSfE0x32r2OV04eSIoJiBUf4MzR2nfKkAICAqjo2c9o9RPSOWintb")'
                }}
            ></div>
            <div className="flex flex-col justify-center">
                <p className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em]">Sophia Bennett</p>
                <p className="text-[#4e8597] text-base font-normal leading-normal">Experienced Childcare Provider</p>
                <p className="text-[#4e8597] text-base font-normal leading-normal">
                    With over 10 years of experience in early childhood education, I am dedicated to providing a nurturing and stimulating environment for children to thrive. My approach
                    focuses on play-based learning, fostering creativity, and supporting each child's individual development.
                </p>
            </div>
        </div>
    </section>
);