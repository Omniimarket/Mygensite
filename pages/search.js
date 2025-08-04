import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import LoadingSpinner from '../components/LoadingSpinner';

const SearchPage = () => {
  const router = useRouter();
  // Safely get 'q' from router.query, defaulting to an empty string if undefined/null
  const q = (router.query.q || '').toString();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // This useEffect runs when the router is ready or the 'q' (query) parameter changes
  useEffect(() => {
    // Only proceed if the router has finished parsing the URL (router.isReady is true)
    if (router.isReady) {
      console.log("Router is ready. Search query (q):", q); // Debugging: Check what 'q' is

      if (q) { // Check if q has a value (even an empty string is fine here now)
        setIsLoading(true);
        // Simulate fetching/filtering results based on 'q'
        // In a real application, you would fetch this data from an API or a larger dataset
        const allGenerators = [
          { name: "Business Name Generator", href: "/business-name-generator", description: "Find the perfect name for your business." },
          { name: "Company Name Generator", href: "/company-name-generator", description: "Brainstorm professional company names." },
          { name: "Song Title Generator", href: "/song-title-generator", description: "Discover catchy and memorable titles." },
          { name: "Random Password Generator", href: "/random-password-generator", description: "Create strong, secure passwords." },
          { name: "Slogan Generator", href: "/slogan-generator", description: "Craft compelling and memorable slogans." },
          { name: "Fantasy Name Generator", href: "/fantasy-name-generator", description: "Generate unique fantasy character names." },
          { name: "Xbox Gamertag Generator", href: "/xbox-gamertag-generator", description: "Find an epic Gamertag for your Xbox profile." },
          { name: "Random Color Generator", href: "/random-color-generator", description: "Discover random hex codes and RGB values." },
          { name: "Instagram Caption Generator", href: "/instagram-caption-generator", description: "Generate engaging captions for Instagram." },
          { name: "Movie Title Generator", href: "/movie-title-generator", description: "Find captivating titles for your film projects." },
          { name: "Game Name Generator", href: "/game-name-generator", description: "Discover cool and unique names for your games." },
          { name: "Superhero Name Generator", href: "/superhero-name-generator", description: "Create powerful superhero names." },
          { name: "Powerball Generator", icon: "🎱", color: "red", href: "/powerball-generator", description: "Generate random numbers for your next Powerball ticket." }, // Changed 'desc' to 'description'
          { name: "Mega Millions Generator", icon: "💰", color: "green", href: "/mega-millions-generator", description: "Generate random numbers for your next Mega Millions ticket." }, // Changed 'desc' to 'description'
          { name: "Pick 5 Generator", icon: "🔢", color: "purple", href: "/pick-5-generator", description: "Generate 5 random numbers for Pick 5 lottery games." }, // Changed 'desc' to 'description'
          { name: "Fantasy 5 Generator", icon: "🍀", color: "teal", href: "/fantasy-5-generator", description: "Generate 5 random numbers for Fantasy 5 lottery games." }, // Changed 'desc' to 'description'
          // IMPORTANT: Add all your other generators here for comprehensive search results!
          // This list should ideally match the full list you have on your /all-generators page.
        ];

        const filtered = allGenerators.filter(gen =>
          gen.name.toLowerCase().includes(q.toLowerCase()) ||
          // Safely access description, defaulting to an empty string if it's undefined
          (gen.description || '').toLowerCase().includes(q.toLowerCase())
        );

        setTimeout(() => { // Simulate a network delay for fetching data
          setSearchResults(filtered);
          setIsLoading(false);
        }, 500);
      } else {
        // If there's no query, stop loading and show no results or a message
        setSearchResults([]);
        setIsLoading(false);
      }
    }
  }, [router.isReady, q]); // Dependencies: Re-run when router is ready or 'q' changes

  // Show a loading spinner if the router isn't ready yet (initial page load)
  if (!router.isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
        <LoadingSpinner message="Preparing search..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>Search Results for "{q || ''}" - AI Generator Hub</title>
        <meta name="description" content={`Search results for "${q || ''}" on AI Generator Hub.`} />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl mb-12 border border-blue-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 leading-tight drop-shadow-lg">
            Search Results for "{q || '...'}"
          </h1>

          <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mb-8 shadow-inner">
            [AdSense Ad Unit - Search Results Top]
          </div>

          {isLoading ? (
            <LoadingSpinner message="Searching for generators..." />
          ) : (
            <>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {searchResults.map((generator, index) => (
                    <Link key={index} href={generator.href} className="block bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-[1.02] border border-blue-600 hover:border-blue-500">
                      <h2 className="text-xl font-semibold text-blue-300 mb-2">{generator.name} Generator</h2>
                      <p className="text-gray-400 text-base">{generator.description}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center text-lg text-gray-400">No generators found matching "{q}". Try a different search term!</p>
              )}
            </>
          )}

          <div className="ad-placeholder h-32 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mt-12 shadow-inner">
            [AdSense Ad Unit - Search Results Bottom]
          </div>
        </section>
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export default SearchPage;
