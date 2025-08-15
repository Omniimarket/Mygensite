// data/categories.js

// This file defines your site's categories and which generators belong to each.
// It helps structure your content for better navigation and SEO.

import { generatorDetails, generatorContentMap } from './generatorsData.js'; // <-- Added .js extension

export const categories = [
  {
    name: "Name Generators",
    slug: "name-generators",
    description: "Discover unique names for businesses, characters, brands, and more with our AI-powered name generators.",
    generators: [
      'business-name-generator', 'company-name-generator', 'brand-name-generator', 'shop-name-generator',
      'store-name-generator', 'restaurant-name-generator', 'cafe-name-generator', 'app-name-generator',
      'domain-name-generator', 'website-name-generator', 'product-name-generator', 'logo-name-generator',
      'username-generator', 'fantasy-name-generator', 'random-name-generator', 'character-name-generator',
      'nickname-generator', 'pet-name-generator', 'cool-name-generator', 'funny-name-generator',
      'fake-name-generator', 'album-name-generator', 'song-title-generator', 'playlist-name-generator',
      'movie-title-generator', 'film-name-generator', 'dj-name-generator', 'artist-name-generator',
      'stage-name-generator', 'rapper-name-generator', 'discord-name-generator', 'twitch-username-generator',
      'xbox-gamertag-generator', 'roblox-username-generator', 'fortnite-name-generator', 'call-of-duty-name-generator',
      'pubg-name-generator', 'game-name-generator', 'guild-name-generator', 'clan-name-generator',
      'superhero-name-generator', 'dnd-name-generator', 'sci-fi-name-generator', 'villain-name-generator',
      'rpg-name-generator', 'anime-name-generator', 'sports-team-name-generator', 'fantasy-football-name-generator',
      'cocktail-name-generator',
    ],
  },
  {
    name: "Writing & Content Tools",
    slug: "writing-content-tools",
    description: "Generate compelling paragraphs, creative story ideas, engaging social media captions, and more with our AI writing tools.",
    generators: [
      'paragraph-generator', 'book-title-generator', 'slogan-generator', 'company-slogan-generator',
      'business-slogan-generator', 'slogan-maker', 'tagline-generator', 'cover-letter-generator',
      'blog-post-idea-generator', 'youtube-description-generator', 'youtube-title-generator',
      'email-subject-line-generator', 'instagram-caption-generator', 'instagram-bio-generator', 'tweet-generator',
      'facebook-post-generator', 'linkedin-headline-generator', 'linkedin-summary-generator', 'story-idea-generator',
      'news-headline-generator', 'dialogue-generator', 'pun-generator', 'lyric-generator', 'bio-generator',
      'quote-generator', 'motivational-quote-generator', 'inspirational-quote-generator', 'meta-description-generator',
      'keyword-generator', 'random-word-generator',
    ],
  },
  {
    name: "Fun & Utility Tools",
    slug: "fun-utility-tools",
    description: "Explore a variety of tools for entertainment, problem-solving, and everyday utilities, powered by AI.",
    generators: [
      'random-fact-generator', 'joke-generator', 'riddle-generator', 'trivia-question-generator',
      'would-you-rather-generator', 'truth-or-dare-generator', 'never-have-i-ever-generator',
      'two-truths-and-a-lie-generator', 'mad-libs-generator', 'charades-generator', 'catchphrase-generator',
      'dilemma-resolver', 'dream-interpreter', 'chat-bot', 'horoscope-generator', 'powerball-generator',
      'mega-millions-generator', 'pick-5-generator', 'fantasy-5-generator', 'random-password-generator',
      'secure-password-generator', 'roblox-password-generator', 'random-letter-generator',
      'random-color-generator', 'random-date-generator', 'random-time-generator', 'fake-email-generator',
      'css-gradient-generator', 'meme-text-generator', 'meme-caption-generator', 'roast-generator', 'comeback-generator',
    ],
  },
  {
    name: "Health & Lifestyle",
    slug: "health-lifestyle",
    description: "Plan your meals, workouts, and travel with our AI-powered generators for a healthier, more organized life.",
    generators: [
      'recipe-generator', 'meal-plan-generator', 'workout-plan-generator', 'diet-plan-generator',
      'travel-itinerary-generator', 'gift-idea-generator',
    ],
  },
  {
    name: "Business & Productivity",
    slug: "business-productivity",
    description: "Boost your business and streamline your work with AI tools for idea generation, content optimization, and more.",
    generators: [
      'business-idea-generator', 'keyword-generator', 'meta-description-generator',
    ],
  },
];

// This function helps retrieve a category by its slug
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};

// This function gets all generators for a given category slug, including their details
export const getGeneratorsForCategory = (categorySlug) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];

  return category.generators.map(generatorSlug => {
    const details = generatorDetails[generatorSlug];
    // Ensure the generator actually exists in generatorDetails
    return details ? { ...details, slug: generatorSlug } : null;
  }).filter(Boolean); // Remove any null entries if a slug doesn't match
};

// Helper function to get all categories with their featured generators (for homepage, all-generators page)
export const getAllCategoriesWithGenerators = () => {
    // Defensive check to ensure 'categories' is an array
    if (!Array.isArray(categories)) {
        console.error("Error: 'categories' is not an array when calling getAllCategoriesWithGenerators.");
        return []; // Return an empty array to prevent TypeError
    }

    return categories.map(category => ({
        ...category,
        generators: category.generators.map(slug => {
            const details = generatorDetails[slug];
            const content = generatorContentMap[slug];
            return details ? {
                name: details.title.replace(' Generator', ''),
                href: `/${slug}`,
                desc: content?.description?.replace(/<[^>]*>?/gm, '').split('.')[0] + '.',
            } : null;
        }).filter(Boolean)
    }));
};
