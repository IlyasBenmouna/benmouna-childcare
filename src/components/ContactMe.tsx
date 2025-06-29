import React, { useState } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export const ContactMe = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        // Clear submit status if form becomes valid
        if (Object.keys(newErrors).length === 0) {
            setSubmitStatus({ type: null, message: '' });
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }

        // Perform live validation for email field
        if (name === 'email' && value.trim()) {
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            if (!isValidEmail) {
                setErrors(prev => ({
                    ...prev,
                    email: 'Please enter a valid email address'
                }));
            } else {
                setErrors(prev => ({
                    ...prev,
                    email: undefined
                }));
            }
        }

        // Clear submit error status when user starts fixing issues
        if (submitStatus.type === 'error') {
            setSubmitStatus({ type: null, message: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in all required fields correctly.'
            });
            return;
        }

        setLoading(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Add your emailjs logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
            setSubmitStatus({
                type: 'success',
                message: 'Thank you! I will get back to you as soon as possible.'
            });
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } catch (err) {
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact directly.'
            });
        }
        setLoading(false);
    };

    return (
        <section id="contact-section" className="px-4 py-12 flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-[#0e181b] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Get in Touch</h2>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        {submitStatus.type && (
                            <div
                                className={`p-4 rounded-lg text-center ${submitStatus.type === 'success'
                                    ? 'bg-green-50 text-green-800'
                                    : 'bg-red-50 text-red-800'
                                    } transition-all duration-300 ease-in-out`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-[#0e181b] text-base font-medium" htmlFor="name">
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className={`w-full border-none rounded-xl h-12 bg-[#e7f0f3] text-[#0e181b] px-4 text-base placeholder:text-[#4e8597] focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-[#19b2e5]'
                                    } transition-all`}
                                required
                                aria-required="true"
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && (
                                <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#0e181b] text-base font-medium" htmlFor="email">
                                Your Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={`w-full border-none rounded-xl h-12 bg-[#e7f0f3] text-[#0e181b] px-4 text-base placeholder:text-[#4e8597] focus:ring-2 ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-[#19b2e5]'
                                    } transition-all`}
                                required
                                aria-required="true"
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && (
                                <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#0e181b] text-base font-medium" htmlFor="message">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                                className={`w-full border-none rounded-xl min-h-[120px] bg-[#e7f0f3] text-[#0e181b] p-4 text-base placeholder:text-[#4e8597] focus:ring-2 ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-[#19b2e5]'
                                    } transition-all resize-none`}
                                required
                                aria-required="true"
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            />
                            {errors.message && (
                                <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full h-12 bg-[#19b2e5] text-white text-base font-bold tracking-[0.015em] disabled:opacity-50 hover:bg-[#1497c4] transition-colors relative"
                        >
                            {loading ? (
                                <>
                                    <span className="opacity-0">Send Message</span>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </div>
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
