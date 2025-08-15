// pages/categories/[categorySlug].js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubFooter from '../../components/SubFooter';
import { getCategoryBySlug, getGeneratorsForCategory } from '../../data/categories';
import { generatorContentMap } from '../../data/generatorsData';

const CategoryPage = ({ category, generators }) => {
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Category Not Found</h1>
        <p className="text-lg mb-8">The category you are looking for does not exist.</p>
        <Link href="/" className="text-blue-400 hover:underline">
          Go back to homepage
        </Link>
      </div>
    );
  }

  const categoryKeywords = [...new Set(
    generators.flatMap(gen => (gen.keywords ? gen.keywords.split(',').map(k => k.trim()) : []))
  )].join(', ');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-inter overflow-x-hidden">
      <Head>
        <title>{category.name} - MarketProEdge AI Generators</title>
        <meta name="description" content={category.description} />
        <meta name="keywords" content={`${category.name}, AI tools, online generators, ${categoryKeywords}`} />
        <link rel="canonical" href={`https://www.marketproedge.com/categories/${category.slug}`} />
        <meta property="og:title" content={`${category.name} - MarketProEdge`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.marketproedge.com/categories/${category.slug}`} />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 overflow-x-hidden w-full">
        <nav className="text-sm text-gray-400 mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="text-blue-400 hover:underline">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/all-generators" className="text-blue-400 hover:underline">All Generators</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-300">
              {category.name}
            </li>
          </ol>
        </nav>

        <section className="bg-gray-850 p-6 sm:p-8 rounded-xl shadow-lg border border-blue-700 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4">
            {category.name}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            {category.description}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Explore {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {generators.map((gen) => (
              <Link
                key={gen.slug}
                href={`/generators/${gen.slug}`}
                className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-700 hover:border-blue-500 transform hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">{gen.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {generatorContentMap[gen.slug]?.description?.replace(/<[^>]*>?/gm, '').split('.')[0]}.
                  </p>
                </div>
                <span className="text-blue-400 text-sm font-medium hover:underline self-end mt-auto">
                  Generate Now &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export async function getStaticPaths() {
  const { categories } = await import('../../data/categories');

  // SUPER ROBUST FILTERING: Ensure only valid category objects with valid slugs are processed.
  const validCategories = categories.filter(category => {
    const isValid = typeof category === 'object' && category !== null &&
                    typeof category.slug === 'string' && category.slug.length > 0;
    if (!isValid) {
      // This log will appear in your terminal during the build process if a bad slug is found
      console.error(`ERROR: getStaticPaths filtered out an invalid category entry: ${JSON.stringify(category)}`);
    }
    return isValid;
  });

  const paths = validCategories.map((category) => {
    console.log(`DEBUG: Final path generation for category: ${category.name}, slug: '${category.slug}'`);
    return {
      params: { categorySlug: category.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { categorySlug } = params;
  
  const { getCategoryBySlug, getGeneratorsForCategory } = await import('../../data/categories');

  const category = getCategoryBySlug(categorySlug);
  const generators = getGeneratorsForCategory(categorySlug);

  return {
    props: {
      category,
      generators,
    },
  };
}

export default CategoryPage;
