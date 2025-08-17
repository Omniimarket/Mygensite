// pages/api/generate.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import rateLimit from 'express-rate-limit';

// Initialize the Google Generative AI client
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("CRITICAL ERROR: GEMINI_API_KEY environment variable is NOT set.");
  console.error("Please ensure you have a .env.local file in your project root with: GEMINI_API_KEY=YOUR_ACTUAL_API_KEY");
  // In a production environment, you might want to exit the process or throw a more graceful error.
  // For development, throwing an error here stops the server if the key is missing.
  throw new Error("GEMINI_API_KEY environment variable is not set. API route cannot function.");
} else {
  console.log("SUCCESS: Gemini API Key loaded (first 5 chars):", API_KEY.substring(0, 5) + '...');
}

const genAI = new GoogleGenerativeAI(API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" });

// Define the rate limiter middleware
// This will allow 10 requests per IP address within a 30-minute window.
const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again after 30 minutes."
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Helper function to run the middleware
// Next.js API routes don't natively support Express-style middleware directly on `req`, `res`
// So we wrap it in a Promise to use await
const applyRateLimit = (req, res) =>
  new Promise((resolve, reject) => {
    limiter(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

// The main Next.js API route handler
export default async function handler(req, res) {
  // Apply rate limiting first
  try {
    await applyRateLimit(req, res);
  } catch (error) {
    // The error object from rateLimit contains the message
    return res.status(429).json(error.message);
  }

  // Ensure the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt, type } = req.body;

  // Basic validation for prompt and type
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ message: 'Prompt is required and must be a non-empty string.' });
  }
  if (!type || typeof type !== 'string' || type.trim().length === 0) {
    return res.status(400).json({ message: 'Generator type is required.' });
  }

  let fullPrompt = ""; // Use fullPrompt consistently

  // Construct the prompt based on the generator type
  switch (type) {
    case 'business-name':
      fullPrompt = `Generate 5 unique and catchy business names based on the following description: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'username':
      fullPrompt = `Generate 5 unique and creative usernames based on the following keywords/interests: "${prompt}". Provide only the usernames, one per line.`;
      break;
    case 'fantasy-name':
      fullPrompt = `Generate 5 unique fantasy names based on the theme: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'random-name':
      fullPrompt = `Generate 5 random names. If a type or origin is specified like "${prompt}", adhere to that. Provide only the names, one per line.`;
      break;
    case 'random-word':
      fullPrompt = `Generate 5 random words. If a category is specified like "${prompt}", adhere to that. Provide only the words, one per line.`;
      break;
    case 'book-title':
      fullPrompt = `Suggest 5 captivating book titles for a book about: "${prompt}". Provide only the titles, one per line.`;
      break;
    case 'paragraph':
      fullPrompt = `Write a coherent paragraph about: "${prompt}".`;
      break;
    case 'slogan':
      fullPrompt = `Generate 5 compelling slogans for: "${prompt}". Provide only the slogans, one per line.`;
      break;
    case 'hashtag':
      fullPrompt = `Generate 5 relevant and trending hashtags for: "${prompt}". Provide only the hashtags, one per line.`;
      break;
    case 'company-name':
      fullPrompt = `Generate 5 professional company names for a company focused on: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'band-name':
      fullPrompt = `Generate 5 cool band names for a band with the genre/vibe: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'character-name':
      fullPrompt = `Generate 5 unique names for a character described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'rap-lyrics':
      fullPrompt = `Generate a short rap verse (4-8 lines) about: "${prompt}".`;
      break;
    case 'cover-letter':
      fullPrompt = `Write a concise cover letter introduction for a job described as: "${prompt}".`;
      break;
    case 'brand-name':
      fullPrompt = `Generate 5 strong and memorable brand names for a brand described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'team-name':
      fullPrompt = `Generate 5 unique team names for a team related to: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'nickname':
      fullPrompt = `Generate 5 fun nicknames for a person/character described as: "${prompt}". Provide only the nicknames, one per line.`;
      break;
    case 'superhero-name':
      fullPrompt = `Generate 5 powerful superhero names for a hero with powers/origin: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'dnd-name':
      fullPrompt = `Generate 5 D&D names for a character/entity described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'poetry':
      fullPrompt = `Write a short poem (4-8 lines) about: "${prompt}".`;
      break;
    case 'lyric':
      fullPrompt = `Generate a short song lyric verse (4-8 lines) about the theme: "${prompt}".`;
      break;
    case 'rhyme':
      fullPrompt = `Provide 5 words that rhyme with: "${prompt}". Provide only the words, one per line.`;
      break;
    case 'rapper-name':
      fullPrompt = `Generate 5 cool rapper names based on the style/origin: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'fake-name':
      fullPrompt = `Generate 5 fake names. If gender/origin is specified like "${prompt}", adhere to that. Provide only the names, one per line.`;
      break;
    case 'fake-email':
      fullPrompt = `Generate 3 plausible fake email addresses. Provide only the emails, one per line.`;
      break;
    case 'youtube-title':
      fullPrompt = `Generate 5 catchy YouTube video titles for a video about: "${prompt}". Provide only the titles, one per line.`;
      break;
    case 'instagram-caption':
      fullPrompt = `Generate 3 engaging Instagram captions for a post about: "${prompt}".`;
      break;
    case 'ai-content':
      fullPrompt = `Generate a short piece of content based on the request: "${prompt}".`;
      break;
    case 'bio':
      fullPrompt = `Write a short, engaging bio for someone described as: "${prompt}".`;
      break;
    case 'tweet':
      fullPrompt = `Compose a concise tweet about: "${prompt}".`;
      break;
    case 'meta-description':
      fullPrompt = `Write an SEO-friendly meta description (under 160 characters) for a page about: "${prompt}".`;
      break;
    case 'keyword':
      fullPrompt = `Generate 10 relevant keywords for: "${prompt}". Provide only the keywords, comma-separated.`;
      break;
    case 'facebook-post':
      fullPrompt = `Generate an engaging Facebook post about: "${prompt}".`;
      break;
    case 'tiktok-hashtag':
      fullPrompt = `Generate 5 trending TikTok hashtags for a video about: "${prompt}". Provide only the hashtags, one per line.`;
      break;
    case 'logo-name':
      fullPrompt = `Generate 5 creative names for a logo design described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'domain-name':
      fullPrompt = `Suggest 5 available-sounding domain names for a website about: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'meme-text':
      fullPrompt = `Generate funny meme text for a meme image/situation described as: "${prompt}".`;
      break;
    case 'html-code':
      fullPrompt = `Generate a simple HTML code snippet for: "${prompt}". Provide only the HTML code.`;
      break;
    case 'css-gradient':
      fullPrompt = `Generate CSS code for a gradient described as: "${prompt}". Provide only the CSS code.`;
      break;
    case 'linkedin-headline':
      fullPrompt = `Generate 3 professional LinkedIn headlines for someone described as: "${prompt}". Provide only the headlines, one per line.`;
      break;
    case 'shop-name':
      fullPrompt = `Generate 5 unique shop names for a shop selling: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'product-name':
      fullPrompt = `Generate 5 creative product names for a product described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'news-headline':
      fullPrompt = `Generate 3 attention-grabbing news headlines for a story about: "${prompt}". Provide only the headlines, one per line.`;
      break;
    case 'script':
      fullPrompt = `Write a very short script (2-3 lines of dialogue) for a scene about: "${prompt}".`;
      break;
    case 'youtube-description':
      fullPrompt = `Write a concise YouTube video description for a video about: "${prompt}".`;
      break;
    case 'instagram-bio':
      fullPrompt = `Write a short Instagram bio for someone described as: "${prompt}".`;
      break;
    case 'slogan-maker':
      fullPrompt = `Generate 5 catchy slogans for: "${prompt}". Provide only the slogans, one per line.`;
      break;
    case 'tagline':
      fullPrompt = `Generate 5 memorable taglines for a brand/product: "${prompt}". Provide only the taglines, one per line.`;
      break;
    case 'mission-statement':
      fullPrompt = `Write a concise mission statement for an organization focused on: "${prompt}".`;
      break;
    case 'company-slogan':
      fullPrompt = `Generate 5 compelling company slogans for a company focused on: "${prompt}". Provide only the slogans, one per line.`;
      break;
    case 'store-name':
      fullPrompt = `Generate 5 unique store names for a store selling: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'website-name':
      fullPrompt = `Generate 5 creative website names for a website about: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'app-name':
      fullPrompt = `Generate 5 unique app names for an app described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'game-name':
      fullPrompt = `Generate 5 cool game names for a game described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'guild-name':
      fullPrompt = `Generate 5 epic guild names for a guild described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'clan-name':
      fullPrompt = `Generate 5 strong clan names for a clan described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'pet-name':
      fullPrompt = `Generate 5 cute pet names for a pet described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'cool-name':
      fullPrompt = `Generate 5 cool names based on the style/theme: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'funny-name':
      fullPrompt = `Generate 5 funny names for a character/context described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'workout-plan':
    fullPrompt = `Create a 3-day workout plan focused on: "${prompt}". Include exercise types, sets, reps, and rest. Keep it practical for home or gym.`;
    break;
    case 'sci-fi-name':
      fullPrompt = `Generate 5 futuristic sci-fi names for a character/planet/ship based on: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'villain-name':
      fullPrompt = `Generate 5 menacing villain names for a villain described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'rpg-name':
      fullPrompt = `Generate 5 RPG names for a character/setting described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'anime-name':
      fullPrompt = `Generate 5 anime-style names for a character described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'story-title':
      fullPrompt = `Generate 5 captivating story titles for a story described as: "${prompt}". Provide only the titles, one per line.`;
      break;
    case 'song-title':
      fullPrompt = `Generate 5 creative song titles for a song described as: "${prompt}". Provide only the titles, one per line.`;
      break;
    case 'dj-name':
      fullPrompt = `Generate 5 unique DJ names based on the style/vibe: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'artist-name':
      fullPrompt = `Generate 5 unique artist names for an artist described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'stage-name':
      fullPrompt = `Generate 5 captivating stage names for a performer described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'band-logo':
      fullPrompt = `Generate 3 creative ideas for a band logo for a band named "${prompt}".`;
      break;
    case 'album-name':
      fullPrompt = `Generate 5 creative album names for an album described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'playlist-name':
      fullPrompt = `Generate 5 catchy playlist names for a playlist described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'movie-title':
      fullPrompt = `Generate 5 captivating movie titles for a movie described as: "${prompt}". Provide only the titles, one per line.`;
      break;
    case 'film-name':
      fullPrompt = `Generate 5 unique film names for a film described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'meme-caption':
      fullPrompt = `Generate 3 funny meme captions for a meme image/situation described as: "${prompt}".`;
      break;
    case 'pun':
      fullPrompt = `Generate 3 witty puns using the word/topic: "${prompt}".`;
      break;
    case 'roast':
      fullPrompt = `Generate 3 lighthearted roasts for someone/something described as: "${prompt}".`;
      break;
    case 'comeback':
      fullPrompt = `Generate 3 clever comebacks for the situation: "${prompt}".`;
      break;
    case 'secure-password':
      fullPrompt = `Generate 3 secure passwords based on the requirements: "${prompt}". Provide only the passwords, one per line.`;
      break;
    case 'quote':
      fullPrompt = `Generate an inspirational quote about: "${prompt}".`;
      break;
    case 'inspirational-quote':
      fullPrompt = `Generate an inspirational quote about: "${prompt}".`;
      break;
    case 'motivational-quote':
      fullPrompt = `Generate a motivational quote about: "${prompt}".`;
      break;
    case 'sports-team-name':
      fullPrompt = `Generate 5 creative sports team names for a team related to: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'fantasy-football-name':
      fullPrompt = `Generate 5 funny fantasy football team names based on: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'diet-plan':
      fullPrompt = `Generate a simple, healthy diet plan suggestion for someone with the goal/preference: "${prompt}". (Disclaimer: Not professional medical advice).`;
      break;
    case 'meal-plan':
      fullPrompt = `Generate a simple meal plan suggestion for a day based on the preference: "${prompt}". (Disclaimer: Not professional medical advice).`;
      break;
    case 'cocktail-name':
      fullPrompt = `Generate 5 unique cocktail names for a drink described as: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'restaurant-name':
      fullPrompt = `Generate 5 attractive restaurant names for a restaurant with the cuisine/ambiance: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'cafe-name':
      fullPrompt = `Generate 5 charming cafe names for a cafe with the vibe/specialty: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'twitch-username':
      fullPrompt = `Generate 5 unique Twitch usernames for a streamer with the style/content: "${prompt}". Provide only the usernames, one per line.`;
      break;
    case 'discord-name':
      fullPrompt = `Generate 5 cool Discord names based on the interests/theme: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'xbox-gamertag':
      fullPrompt = `Generate 5 epic Xbox Gamertags for a gamer with the style/games: "${prompt}". Provide only the gamertags, one per line.`;
      break;
    case 'roblox-username':
      fullPrompt = `Generate 5 creative Roblox usernames for an avatar/player described as: "${prompt}". Provide only the usernames, one per line.`;
      break;
    case 'fortnite-name':
      fullPrompt = `Generate 5 cool Fortnite names for a player with the playstyle/skins: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'call-of-duty-name':
      fullPrompt = `Generate 5 tactical Call of Duty names for a player with the playstyle/weapons: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'pubg-name':
      fullPrompt = `Generate 5 cool PUBG names for a player with the strategy/gear: "${prompt}". Provide only the names, one per line.`;
      break;
    case 'random-password':
      fullPrompt = `Generate 5 strong, secure, and unique passwords that are at least 12 characters long and include uppercase, lowercase, numbers, and symbols. Context: "${prompt}".`;
      break;
    case 'powerball':
      fullPrompt = `Generate 5 sets of Powerball numbers. Each set must have 5 unique numbers from 1-69 and 1 Powerball number from 1-26.`;
      break;
    case 'mega-millions':
      fullPrompt = `Generate 5 sets of Mega Millions numbers. Each set must have 5 unique numbers from 1-70 and 1 Mega Ball number from 1-25.`;
      break;
    case 'pick-5':
      fullPrompt = `Generate 5 sets of Pick 5 lottery numbers. Each set must have 5 unique numbers from 1-39.`;
      break;
    case 'fantasy-5':
      fullPrompt = `Generate 5 sets of Fantasy 5 lottery numbers. Each set must have 5 unique numbers from 1-36.`;
      break;
    case 'random-letter':
      fullPrompt = `Generate 5 random letters of the alphabet.`;
      break;
    case 'random-date':
      fullPrompt = `Generate 5 random dates in YYYY-MM-DD format.`;
      break;
    case 'random-time':
      fullPrompt = `Generate 5 random times in HH:MM AM/PM format.`;
      break;
    case 'character-backstory':
      fullPrompt = `Generate a short character backstory for a character described as: "${prompt}".`;
      break;
    case 'plot':
      fullPrompt = `Generate a simple plot idea for a story about: "${prompt}".`;
      break;
    case 'story-idea':
      fullPrompt = `Generate 3 unique story ideas based on: "${prompt}".`;
      break;
    case 'writing-prompt':
      fullPrompt = `Generate 3 creative writing prompts based on: "${prompt}".`;
      break;
    default:
      console.error(`Error: Invalid generator type '${type}' in switch case.`);
      return res.status(400).json({ error: 'Invalid generator type.' });
  }

  if (!fullPrompt) { // Check if the prompt was actually generated
    console.error("Error: Full prompt is empty for the given type.");
    return res.status(400).json({ error: 'No prompt generated for the given type.' });
  }

  try {
    console.log("Attempting to call Gemini API with model: gemini-2.5-flash-preview-05-20");
    const result = await geminiModel.generateContent(fullPrompt); // Use fullPrompt here
    const response = await result.response;
    const text = response.text();
    console.log("Gemini API call successful. Generated text length:", text.length);
    res.status(200).json({ generatedText: text });
  } catch (geminiError) {
    console.error('Gemini API Call Failed:', geminiError);
    // Provide more specific error messages to the client
    if (geminiError.message && geminiError.message.includes('API key not valid')) {
        res.status(401).json({ error: 'Invalid Gemini API Key. Please check your .env.local file and API key validity.' });
    } else if (geminiError.message && geminiError.message.includes('quota exceeded')) {
        res.status(429).json({ error: 'API quota exceeded. Please try again later.' });
    } else {
        res.status(500).json({ error: `Failed to generate content from AI: ${geminiError.message}. Please try again later.` });
    }
  }
}
