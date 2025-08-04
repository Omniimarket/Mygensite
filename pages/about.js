import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>About Us - MarketProEdge</title>
        <meta name="description" content="Learn more about AI Generator Hub, our mission to spark creativity with AI, and the team behind our innovative tools." />
        <meta name="keywords" content="about us, AI Generator Hub, mission, vision, team, AI tools" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl mb-12 border border-blue-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 leading-tight drop-shadow-lg">About MarketProEdge</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            Welcome to Marketproedge, your ultimate destination for unleashing creativity and boosting productivity with the power of artificial intelligence. We believe that everyone deserves access to innovative tools that can spark new ideas, simplify tasks, and make the creative process more enjoyable.
          </p>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            Our mission is to provide a diverse collection of AI-powered generators, from crafting the perfect business name to composing unique poetry, all designed with user-friendliness and efficiency in mind. We're constantly working to expand our offerings and refine our tools to meet your evolving needs.
          </p>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto text-center">
            Thank you for choosing MarketProedge. We're excited to be a part of your creative journey!
          </p>

          <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mt-8 shadow-inner">
            [AdSense Ad Unit - About Page]
          </div>
        </section>
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export default AboutPage;
