import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const generatorLinks = [
    { name: "AI Content", href: "/generators/ai-content-generator" },
    { name: "Album Name", href: "/generators/album-name-generator" },
    { name: "Anime Name", href: "/generators/anime-name-generator" },
    { name: "App Name", href: "/generators/app-name-generator" },
    { name: "Artist Name", href: "/generators/artist-name-generator" },
    { name: "Band Logo", href: "/generators/band-logo-generator" },
    { name: "Band Name", href: "/generators/band-name-generator" },
    { name: "Bio", href: "/generators/bio-generator" },
    { name: "Book Title", href: "/generators/book-title-generator" },
    { name: "Brand Name", href: "/generators/brand-name-generator" },
    { name: "Business Name", href: "/generators/business-name-generator" },
    { name: "Cafe Name", href: "/generators/cafe-name-generator" },
    { name: "Call of Duty Name", href: "/generators/call-of-duty-name-generator" },
    { name: "Character Backstory", href: "/generators/character-backstory-generator" },
    { name: "Character Name", href: "/generators/character-name-generator" },
    { name: "Clan Name", href: "/generators/clan-name-generator" },
    { name: "Cocktail Name", href: "/generators/cocktail-name-generator" },
    { name: "Comeback", href: "/generators/comeback-generator" },
    { name: "Company Name", href: "/generators/company-name-generator" },
    { name: "Company Slogan", href: "/generators/company-slogan-generator" },
    { name: "Cool Name", href: "/generators/cool-name-generator" },
    { name: "Cover Letter", href: "/generators/cover-letter-generator" },
    { name: "CSS Gradient", href: "/generators/css-gradient-generator" },
    { name: "Diet Plan", href: "/generators/diet-plan-generator" },
    { name: "Discord Name", href: "/generators/discord-name-generator" },
    { name: "DJ Name", href: "/generators/dj-name-generator" },
    { name: "D&D Name", href: "/generators/dnd-name-generator" },
    { name: "Domain Name", href: "/generators/domain-name-generator" },
    { name: "D Pick 5", href: "/generators/pick-5-generator" },
    { name: "Fake Email", href: "/generators/fake-email-generator" },
    { name: "Fake Name", href: "/generators/fake-name-generator" },
    { name: "Fantasy 5", href: "/generators/fantasy-5-generator" },
    { name: "Fantasy Football Name", href: "/generators/fantasy-football-name-generator" },
    { name: "Fantasy Name", href: "/generators/fantasy-name-generator" },
    { name: "Facebook Post", href: "/generators/facebook-post-generator" },
    { name: "Film Name", href: "/generators/film-name-generator" },
    { name: "Fortnite Name", href: "/generators/fortnite-name-generator" },
    { name: "Funny Name", href: "/generators/funny-name-generator" },
    { name: "Game Name", href: "/generators/game-name-generator" },
    { name: "Guild Name", href: "/generators/guild-name-generator" },
    { name: "Hashtag", href: "/generators/hashtag-generator" },
    { name: "HTML Code", href: "/generators/html-code-generator" },
    { name: "Inspirational Quote", href: "/generators/inspirational-quote-generator" },
    { name: "Instagram Bio", href: "/generators/instagram-bio-generator" },
    { name: "Instagram Caption", href: "/generators/instagram-caption-generator" },
    { name: "Keyword", href: "/generators/keyword-generator" },
    { name: "LinkedIn Headline", href: "/generators/linkedin-headline-generator" },
    { name: "Logo Name", href: "/generators/logo-name-generator" },
    { name: "Lyric", href: "/generators/lyric-generator" },
    { name: "Meal Plan", href: "/generators/meal-plan-generator" },
    { name: "Mega Millions", href: "/generators/mega-millions-generator" },
    { name: "Meme Caption", href: "/generators/meme-caption-generator" },
    { name: "Meme Text", href: "/generators/meme-text-generator" },
    { name: "Meta Description", href: "/generators/meta-description-generator" },
    { name: "Mission Statement", href: "/generators/mission-statement-generator" },
    { name: "Motivational Quote", href: "/generators/motivational-quote-generator" },
    { name: "Movie Title", href: "/generators/movie-title-generator" },
    { name: "News Headline", href: "/generators/news-headline-generator" },
    { name: "Nickname", href: "/generators/nickname-generator" },
    { name: "Paragraph", href: "/generators/paragraph-generator" },
    { name: "Pet Name", href: "/generators/pet-name-generator" },
    { name: "Plot", href: "/generators/plot-generator" },
    { name: "Poetry", href: "/generators/poetry-generator" },
    { name: "Powerball", href: "/generators/powerball-generator" },
    { name: "Product Name", href: "/generators/product-name-generator" },
    { name: "PUBG Name", href: "/generators/pubg-name-generator" },
    { name: "Pun", href: "/generators/pun-generator" },
    { name: "Quote", href: "/generators/quote-generator" },
    { name: "Random Color", href: "/generators/random-color-generator" },
    { name: "Random Date", href: "/generators/random-date-generator" },
    { name: "Random Letter", href: "/generators/random-letter-generator" },
    { name: "Random Name", href: "/generators/random-name-generator" },
    { name: "Random Password", href: "/generators/random-password-generator" },
    { name: "Random Time", href: "/generators/random-time-generator" },
    { name: "Random Word", href: "/generators/random-word-generator" },
    { name: "Rap Lyrics", href: "/generators/rap-lyrics-generator" },
    { name: "Rapper Name", href: "/generators/rapper-name-generator" },
    { name: "Restaurant Name", href: "/generators/restaurant-name-generator" },
    { name: "Rhyme", href: "/generators/rhyme-generator" },
    { name: "Roblox Password", href: "/generators/roblox-password-generator" },
    { name: "Roblox Username", href: "/generators/roblox-username-generator" },
    { name: "Roast", href: "/generators/roast-generator" },
    { name: "RPG Name", href: "/generators/rpg-name-generator" },
    { name: "Sci Fi Name", href: "/generators/sci-fi-name-generator" },
    { name: "Script", href: "/generators/script-generator" },
    { name: "Secure Password", href: "/generators/secure-password-generator" },
    { name: "Shop Name", href: "/generators/shop-name-generator" },
    { name: "Slogan", href: "/generators/slogan-generator" },
    { name: "Slogan Maker", href: "/generators/slogan-maker" },
    { name: "Song Title", href: "/generators/song-title-generator" },
    { name: "Sports Team Name", href: "/generators/sports-team-name-generator" },
    { name: "Stage Name", href: "/generators/stage-name-generator" },
    { name: "Store Name", href: "/generators/store-name-generator" },
    { name: "Story Idea", href: "/generators/story-idea-generator" },
    { name: "Story Title", href: "/generators/story-title-generator" },
    { name: "Superhero Name", href: "/generators/superhero-name-generator" },
    { name: "Tagline", href: "/generators/tagline-generator" },
    { name: "Team Name", href: "/generators/team-name-generator" },
    { name: "TikTok Hashtag", href: "/generators/tiktok-hashtag-generator" },
    { name: "Tweet", href: "/generators/tweet-generator" },
    { name: "Twitch Username", href: "/generators/twitch-username-generator" },
    { name: "Username", href: "/generators/username-generator" },
    { name: "Villain Name", href: "/generators/villain-name-generator" },
    { name: "Website Name", href: "/generators/website-name-generator" },
    { name: "Writing Prompt", href: "/generators/writing-prompt-generator" },
    { name: "Xbox Gamertag", href: "/generators/xbox-gamertag-generator" },
    { name: "YouTube Description", href: "/generators/youtube-description-generator" },
    { name: "YouTube Title", href: "/generators/youtube-title-generator" },
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

  return (
    <footer className="bg-gray-950 text-white py-12 px-4 md:px-8 lg:px-12 border-t border-blue-800">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">Quick Links to Generators</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
          {generatorLinks.map((gen, index) => (
            <Link
              key={`footer-gen-${index}`}
              href={gen.href}
              className="text-gray-400 hover:text-blue-300 text-sm transition-colors py-1"
            >
              {gen.name} Generator
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;