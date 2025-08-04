import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';

const allGenerators = [
  { name: "Business Name", href: "/business-name-generator", description: "Find the perfect name for your business." },
  { name: "Username", href: "/username-generator", description: "Generate unique and catchy usernames." },
  { name: "Fantasy Name", href: "/fantasy-name-generator", description: "Create names for your fantasy characters." },
  { name: "Random Name", href: "/random-name-generator", description: "Get random names for any purpose." },
  { name: "Random Word", href: "/random-word-generator", description: "Discover random words for inspiration." },
  { name: "Book Title", href: "/book-title-generator", description: "Generate captivating titles for your books." },
  { name: "Paragraph", href: "/paragraph-generator", description: "Create coherent paragraphs quickly." },
  { name: "Slogan", href: "/slogan-generator", description: "Craft memorable slogans for your brand." },
  { name: "Hashtag", href: "/hashtag-generator", description: "Find trending hashtags for social media." },
  { name: "Company Name", href: "/company-name-generator", description: "Brainstorm professional company names." },
  { name: "Band Name", href: "/band-name-generator", description: "Discover cool names for your band." },
  { name: "Character Name", href: "/character-name-generator", description: "Generate names for fictional characters." },
  { name: "Rap Lyrics", href: "/rap-lyrics-generator", description: "Create creative and rhythmic rap lyrics." },
  { name: "Random Password", href: "/random-password-generator", description: "Generate strong, secure passwords." },
  { name: "Cover Letter", href: "/cover-letter-generator", description: "Generate professional cover letters." },
  { name: "Brand Name", href: "/brand-name-generator", description: "Develop a strong and memorable brand name." },
  { name: "Team Name", href: "/team-name-generator", description: "Find unique names for your team." },
  { name: "Nickname", href: "/nickname-generator", description: "Generate fun and unique nicknames." },
  { name: "Superhero Name", href: "/superhero-name-generator", description: "Create powerful superhero names." },
  { name: "D&D Name", href: "/dnd-name-generator", description: "Generate names for D&D characters and places." },
  { name: "Poetry", href: "/poetry-generator", description: "Create beautiful and expressive poems." },
  { name: "Lyric", href: "/lyric-generator", description: "Generate emotional song lyrics." },
  { name: "Rhyme", href: "/rhyme-generator", description: "Find perfect rhyming words." },
  { name: "Rapper Name", href: "/rapper-name-generator", description: "Generate a cool rapper name." },
  { name: "Fake Name", href: "/fake-name-generator", description: "Generate random fake names." },
  { name: "Fake Email", href: "/fake-email-generator", description: "Generate temporary fake email addresses." },
  { name: "Random Letter", href: "/random-letter-generator", description: "Get random letters for games or prompts." },
  { name: "Random Color", href: "/random-color-generator", description: "Discover random hex codes and RGB values." },
  { name: "YouTube Title", href: "/youtube-title-generator", description: "Generate catchy YouTube video titles." },
  { name: "Instagram Caption", href: "/instagram-caption-generator", description: "Generate engaging Instagram captions." },
  { name: "AI Content", href: "/ai-content-generator", description: "Generate various types of creative content." },
  { name: "Bio", href: "/bio-generator", description: "Create engaging and professional bios." },
  { name: "Tweet", href: "/tweet-generator", description: "Compose engaging and concise tweets." },
  { name: "Meta Description", href: "/meta-description-generator", description: "Write SEO-friendly meta descriptions." },
  { name: "Keyword", href: "/keyword-generator", description: "Discover relevant and high-ranking keywords." },
  { name: "Facebook Post", href: "/facebook-post-generator", description: "Generate engaging Facebook posts." },
  { name: "TikTok Hashtag", href: "/tiktok-hashtag-generator", description: "Find trending TikTok hashtags." },
  { name: "Logo Name", href: "/logo-name-generator", description: "Generate creative names for your logo design." },
  { name: "Domain Name", href: "/domain-name-generator", description: "Suggest available and memorable domain names." },
  { name: "Meme Text", href: "/meme-text-generator", description: "Create funny text for your memes." },
  { name: "HTML Code", href: "/html-code-generator", description: "Generate basic HTML code snippets." },
  { name: "CSS Gradient", href: "/css-gradient-generator", description: "Create beautiful CSS linear and radial gradients." },
  { name: "LinkedIn Headline", href: "/linkedin-headline-generator", description: "Generate professional LinkedIn headlines." },
  { name: "Shop Name", href: "/shop-name-generator", description: "Find a unique name for your shop." },
  { name: "Product Name", href: "/product-name-generator", description: "Generate creative names for your products." },
  { name: "News Headline", href: "/news-headline-generator", description: "Create attention-grabbing news headlines." },
  { name: "Script", href: "/script-generator", description: "Generate short scripts for various purposes." },
  { name: "YouTube Description", href: "/youtube-description-generator", description: "Write SEO-friendly YouTube descriptions." },
  { name: "Instagram Bio", href: "/instagram-bio-generator", description: "Craft an engaging Instagram bio." },
  { name: "Slogan Maker", href: "/slogan-maker", description: "Make catchy and memorable slogans." },
  { name: "Tagline", href: "/tagline-generator", description: "Generate memorable and effective taglines." },
  { name: "Mission Statement", href: "/mission-statement-generator", description: "Craft a powerful mission statement." },
  { name: "Company Slogan", href: "/company-slogan-generator", description: "Generate compelling company slogans." },
  { name: "Store Name", href: "/store-name-generator", description: "Find a unique name for your retail store." },
  { name: "Website Name", href: "/website-name-generator", description: "Generate creative website name ideas." },
  { name: "App Name", href: "/app-name-generator", description: "Discover unique and catchy app names." },
  { name: "Game Name", href: "/game-name-generator", description: "Generate cool and unique game names." },
  { name: "Guild Name", href: "/guild-name-generator", description: "Generate epic guild names for your community." },
  { name: "Clan Name", href: "/clan-name-generator", description: "Generate strong and unique clan names." },
  { name: "Pet Name", href: "/pet-name-generator", description: "Find a cute or unique name for your pet." },
  { name: "Cool Name", href: "/cool-name-generator", description: "Generate cool and trendy names." },
  { name: "Funny Name", href: "/funny-name-generator", description: "Create hilarious and quirky names." },
  { name: "Sci Fi Name", href: "/sci-fi-name-generator", description: "Generate futuristic sci-fi names." },
  { name: "Villain Name", href: "/villain-name-generator", description: "Create menacing villain names." },
  { name: "RPG Name", href: "/rpg-name-generator", description: "Generate diverse RPG names." },
  { name: "Anime Name", href: "/anime-name-generator", description: "Discover unique anime-style names." },
  { name: "Story Title", href: "/story-title-generator", description: "Find compelling titles for your stories." },
  { name: "Song Title", href: "/song-title-generator", description: "Generate creative song titles." },
  { name: "DJ Name", href: "/dj-name-generator", description: "Create a unique DJ name." },
  { name: "Artist Name", href: "/artist-name-generator", description: "Generate a unique artist name." },
  { name: "Stage Name", href: "/stage-name-generator", description: "Find a captivating stage name." },
  { name: "Band Logo", href: "/band-logo-generator", description: "Generate creative ideas for your band's logo." },
  { name: "Album Name", href: "/album-name-generator", description: "Generate creative album names." },
  { name: "Playlist Name", href: "/playlist-name-generator", description: "Generate catchy playlist names." },
  { name: "Movie Title", href: "/movie-title-generator", description: "Find captivating movie titles." },
  { name: "Film Name", href: "/film-name-generator", description: "Generate unique film names." },
  { name: "Character Backstory", href: "/character-backstory-generator", description: "Create detailed character backstories." },
  { name: "Plot", href: "/plot-generator", description: "Generate creative plot ideas." },
  { name: "Story Idea", href: "/story-idea-generator", description: "Discover new story ideas." },
  { name: "Writing Prompt", href: "/writing-prompt-generator", description: "Get inspiring writing prompts." },
  { name: "Meme Caption", href: "/meme-caption-generator", description: "Generate funny captions for memes." },
  { name: "Pun", href: "/pun-generator", description: "Create witty and clever puns." },
  { name: "Roast", href: "/roast-generator", description: "Generate lighthearted roasts." },
  { name: "Comeback", href: "/comeback-generator", description: "Suggest clever comebacks." },
  { name: "Secure Password", href: "/secure-password-generator", description: "Generate highly secure passwords." },
  { name: "Random Date", href: "/random-date-generator", description: "Get a random date." },
  { name: "Random Time", href: "/random-time-generator", description: "Generate a random time of day." },
  { name: "Quote", href: "/quote-generator", description: "Create inspirational or custom quotes." },
  { name: "Inspirational Quote", href: "/inspirational-quote-generator", description: "Generate uplifting inspirational quotes." },
  { name: "Motivational Quote", href: "/motivational-quote-generator", description: "Find powerful motivational quotes." },
  { name: "Sports Team Name", href: "/sports-team-name-generator", description: "Generate creative sports team names." },
  { name: "Fantasy Football Name", href: "/fantasy-football-name-generator", description: "Create funny fantasy football team names." },
  { name: "Diet Plan", href: "/diet-plan-generator", description: "Get general diet plan suggestions." },
  { name: "Meal Plan", href: "/meal-plan-generator", description: "Suggest simple meal plans." },
  { name: "Cocktail Name", href: "/cocktail-name-generator", description: "Generate unique cocktail names." },
  { name: "Restaurant Name", href: "/restaurant-name-generator", description: "Find an attractive restaurant name." },
  { name: "Cafe Name", href: "/cafe-name-generator", description: "Generate charming cafe names." },
  { name: "Twitch Username", href: "/twitch-username-generator", description: "Create unique Twitch usernames." },
  { name: "Discord Name", href: "/discord-name-generator", description: "Generate cool Discord names." },
  { name: "Xbox Gamertag", href: "/xbox-gamertag-generator", description: "Find an epic Xbox Gamertag." },
  { name: "Roblox Username", href: "/roblox-username-generator", description: "Generate creative Roblox usernames." },
  { name: "Fortnite Name", href: "/fortnite-name-generator", description: "Create cool Fortnite names." },
  { name: "Call of Duty Name", href: "/call-of-duty-name-generator", description: "Generate intense Call of Duty names." },
  { name: "PUBG Name", href: "/pubg-name-generator", description: "Find a cool PUBG name." },
  // New Lottery Generators
  { name: "Powerball", href: "/powerball-generator", description: "Generate numbers for Powerball lottery." },
  { name: "Mega Millions", href: "/mega-millions-generator", description: "Generate numbers for Mega Millions lottery." },
  { name: "Pick 5", href: "/pick-5-generator", description: "Generate 5 numbers for Pick 5 lottery." },
  { name: "Fantasy 5", href: "/fantasy-5-generator", description: "Generate 5 numbers for Fantasy 5 lottery." },
];

const AllGeneratorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>All AI Generators - AI Generator Hub</title>
        <meta name="description" content="Explore a comprehensive list of all AI-powered generators available on AI Generator Hub. Find tools for names, content, marketing, and more." />
        <meta nameNa="keywords" content="all generators, AI tools, name generators, content generators, marketing tools, free AI generators" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl mb-12 border border-blue-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 leading-tight drop-shadow-lg">All AI Generators</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto text-center">
            Discover a wide array of AI-powered tools designed to spark your creativity, boost your productivity, and simplify your tasks. From names and content to marketing and fun, we have a generator for every need.
          </p>

          <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mb-8 shadow-inner">
            [AdSense Ad Unit - Top of All Generators]
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGenerators.map((generator) => (
              <Link key={generator.href} href={generator.href} className="block bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-[1.02] border border-blue-600 hover:border-blue-500">
                <h2 className="text-xl font-semibold text-blue-300 mb-2">{generator.name} Generator</h2>
                <p className="text-gray-400 text-base">{generator.description}</p>
              </Link>
            ))}
          </div>

          <div className="ad-placeholder h-32 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mt-12 shadow-inner">
            [AdSense Ad Unit - Bottom of All Generators]
          </div>
        </section>
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export default AllGeneratorsPage;
