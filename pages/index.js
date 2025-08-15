// pages/index.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import { categories, getAllCategoriesWithGenerators } from '../data/categories'; // Import categories and helper
import { generatorDetails } from '../data/generatorsData'; // Import generatorDetails for featured generators

// You would likely fetch these from an API or a local data file in a real app
// Now drawing from generatorDetails for featured generators.
// You can manually pick a set or use a logic to feature them.
const featuredGenerators = [
  // Using actual generator slugs that exist in generatorDetails
  { slug: "domain-name-generator", icon: "🌐", color: "blue", desc: "Find the perfect domain name for your website or business." },
  { slug: "company-name-generator", icon: "🏢", color: "green", desc: "Brainstorm professional and unique names for your new company." },
  { slug: "song-title-generator", icon: "🎵", color: "purple", desc: "Discover catchy and memorable titles to inspire your next musical hit." },
  { slug: "random-password-generator", icon: "🔑", color: "yellow", desc: "Create strong, secure, and unique passwords instantly." },
  { slug: "slogan-generator", icon: "💬", color: "red", desc: "Craft compelling and memorable slogans for your brand or campaign." },
  { slug: "fantasy-name-generator", icon: "✨", color: "teal", desc: "Generate unique and imaginative names for your fantasy characters." },
  { slug: "xbox-gamertag-generator", icon: "🎮", color: "orange", desc: "Find an epic and unique Gamertag for your Xbox profile." },
  { slug: "random-color-generator", icon: "🎨", color: "cyan", desc: "Discover random hex codes and RGB values for your designs." },
  { slug: "instagram-caption-generator", icon: "📸", color: "pink", desc: "Generate engaging captions for your Instagram posts." },
  { slug: "movie-title-generator", icon: "🎬", color: "indigo", desc: "Find captivating titles for your film projects." },
  { slug: "game-name-generator", icon: "🎮", color: "lime", desc: "Discover cool and unique names for your games." },
  { slug: "superhero-name-generator", icon: "🦸", color: "fuchsia", desc: "Create powerful and memorable names for your heroes." },
  // New Lottery Generators Added Below
  { slug: "powerball-generator", icon: "🎱", color: "red", desc: "Generate random numbers for your next Powerball ticket." },
  { slug: "mega-millions-generator", icon: "💰", color: "green", desc: "Generate random numbers for your next Mega Millions ticket." },
  { slug: "pick-5-generator", icon: "🔢", color: "purple", desc: "Generate 5 random numbers for Pick 5 lottery games." },
  { slug: "fantasy-5-generator", icon: "🍀", color: "teal", desc: "Generate 5 random numbers for Fantasy 5 lottery games." },
];


const HomePage = ({ featuredGenerators, allCategories }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>MarketProEdge - Your Source for Creative AI Tools</title>
        <meta name="description" content="Generate unique business names, creative content, catchy slogans, and more with our AI-powered tools. Boost your creativity instantly!" />
        <meta name="keywords" content="AI generator, name generator, content ideas, free tools, Gemini API, business names, slogans, passwords, writing prompts, categories, creative tools" />
        <link rel="icon" href="/favicon.ico" />
        {/* Canonical tag for Homepage */}
        <link rel="canonical" href="https://www.marketproedge.com/" />
        {/* AdSense Auto Ads Script is preferably in _document.js or _app.js */}
        {/* This script here will also work, but putting it in _document.js or _app.js is usually better for site-wide auto-ads */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" crossOrigin="anonymous"></script> */}
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl shadow-xl mb-12 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">Unlock Creativity with Our AI-Powered Generators</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Generate unique names, compelling content, fresh ideas, and more instantly with the power of AI.</p>
          <Link href="/all-generators" className="bg-white text-blue-700 hover:bg-blue-100 px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">Explore All Generators</Link>
        </section>

        {/* AdSense Ad Units Removed */}
        {/*
        <div className="ad-placeholder h-32 w-full max-w-4xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mb-12 shadow-inner">
          [AdSense Ad Unit - Horizontal Banner]
        </div>
        */}

        {/* "Featured Generators" Section */}
        <section id="featured-generators" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-white-800">Our Top AI Generators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredGenerators.map((gen, index) => (
              // Use gen.slug for the href and access generatorDetails for the name - UPDATED LINK
              <Link key={index} href={`/generators/${gen.slug}`} className={`generator-card bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-blue-700 hover:shadow-xl hover:border-${gen.color}-500 transform hover:scale-[1.02] transition-all duration-300 ease-in-out`}>
                <div className={`text-${gen.color}-400 text-6xl mb-4`}>{gen.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-blue-300">{generatorDetails[gen.slug].title}</h3>
                <p className="text-gray-400 mb-6">{gen.desc}</p>
                <span className={`bg-gradient-to-r from-${gen.color}-600 to-${gen.color}-700 text-white px-6 py-3 rounded-full text-md font-semibold hover:from-${gen.color}-700 hover:to-${gen.color}-800 transition-colors shadow-md`}>Generate Now</span>
              </Link>
            ))}
          </div>
        </section>

        {/* New "Browse by Category" Section */}
        <section id="categories" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-white-800">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCategories.map((cat, index) => (
              <Link key={index} href={`/categories/${cat.slug}`} className="category-card bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-purple-700 hover:shadow-xl hover:border-purple-500 transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
                {/* You can add an icon for each category here if desired */}
                <h3 className="text-2xl font-bold mb-4 text-purple-300">{cat.name}</h3>
                <p className="text-gray-400 mb-6">{cat.description}</p>
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full text-md font-semibold hover:from-purple-700 hover:to-purple-800 transition-colors shadow-md">View Category</span>
              </Link>
            ))}
          </div>
        </section>


       {/* AdSense Ad Units Removed */}
        {/*
        <div className="ad-placeholder h-24 w-full max-w-3xl mx-auto my-12 bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm shadow-inner">
          [AdSense Ad Unit - Responsive Rectangle]
        </div>

        <div className="ad-placeholder h-32 w-full max-w-4xl mx-auto mt-12 mb-8 bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm shadow-inner">
          [AdSense Ad Unit - Large Rectangle]
        </div>
        */}
      </main>

      <Footer /> {/* Main generator links footer */}
      <SubFooter /> {/* Legal/about links footer */}
    </div>
  );
};

export async function getStaticProps() {
  // Pass featuredGenerators and allCategories to the HomePage component
  const allCategories = categories.map(cat => ({
      name: cat.name,
      slug: cat.slug,
      description: cat.description
  }));

  return {
    props: {
      featuredGenerators, // From the local constant
      allCategories,      // The new categories data
    },
    // revalidate: 3600, // Optional: re-generate page every hour if featuredGenerators or categories change
  };
}

export default HomePage;
