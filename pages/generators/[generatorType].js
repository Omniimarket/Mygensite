// pages/generators/[generatorType].js

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubFooter from '../../components/SubFooter';
import LoadingSpinner from '../../components/LoadingSpinner';
import { generatorDetails, generatorContentMap } from '../../data/generatorsData';
import { categories } from '../../data/categories';

// Function to determine related generators
const getRelatedGenerators = (currentType) => {
  const allGeneratorEntries = Object.entries(generatorDetails);
  const related = [];
  const maxRelated = 3;

  const currentKeywords = generatorDetails[currentType]?.keywords?.split(',').map(k => k.trim().toLowerCase()) || [];
  const currentApiType = generatorDetails[currentType]?.apiType;

  const currentCategory = categories.find(cat => cat.generators.includes(currentType));
  if (currentCategory) {
    for (const slug of currentCategory.generators) {
      if (slug === currentType || related.length >= maxRelated) continue;
      const details = generatorDetails[slug];
      if (details) {
        related.push({
          name: details.title.replace(' Generator', ''),
          href: `/generators/${slug}`
        });
      }
    }
  }

  if (related.length < maxRelated) {
    for (const [key, value] of allGeneratorEntries) {
      if (key === currentType || related.some(gen => gen.href === `/generators/${key}`)) continue;
      const otherKeywords = value.keywords.split(',').map(k => k.trim().toLowerCase());
      const commonKeywords = currentKeywords.filter(k => otherKeywords.includes(k));
      if (commonKeywords.length > 0 || value.apiType === currentApiType) {
        related.push({
          name: value.title.replace(' Generator', ''),
          href: `/generators/${key}`
        });
        if (related.length >= maxRelated) break;
      }
    }
  }

  while (related.length < maxRelated && related.length < allGeneratorEntries.length - 1) {
    const randomIndex = Math.floor(Math.random() * allGeneratorEntries.length);
    const [key, value] = allGeneratorEntries[randomIndex];
    const existsInRelated = related.some(gen => gen.href === `/generators/${key}`);
    if (key !== currentType && !existsInRelated) {
      related.push({
        name: value.title.replace(' Generator', ''),
        href: `/generators/${key}`
      });
    }
  }

  return related;
};

// Main Component
const GeneratorPage = ({ generatorType }) => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const currentGeneratorDetails = generatorDetails[generatorType];
  const currentGeneratorContent = generatorContentMap[generatorType];

  if (!currentGeneratorDetails || !currentGeneratorContent) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Generator Not Found</h1>
        <p className="text-lg mb-8">The generator you are looking for does not exist.</p>
        <Link href="/" className="text-blue-400 hover:underline">Go back to homepage</Link>
      </div>
    );
  }

  const { title, keywords, promptLabel, placeholder, apiType } = currentGeneratorDetails;
  const { description, faq } = currentGeneratorContent;
  const relatedGenerators = getRelatedGenerators(generatorType);
  const category = categories.find(cat => cat.generators.includes(generatorType));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [generatorType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult('');
    setError(null);

    if (!prompt.trim()) {
      setError('Please enter some input to generate a result.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, type: apiType }),
      });

      if (!response.ok) throw new Error(`Failed to generate result: ${(await response.json()).error || 'Unknown error'}`);

      const data = await response.json();
      if (data.generatedText) setResult(data.generatedText);
      else setError('No result found. Please try a different prompt.');
    } catch (err) {
      console.error("Generation error:", err);
      setError(`Failed to generate result: ${err.message}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result)
        .then(() => console.log('Copied to clipboard!'))
        .catch(() => document.execCommand('copy') && console.log('Copied via execCommand!'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-inter overflow-x-hidden">
      <Head>
        <title>{title} - MarketProEdge AI Generators</title>
        <meta name="description" content={description.replace(/<[^>]*>?/gm, '')} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://www.marketproedge.com/generators/${generatorType}`} />
        <meta property="og:title" content={`${title} - MarketProEdge`} />
        <meta property="og:description" content={description.replace(/<[^>]*>?/gm, '')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.marketproedge.com/generators/${generatorType}`} />
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
            {category && (
              <li className="flex items-center">
                <Link href={`/categories/${category.slug}`} className="text-blue-400 hover:underline">{category.name}</Link>
                <span className="mx-2">/</span>
              </li>
            )}
            <li className="text-gray-300">{title}</li>
          </ol>
        </nav>

        <section className="bg-gray-850 p-6 sm:p-8 rounded-xl shadow-lg border border-blue-700 mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-400 mb-6">{title}</h1>
          <div className="text-gray-300 mb-8 text-left text-base leading-relaxed break-words w-full" dangerouslySetInnerHTML={{ __html: description }} />

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="mb-4">
              <label htmlFor="prompt-input" className="block text-blue-300 text-lg font-semibold mb-3">{promptLabel}</label>
              <textarea
                id="prompt-input"
                className="w-full p-4 bg-gray-700 border border-blue-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                rows="4"
                placeholder={placeholder}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                aria-label={promptLabel}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? <LoadingSpinner /> : `Generate ${title.replace(' Generator', '')}`}
            </button>
          </form>

          {error && (
            <div className="mt-8 p-4 bg-red-800 bg-opacity-30 border border-red-700 text-red-300 rounded-lg text-center">{error}</div>
          )}

          {result && (
            <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-inner border border-blue-700 animate-fade-in">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Generated Result:</h3>
              <div className="bg-gray-700 p-5 rounded-lg border border-blue-600 break-words whitespace-pre-wrap text-gray-200">{result}</div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleCopy}
                  className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
                >
                  Copy Result
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Explore Related Generators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedGenerators.map((gen, index) => (
              <Link key={`related-gen-${index}`} href={gen.href} className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-700 hover:border-blue-500 transform hover:scale-[1.01]">
                <h3 className="text-lg font-semibold text-blue-300 mb-1">{gen.name} Generator</h3>
                <p className="text-gray-400 text-xs">
                  {generatorContentMap[gen.href.replace('/generators/', '')]?.description
                    ?.replace(/<[^>]*>/g, '')
                    .split('.')[0]}.
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faq && faq.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-700">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">{item.question}</h3>
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

// ✅ Fixed: Use fallback: 'blocking' to allow runtime handling
export async function getStaticPaths() {
  const { generatorDetails } = require('../../data/generatorsData');
  const paths = Object.keys(generatorDetails).map((slug) => ({
    params: { generatorType: slug },
  }));

  return {
    paths,
    fallback: 'blocking', // ✅ Allows dynamic handling of old URLs
  };
}

// ✅ Fixed: Add redirect logic here
export async function getStaticProps({ params }) {
  const { generatorType } = params;

  try {
    const { generatorDetails } = require('../../data/generatorsData');

    // ✅ If valid generator under /generators/, render it
    if (generatorDetails[generatorType]) {
      return { props: { generatorType } };
    }

    // ✅ If accessed via old URL (e.g., /business-name-generator), redirect
    if (Object.keys(generatorDetails).includes(generatorType)) {
      return {
        redirect: {
          destination: `/generators/${generatorType}`,
          permanent: true,
        },
      };
    }

    // ✅ 404 for invalid slugs
    return { notFound: true };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
}

export default GeneratorPage;