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
  { name: "Business Name Generator", href: "/generators/business-name-generator", description: "Find the perfect name for your business." },
  { name: "Company Name Generator", href: "/generators/company-name-generator", description: "Brainstorm professional company names." },
  { name: "Song Title Generator", href: "/generators/song-title-generator", description: "Discover catchy and memorable titles." },
  { name: "Random Password Generator", href: "/generators/random-password-generator", description: "Create strong, secure passwords." },
  { name: "Slogan Generator", href: "/generators/slogan-generator", description: "Craft compelling and memorable slogans." },
  { name: "Fantasy Name Generator", href: "/generators/fantasy-name-generator", description: "Generate unique fantasy character names." },
  { name: "Xbox Gamertag Generator", href: "/generators/xbox-gamertag-generator", description: "Find an epic Gamertag for your Xbox profile." },
  { name: "Random Color Generator", href: "/generators/random-color-generator", description: "Discover random hex codes and RGB values." },
  { name: "Instagram Caption Generator", href: "/generators/instagram-caption-generator", description: "Generate engaging captions for Instagram." },
  { name: "Movie Title Generator", href: "/generators/movie-title-generator", description: "Find captivating titles for your film projects." },
  { name: "Game Name Generator", href: "/generators/game-name-generator", description: "Discover cool and unique names for your games." },
  { name: "Superhero Name Generator", href: "/generators/superhero-name-generator", description: "Create powerful superhero names." },
  { name: "Powerball Generator", icon: "🎱", color: "red", href: "/generators/powerball-generator", description: "Generate random numbers for your next Powerball ticket." },
  { name: "Mega Millions Generator", icon: "💰", color: "green", href: "/generators/mega-millions-generator", description: "Generate random numbers for your next Mega Millions ticket." },
  { name: "Pick 5 Generator", icon: "🔢", color: "purple", href: "/generators/pick-5-generator", description: "Generate 5 random numbers for Pick 5 lottery games." },
  { name: "Fantasy 5 Generator", icon: "🍀", color: "teal", href: "/generators/fantasy-5-generator", description: "Generate 5 random numbers for Fantasy 5 lottery games." },
  { name: "Domain Name Generator", href: "/generators/domain-name-generator", description: "Find the perfect, available-sounding domain name for your website or business." },

  // ALL GENERATORS (with /generators/ prefix)
  { name: "Business Name", href: "/generators/business-name-generator", description: "Generate creative names for your business." },
  { name: "Username", href: "/generators/username-generator", description: "Create unique usernames for any platform." },
  { name: "Random Name", href: "/generators/random-name-generator", description: "Generate random human names." },
  { name: "Random Word", href: "/generators/random-word-generator", description: "Get a random word for inspiration." },
  { name: "Book Title", href: "/generators/book-title-generator", description: "Discover compelling titles for your books." },
  { name: "Paragraph", href: "/generators/paragraph-generator", description: "Generate paragraphs on various topics." },
  { name: "Slogan", href: "/generators/slogan-generator", description: "Craft catchy slogans for your brand." },
  { name: "Hashtag", href: "/generators/hashtag-generator", description: "Find trending and relevant hashtags." },
  { name: "Band Name", href: "/generators/band-name-generator", description: "Generate cool names for your band." },
  { name: "Character Name", href: "/generators/character-name-generator", description: "Create names for fictional characters." },
  { name: "Rap Lyrics", href: "/generators/rap-lyrics-generator", description: "Generate unique rap lyrics." },
  { name: "Cover Letter", href: "/generators/cover-letter-generator", description: "Draft professional cover letters." },
  { name: "Brand Name", href: "/generators/brand-name-generator", description: "Develop innovative brand names." },
  { name: "Team Name", href: "/generators/team-name-generator", description: "Find exciting names for your team." },
  { name: "Nickname", href: "/generators/nickname-generator", description: "Generate fun and unique nicknames." },
  { name: "D&D Name", href: "/generators/dnd-name-generator", description: "Create names for Dungeons & Dragons characters." },
  { name: "Poetry", href: "/generators/poetry-generator", description: "Generate various forms of poetry." },
  { name: "Lyric", href: "/generators/lyric-generator", description: "Get creative song lyrics." },
  { name: "Rhyme", href: "/generators/rhyme-generator", description: "Find rhyming words for your text." },
  { name: "Rapper Name", href: "/generators/rapper-name-generator", description: "Generate cool rapper names." },
  { name: "Fake Name", href: "/generators/fake-name-generator", description: "Create realistic fake names." },
  { name: "Fake Email", href: "/generators/fake-email-generator", description: "Generate temporary fake email addresses." },
  { name: "Random Letter", href: "/generators/random-letter-generator", description: "Get a random letter of the alphabet." },
  { name: "YouTube Title", href: "/generators/youtube-title-generator", description: "Generate engaging titles for YouTube videos." },
  { name: "AI Content", href: "/generators/ai-content-generator", description: "Create various types of AI-generated content." },
  { name: "Bio", href: "/generators/bio-generator", description: "Generate short and engaging bios." },
  { name: "Tweet", href: "/generators/tweet-generator", description: "Compose creative tweets." },
  { name: "Meta Description", href: "/generators/meta-description-generator", description: "Generate SEO-friendly meta descriptions." },
  { name: "Keyword", href: "/generators/keyword-generator", description: "Discover relevant keywords for your content." },
  { name: "Facebook Post", href: "/generators/facebook-post-generator", description: "Create engaging Facebook posts." },
  { name: "TikTok Hashtag", href: "/generators/tiktok-hashtag-generator", description: "Find popular TikTok hashtags." },
  { name: "Logo Name", href: "/generators/logo-name-generator", description: "Generate names suitable for logos." },
  { name: "Meme Text", href: "/generators/meme-text-generator", description: "Create funny text for your memes." },
  { name: "HTML Code", href: "/generators/html-code-generator", description: "Generate basic HTML code snippets." },
  { name: "CSS Gradient", href: "/generators/css-gradient-generator", description: "Create beautiful CSS gradients." },
  { name: "LinkedIn Headline", href: "/generators/linkedin-headline-generator", description: "Craft professional LinkedIn headlines." },
  { name: "Shop Name", href: "/generators/shop-name-generator", description: "Generate catchy names for your shop." },
  { name: "Product Name", href: "/generators/product-name-generator", description: "Discover creative product names." },
  { name: "News Headline", href: "/generators/news-headline-generator", description: "Generate attention-grabbing news headlines." },
  { name: "Script", href: "/generators/script-generator", description: "Create simple scripts for various purposes." },
  { name: "YouTube Description", href: "/generators/youtube-description-generator", description: "Write detailed YouTube video descriptions." },
  { name: "Instagram Bio", href: "/generators/instagram-bio-generator", description: "Craft compelling Instagram bios." },
  { name: "Slogan Maker", href: "/generators/slogan-maker", description: "A comprehensive tool for making slogans." },
  { name: "Tagline", href: "/generators/tagline-generator", description: "Generate memorable taglines." },
  { name: "Mission Statement", href: "/generators/mission-statement-generator", description: "Create impactful mission statements." },
  { name: "Company Slogan", href: "/generators/company-slogan-generator", description: "Develop unique company slogans." },
  { name: "Store Name", href: "/generators/store-name-generator", description: "Find the perfect name for your store." },
  { name: "Website Name", href: "/generators/website-name-generator", description: "Generate creative website names." },
  { name: "App Name", href: "/generators/app-name-generator", description: "Discover catchy app names." },
  { name: "Guild Name", href: "/generators/guild-name-generator", description: "Create names for gaming guilds." },
  { name: "Clan Name", href: "/generators/clan-name-generator", description: "Generate names for gaming clans." },
  { name: "Pet Name", href: "/generators/pet-name-generator", description: "Find adorable names for your pets." },
  { name: "Cool Name", href: "/generators/cool-name-generator", description: "Generate cool and trendy names." },
  { name: "Funny Name", href: "/generators/funny-name-generator", description: "Create humorous names." },
  { name: "Sci Fi Name", href: "/generators/sci-fi-name-generator", description: "Generate futuristic sci-fi names." },
  { name: "Villain Name", href: "/generators/villain-name-generator", description: "Create sinister villain names." },
  { name: "RPG Name", href: "/generators/rpg-name-generator", description: "Generate names for RPG characters." },
  { name: "Anime Name", href: "/generators/anime-name-generator", description: "Discover unique anime character names." },
  { name: "Story Title", href: "/generators/story-title-generator", description: "Generate captivating story titles." },
  { name: "DJ Name", href: "/generators/dj-name-generator", description: "Create cool DJ names." },
  { name: "Artist Name", href: "/generators/artist-name-generator", description: "Generate unique artist names." },
  { name: "Stage Name", href: "/generators/stage-name-generator", description: "Find the perfect stage name." },
  { name: "Band Logo", href: "/generators/band-logo-generator", description: "Generate ideas for band logos." },
  { name: "Album Name", href: "/generators/album-name-generator", description: "Create unique album titles." },
  { name: "Playlist Name", href: "/generators/playlist-name-generator", description: "Generate creative playlist names." },
  { name: "Film Name", href: "/generators/film-name-generator", description: "Discover engaging film names." },
  { name: "Character Backstory", href: "/generators/character-backstory-generator", description: "Generate detailed character backstories." },
  { name: "Plot", href: "/generators/plot-generator", description: "Create interesting plot ideas." },
  { name: "Story Idea", href: "/generators/story-idea-generator", description: "Generate fresh story ideas." },
  { name: "Writing Prompt", href: "/generators/writing-prompt-generator", description: "Get creative writing prompts." },
  { name: "Meme Caption", href: "/generators/meme-caption-generator", description: "Generate witty meme captions." },
  { name: "Pun", href: "/generators/pun-generator", description: "Create clever puns." },
  { name: "Roast", href: "/generators/roast-generator", description: "Generate funny roasts." },
  { name: "Comeback", href: "/generators/comeback-generator", description: "Create quick comebacks." },
  { name: "Secure Password", href: "/generators/secure-password-generator", description: "Generate highly secure passwords." },
  { name: "Random Date", href: "/generators/random-date-generator", description: "Get a random date." },
  { name: "Random Time", href: "/generators/random-time-generator", description: "Generate a random time." },
  { name: "Quote", href: "/generators/quote-generator", description: "Generate various types of quotes." },
  { name: "Inspirational Quote", href: "/generators/inspirational-quote-generator", description: "Get inspiring quotes." },
  { name: "Motivational Quote", href: "/generators/motivational-quote-generator", description: "Generate motivational quotes." },
  { name: "Sports Team Name", href: "/generators/sports-team-name-generator", description: "Create exciting sports team names." },
  { name: "Fantasy Football Name", href: "/generators/fantasy-football-name-generator", description: "Generate names for fantasy football teams." },
  { name: "Diet Plan", href: "/generators/diet-plan-generator", description: "Create a personalized diet plan." },
  { name: "Meal Plan", href: "/generators/meal-plan-generator", description: "Generate a weekly meal plan." },
  { name: "Cocktail Name", href: "/generators/cocktail-name-generator", description: "Discover unique cocktail names." },
  { name: "Restaurant Name", href: "/generators/restaurant-name-generator", description: "Generate creative restaurant names." },
  { name: "Cafe Name", href: "/generators/cafe-name-generator", description: "Find charming cafe names." },
  { name: "Twitch Username", href: "/generators/twitch-username-generator", description: "Create unique Twitch usernames." },
  { name: "Discord Name", href: "/generators/discord-name-generator", description: "Generate cool Discord names." },
  { name: "Roblox Username", href: "/generators/roblox-username-generator", description: "Find fun Roblox usernames." },
  { name: "Fortnite Name", href: "/generators/fortnite-name-generator", description: "Generate epic Fortnite names." },
  { name: "Call of Duty Name", href: "/generators/call-of-duty-name-generator", description: "Create tactical Call of Duty names." },
  { name: "PUBG Name", href: "/generators/pubg-name-generator", description: "Generate unique PUBG names." },
  { name: "Powerball", href: "/generators/powerball-generator", description: "Generate random numbers for Powerball." },
  { name: "Mega Millions", href: "/generators/mega-millions-generator", description: "Generate random numbers for Mega Millions." },
  { name: "Pick 5", href: "/generators/pick-5-generator", description: "Generate random numbers for Pick 5 lottery." },
  { name: "Fantasy 5", href: "/generators/fantasy-5-generator", description: "Generate random numbers for Fantasy 5 lottery." },
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
