// pages/contact.js
import React from 'react';
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us - IIIT Raichur</title>
            </Head>

            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

                {/* Contact Form */}
                <div className="bg-black border border-gray-700 shadow-lg rounded-lg p-8 w-full max-w-md">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="mt-10 w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                    <div className="relative h-64 bg-gray-800 rounded-md shadow-inner">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.773570920123!2d77.36338237498393!3d16.248677184457144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d17abbd87b87%3A0x28afde55f519a10b!2sIndian%20Institute%20of%20Information%20Technology%2C%20Raichur!5e1!3m2!1sen!2sin!4v1734286799391!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-md"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
