

import React, { useState } from "react";

import Section from "./Section.jsx";
import { sendMessage } from "../api";


const Contact = React.forwardRef(({ id }, ref) => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' }); // Can be 'success' or 'error'

    const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });






     const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            await sendMessage(formData);
            setSubmitStatus({ type: 'success', message: 'Thank you for your message! I will get back to you shortly.' });
            setFormData({ name: "", email: "", message: "" }); // Clear form on success
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };






  return (
    <Section ref={ref} id={id} title="Contact Me">
      <div className="max-w-2xl mx-auto p-8 bg-white/10 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-lg">
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
            ></textarea>
          </div>
          <div className="text-center">
            <p>If you are living inside Iran, please make sure to connect through a VPN to send the email !</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-8 py-3 bg-accent text-text-accent font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {submitStatus.message && (
            <p className={`text-center mt-4 ${
                submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}>
                {submitStatus.message}
            </p>
        )}
        </form>
      </div>
    </Section>
  );
});


export default Contact;
