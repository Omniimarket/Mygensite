// pages/all-generators.js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import { getAllCategoriesWithGenerators } from '../data/categories';
import { generatorContentMap } from '../data/generatorsData';


const AllGeneratorsPage = ({ categoriesWithGenerators }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-inter overflow-x-hidden">
      <Head>
        <title>All AI Generators - MarketProEdge</title>
        <meta name="description" content="Browse and access all AI-powered generators on MarketProEdge. Find tools for names, writing, social media, fun, and more." />
        <meta name="keywords" content="all generators, AI tools, online tools, free generators, names, writing, content, social media, fun, utility, business, health, productivity" />
        <link rel="canonical" href="https://www.marketproedge.com/all-generators" />
        <meta property="og:title" content="All AI Generators - MarketProEdge" />
        <meta property="og:description" content="Browse and access all AI-powered generators on MarketProEdge. Find tools for names, writing, social media, fun, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.marketproedge.com/all-generators" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 overflow-x-hidden w-full">
        <section className="bg-gray-850 p-6 sm:p-8 rounded-xl shadow-lg border border-blue-700 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4">
            All AI Generators
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore our comprehensive collection of AI-powered tools, categorized for your convenience.
            Find the perfect generator for names, content, social media, and much more!
          </p>
        </section>

        {categoriesWithGenerators.map((category) => (
          <section key={category.slug} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
              <Link href={`/categories/${category.slug}`} className="hover:underline"> {/* Correct: uses category.slug */}
                {category.name} &rarr;
              </Link>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {category.generators.map((gen) => (
                <Link
                  key={gen.href}
                  href={`/generators${gen.href}`}
                  className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-700 hover:border-blue-500 transform hover:scale-[1.01] flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">{gen.name} Generator</h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {generatorContentMap[gen.href.substring(1)]?.description?.replace(/<[^>]*>?/gm, '').split('.')[0]}.
                    </p>
                  </div>
                  <span className="text-blue-400 text-sm font-medium hover:underline self-end mt-auto">
                    Generate Now &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export async function getStaticProps() {
  const { getAllCategoriesWithGenerators } = await import('../data/categories'); // Import here for build
  const categoriesWithGenerators = getAllCategoriesWithGenerators();
  return {
    props: {
      categoriesWithGenerators,
    },
  };
}

export default AllGeneratorsPage;
