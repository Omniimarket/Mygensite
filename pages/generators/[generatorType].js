// pages/generators/[generatorType].js (NEW PATH: pages/generators/ )

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SubFooter from '../../components/SubFooter';
import LoadingSpinner from '../../components/LoadingSpinner';
import { generatorDetails, generatorContentMap } from '../../data/generatorsData'; // Import from centralized data
import { categories } from '../../data/categories'; // Import categories for breadcrumbs or related linking

// Function to determine related generators based on the current generatorType
const getRelatedGenerators = (currentType) => {
  const allGeneratorEntries = Object.entries(generatorDetails);
  const related = [];
  const maxRelated = 3; // Limit the number of related generators

  const currentKeywords = generatorDetails[currentType]?.keywords?.split(',').map(k => k.trim().toLowerCase()) || [];
  const currentApiType = generatorDetails[currentType]?.apiType;

  // Try to find generators from the same category first
  const currentCategory = categories.find(cat => cat.generators.includes(currentType));
  if (currentCategory) {
    for (const slug of currentCategory.generators) {
      if (slug === currentType) continue;
      if (related.length >= maxRelated) break;
      const details = generatorDetails[slug];
      if (details) {
        related.push({
          name: details.title.replace(' Generator', ''),
          href: `/generators/${slug}` // Updated link for related generators
        });
      }
    }
  }

  // If not enough related generators from the same category, use general keyword/apiType matching
  if (related.length < maxRelated) {
    for (const [key, value] of allGeneratorEntries) {
      if (key === currentType || related.some(gen => gen.href === `/generators/${key}`)) continue; // Skip current and already added

      const otherKeywords = value.keywords.split(',').map(k => k.trim().toLowerCase());
      const commonKeywords = currentKeywords.filter(keyword => otherKeywords.includes(keyword));

      if (commonKeywords.length > 0 || value.apiType === currentApiType) {
        related.push({
          name: value.title.replace(' Generator', ''),
          href: `/generators/${key}` // Updated link for related generators
        });
        if (related.length >= maxRelated) break;
      }
    }
  }

  // If still not enough, pick some random ones
  while (related.length < maxRelated && related.length < allGeneratorEntries.length - 1) {
    const randomIndex = Math.floor(Math.random() * allGeneratorEntries.length);
    const [key, value] = allGeneratorEntries[randomIndex];
    const existsInRelated = related.some(gen => gen.href === `/generators/${key}`);

    if (key !== currentType && !existsInRelated) {
      related.push({
        name: value.title.replace(' Generator', ''),
        href: `/generators/${key}` // Updated link for related generators
      });
    }
  }

  return related;
};

// Main GeneratorPage component
const GeneratorPage = ({ generatorType }) => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get details for the current generator type from generatorDetails (for title, promptLabel etc.)
  const currentGeneratorDetails = generatorDetails[generatorType];
  // Get the actual content (description, FAQ) from the content map
  const currentGeneratorContent = generatorContentMap[generatorType];

  // Fallback if generatorType is not found (e.g., direct access to /non-existent-generator)
  if (!currentGeneratorDetails || !currentGeneratorContent) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Generator Not Found</h1>
        <p className="text-lg mb-8">The generator you are looking for does not exist.</p>
        <Link href="/" className="text-blue-400 hover:underline">
          Go back to homepage
        </Link>
      </div>
    );
  }

  const { title, keywords, promptLabel, placeholder, apiType } = currentGeneratorDetails;
  const { description, faq } = currentGeneratorContent; // Destructure description and faq from the content file
  const relatedGenerators = getRelatedGenerators(generatorType);

  // Determine the category for breadcrumbs
  const category = categories.find(cat => cat.generators.includes(generatorType));

  useEffect(() => {
    // Scroll to top on generator type change
    window.scrollTo(0, 0);
  }, [generatorType]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult('');
    setError(null);

    // Basic prompt validation
    if (!prompt.trim()) {
      setError('Please enter some input to generate a result.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt, type: apiType }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API error details from /api/generate:", errorData);
        throw new Error(`Failed to generate result: ${errorData.error || errorData.message || 'Unknown error'}`);
      }

      const data = await response.json();

      if (data.generatedText) {
        setResult(data.generatedText);
      } else {
        setError('No result found from your API. Please try a different prompt.');
      }
    } catch (err) {
      console.error("Generation error (calling /api/generate):", err);
      setError(`Failed to generate result: ${err.message}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result)
        .then(() => {
          console.log('Result copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          document.execCommand('copy');
          console.log('Result copied via document.execCommand!');
        });
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-inter overflow-x-hidden">
      <Head>
        <title>{title} - MarketProEdge AI Generators</title>
        <meta name="description" content={description.replace(/<[^>]*>?/gm, '')} />
        <meta name="keywords" content={keywords} />
        {/* Canonical tag for the individual generator page - UPDATED PATH */}
        <link rel="canonical" href={`https://www.marketproedge.com/generators/${generatorType}`} />
        <meta property="og:title" content={`${title} - MarketProEdge`} />
        <meta property="og:description" content={description.replace(/<[^>]*>?/gm, '')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.marketproedge.com/generators/${generatorType}`} />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 overflow-x-hidden w-full">
        {/* Breadcrumbs for better navigation and SEO */}
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
                <Link href={`/categories/${category.slug}`} className="text-blue-400 hover:underline">
                  {category.name}
                </Link>
                <span className="mx-2">/</span>
              </li>
            )}
            <li className="text-gray-300">
              {title}
            </li>
          </ol>
        </nav>

         {/* AdSense Ad Units Removed */}
        {/*
        <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mb-8 shadow-inner">
          [AdSense Ad Unit - Top of Generator]
        </div>
        */}

        <section className="bg-gray-850 p-6 sm:p-8 rounded-xl shadow-lg border border-blue-700 mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-400 mb-6">
            {title}
          </h1>

          <div className="text-gray-300 mb-8 text-left text-base leading-relaxed break-words w-full">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="mb-4">
              <label htmlFor="prompt-input" className="block text-blue-300 text-lg font-semibold mb-3">
                {promptLabel}
              </label>
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
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                `Generate ${title.replace(' Generator', '')}`
              )}
            </button>
          </form>

          {error && (
            <div className="mt-8 p-4 bg-red-800 bg-opacity-30 border border-red-700 text-red-300 rounded-lg text-center">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-inner border border-blue-700 animate-fade-in">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Generated Result:</h3>
              <div className="bg-gray-700 p-5 rounded-lg border border-blue-600 break-words whitespace-pre-wrap text-gray-200">
                {result}
              </div>
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

          {/* AdSense Ad Units Removed */}
          {/*
          <div className="ad-placeholder h-32 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mt-12 shadow-inner">
            [AdSense Ad Unit - Bottom of Generator]
          </div>
          */}
        </section>

        {/* "Related Generators" Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Explore Related Generators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedGenerators.map((gen, index) => (
              <Link key={`related-gen-${index}`} href={gen.href} className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-700 hover:border-blue-500 transform hover:scale-[1.01]">
                <h3 className="text-lg font-semibold text-blue-300 mb-1">{gen.name} Generator</h3>
                {/* Dynamically get description snippet from the content map */}
                {/* Note: gen.href.substring(1) needs to be adjusted to remove '/generators/' prefix */}
                <p className="text-gray-400 text-xs">{generatorContentMap[gen.href.replace('/generators/', '')]?.description.replace(/<[^>]*>?/gm, '').split('.')[0]}.</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
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

export async function getStaticPaths() {
  // Use generatorDetails from the centralized data file
  const { generatorDetails } = await import('../../data/generatorsData'); // Adjusted path
  const paths = Object.keys(generatorDetails).map((key) => ({
    params: { generatorType: key },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { generatorType } = params;
  return {
    props: {
      generatorType,
    },
  };
}


export default GeneratorPage;
