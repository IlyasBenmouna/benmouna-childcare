import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all fields.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            await emailjs.send(
                "VITE_EMAILJS_SERVICE_ID",
                "VITE_EMAILJS_TEMPLATE_ID",
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                    to_email_1: "badiabenmouna@hotmail.com",
                    to_email_2: "i.benmouna@hotmail.com",
                },
                "VITE_EMAILJS_PUBLIC_KEY"
            );

            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setError("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="px-4 py-8 justify-self-center w-[70%] items-center">
            <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Contact Me</h2>
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">Thank you! We’ll get back to you shortly.</p>}

                <label className="flex flex-col">
                    <span className="text-[#0e181b] text-base font-medium pb-2">Your Name</span>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="border-none rounded-xl h-14 bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597]"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-[#0e181b] text-base font-medium pb-2">Your Email</span>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border-none rounded-xl h-14 bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597]"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-[#0e181b] text-base font-medium pb-2">Message</span>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="border-none rounded-xl min-h-36 bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597]"
                    />
                </label>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full h-10 bg-[#19b2e5] text-[#0e181b] text-sm font-bold tracking-[0.015em] disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};
