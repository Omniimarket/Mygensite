import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import LoadingSpinner from '../components/LoadingSpinner';

const SearchPage = () => { // Note: The component name can remain SearchPage even if the file is search.js
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
          // Existing Generators
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
          { name: "Powerball Generator", icon: "🎱", color: "red", href: "/powerball-generator", description: "Generate random numbers for your next Powerball ticket." },
          { name: "Mega Millions Generator", icon: "💰", color: "green", href: "/mega-millions-generator", description: "Generate random numbers for your next Mega Millions ticket." },
          { name: "Pick 5 Generator", icon: "🔢", color: "purple", href: "/pick-5-generator", description: "Generate 5 random numbers for Pick 5 lottery games." },
          { name: "Fantasy 5 Generator", icon: "🍀", color: "teal", href: "/fantasy-5-generator", description: "Generate 5 random numbers for Fantasy 5 lottery games." },
          { name: "Domain Name Generator", href: "/domain-name-generator", description: "Find the perfect, available-sounding domain name for your website or business." },

          // ALL GENERATORS ADDED BELOW
          { name: "Business Name", href: "/business-name-generator", description: "Generate creative names for your business." },
          { name: "Username", href: "/username-generator", description: "Create unique usernames for any platform." },
          { name: "Random Name", href: "/random-name-generator", description: "Generate random human names." },
          { name: "Random Word", href: "/random-word-generator", description: "Get a random word for inspiration." },
          { name: "Book Title", href: "/book-title-generator", description: "Discover compelling titles for your books." },
          { name: "Paragraph", href: "/paragraph-generator", description: "Generate paragraphs on various topics." },
          { name: "Slogan", href: "/slogan-generator", description: "Craft catchy slogans for your brand." },
          { name: "Hashtag", href: "/hashtag-generator", description: "Find trending and relevant hashtags." },
          { name: "Band Name", href: "/band-name-generator", description: "Generate cool names for your band." },
          { name: "Character Name", href: "/character-name-generator", description: "Create names for fictional characters." },
          { name: "Rap Lyrics", href: "/rap-lyrics-generator", description: "Generate unique rap lyrics." },
          { name: "Cover Letter", href: "/cover-letter-generator", description: "Draft professional cover letters." },
          { name: "Brand Name", href: "/brand-name-generator", description: "Develop innovative brand names." },
          { name: "Team Name", href: "/team-name-generator", description: "Find exciting names for your team." },
          { name: "Nickname", href: "/nickname-generator", description: "Generate fun and unique nicknames." },
          { name: "D&D Name", href: "/dnd-name-generator", description: "Create names for Dungeons & Dragons characters." },
          { name: "Poetry", href: "/poetry-generator", description: "Generate various forms of poetry." },
          { name: "Lyric", href: "/lyric-generator", description: "Get creative song lyrics." },
          { name: "Rhyme", href: "/rhyme-generator", description: "Find rhyming words for your text." },
          { name: "Rapper Name", href: "/rapper-name-generator", description: "Generate cool rapper names." },
          { name: "Fake Name", href: "/fake-name-generator", description: "Create realistic fake names." },
          { name: "Fake Email", href: "/fake-email-generator", description: "Generate temporary fake email addresses." },
          { name: "Random Letter", href: "/random-letter-generator", description: "Get a random letter of the alphabet." },
          { name: "YouTube Title", href: "/youtube-title-generator", description: "Generate engaging titles for YouTube videos." },
          { name: "AI Content", href: "/ai-content-generator", description: "Create various types of AI-generated content." },
          { name: "Bio", href: "/bio-generator", description: "Generate short and engaging bios." },
          { name: "Tweet", href: "/tweet-generator", description: "Compose creative tweets." },
          { name: "Meta Description", href: "/meta-description-generator", description: "Generate SEO-friendly meta descriptions." },
          { name: "Keyword", href: "/keyword-generator", description: "Discover relevant keywords for your content." },
          { name: "Facebook Post", href: "/facebook-post-generator", description: "Create engaging Facebook posts." },
          { name: "TikTok Hashtag", href: "/tiktok-hashtag-generator", description: "Find popular TikTok hashtags." },
          { name: "Logo Name", href: "/logo-name-generator", description: "Generate names suitable for logos." },
          { name: "Meme Text", href: "/meme-text-generator", description: "Create funny text for your memes." },
          { name: "HTML Code", href: "/html-code-generator", description: "Generate basic HTML code snippets." },
          { name: "CSS Gradient", href: "/css-gradient-generator", description: "Create beautiful CSS gradients." },
          { name: "LinkedIn Headline", href: "/linkedin-headline-generator", description: "Craft professional LinkedIn headlines." },
          { name: "Shop Name", href: "/shop-name-generator", description: "Generate catchy names for your shop." },
          { name: "Product Name", href: "/product-name-generator", description: "Discover creative product names." },
          { name: "News Headline", href: "/news-headline-generator", description: "Generate attention-grabbing news headlines." },
          { name: "Script", href: "/script-generator", description: "Create simple scripts for various purposes." },
          { name: "YouTube Description", href: "/youtube-description-generator", description: "Write detailed YouTube video descriptions." },
          { name: "Instagram Bio", href: "/instagram-bio-generator", description: "Craft compelling Instagram bios." },
          { name: "Slogan Maker", href: "/slogan-maker", description: "A comprehensive tool for making slogans." },
          { name: "Tagline", href: "/tagline-generator", description: "Generate memorable taglines." },
          { name: "Mission Statement", href: "/mission-statement-generator", description: "Create impactful mission statements." },
          { name: "Company Slogan", href: "/company-slogan-generator", description: "Develop unique company slogans." },
          { name: "Store Name", href: "/store-name-generator", description: "Find the perfect name for your store." },
          { name: "Website Name", href: "/website-name-generator", description: "Generate creative website names." },
          { name: "App Name", href: "/app-name-generator", description: "Discover catchy app names." },
          { name: "Guild Name", href: "/guild-name-generator", description: "Create names for gaming guilds." },
          { name: "Clan Name", href: "/clan-name-generator", description: "Generate names for gaming clans." },
          { name: "Pet Name", href: "/pet-name-generator", description: "Find adorable names for your pets." },
          { name: "Cool Name", href: "/cool-name-generator", description: "Generate cool and trendy names." },
          { name: "Funny Name", href: "/funny-name-generator", description: "Create humorous names." },
          { name: "Sci Fi Name", href: "/sci-fi-name-generator", description: "Generate futuristic sci-fi names." },
          { name: "Villain Name", href: "/villain-name-generator", description: "Create sinister villain names." },
          { name: "RPG Name", href: "/rpg-name-generator", description: "Generate names for RPG characters." },
          { name: "Anime Name", href: "/anime-name-generator", description: "Discover unique anime character names." },
          { name: "Story Title", href: "/story-title-generator", description: "Generate captivating story titles." },
          { name: "DJ Name", href: "/dj-name-generator", description: "Create cool DJ names." },
          { name: "Artist Name", href: "/artist-name-generator", description: "Generate unique artist names." },
          { name: "Stage Name", href: "/stage-name-generator", description: "Find the perfect stage name." },
          { name: "Band Logo", href: "/band-logo-generator", description: "Generate ideas for band logos." },
          { name: "Album Name", href: "/album-name-generator", description: "Create unique album titles." },
          { name: "Playlist Name", href: "/playlist-name-generator", description: "Generate creative playlist names." },
          { name: "Film Name", href: "/film-name-generator", description: "Discover engaging film names." },
          { name: "Character Backstory", href: "/character-backstory-generator", description: "Generate detailed character backstories." },
          { name: "Plot", href: "/plot-generator", description: "Create interesting plot ideas." },
          { name: "Story Idea", href: "/story-idea-generator", description: "Generate fresh story ideas." },
          { name: "Writing Prompt", href: "/writing-prompt-generator", description: "Get creative writing prompts." },
          { name: "Meme Caption", href: "/meme-caption-generator", description: "Generate witty meme captions." },
          { name: "Pun", href: "/pun-generator", description: "Create clever puns." },
          { name: "Roast", href: "/roast-generator", description: "Generate funny roasts." },
          { name: "Comeback", href: "/comeback-generator", description: "Create quick comebacks." },
          { name: "Secure Password", href: "/secure-password-generator", description: "Generate highly secure passwords." },
          { name: "Random Date", href: "/random-date-generator", description: "Get a random date." },
          { name: "Random Time", href: "/random-time-generator", description: "Generate a random time." },
          { name: "Quote", href: "/quote-generator", description: "Generate various types of quotes." },
          { name: "Inspirational Quote", href: "/inspirational-quote-generator", description: "Get inspiring quotes." },
          { name: "Motivational Quote", href: "/motivational-quote-generator", description: "Generate motivational quotes." },
          { name: "Sports Team Name", href: "/sports-team-name-generator", description: "Create exciting sports team names." },
          { name: "Fantasy Football Name", href: "/fantasy-football-name-generator", description: "Generate names for fantasy football teams." },
          { name: "Diet Plan", href: "/diet-plan-generator", description: "Create a personalized diet plan." },
          { name: "Meal Plan", href: "/meal-plan-generator", description: "Generate a weekly meal plan." },
          { name: "Cocktail Name", href: "/cocktail-name-generator", description: "Discover unique cocktail names." },
          { name: "Restaurant Name", href: "/restaurant-name-generator", description: "Generate creative restaurant names." },
          { name: "Cafe Name", href: "/cafe-name-generator", description: "Find charming cafe names." },
          { name: "Twitch Username", href: "/twitch-username-generator", description: "Create unique Twitch usernames." },
          { name: "Discord Name", href: "/discord-name-generator", description: "Generate cool Discord names." },
          { name: "Roblox Username", href: "/roblox-username-generator", description: "Find fun Roblox usernames." },
          { name: "Fortnite Name", href: "/fortnite-name-generator", description: "Generate epic Fortnite names." },
          { name: "Call of Duty Name", href: "/call-of-duty-name-generator", description: "Create tactical Call of Duty names." },
          { name: "PUBG Name", href: "/pubg-name-generator", description: "Generate unique PUBG names." },
          // New Lottery Generators Added (already present, but ensuring consistency)
          { name: "Powerball", href: "/powerball-generator", description: "Generate random numbers for Powerball." },
          { name: "Mega Millions", href: "/mega-millions-generator", description: "Generate random numbers for Mega Millions." },
          { name: "Pick 5", href: "/pick-5-generator", description: "Generate random numbers for Pick 5 lottery." },
          { name: "Fantasy 5", href: "/fantasy-5-generator", description: "Generate random numbers for Fantasy 5 lottery." },
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
                // Changed justify-items-center to justify-center to center the entire grid content
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-center">
                  {searchResults.map((generator, index) => (
                    <Link key={index} href={generator.href} className="block bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-[1.02] border border-blue-600 hover:border-blue-500 text-center">
                      <h2 className="text-xl font-semibold text-blue-300 mb-2">{generator.name}</h2>
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
