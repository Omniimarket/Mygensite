import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>Contact Us - AI Generator Hub</title>
        <meta name="description" content="Have questions or feedback? Contact the AI Generator Hub team. We're here to help!" />
        <meta name="keywords" content="contact us, support, feedback, AI Generator Hub, help" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl mb-12 border border-blue-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 leading-tight drop-shadow-lg">Contact Us</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            We'd love to hear from you! Whether you have a question, feedback, or a suggestion for a new generator, feel free to reach out.
          </p>

          <div className="max-w-xl mx-auto bg-gray-700 p-8 rounded-lg shadow-md border border-blue-600">
            <h2 className="text-2xl font-bold text-blue-300 mb-6 text-center">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-200 text-lg font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 text-lg font-semibold mb-2">Your Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-200 text-lg font-semibold mb-2">Your Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y placeholder-gray-400" placeholder="Type your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center mt-12 text-lg text-gray-300">
            <p>Alternatively, you can reach us at:</p>
            <p className="font-semibold text-blue-400">support@aigeneratorhub.com</p>
          </div>

          <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mt-12 shadow-inner">
            [AdSense Ad Unit - Contact Page]
          </div>
        </section>
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export default ContactPage;
