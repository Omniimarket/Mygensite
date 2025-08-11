import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// No need for useRouter for generatorType directly in the component,
// as it will be passed via props now.

// Import your actual components from the components folder
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';
import LoadingSpinner from '../components/LoadingSpinner';


// This data would ideally come from a central source or API
// Keeping it here for demonstration, but in a large app, it might be in a separate file
const generatorDetails = {
  'business-name-generator': {
    title: 'Business Name Generator',
    description: 'Unleash your creativity and find the perfect, unique name for your business, startup, or project. Our AI-powered tool generates innovative and memorable names based on your keywords and industry.',
    keywords: 'business name, company name, startup name, AI generator, free business name, creative business names',
    promptLabel: 'Enter keywords or a brief description of your business:',
    placeholder: 'e.g., eco-friendly fashion brand, AI software for marketing, gourmet dog treats',
    apiType: 'business-name'
  },
  'username-generator': {
    title: 'Username Generator',
    description: 'Generate unique and catchy usernames for social media, gaming, or any online platform. Find a name that truly represents you!',
    keywords: 'username, unique username, cool username, gaming username, social media username, AI username generator',
    promptLabel: 'Enter keywords or your interests:',
    placeholder: 'e.g., gamer, tech enthusiast, cat lover, creative writer',
    apiType: 'username'
  },
  'fantasy-name-generator': {
    title: 'Fantasy Name Generator',
    description: 'Generate unique and imaginative names for your fantasy characters, places, or spells. Dive into worlds of magic and adventure!',
    keywords: 'fantasy name, character name, D&D name, unique fantasy names, AI fantasy generator',
    promptLabel: 'Enter keywords or a fantasy theme:',
    placeholder: 'e.g., elven, dwarven, magical, dark lord, ancient forest',
    apiType: 'fantasy-name'
  },
  'random-name-generator': {
    title: 'Random Name Generator',
    description: 'Need a name fast? Generate random names for characters, pets, or any other purpose. Simple, quick, and diverse!',
    keywords: 'random name, name generator, character name, pet name, AI random name',
    promptLabel: 'Specify type or origin (optional):',
    placeholder: 'e.g., male, female, common, unique, specific origin like "Japanese"',
    apiType: 'random-name'
  },
  'random-word-generator': {
    title: 'Random Word Generator',
    description: 'Discover random words for games, writing prompts, brainstorming, or just for fun. Expand your vocabulary and creativity!',
    keywords: 'random word, word generator, vocabulary, writing prompt, game ideas',
    promptLabel: 'Specify a category (optional):',
    placeholder: 'e.g., nouns, verbs, adjectives, animals, abstract concepts',
    apiType: 'random-word'
  },
  'book-title-generator': {
    title: 'Book Title Generator',
    description: 'Find compelling and captivating titles for your next book. Our AI helps you create titles that grab attention and reflect your story.',
    keywords: 'book title, novel title, story title, creative titles, AI book title generator',
    promptLabel: 'Enter a brief summary or genre of your book:',
    placeholder: 'e.g., a sci-fi mystery in space, a romantic comedy about a baker',
    apiType: 'book-title'
  },
  'paragraph-generator': {
    title: 'Paragraph Generator',
    description: 'Quickly create well-structured and coherent paragraphs for any topic. Perfect for essays, articles, or quick content needs.',
    keywords: 'paragraph generator, content writing, essay helper, AI paragraph, quick content',
    promptLabel: 'Enter the topic or main idea for your paragraph:',
    placeholder: 'e.g., the benefits of renewable energy, how to make a perfect cup of coffee',
    apiType: 'paragraph'
  },
  'slogan-generator': {
    title: 'Slogan Generator',
    description: 'Craft compelling and memorable slogans for your brand, campaign, or personal use. Make your message stick!',
    keywords: 'slogan, tagline, catchy slogan, brand message, AI slogan generator',
    promptLabel: 'Enter your brand/product name or a brief description:',
    placeholder: 'e.g., "EcoClean Detergent", "a new fitness app for busy moms"',
    apiType: 'slogan'
  },
  'hashtag-generator': {
    title: 'Hashtag Generator',
    description: 'Generate relevant and trending hashtags for your social media posts. Boost your visibility and reach a wider audience!',
    keywords: 'hashtag, social media, trending hashtags, Instagram hashtags, Twitter hashtags, AI hashtag generator',
    promptLabel: 'Enter keywords or topic for your post:',
    placeholder: 'e.g., summer travel, healthy recipes, new product launch',
    apiType: 'hashtag'
  },
  'company-name-generator': {
    title: 'Company Name Generator',
    description: 'Brainstorm unique and professional names for your new company. Find a name that stands out in your industry.',
    keywords: 'company name, business name, startup name, AI company name, brand naming',
    promptLabel: 'Enter keywords or your company\'s industry/focus:',
    placeholder: 'e.g., sustainable tech, creative agency, gourmet food delivery',
    apiType: 'company-name'
  },
  'band-name-generator': {
    title: 'Band Name Generator',
    description: 'Discover cool, unique, and memorable names for your band. Find a name that rocks as hard as your music!',
    keywords: 'band name, music name, rock band names, unique band names, AI band name generator',
    promptLabel: 'Enter your music genre or band\'s vibe:',
    placeholder: 'e.g., indie rock, heavy metal, acoustic folk, futuristic electronic',
    apiType: 'band-name'
  },
  'character-name-generator': {
    title: 'Character Name Generator',
    description: 'Create unique and fitting names for your fictional characters. Perfect for writers, gamers, and role-players.',
    keywords: 'character name, fictional name, story character, RPG name, AI character name',
    promptLabel: 'Describe your character (e.g., gender, personality, setting):',
    placeholder: 'e.g., brave knight, mischievous fairy, wise old wizard',
    apiType: 'character-name'
  },
  'rap-lyrics-generator': {
    title: 'Rap Lyrics Generator',
    description: 'Generate creative and rhythmic rap lyrics for your tracks. Get inspired and find your flow!',
    keywords: 'rap lyrics, hip hop lyrics, song lyrics, AI rap generator, rhyme generator',
    promptLabel: 'Enter a topic or a few keywords for the lyrics:',
    placeholder: 'e.g., overcoming challenges, city life, chasing dreams',
    apiType: 'rap-lyrics'
  },
  'random-password-generator': {
    title: 'Random Password Generator',
    description: 'Create strong, secure, and unique passwords instantly. Protect your online accounts with robust, AI-generated combinations.',
    keywords: 'random password, secure password, password generator, strong password, online security, free password tool',
    promptLabel: 'Specify password requirements (e.g., length, include numbers/symbols):',
    placeholder: 'e.g., 12 characters, include symbols, no repeating characters',
    apiType: 'random-password'
  },
  'cover-letter-generator': {
    title: 'Cover Letter Generator',
    description: 'Generate professional and compelling cover letters tailored to your job applications. Make a great first impression!',
    keywords: 'cover letter, job application, professional letter, AI cover letter, resume helper',
    promptLabel: 'Enter job title and key skills/experiences:',
    placeholder: 'e.g., "Software Engineer, experienced in React and Node.js"',
    apiType: 'cover-letter'
  },
  'brand-name-generator': {
    title: 'Brand Name Generator',
    description: 'Develop a strong and memorable brand name that resonates with your audience. Build a powerful identity for your business.',
    keywords: 'brand name, naming ideas, company branding, AI brand name, marketing name',
    promptLabel: 'Describe your brand\'s values or target audience:',
    placeholder: 'e.g., luxury eco-friendly products, affordable tech for students',
    apiType: 'brand-name'
  },
  'team-name-generator': {
    title: 'Team Name Generator',
    description: 'Find a great and unique name for your sports team, work group, or gaming squad. Boost team spirit!',
    keywords: 'team name, group name, sports team, gaming squad, AI team name',
    promptLabel: 'Enter keywords related to your team\'s purpose or vibe:',
    placeholder: 'e.g., "competitive esports", "creative marketing", "community volunteers"',
    apiType: 'team-name'
  },
  'nickname-generator': {
    title: 'Nickname Generator',
    description: 'Generate fun and unique nicknames for friends, family, or yourself. Find a name that perfectly fits!',
    keywords: 'nickname, cool nicknames, funny nicknames, AI nickname generator',
    promptLabel: 'Enter a person\'s name or a few characteristics:',
    placeholder: 'e.g., "Sarah, loves cats and reading", "tall, plays basketball"',
    apiType: 'nickname'
  },
  'superhero-name-generator': {
    title: 'Superhero Name Generator',
    description: 'Create powerful and memorable names for your heroes. Every hero needs a name that inspires!',
    keywords: 'superhero name, hero name, comic book name, AI superhero name',
    promptLabel: 'Describe your superhero\'s powers or origin:',
    placeholder: 'e.g., "controls ice, from a frozen planet", "super strength, defends the city"',
    apiType: 'superhero-name'
  },
  'dnd-name-generator': {
    title: 'D&D Name Generator',
    description: 'Generate unique and immersive names for your Dungeons & Dragons characters, NPCs, or locations. Enhance your campaigns!',
    keywords: 'D&D name, DnD name, fantasy RPG, character name, AI D&D name',
    promptLabel: 'Specify race or class (e.g., "elven rogue", "dwarven warrior"):',
    placeholder: 'e.g., "human paladin", "tiefling sorcerer", "goblin merchant"',
    apiType: 'dnd-name'
  },
  'poetry-generator': {
    title: 'Poetry Generator',
    description: 'Create beautiful and expressive poems instantly. Get inspired and explore the art of verse.',
    keywords: 'poetry, poem generator, AI poetry, creative writing, verse',
    promptLabel: 'Enter a theme or subject for your poem:',
    placeholder: 'e.g., "the beauty of nature", "a feeling of nostalgia", "the future of technology"',
    apiType: 'poetry'
  },
  'lyric-generator': {
    title: 'Lyric Generator',
    description: 'Generate creative and emotional song lyrics for your music. Find words that resonate with your melodies.',
    keywords: 'song lyric, music lyrics, songwriting, AI lyric generator',
    promptLabel: 'Enter a song theme or mood:',
    placeholder: 'e.g., "heartbreak pop song", "upbeat summer anthem", "folk ballad about travel"',
    apiType: 'lyric'
  },
  'rhyme-generator': {
    title: 'Rhyme Generator',
    description: 'Find perfect rhyming words for your poetry, songs, or rap lyrics. Never be stuck for a rhyme again!',
    keywords: 'rhyme, rhyming words, poetry helper, lyric writing, AI rhyme',
    promptLabel: 'Enter a word to find rhymes for:',
    placeholder: 'e.g., "cat", "dream", "ocean"',
    apiType: 'rhyme'
  },
  'rapper-name-generator': {
    title: 'Rapper Name Generator',
    description: 'Generate a cool, unique, and impactful name for your rap persona. Find a name that commands the stage!',
    keywords: 'rapper name, hip hop name, stage name, AI rapper name',
    promptLabel: 'Enter keywords about your style or origin:',
    placeholder: 'e.g., "gritty street", "smooth flow", "from Brooklyn"',
    apiType: 'rapper-name'
  },
  'fake-name-generator': {
    title: 'Fake Name Generator',
    description: 'Generate random fake names for various purposes like testing, role-playing, or creative writing. Quick and easy!',
    keywords: 'fake name, random name, alias, persona, AI fake name',
    promptLabel: 'Specify gender or origin (optional):',
    placeholder: 'e.g., "female, French", "male, American", "random"',
    apiType: 'fake-name'
  },
  'fake-email-generator': {
    title: 'Fake Email Generator',
    description: 'Generate temporary fake email addresses for registrations, testing, or privacy. Keep your real inbox clean!',
    keywords: 'fake email, temporary email, disposable email, privacy tool, AI email generator',
    promptLabel: 'Click "Generate" for a fake email:',
    placeholder: 'No input needed for this generator.',
    apiType: 'fake-email'
  },
  'random-letter-generator': {
    title: 'Random Letter Generator',
    description: 'Get random letters for games, puzzles, or creative prompts. Simple and quick!',
    keywords: 'random letter, letter generator, alphabet, game tool',
    promptLabel: 'Specify number of letters (optional):',
    placeholder: 'e.g., 5, 10, random',
    apiType: 'random-letter'
  },
  'random-color-generator': {
    title: 'Random Color Generator',
    description: 'Discover random hex codes and RGB values for your designs, art projects, or just for fun. Get instant color inspiration!',
    keywords: 'random color, color generator, hex code, RGB color, design tool, free color picker',
    promptLabel: 'Click "Generate" for a random color:',
    placeholder: 'No input needed for this generator.',
    apiType: 'random-color'
  },
  'youtube-title-generator': {
    title: 'YouTube Title Generator',
    description: 'Generate catchy and SEO-friendly titles for your YouTube videos. Get more views and subscribers!',
    keywords: 'YouTube title, video title, catchy titles, SEO YouTube, AI YouTube title',
    promptLabel: 'Enter your video topic or keywords:',
    placeholder: 'e.g., "DIY home decor", "gaming tutorial", "travel vlog in Japan"',
    apiType: 'youtube-title'
  },
  'instagram-caption-generator': {
    title: 'Instagram Caption Generator',
    description: 'Generate engaging and creative captions for your Instagram posts. Boost your likes and comments!',
    keywords: 'Instagram caption, social media caption, photo caption, AI Instagram caption',
    promptLabel: 'Describe your photo or topic:',
    placeholder: 'e.g., "sunset beach photo", "new recipe", "motivational quote"',
    apiType: 'instagram-caption'
  },
  'ai-content-generator': {
    title: 'AI Content Generator',
    description: 'Generate various types of creative content with the power of AI. Just tell us what you need!',
    keywords: 'AI content, content generator, creative writing, AI tools, free content creation',
    promptLabel: 'Tell us what you want to generate:',
    placeholder: 'e.g., a short story about a space cat, a poem about nature, a list of marketing ideas',
    apiType: 'ai-content'
  },
  'bio-generator': {
    title: 'Bio Generator',
    description: 'Create short, engaging, and professional bios for social media, resumes, or personal websites. Make your introduction count!',
    keywords: 'bio, professional bio, social media bio, resume bio, AI bio generator',
    promptLabel: 'Describe yourself or your purpose:',
    placeholder: 'e.g., "freelance graphic designer, loves coffee", "student, passionate about coding"',
    apiType: 'bio'
  },
  'tweet-generator': {
    title: 'Tweet Generator',
    description: 'Compose engaging and concise tweets for Twitter. Get your message across effectively!',
    keywords: 'tweet, Twitter post, social media content, AI tweet generator',
    promptLabel: 'Enter your topic or message for the tweet:',
    placeholder: 'e.g., "new AI tool launch", "thoughts on remote work", "funny observation"',
    apiType: 'tweet'
  },
  'meta-description-generator': {
    title: 'Meta Description Generator',
    description: 'Write concise and SEO-friendly meta descriptions for your web pages. Improve your click-through rates from search results!',
    keywords: 'meta description, SEO, website description, search engine optimization, AI meta description',
    promptLabel: 'Enter your page topic or keywords:',
    placeholder: 'e.g., "online store for handmade jewelry", "blog post about healthy eating"',
    apiType: 'meta-description'
  },
  'keyword-generator': {
    title: 'Keyword Generator',
    description: 'Discover relevant and high-ranking keywords for your content, SEO, or marketing campaigns. Boost your visibility!',
    keywords: 'keyword research, SEO keywords, content marketing, AI keyword generator',
    promptLabel: 'Enter your main topic or industry:',
    placeholder: 'e.g., "digital marketing", "sustainable living", "gaming accessories"',
    apiType: 'keyword'
  },
  'facebook-post-generator': {
    title: 'Facebook Post Generator',
    description: 'Generate engaging and shareable Facebook posts for your brand or personal page. Connect with your audience!',
    keywords: 'Facebook post, social media content, AI Facebook post, community engagement',
    promptLabel: 'Enter your topic or message for the post:',
    placeholder: 'e.g., "announcing a new product", "asking a question to followers", "sharing an event"',
    apiType: 'facebook-post'
  },
  'tiktok-hashtag-generator': {
    title: 'TikTok Hashtag Generator',
    description: 'Find trending and relevant TikTok hashtags to make your videos go viral. Boost your reach on TikTok!',
    keywords: 'TikTok hashtag, viral hashtags, short video, AI TikTok',
    promptLabel: 'Describe your TikTok video content:',
    placeholder: 'e.g., "dance challenge", "cooking tutorial", "funny pet moments"',
    apiType: 'tiktok-hashtag'
  },
  'logo-name-generator': {
    title: 'Logo Name Generator',
    description: 'Generate creative and impactful names for your logo design. Find a name that perfectly complements your visual brand!',
    keywords: 'logo name, brand identity, design name, AI logo name',
    promptLabel: 'Describe your brand or logo concept:',
    placeholder: 'e.g., "minimalist tech logo", "vintage cafe logo", "abstract art brand"',
    apiType: 'logo-name'
  },
  'domain-name-generator': {
    title: 'Domain Name Generator',
    description: 'Suggest available-sounding and memorable domain names for your website. Find the perfect online address!',
    keywords: 'domain name, website address, URL ideas, AI domain generator',
    promptLabel: 'Enter keywords related to your website\'s purpose:',
    placeholder: 'e.g., "online portfolio", "e-commerce store for handmade goods", "tech blog"',
    apiType: 'domain-name'
  },
  'meme-text-generator': {
    title: 'Meme Text Generator',
    description: 'Create funny and relatable text for your memes. Go viral with the perfect caption!',
    keywords: 'meme text, funny captions, viral content, AI meme generator',
    promptLabel: 'Describe the meme image or situation:',
    placeholder: 'e.g., "cat looking confused", "person procrastinating", "awkward moment"',
    apiType: 'meme-text'
  },
  'html-code-generator': {
    title: 'HTML Code Generator',
    description: 'Generate basic HTML code snippets for common web elements. Quickly get the code you need!',
    keywords: 'HTML code, web development, frontend code, AI HTML generator',
    promptLabel: 'Describe the HTML element you need:',
    placeholder: 'e.g., "a simple button", "a basic navigation bar", "a responsive image gallery"',
    apiType: 'html-code'
  },
  'css-gradient-generator': {
    title: 'CSS Gradient Generator',
    description: 'Create beautiful CSS linear and radial gradients with ease. Get the perfect color transitions for your designs!',
    keywords: 'CSS gradient, web design, color palette, AI CSS generator',
    promptLabel: 'Describe the gradient you want:',
    placeholder: 'e.g., "a sunset gradient from orange to pink", "a subtle blue to white radial gradient"',
    apiType: 'css-gradient'
  },
  'linkedin-headline-generator': {
    title: 'LinkedIn Headline Generator',
    description: 'Generate professional and impactful LinkedIn headlines that grab attention. Optimize your profile for career success!',
    keywords: 'LinkedIn headline, professional profile, career branding, AI LinkedIn',
    promptLabel: 'Enter your role and key achievements/skills:',
    placeholder: 'e.g., "Marketing Manager, specializing in content strategy and SEO"',
    apiType: 'linkedin-headline'
  },
  'shop-name-generator': {
    title: 'Shop Name Generator',
    description: 'Find a unique and attractive name for your online or physical shop. Make your business memorable!',
    keywords: 'shop name, store name, retail name, AI shop name',
    promptLabel: 'Describe the type of shop or products you sell:',
    placeholder: 'e.g., "boutique for handmade jewelry", "vintage clothing store", "gourmet coffee shop"',
    apiType: 'shop-name'
  },
  'product-name-generator': {
    title: 'Product Name Generator',
    description: 'Generate creative and appealing names for your new products. Find a name that sells!',
    keywords: 'product name, naming ideas, consumer goods, AI product name',
    promptLabel: 'Describe your product and its benefits:',
    placeholder: 'e.g., "a smart home device for energy saving", "a natural skincare line"',
    apiType: 'product-name'
  },
  'news-headline-generator': {
    title: 'News Headline Generator',
    description: 'Create attention-grabbing and informative news headlines. Perfect for articles, blogs, or social media news!',
    keywords: 'news headline, article title, journalism, AI news headline',
    promptLabel: 'Enter the main topic or summary of your news story:',
    placeholder: 'e.g., "breakthrough in AI research", "local community event success"',
    apiType: 'news-headline'
  },
  'script-generator': {
    title: 'Script Generator',
    description: 'Generate short scripts for various purposes like videos, skits, or short films. Get your dialogue flowing!',
    keywords: 'script, screenplay, dialogue, AI script generator',
    promptLabel: 'Describe the scene or characters:',
    placeholder: 'e.g., "a funny conversation between two friends at a cafe", "a dramatic monologue"',
    apiType: 'script'
  },
  'youtube-description-generator': {
    title: 'YouTube Description Generator',
    description: 'Write compelling and SEO-friendly descriptions for your YouTube videos. Drive more traffic and engagement!',
    keywords: 'YouTube description, video description, SEO YouTube, AI YouTube description',
    promptLabel: 'Enter your video topic and key points:',
    placeholder: 'e.g., "how to bake sourdough bread, step-by-step guide", "review of the new iPhone"',
    apiType: 'youtube-description'
  },
  'instagram-bio-generator': {
    title: 'Instagram Bio Generator',
    description: 'Craft a perfect and engaging Instagram bio that highlights your personality or brand. Make your profile shine!',
    keywords: 'Instagram bio, social media bio, personal branding, AI Instagram bio',
    promptLabel: 'Describe yourself or your brand in a few words:',
    placeholder: 'e.g., "travel blogger, loves coffee", "artist, creates abstract paintings"',
    apiType: 'instagram-bio'
  },
  'slogan-maker': {
    title: 'Slogan Maker',
    description: 'Make catchy and memorable slogans for anything you need. Get your message across with impact!',
    keywords: 'slogan maker, tagline creator, marketing slogans, AI slogan',
    promptLabel: 'Enter your product, service, or idea:',
    placeholder: 'e.g., "a new energy drink", "a charity for animals", "your personal motto"',
    apiType: 'slogan-maker'
  },
  'tagline-generator': {
    title: 'Tagline Generator',
    description: 'Generate memorable and effective taglines for your brand or campaign. Create a lasting impression!',
    keywords: 'tagline, brand slogan, marketing tagline, AI tagline',
    promptLabel: 'Enter your brand or product concept:',
    placeholder: 'e.g., "eco-friendly cleaning products", "fast food chain", "luxury watches"',
    apiType: 'tagline'
  },
  'mission-statement-generator': {
    title: 'Mission Statement Generator',
    description: 'Craft a powerful and concise mission statement for your organization or project. Define your purpose and goals!',
    keywords: 'mission statement, company mission, organizational purpose, AI mission statement',
    promptLabel: 'Describe your organization\'s core purpose and values:',
    placeholder: 'e.g., "to provide affordable education for all", "to innovate sustainable energy solutions"',
    apiType: 'mission-statement'
  },
  'company-slogan-generator': {
    title: 'Company Slogan Generator',
    description: 'Generate compelling company slogans that capture your brand\'s essence and attract customers. Make your company unforgettable!',
    keywords: 'company slogan, business slogan, corporate motto, AI company slogan',
    promptLabel: 'Describe your company\'s main service or value proposition:',
    placeholder: 'e.g., "delivering fresh organic produce", "creating intuitive software for small businesses"',
    apiType: 'company-slogan'
  },
  'store-name-generator': {
    title: 'Store Name Generator',
    description: 'Find a unique and attractive name for your retail store, online shop, or boutique. Make your business stand out!',
    keywords: 'store name, shop name, retail business, AI store name',
    promptLabel: 'Describe the type of store or products you sell:',
    placeholder: 'e.g., "vintage book store", "modern furniture shop", "handmade crafts boutique"',
    apiType: 'store-name'
  },
  'website-name-generator': {
    title: 'Website Name Generator',
    description: 'Generate creative and memorable website name ideas for your online presence. Find the perfect domain for your project!',
    keywords: 'website name, domain ideas, online presence, AI website name',
    promptLabel: 'Describe your website\'s topic or purpose:',
    placeholder: 'e.g., "a blog about healthy eating", "an e-commerce site for custom art", "a portfolio for designers"',
    apiType: 'website-name'
  },
  'app-name-generator': {
    title: 'App Name Generator',
    description: 'Discover unique and catchy app names for your mobile or web application. Make your app memorable!',
    keywords: 'app name, mobile app, software name, AI app name',
    promptLabel: 'Describe your app\'s function or target audience:',
    placeholder: 'e.g., "a productivity app for students", "a social media app for artists", "a fitness tracking app"',
    apiType: 'app-name'
  },
  'game-name-generator': {
    title: 'Game Name Generator',
    description: 'Generate cool and unique names for your video game, board game, or tabletop RPG. Find a title that excites players!',
    keywords: 'game name, video game title, board game name, RPG game, AI game name',
    promptLabel: 'Describe your game\'s genre or theme:',
    placeholder: 'e.g., "fantasy adventure", "sci-fi strategy", "puzzle game for kids"',
    apiType: 'game-name'
  },
  'guild-name-generator': {
    title: 'Guild Name Generator',
    description: 'Generate epic and inspiring guild names for your gaming community. Unite your members under a legendary banner!',
    keywords: 'guild name, gaming guild, clan name, MMO guild, AI guild name',
    promptLabel: 'Describe your guild\'s focus or members:',
    placeholder: 'e.g., "PvP focused, competitive", "casual, social", "explorers of ancient ruins"',
    apiType: 'guild-name'
  },
  'clan-name-generator': {
    title: 'Clan Name Generator',
    description: 'Generate strong and unique clan names for your gaming group or online community. Forge your identity!',
    keywords: 'clan name, gaming clan, team name, online community, AI clan name',
    promptLabel: 'Describe your clan\'s style or origin:',
    placeholder: 'e.g., "fierce warriors", "stealthy assassins", "from the shadow lands"',
    apiType: 'clan-name'
  },
  'pet-name-generator': {
    title: 'Pet Name Generator',
    description: 'Find a cute, unique, or funny name for your new pet. Give your furry friend the perfect identity!',
    keywords: 'pet name, dog name, cat name, unique pet names, AI pet name',
    promptLabel: 'Describe your pet (e.g., species, personality, size):',
    placeholder: 'e.g., "fluffy golden retriever puppy", "mischievous black cat", "small parrot"',
    apiType: 'pet-name'
  },
  'cool-name-generator': {
    title: 'Cool Name Generator',
    description: 'Generate cool and trendy names for characters, personas, or anything else you need. Stay ahead of the curve!',
    keywords: 'cool name, trendy name, modern name, unique name, AI cool name',
    promptLabel: 'Enter a style or theme for the cool name:',
    placeholder: 'e.g., "futuristic", "vintage", "edgy", "nature-inspired"',
    apiType: 'cool-name'
  },
  'funny-name-generator': {
    title: 'Funny Name Generator',
    description: 'Create hilarious and quirky names for characters, jokes, or just for a laugh. Get ready to chuckle!',
    keywords: 'funny name, silly name, joke name, AI funny name',
    promptLabel: 'Enter a humorous context or characteristic:',
    placeholder: 'e.g., "a clumsy wizard", "a talking squirrel", "a very serious cat"',
    apiType: 'funny-name'
  },
  'sci-fi-name-generator': {
    title: 'Sci Fi Name Generator',
    description: 'Generate futuristic and imaginative sci-fi names for characters, planets, or starships. Explore the cosmos of naming!',
    keywords: 'sci fi name, futuristic name, space name, AI sci fi name',
    promptLabel: 'Enter a sci-fi theme or origin:',
    placeholder: 'e.g., "alien species", "cyberpunk city", "interstellar explorer"',
    apiType: 'sci-fi-name'
  },
  'villain-name-generator': {
    title: 'Villain Name Generator',
    description: 'Create menacing and unforgettable villain names for your stories or games. Every hero needs a formidable foe!',
    keywords: 'villain name, antagonist name, evil name, AI villain name',
    promptLabel: 'Describe your villain\'s powers or evil plan:',
    placeholder: 'e.g., "master of shadows", "destroyer of worlds", "corrupt politician"',
    apiType: 'villain-name'
  },
  'rpg-name-generator': {
    title: 'RPG Name Generator',
    description: 'Generate diverse and fitting names for your RPG characters, locations, or items. Enhance your role-playing adventures!',
    keywords: 'RPG name, role-playing game, character name, AI RPG name',
    promptLabel: 'Specify RPG genre or character type:',
    placeholder: 'e.g., "high fantasy warrior", "cyberpunk hacker", "post-apocalyptic survivor"',
    apiType: 'rpg-name'
  },
  'anime-name-generator': {
    title: 'Anime Name Generator',
    description: 'Discover unique and authentic anime-style names for your characters or stories. Immerse yourself in the world of anime!',
    keywords: 'anime name, manga name, Japanese name, AI anime name',
    promptLabel: 'Specify character gender or personality:',
    placeholder: 'e.g., "strong female lead", "mysterious male character", "cute magical girl"',
    apiType: 'anime-name'
  },
  'story-title-generator': {
    title: 'Story Title Generator',
    description: 'Find compelling and intriguing titles for your stories. Hook your readers from the very first glance!',
    keywords: 'story title, narrative title, fiction title, AI story title',
    promptLabel: 'Enter a brief summary or genre of your story:',
    placeholder: 'e.g., "a coming-of-age fantasy, a thrilling detective novel"',
    apiType: 'story-title'
  },
  'dj-name-generator': {
    title: 'DJ Name Generator',
    description: 'Create a unique and catchy DJ name that reflects your style and music. Get ready to spin!',
    keywords: 'DJ name, music artist name, stage name, AI DJ name',
    promptLabel: 'Describe your music style or personal vibe:',
    placeholder: 'e.g., "electronic dance music, energetic", "chill lo-fi beats", "classic hip hop"',
    apiType: 'dj-name'
  },
  'artist-name-generator': {
    title: 'Artist Name Generator',
    description: 'Generate a unique and memorable artist name for your creative endeavors. Find a name that defines your art!',
    keywords: 'artist name, creative name, painter name, musician name, AI artist name',
    promptLabel: 'Describe your art form or artistic style:',
    placeholder: 'e.g., "abstract painter", "indie folk musician", "digital illustrator"',
    apiType: 'artist-name'
  },
  'stage-name-generator': {
    title: 'Stage Name Generator',
    description: 'Find a captivating and unique stage name for your performance persona. Make an unforgettable impression!',
    keywords: 'stage name, performer name, actor name, musician name, AI stage name',
    promptLabel: 'Describe your performance style or character:',
    placeholder: 'e.g., "comedian, witty", "singer, soulful", "magician, mysterious"',
    apiType: 'stage-name'
  },
  'band-logo-generator': {
    title: 'Band Logo Generator',
    description: 'Generate creative ideas for your band\'s logo. Get visual inspiration that matches your music\'s vibe!',
    keywords: 'band logo, music branding, logo ideas, AI band logo',
    promptLabel: 'Describe your band\'s name and music genre:',
    placeholder: 'e.g., "The Electric Dreams, synth-pop", "Stone Giants, heavy metal"',
    apiType: 'band-logo'
  },
  'album-name-generator': {
    title: 'Album Name Generator',
    description: 'Generate creative and unique album names for your music releases. Find a title that captures your sound!',
    keywords: 'album name, music album, record title, AI album name',
    promptLabel: 'Describe your album\'s theme or genre:',
    placeholder: 'e.g., "a concept album about space travel", "a collection of acoustic ballads"',
    apiType: 'album-name'
  },
  'playlist-name-generator': {
    title: 'Playlist Name Generator',
    description: 'Generate creative and catchy playlist names for any mood or occasion. Organize your music with style!',
    keywords: 'playlist name, music playlist, Spotify playlist, AI playlist name',
    promptLabel: 'Describe the mood or genre of your playlist:',
    placeholder: 'e.g., "chill study beats", "epic workout anthems", "90s throwback party"',
    apiType: 'playlist-name'
  },
  'movie-title-generator': {
    title: 'Movie Title Generator',
    description: 'Find captivating and intriguing movie titles for your film projects. Hook your audience from the start!',
    keywords: 'movie title, film title, cinema name, AI movie title',
    promptLabel: 'Enter a brief summary or genre of your movie:',
    placeholder: 'e.g., "a psychological thriller about dreams", "a heartwarming family adventure"',
    apiType: 'movie-title'
  },
  'film-name-generator': {
    title: 'Film Name Generator',
    description: 'Generate unique and memorable film names for your cinematic creations. Find a title that stands out!',
    keywords: 'film name, movie title, cinematic name, AI film name',
    promptLabel: 'Enter a brief summary or genre of your film:',
    placeholder: 'e.g., "an independent drama about loss", "a futuristic action film"',
    apiType: 'film-name'
  },
  'meme-caption-generator': {
    title: 'Meme Caption Generator',
    description: 'Generate funny and relatable captions for your memes. Go viral with the perfect text!',
    keywords: 'meme caption, funny text, viral memes, AI meme caption',
    promptLabel: 'Describe the meme image or situation:',
    placeholder: 'e.g., "confused blinking guy", "distracted boyfriend", "dog in a hat"',
    apiType: 'meme-caption'
  },
  'pun-generator': {
    title: 'Pun Generator',
    description: 'Create witty and clever puns for any topic. Add a touch of humor to your writing or conversations!',
    keywords: 'pun, wordplay, humor, AI pun generator',
    promptLabel: 'Enter a word or topic for the pun:',
    placeholder: 'e.g., "cat", "coffee", "computer"',
    apiType: 'pun'
  },
  'roast-generator': {
    title: 'Roast Generator',
    description: 'Generate lighthearted and humorous roasts for your friends (in good fun!). Keep it playful!',
    keywords: 'roast, funny roast, humor, AI roast generator',
    promptLabel: 'Describe the person or situation to roast:',
    placeholder: 'e.g., "my friend who always loses at video games", "someone who loves dad jokes"',
    apiType: 'roast'
  },
  'comeback-generator': {
    title: 'Comeback Generator',
    description: 'Suggest clever and witty comebacks for various situations. Never be speechless again!',
    keywords: 'comeback, witty response, quick retort, AI comeback',
    promptLabel: 'Describe the comment or situation you need a comeback for:',
    placeholder: 'e.g., "someone said my outfit was weird", "my friend made a sarcastic remark"',
    apiType: 'comeback'
  },
  'secure-password-generator': {
    title: 'Secure Password Generator',
    description: 'Generate highly secure and complex passwords to protect your online accounts. Stay safe with strong credentials!',
    keywords: 'secure password, strong password, password generator, AI password generator',
    promptLabel: 'Specify desired length and character types (e.g., 16 characters, include numbers, symbols, uppercase):',
    placeholder: 'e.g., "16 characters, all types", "8 characters, letters and numbers"',
    apiType: 'secure-password'
  },
  'random-date-generator': {
    title: 'Random Date Generator',
    description: 'Get a random date within a specified range or just a completely random one. Useful for various applications!',
    keywords: 'random date, date generator, randomizer',
    promptLabel: 'Specify a year range (optional):',
    placeholder: 'e.g., "between 2000 and 2023", "any date"',
    apiType: 'random-date'
  },
  'random-time-generator': {
    title: 'Random Time Generator',
    description: 'Generate a random time of day. Perfect for scheduling, games, or simply for fun!',
    keywords: 'random time, time generator, randomizer',
    promptLabel: 'Specify time format (optional, e.g., 12-hour, 24-hour):',
    placeholder: 'e.g., "AM/PM", "military time"',
    apiType: 'random-time'
  },
  'quote-generator': {
    title: 'Quote Generator',
    description: 'Create inspirational, thought-provoking, or custom quotes on any topic. Find the perfect words of wisdom!',
    keywords: 'quote, inspirational quote, motivational quote, AI quote generator',
    promptLabel: 'Enter a theme or person for the quote:',
    placeholder: 'e.g., "success", "happiness", "Albert Einstein"',
    apiType: 'quote'
  },
  'inspirational-quote-generator': {
    title: 'Inspirational Quote Generator',
    description: 'Generate uplifting and encouraging inspirational quotes. Find words to motivate and inspire!',
    keywords: 'inspirational quote, motivational quote, positive quote, AI inspirational',
    promptLabel: 'Enter a theme or situation for inspiration:',
    placeholder: 'e.g., "overcoming challenges", "new beginnings", "perseverance"',
    apiType: 'inspirational-quote'
  },
  'motivational-quote-generator': {
    title: 'Motivational Quote Generator',
    description: 'Find powerful and impactful motivational quotes to ignite your drive. Get inspired to achieve your goals!',
    keywords: 'motivational quote, success quote, drive, AI motivational',
    promptLabel: 'Enter a goal or challenge for motivation:',
    placeholder: 'e.g., "starting a new project", "staying disciplined", "achieving success"',
    apiType: 'motivational-quote'
  },
  'sports-team-name-generator': {
    title: 'Sports Team Name Generator',
    description: 'Generate creative and fierce names for your sports team. Find a name that strikes fear into your opponents!',
    keywords: 'sports team name, team name, athletic name, AI sports team',
    promptLabel: 'Enter your sport or team\'s mascot/vibe:',
    placeholder: 'e.g., "basketball, eagles", "soccer, lightning", "fierce competitors"',
    apiType: 'sports-team-name'
  },
  'fantasy-football-name-generator': {
    title: 'Fantasy Football Name Generator',
    description: 'Create funny, clever, and unique names for your fantasy football team. Dominate your league with a memorable name!',
    keywords: 'fantasy football name, funny team name, NFL fantasy, AI fantasy football',
    promptLabel: 'Enter a player name, team, or funny concept:',
    placeholder: 'e.g., "Mahomes Alone", "Touchdown Titans", "Gritty Goal Line"',
    apiType: 'fantasy-football-name'
  },
  'diet-plan-generator': {
    title: 'Diet Plan Generator',
    description: 'Get general, healthy diet plan suggestions based on your needs. (Disclaimer: Not professional medical advice).',
    keywords: 'diet plan, healthy eating, meal ideas, AI diet plan',
    promptLabel: 'Describe your dietary goals or preferences:',
    placeholder: 'e.g., "weight loss, vegetarian", "muscle gain, high protein", "balanced diet"',
    apiType: 'diet-plan'
  },
  'meal-plan-generator': {
    title: 'Meal Plan Generator',
    description: 'Suggest simple meal plans for a day or week based on your preferences. (Disclaimer: Not professional medical advice).',
    keywords: 'meal plan, healthy meals, recipe ideas, AI meal plan',
    promptLabel: 'Describe your meal preferences or dietary restrictions:',
    placeholder: 'e.g., "quick and easy, low carb", "family-friendly, gluten-free", "vegan, high fiber"',
    apiType: 'meal-plan'
  },
  'cocktail-name-generator': {
    title: 'Cocktail Name Generator',
    description: 'Generate unique and creative cocktail names for your drinks. Impress your guests with a signature concoction!',
    keywords: 'cocktail name, drink name, mixology, AI cocktail name',
    promptLabel: 'Describe the ingredients or flavor profile of the cocktail:',
    placeholder: 'e.g., "gin, citrus, refreshing", "whiskey, smoky, dark berries"',
    apiType: 'cocktail-name'
  },
  'restaurant-name-generator': {
    title: 'Restaurant Name Generator',
    description: 'Find a unique and attractive name for your restaurant. Make your dining establishment memorable!',
    keywords: 'restaurant name, eatery name, dining place, AI restaurant name',
    promptLabel: 'Describe the cuisine or ambiance of your restaurant:',
    placeholder: 'e.g., "Italian, cozy family style", "modern fusion, upscale", "casual burger joint"',
    apiType: 'restaurant-name'
  },
  'cafe-name-generator': {
    title: 'Cafe Name Generator',
    description: 'Generate charming and inviting cafe names for your coffee shop or bakery. Create a welcoming atmosphere!',
    keywords: 'cafe name, coffee shop, bakery name, AI cafe name',
    promptLabel: 'Describe the vibe or specialty of your cafe:',
    placeholder: 'e.g., "cozy, artisanal coffee", "lively, pastry focused", "quiet, study-friendly"',
    apiType: 'cafe-name'
  },
  'twitch-username-generator': {
    title: 'Twitch Username Generator',
    description: 'Create unique and memorable Twitch usernames for your streaming channel. Stand out in the streaming world!',
    keywords: 'Twitch username, streamer name, gaming name, AI Twitch name',
    promptLabel: 'Enter keywords related to your gaming style or content:',
    placeholder: 'e.g., "fast-paced shooter", "chill RPG streamer", "creative builder"',
    apiType: 'twitch-username'
  },
  'discord-name-generator': {
    title: 'Discord Name Generator',
    description: 'Generate cool and unique Discord names for your profile or server. Make your presence known!',
    keywords: 'Discord name, server name, gaming tag, AI Discord name',
    promptLabel: 'Enter keywords related to your interests or server theme:',
    placeholder: 'e.g., "anime fan, gamer", "developer community", "art enthusiasts"',
    apiType: 'discord-name'
  },
  'xbox-gamertag-generator': {
    title: 'Xbox Gamertag Generator',
    description: 'Find a unique and epic Xbox Gamertag that fits your gaming style. Dominate the leaderboard!',
    keywords: 'Xbox Gamertag, gaming name, gamer tag, AI Xbox name',
    promptLabel: 'Enter keywords related to your gaming style or favorite games:',
    placeholder: 'e.g., "FPS pro", "stealth master", "Minecraft builder"',
    apiType: 'xbox-gamertag'
  },
  'roblox-username-generator': {
    title: 'Roblox Username Generator',
    description: 'Generate unique and creative Roblox usernames for your avatar. Stand out in the Roblox metaverse!',
    keywords: 'Roblox username, Roblox name, gaming name, AI Roblox name',
    promptLabel: 'Enter keywords related to your favorite Roblox games or avatar style:',
    placeholder: 'e.g., "adventure game player", "fashion creator", "bloxburg builder"',
    apiType: 'roblox-username'
  },
  'fortnite-name-generator': {
    title: 'Fortnite Name Generator',
    description: 'Create cool and unique Fortnite names for your in-game persona. Get ready to build and battle!',
    keywords: 'Fortnite name, gaming name, battle royale, AI Fortnite name',
    promptLabel: 'Enter keywords related to your Fortnite playstyle or favorite skins:',
    placeholder: 'e.g., "aggressive builder", "sniper pro", "recon expert"',
    apiType: 'fortnite-name'
  },
  'call-of-duty-name-generator': {
    title: 'Call of Duty Name Generator',
    description: 'Generate intense and unique Call of Duty names for your soldier. Dominate the battlefield!',
    keywords: 'Call of Duty name, CoD name, FPS name, AI Call of Duty',
    promptLabel: 'Enter keywords related to your CoD playstyle or favorite weapons:',
    placeholder: 'e.g., "assault rifle expert", "stealthy sniper", "run and gun"',
    apiType: 'call-of-duty-name'
  },
  'pubg-name-generator': {
    title: 'PUBG Name Generator',
    description: 'Find a cool and unique PUBG name for your battle royale champion. Survive and conquer!',
    keywords: 'PUBG name, battle royale name, gaming name, AI PUBG name',
    promptLabel: 'Enter keywords related to your PUBG strategy or favorite gear:',
    placeholder: 'e.g., "lone wolf survivor", "sniper master", "vehicle enthusiast"',
    apiType: 'pubg-name'
  },
  // New Lottery Generators
  'powerball-generator': {
    title: 'Powerball Number Generator',
    description: 'Generate random numbers for your next Powerball ticket. Pick 5 white balls (1-69) and 1 red Powerball (1-26)!',
    keywords: 'Powerball, lottery, lottery numbers, random numbers, Powerball generator, lucky numbers',
    promptLabel: '(Optional) Enter any preferred numbers or lucky charms:',
    placeholder: 'e.g., "my birthday numbers", "lucky 7", "quick pick"',
    apiType: 'powerball'
  },
  'mega-millions-generator': {
    title: 'Mega Millions Number Generator',
    description: 'Generate random numbers for your next Mega Millions ticket. Pick 5 white balls (1-70) and 1 gold Mega Ball (1-25)!',
    keywords: 'Mega Millions, lottery, lottery numbers, random numbers, Mega Millions generator, lucky numbers',
    promptLabel: '(Optional) Enter any preferred numbers or lucky charms:',
    placeholder: 'e.g., "my anniversary date", "lucky numbers", "quick pick"',
    apiType: 'mega-millions'
  },
  'pick-5-generator': {
    title: 'Pick 5 Lottery Number Generator',
    description: 'Generate 5 random numbers for Pick 5 lottery games (typically 0-9 for each digit). Quick and easy number selection!',
    keywords: 'Pick 5, lottery, lottery numbers, random numbers, Pick 5 generator, daily lottery',
    promptLabel: '(Optional) Enter any preferred numbers or lucky charms:',
    placeholder: 'e.g., "my lucky numbers", "random set"',
    apiType: 'pick-5'
  },
  'fantasy-5-generator': {
    title: 'Fantasy 5 Lottery Number Generator',
    description: 'Generate 5 random numbers for Fantasy 5 lottery games (typically 1-36). Your quick pick for fantasy wins!',
    keywords: 'Fantasy 5, lottery, lottery numbers, random numbers, Fantasy 5 generator, state lottery',
    promptLabel: '(Optional) Enter any preferred numbers or lucky charms:',
    placeholder: 'e.g., "my favorite numbers", "quick pick"',
    apiType: 'fantasy-5'
  },
  // Default fallback if no specific generator type is found
  'default-generator': {
    title: 'AI Content Generator',
    description: 'Generate various types of creative content with the power of AI. Just tell us what you need!',
    keywords: 'AI content, content generator, creative writing, AI tools, free content creation',
    promptLabel: 'Tell us what you want to generate:',
    placeholder: 'e.g., a short story about a space cat, a poem about nature, a list of marketing ideas',
    apiType: 'default-content'
  }
};

const relatedGeneratorsData = {
  // ... (your existing relatedGeneratorsData) ...
  'business-name-generator': [
    { name: "Company Slogan", href: "/slogan-generator" },
    { name: "Brand Name", href: "/brand-name-generator" },
    { name: "Logo Name", href: "/logo-name-generator" },
  ],
  'username-generator': [
    { name: "Twitch Username", href: "/twitch-username-generator" },
    { name: "Discord Name", href: "/discord-name-generator" },
    { name: "Gamer Tag", href: "/xbox-gamertag-generator" },
  ],
  'fantasy-name-generator': [
    { name: "D&D Name", href: "/dnd-name-generator" },
    { name: "Character Name", href: "/character-name-generator" },
    { name: "RPG Name", href: "/rpg-name-generator" },
  ],
  'random-name-generator': [
    { name: "Fake Name", href: "/fake-name-generator" },
    { name: "Nickname", href: "/nickname-generator" },
    { name: "Random Word", href: "/random-word-generator" },
  ],
  'random-word-generator': [
    { name: "Writing Prompt", href: "/writing-prompt-generator" },
    { name: "Poetry", href: "/poetry-generator" },
    { name: "Pun", href: "/pun-generator" },
  ],
  'book-title-generator': [
    { name: "Story Title", href: "/story-title-generator" },
    { name: "Plot", href: "/plot-generator" },
    { name: "Writing Prompt", href: "/writing-prompt-generator" },
  ],
  'paragraph-generator': [
    { name: "AI Content", href: "/ai-content-generator" },
    { name: "Script", href: "/script-generator" },
    { name: "Tweet", href: "/tweet-generator" },
  ],
  'slogan-generator': [
    { name: "Tagline", href: "/tagline-generator" },
    { name: "Company Slogan", href: "/company-slogan-generator" },
    { name: "Brand Name", href: "/brand-name-generator" },
  ],
  'hashtag-generator': [
    { name: "TikTok Hashtag", href: "/tiktok-hashtag-generator" },
    { name: "Instagram Caption", href: "/instagram-caption-generator" },
    { name: "Facebook Post", href: "/facebook-post-generator" },
  ],
  'random-password-generator': [
    { name: "Secure Password", href: "/secure-password-generator" },
    { name: "Random Letter", href: "/random-letter-generator" },
    { name: "Random Number", href: "/random-number-generator" }, // Assuming you'll add this
  ],
  'random-color-generator': [
    { name: "CSS Gradient", href: "/css-gradient-generator" },
    { name: "Meme Text", href: "/meme-text-generator" },
    { name: "Random Number", href: "/random-number-generator" }, // Assuming you'll add this
  ],
  // New related generators for lottery
  'powerball-generator': [
    { name: "Mega Millions", href: "/mega-millions-generator" },
    { name: "Pick 5", href: "/pick-5-generator" },
    { name: "Fantasy 5", href: "/fantasy-5-generator" },
  ],
  'mega-millions-generator': [
    { name: "Powerball", href: "/powerball-generator" },
    { name: "Pick 5", href: "/pick-5-generator" },
    { name: "Fantasy 5", href: "/fantasy-5-generator" },
  ],
  'pick-5-generator': [
    { name: "Powerball", href: "/powerball-generator" },
    { name: "Mega Millions", href: "/mega-millions-generator" },
    { name: "Fantasy 5", href: "/fantasy-5-generator" },
  ],
  'fantasy-5-generator': [
    { name: "Powerball", href: "/powerball-generator" },
    { name: "Mega Millions", href: "/mega-millions-generator" },
    { name: "Pick 5", href: "/pick-5-generator" },
  ],
  // Default related generators if none specific are found
  'default-generator': [
    { name: "Paragraph", href: "/paragraph-generator" },
    { name: "Poetry", href: "/poetry-generator" },
    { name: "Story Idea", href: "/story-idea-generator" },
  ]
};

// ================================================================
// Next.js SSG Functions: getStaticPaths and getStaticProps
// These ensure the page is pre-rendered with SEO-friendly content
// ================================================================

// getStaticPaths: Tells Next.js which dynamic paths to pre-render at build time
export async function getStaticPaths() {
  const paths = Object.keys(generatorDetails).map((type) => ({
    params: { generatorType: type },
  }));

  return {
    paths,
    fallback: false, // Set to false to return 404 for paths not defined.
                     // Set to 'blocking' or true for large number of pages
                     // if you want them generated on first request.
  };
}

// getStaticProps: Fetches the data for each page at build time
export async function getStaticProps({ params }) {
  const { generatorType } = params;
  const currentGenerator = generatorDetails[generatorType] || generatorDetails['default-generator'];
  const relatedGenerators = relatedGeneratorsData[generatorType] || relatedGeneratorsData['default-generator'];

  if (!currentGenerator) {
    // Should ideally not happen if fallback is false and generatorDetails is complete
    return {
      notFound: true,
    };
  }

  return {
    props: {
      currentGenerator,
      relatedGenerators,
      generatorType // Pass generatorType explicitly for canonical URL
    },
    // revalidate: 3600, // Optional: ISR - Re-generate page every 1 hour (3600 seconds)
  };
}


const GeneratorPage = ({ currentGenerator, relatedGenerators, generatorType }) => {
  // No need for useRouter().query.generatorType here, as it comes from props
  // const { generatorType } = router.query; // REMOVE THIS LINE

  const [promptInput, setPromptInput] = useState('');
  const [generatedResult, setGeneratedResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // currentGenerator and relatedGenerators are now received as props
  // const currentGenerator = generatorDetails[generatorType] || generatorDetails['default-generator']; // REMOVE OR COMMENT OUT
  // const relatedGenerators = relatedGeneratorsData[generatorType] || relatedGeneratorsData['default-generator']; // REMOVE OR COMMENT OUT


  // Clear results and input when generatorType changes
  // This useEffect will still run when Next.js navigates between SSG pages
  useEffect(() => {
    setPromptInput('');
    setGeneratedResult('');
    setError('');
    setIsLoading(false);
  }, [generatorType]); // Keep generatorType in dependency array, as the prop changes


  const handleGenerate = async (e) => {
    e.preventDefault();
    setError('');

    setIsLoading(true);
    setGeneratedResult('');

    // --- Client-side generation logic for specific generators ---
    if (currentGenerator.apiType === 'random-password') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const length = parseInt(promptInput) || 12; // Default length
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
      let password = "";
      for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      setGeneratedResult(password);
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'random-color') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
      setGeneratedResult(randomColor);
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'random-letter') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const count = parseInt(promptInput) || 1;
      let letters = '';
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (let i = 0; i < count; i++) {
        letters += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      setGeneratedResult(letters);
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'random-date') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const startYear = 1900; // Default start year
      const endYear = new Date().getFullYear(); // Current year
      const randomYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
      const randomMonth = Math.floor(Math.random() * 12);
      const randomDay = Math.floor(Math.random() * 28) + 1; // Simplistic to avoid complex date logic
      const randomDate = new Date(randomYear, randomMonth, randomDay);
      setGeneratedResult(randomDate.toDateString());
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'random-time') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const randomHour = Math.floor(Math.random() * 24);
      const randomMinute = Math.floor(Math.random() * 60);
      const randomSecond = Math.floor(Math.random() * 60);
      const timeString = `${randomHour.toString().padStart(2, '0')}:${randomMinute.toString().padStart(2, '0')}:${randomSecond.toString().padStart(2, '0')}`;
      setGeneratedResult(timeString);
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'fake-email') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const randomString = Math.random().toString(36).substring(2, 12);
      const domains = ['example.com', 'mail.net', 'test.org', 'tempmail.info'];
      const randomDomain = domains[Math.floor(Math.random() * domains.length)];
      setGeneratedResult(`${randomString}@${randomDomain}`);
      setIsLoading(false);
      return;
    }

    // --- Lottery Number Generators ---
    if (currentGenerator.apiType === 'powerball') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const whiteBalls = new Set();
      while (whiteBalls.size < 5) {
        whiteBalls.add(Math.floor(Math.random() * 69) + 1); // 1-69
      }
      const powerball = Math.floor(Math.random() * 26) + 1; // 1-26
      const result = `White Balls: ${Array.from(whiteBalls).sort((a, b) => a - b).join(', ')}\nPowerball: ${powerball}`;
      setGeneratedResult(result);
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'mega-millions') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const whiteBalls = new Set();
      while (whiteBalls.size < 5) {
        whiteBalls.add(Math.floor(Math.random() * 70) + 1); // 1-70
      }
      const megaBall = Math.floor(Math.random() * 25) + 1; // 1-25
      const result = `White Balls: ${Array.from(whiteBalls).sort((a, b) => a - b).join(', ')}\nMega Ball: ${megaBall}`;
      setGeneratedResult(result);
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'pick-5') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const numbers = [];
      for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 10)); // 0-9
      }
      setGeneratedResult(`Numbers: ${numbers.join(' ')}`);
      setIsLoading(false);
      return;
    }

    if (currentGenerator.apiType === 'fantasy-5') {
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
      const numbers = new Set();
      while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * 36) + 1); // 1-36
      }
      setGeneratedResult(`Numbers: ${Array.from(numbers).sort((a, b) => a - b).join(', ')}`);
      setIsLoading(false);
      return;
    }

    // --- End of Client-side generation logic ---


    // For Gemini API calls (if not handled client-side)
    if (!promptInput.trim() && currentGenerator.apiType !== 'fake-email' && currentGenerator.apiType !== 'random-date' && currentGenerator.apiType !== 'random-time' && currentGenerator.apiType !== 'random-password' && currentGenerator.apiType !== 'random-color' && currentGenerator.apiType !== 'random-letter' && currentGenerator.apiType !== 'powerball' && currentGenerator.apiType !== 'mega-millions' && currentGenerator.apiType !== 'pick-5' && currentGenerator.apiType !== 'fantasy-5') {
      setError('Please provide some input to generate.');
      setIsLoading(false); // Ensure loading is stopped
      return;
    }


    try {
      const response = await fetch('/api/generate', { // All API calls go through a single /api/generate endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: currentGenerator.apiType, // Send the specific generator type to the API
          prompt: promptInput
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedResult(data.generatedText);
    } catch (err) {
      console.error('Generation error:', err);
      setError(`Failed to generate content: ${err.message}. Please try again later.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedResult) {
      const textarea = document.createElement('textarea');
      textarea.value = generatedResult;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        alert('Copied to clipboard!'); // Using alert for mockup, would use custom modal in real app
      } catch (err) {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy. Please copy manually.');
      }
      document.body.removeChild(textarea);
    }
  };

  // If you're using fallback: true or 'blocking', you might need a loading state here
  // if (router.isFallback) {
  //   return <LoadingSpinner message="Loading generator..." />;
  // }


  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        {/* These props are now available directly from getStaticProps */}
        <title>{currentGenerator.title} - AI Generator Hub</title>
        <meta name="description" content={currentGenerator.description} />
        <meta name="keywords" content={currentGenerator.keywords} />
        {/* CORRECTED CANONICAL TAG - will be pre-rendered */}
        <link rel="canonical" href={`https://www.marketproedge.com/${generatorType}`} />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl mb-12 border border-blue-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 leading-tight drop-shadow-lg">{currentGenerator.title}</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto text-center">
            {currentGenerator.description}
          </p>

          <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mb-8 shadow-inner">
            [AdSense Ad Unit - Top of Generator]
          </div>

          <form onSubmit={handleGenerate} className="flex flex-col items-center max-w-2xl mx-auto">
            <label htmlFor="promptInput" className="block text-gray-200 text-lg font-semibold mb-3 w-full text-left">
              {currentGenerator.promptLabel}
            </label>
            <textarea
              id="promptInput"
              className="w-full px-5 py-3 border border-blue-500 bg-gray-700 text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-base resize-y min-h-[100px] placeholder-gray-400"
              placeholder={currentGenerator.placeholder}
              required={currentGenerator.apiType !== 'random-color' && currentGenerator.apiType !== 'random-password' && currentGenerator.apiType !== 'random-letter' && currentGenerator.apiType !== 'random-date' && currentGenerator.apiType !== 'random-time' && currentGenerator.apiType !== 'fake-email' && currentGenerator.apiType !== 'powerball' && currentGenerator.apiType !== 'mega-millions' && currentGenerator.apiType !== 'pick-5' && currentGenerator.apiType !== 'fantasy-5'} // Only require input for Gemini-based generators
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || (currentGenerator.apiType !== 'random-color' && currentGenerator.apiType !== 'random-password' && currentGenerator.apiType !== 'random-letter' && currentGenerator.apiType !== 'random-date' && currentGenerator.apiType !== 'random-time' && currentGenerator.apiType !== 'fake-email' && currentGenerator.apiType !== 'powerball' && currentGenerator.apiType !== 'mega-millions' && currentGenerator.apiType !== 'pick-5' && currentGenerator.apiType !== 'fantasy-5' && !promptInput.trim())}
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </form>

          {error && (
            <div className="text-center mt-8 text-red-400 font-medium">
              Error: {error}
            </div>
          )}

          {isLoading && <LoadingSpinner message={`Generating ${currentGenerator.title.toLowerCase()}...`} />}

          {generatedResult && (
            <div className="mt-10 p-6 bg-gray-700 border border-blue-600 rounded-xl shadow-md max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Your Generated Result:</h3>
              <pre className="whitespace-pre-wrap font-mono text-gray-100 text-lg leading-relaxed bg-gray-800 p-4 rounded-lg border border-gray-600">
                {generatedResult}
              </pre>
              <div className="text-center mt-6">
                <button
                  onClick={handleCopy}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:from-green-600 hover:to-teal-600 transition-colors transform hover:scale-105"
                >
                  Copy Result
                </button>
              </div>
            </div>
          )}

          <div className="ad-placeholder h-32 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mt-12 shadow-inner">
            [AdSense Ad Unit - Bottom of Generator]
          </div>
        </section>

        {/* "Related Generators" Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Explore Related Generators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedGenerators.map((gen, index) => (
              // Using Link component for proper Next.js navigation
              <Link key={`related-gen-${index}`} href={gen.href} className="bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-700 hover:border-blue-500 transform hover:scale-[1.01]">
                <h3 className="text-lg font-semibold text-blue-300 mb-1">{gen.name} Generator</h3>
                <p className="text-gray-400 text-sm">Generate unique {gen.name.toLowerCase()}s for your projects.</p>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export default GeneratorPage;
