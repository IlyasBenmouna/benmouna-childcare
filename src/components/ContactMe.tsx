import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            // Add your emailjs logic here
            setSuccess(true);
        } catch (err) {
            setError("Failed to send message. Please try again.");
        }
        setLoading(false);
    };

    return (
        <section className="px-4 py-12 flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Get in Touch</h2>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && <p className="text-red-600 text-center">{error}</p>}
                        {success && <p className="text-green-600 text-center">Thank you! We'll get back to you shortly.</p>}

                        <div className="space-y-2">
                            <label className="text-[#0e181b] text-base font-medium">Your Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border-none rounded-xl h-12 bg-[#e7f0f3] text-[#0e181b] px-4 text-base placeholder:text-[#4e8597] focus:ring-2 focus:ring-[#19b2e5] transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#0e181b] text-base font-medium">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border-none rounded-xl h-12 bg-[#e7f0f3] text-[#0e181b] px-4 text-base placeholder:text-[#4e8597] focus:ring-2 focus:ring-[#19b2e5] transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#0e181b] text-base font-medium">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                className="w-full border-none rounded-xl min-h-[120px] bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597] focus:ring-2 focus:ring-[#19b2e5] transition-all resize-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full h-12 bg-[#19b2e5] text-white text-base font-bold tracking-[0.015em] disabled:opacity-50 hover:bg-[#1497c4] transition-colors"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
