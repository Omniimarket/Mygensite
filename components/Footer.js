import React from 'react';
import Link from 'next/link';

// Extract the list of active generators from your data
const getActiveGenerators = () => {
  const details = {
    'business-name-generator': 'Business Name',
    'username-generator': 'Username',
    'fantasy-name-generator': 'Fantasy Name',
    'random-name-generator': 'Random Name',
    'random-word-generator': 'Random Word',
    'book-title-generator': 'Book Title',
    'paragraph-generator': 'Paragraph',
    'slogan-generator': 'Slogan',
    'hashtag-generator': 'Hashtag',
    'company-name-generator': 'Company Name',
    'band-name-generator': 'Band Name',
    'character-name-generator': 'Character Name',
    'rap-lyrics-generator': 'Rap Lyrics',
    'random-password-generator': 'Random Password',
    'cover-letter-generator': 'Cover Letter',
    'brand-name-generator': 'Brand Name',
    'team-name-generator': 'Team Name',
    'nickname-generator': 'Nickname',
    'blog-post-idea-generator': 'Blog Post Idea',
    'youtube-description-generator': 'YouTube Description',
    'email-subject-line-generator': 'Email Subject Line',
    'instagram-caption-generator': 'Instagram Caption',
    'tweet-generator': 'Tweet',
    'linkedin-headline-generator': 'LinkedIn Headline',
    'business-idea-generator': 'Business Idea',
    'product-name-generator': 'Product Name',
    'song-title-generator': 'Song Title',
    'story-idea-generator': 'Story Idea',
    'random-fact-generator': 'Random Fact',
    'joke-generator': 'Joke',
    'quote-generator': 'Quote',
    'recipe-generator': 'Recipe',
    'meal-plan-generator': 'Meal Plan',
    'workout-plan-generator': 'Workout Plan',
    'travel-itinerary-generator': 'Travel Itinerary',
    'gift-idea-generator': 'Gift Idea',
    'dilemma-resolver': 'Dilemma Resolver',
    'dream-interpreter': 'Dream Interpreter',
    'chat-bot': 'Chat Bot',
    'horoscope-generator': 'Horoscope',
    'riddle-generator': 'Riddle',
    'trivia-question-generator': 'Trivia Question',
    'would-you-rather-generator': 'Would You Rather',
    'truth-or-dare-generator': 'Truth or Dare',
    'never-have-i-ever-generator': 'Never Have I Ever',
    'two-truths-and-a-lie-generator': 'Two Truths and a Lie',
    'mad-libs-generator': 'Mad Libs',
    'charades-generator': 'Charades',
    'catchphrase-generator': 'Catchphrase',
    'news-headline-generator': 'News Headline',
    'dialogue-generator': 'Dialogue',
    'css-gradient-generator': 'CSS Gradient',
    'album-name-generator': 'Album Name',
    'discord-name-generator': 'Discord Name',
    'domain-name-generator': 'Domain Name',
    'shop-name-generator': 'Shop Name',
    'store-name-generator': 'Store Name',
    'company-slogan-generator': 'Company Slogan',
    'business-slogan-generator': 'Business Slogan',
    'website-name-generator': 'Website Name',
    'youtube-title-generator': 'YouTube Title',
    'pun-generator': 'Pun',
    'lyric-generator': 'Lyric',
    'diet-plan-generator': 'Diet Plan',
    'motivational-quote-generator': 'Motivational Quote',
    'linkedin-summary-generator': 'LinkedIn Summary',
    'cafe-name-generator': 'Cafe Name',
    'twitch-username-generator': 'Twitch Username',
    'xbox-gamertag-generator': 'Xbox Gamertag',
    'roblox-username-generator': 'Roblox Username',
    'fortnite-name-generator': 'Fortnite Name',
    'call-of-duty-name-generator': 'Call of Duty Name',
    'pubg-name-generator': 'PUBG Name',
    'powerball-generator': 'Powerball',
    'mega-millions-generator': 'Mega Millions',
    'pick-5-generator': 'Pick 5',
    'fantasy-5-generator': 'Fantasy 5',
    'roblox-password-generator': 'Roblox Password',
    'pet-name-generator': 'Pet Name',
    'cool-name-generator': 'Cool Name',
    'funny-name-generator': 'Funny Name',
    'fake-name-generator': 'Fake Name',
    'playlist-name-generator': 'Playlist Name',
    'movie-title-generator': 'Movie Title',
    'film-name-generator': 'Film Name',
    'dj-name-generator': 'DJ Name',
    'artist-name-generator': 'Artist Name',
    'stage-name-generator': 'Stage Name',
    'bio-generator': 'Bio',
    'inspirational-quote-generator': 'Inspirational Quote',
    'slogan-maker': 'Slogan Maker',
    'tagline-generator': 'Tagline',
    'instagram-bio-generator': 'Instagram Bio',
    'facebook-post-generator': 'Facebook Post',
    'tiktok-hashtag-generator': 'TikTok Hashtag',
    'meta-description-generator': 'Meta Description',
    'keyword-generator': 'Keyword',
    'logo-name-generator': 'Logo Name',
    'game-name-generator': 'Game Name',
    'guild-name-generator': 'Guild Name',
    'clan-name-generator': 'Clan Name',
    'superhero-name-generator': 'Superhero Name',
    'dnd-name-generator': 'D&D Name',
    'rapper-name-generator': 'Rapper Name',
    'sci-fi-name-generator': 'Sci Fi Name',
    'villain-name-generator': 'Villain Name',
    'rpg-name-generator': 'RPG Name',
    'anime-name-generator': 'Anime Name',
    'sports-team-name-generator': 'Sports Team Name',
    'fantasy-football-name-generator': 'Fantasy Football Name',
    'secure-password-generator': 'Secure Password',
    'random-letter-generator': 'Random Letter',
    'random-color-generator': 'Random Color',
    'random-date-generator': 'Random Date',
    'random-time-generator': 'Random Time',
    'fake-email-generator': 'Fake Email',
    'meme-text-generator': 'Meme Text',
    'meme-caption-generator': 'Meme Caption',
    'roast-generator': 'Roast',
    'comeback-generator': 'Comeback',
    'cocktail-name-generator': 'Cocktail Name',
    'restaurant-name-generator': 'Restaurant Name',
    'app-name-generator': 'App Name',
  };

  // Convert to array and sort by display name
  return Object.entries(details)
    .map(([href, name]) => ({ name, href: `/generators/${href}` }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const Footer = () => {
  const generatorLinks = getActiveGenerators();

  return (
    <footer className="bg-gray-950 text-white py-12 px-4 md:px-8 lg:px-12 border-t border-blue-800">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">Quick Links to Generators</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
          {generatorLinks.map((gen) => (
            <Link
              key={gen.href}
              href={gen.href}
              className="text-gray-400 hover:text-blue-300 text-sm transition-colors py-1 block"
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