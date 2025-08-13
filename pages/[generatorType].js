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

// IMPORTANT: Import all your content files here
import businessNameContent from '../content/generators/business-name-generator';
import usernameContent from '../content/generators/username-generator';
import fantasyNameContent from '../content/generators/fantasy-name-generator';
import randomNameContent from '../content/generators/random-name-generator';
import randomWordContent from '../content/generators/random-word-generator';
import bookTitleContent from '../content/generators/book-title-generator';
import paragraphContent from '../content/generators/paragraph-generator';
import sloganContent from '../content/generators/slogan-generator';
import hashtagContent from '../content/generators/hashtag-generator';
import companyNameContent from '../content/generators/company-name-generator';
import bandNameContent from '../content/generators/band-name-generator';
import characterNameContent from '../content/generators/character-name-generator';
import rapLyricsContent from '../content/generators/rap-lyrics-generator';
import randomPasswordContent from '../content/generators/random-password-generator';
import coverLetterContent from '../content/generators/cover-letter-generator';
import brandNameContent from '../content/generators/brand-name-generator';
import teamNameContent from '../content/generators/team-name-generator';
import nicknameContent from '../content/generators/nickname-generator';
import blogPostIdeaContent from '../content/generators/blog-post-idea-generator';
import youtubeDescriptionContent from '../content/generators/youtube-description-generator';
import emailSubjectLineContent from '../content/generators/email-subject-line-generator';
import instagramCaptionContent from '../content/generators/instagram-caption-generator';
import tweetContent from '../content/generators/tweet-generator';
import linkedinHeadlineContent from '../content/generators/linkedin-headline-generator';
import businessIdeaContent from '../content/generators/business-idea-generator';
import productNameContent from '../content/generators/product-name-generator';
import songTitleContent from '../content/generators/song-title-generator';
import storyIdeaContent from '../content/generators/story-idea-generator';
import randomFactContent from '../content/generators/random-fact-generator';
import jokeContent from '../content/generators/joke-generator';
import quoteContent from '../content/generators/quote-generator';
import recipeContent from '../content/generators/recipe-generator';
import mealPlanContent from '../content/generators/meal-plan-generator';
import workoutPlanContent from '../content/generators/workout-plan-generator';
import travelItineraryContent from '../content/generators/travel-itinerary-generator';
import giftIdeaContent from '../content/generators/gift-idea-generator';
import dilemmaResolverContent from '../content/generators/dilemma-resolver';
import dreamInterpreterContent from '../content/generators/dream-interpreter';
import chatBotContent from '../content/generators/chat-bot';
import horoscopeContent from '../content/generators/horoscope-generator';
import riddleContent from '../content/generators/riddle-generator';
import triviaQuestionContent from '../content/generators/trivia-question-generator';
import wouldYouRatherContent from '../content/generators/would-you-rather-generator';
import truthOrDareContent from '../content/generators/truth-or-dare-generator';
import neverHaveIEverContent from '../content/generators/never-have-i-ever-generator';
import twoTruthsAndALieContent from '../content/generators/two-truths-and-a-lie-generator';
import madLibsContent from '../content/generators/mad-libs-generator';
import charadesContent from '../content/generators/charades-generator';
import catchphraseContent from '../content/generators/catchphrase-generator';
import newsHeadlineContent from '../content/generators/news-headline-generator';
// import plotTwistContent from '../content/generators/plot-twist-generator'; // Commented out in original
import dialogueContent from '../content/generators/dialogue-generator';
import cssGradientContent from '../content/generators/css-gradient-generator';
import albumNameContent from '../content/generators/album-name-generator';
import discordNameContent from '../content/generators/discord-name-generator';
import domainNameContent from '../content/generators/domain-name-generator';
import shopNameContent from '../content/generators/shop-name-generator';
import storeNameContent from '../content/generators/store-name-generator';
import companySloganContent from '../content/generators/company-slogan-generator';
import businessSloganContent from '../content/generators/business-slogan-generator';
import websiteNameContent from '../content/generators/website-name-generator';
import youtubeTitleContent from '../content/generators/youtube-title-generator';
import punContent from '../content/generators/pun-generator';
import lyricContent from '../content/generators/lyric-generator';
import dietPlanContent from '../content/generators/diet-plan-generator';
import motivationalQuoteContent from '../content/generators/motivational-quote-generator';
import linkedinSummaryContent from '../content/generators/linkedin-summary-generator';
import cafeNameContent from '../content/generators/cafe-name-generator';
import twitchUsernameContent from '../content/generators/twitch-username-generator';
import xboxGamertagContent from '../content/generators/xbox-gamertag-generator';
import robloxUsernameContent from '../content/generators/roblox-username-generator';
import fortniteNameContent from '../content/generators/fortnite-name-generator';
import callOfDutyNameContent from '../content/generators/call-of-duty-name-generator';
import pubgNameContent from '../content/generators/pubg-name-generator';
import powerballContent from '../content/generators/powerball-generator';
import megaMillionsContent from '../content/generators/mega-millions-generator';
import pick5Content from '../content/generators/pick-5-generator';
import fantasy5Content from '../content/generators/fantasy-5-generator';

// NEW IMPORTS ADDED
import robloxPasswordContent from '../content/generators/roblox-password-generator';
import petNameContent from '../content/generators/pet-name-generator';
import coolNameContent from '../content/generators/cool-name-generator';
import funnyNameContent from '../content/generators/funny-name-generator';
import fakeNameContent from '../content/generators/fake-name-generator';
import playlistNameContent from '../content/generators/playlist-name-generator';
import movieTitleContent from '../content/generators/movie-title-generator';
import filmNameContent from '../content/generators/film-name-generator';
import bandLogoContent from '../content/generators/band-logo-generator';
import djNameContent from '../content/generators/dj-name-generator';
import artistNameContent from '../content/generators/artist-name-generator';
import stageNameContent from '../content/generators/stage-name-generator';
import rhymeContent from '../content/generators/rhyme-generator';
//import writingPromptContent from '../content/generators/writing-prompt-generator'; // Commented out in original
import bioContent from '../content/generators/bio-generator';
//import characterBackstoryContent from '../content/generators/character-backstory-generator'; // Commented out in original
//import plotContent from '../content/generators/plot-generator'; // Commented out in original
//import scriptContent from '../content/generators/script-generator'; // Commented out in original
import inspirationalQuoteContent from '../content/generators/inspirational-quote-generator';
import sloganMakerContent from '../content/generators/slogan-maker';
import taglineContent from '../content/generators/tagline-generator';
import instagramBioContent from '../content/generators/instagram-bio-generator';
import facebookPostContent from '../content/generators/facebook-post-generator';
import tiktokHashtagContent from '../content/generators/tiktok-hashtag-generator';
import metaDescriptionContent from '../content/generators/meta-description-generator';
import keywordContent from '../content/generators/keyword-generator';
import logoNameContent from '../content/generators/logo-name-generator';
import gameNameContent from '../content/generators/game-name-generator'; // Assuming this is the correct one for game names
import guildNameContent from '../content/generators/guild-name-generator';
import clanNameContent from '../content/generators/clan-name-generator';
import superheroNameContent from '../content/generators/superhero-name-generator';
import dndNameContent from '../content/generators/dnd-name-generator';
import rapperNameContent from '../content/generators/rapper-name-generator';
import sciFiNameContent from '../content/generators/sci-fi-name-generator';
import villainNameContent from '../content/generators/villain-name-generator';
import rpgNameContent from '../content/generators/rpg-name-generator';
import animeNameContent from '../content/generators/anime-name-generator';
import sportsTeamNameContent from '../content/generators/sports-team-name-generator';
import fantasyFootballNameContent from '../content/generators/fantasy-football-name-generator';
import securePasswordContent from '../content/generators/secure-password-generator';
import randomLetterContent from '../content/generators/random-letter-generator';
import randomColorContent from '../content/generators/random-color-generator';
import randomDateContent from '../content/generators/random-date-generator';
import randomTimeContent from '../content/generators/random-time-generator';
import fakeEmailContent from '../content/generators/fake-email-generator';
//import htmlCodeContent from '../content/generators/html-code-generator'; // Commented out in original
import memeTextContent from '../content/generators/meme-text-generator';
import memeCaptionContent from '../content/generators/meme-caption-generator';
import roastContent from '../content/generators/roast-generator';
import comebackContent from '../content/generators/comeback-generator';
import cocktailNameContent from '../content/generators/cocktail-name-generator';
import restaurantNameContent from '../content/generators/restaurant-name-generator';
import appNameContent from '../content/generators/app-name-generator'; // Renamed from 'appContent' for clarity

// This maps the generatorType from the URL to the imported content object
const generatorContentMap = {
  'business-name-generator': businessNameContent,
  'restaurant-name-generator': restaurantNameContent,
  'app-name-generator': appNameContent, // Corrected mapping
  'username-generator': usernameContent,
  'fantasy-name-generator': fantasyNameContent,
  'random-name-generator': randomNameContent,
  'random-word-generator': randomWordContent,
  'book-title-generator': bookTitleContent,
  'paragraph-generator': paragraphContent,
  'slogan-generator': sloganContent,
  'hashtag-generator': hashtagContent,
  'company-name-generator': companyNameContent,
  'band-name-generator': bandNameContent,
  'character-name-generator': characterNameContent,
  'rap-lyrics-generator': rapLyricsContent,
  'random-password-generator': randomPasswordContent,
  'cover-letter-generator': coverLetterContent,
  'brand-name-generator': brandNameContent,
  'team-name-generator': teamNameContent,
  'nickname-generator': nicknameContent,
  'blog-post-idea-generator': blogPostIdeaContent,
  'youtube-description-generator': youtubeDescriptionContent,
  'email-subject-line-generator': emailSubjectLineContent,
  'instagram-caption-generator': instagramCaptionContent,
  'tweet-generator': tweetContent,
  'linkedin-headline-generator': linkedinHeadlineContent,
  'business-idea-generator': businessIdeaContent,
  'product-name-generator': productNameContent,
  'song-title-generator': songTitleContent,
  'story-idea-generator': storyIdeaContent,
  'random-fact-generator': randomFactContent,
  'joke-generator': jokeContent,
  'quote-generator': quoteContent,
  'recipe-generator': recipeContent,
  'meal-plan-generator': mealPlanContent,
  'workout-plan-generator': workoutPlanContent,
  'travel-itinerary-generator': travelItineraryContent,
  'gift-idea-generator': giftIdeaContent,
  'dilemma-resolver': dilemmaResolverContent,
  'dream-interpreter': dreamInterpreterContent,
  'chat-bot': chatBotContent,
  'horoscope-generator': horoscopeContent,
  'riddle-generator': riddleContent,
  'trivia-question-generator': triviaQuestionContent,
  'would-you-rather-generator': wouldYouRatherContent,
  'truth-or-dare-generator': truthOrDareContent,
  'never-have-i-ever-generator': neverHaveIEverContent,
  'two-truths-and-a-lie-generator': twoTruthsAndALieContent,
  'mad-libs-generator': madLibsContent,
  'charades-generator': charadesContent,
  'catchphrase-generator': catchphraseContent,
  'news-headline-generator': newsHeadlineContent,
  //'plot-twist-generator': plotTwistContent,
  'dialogue-generator': dialogueContent,
  'css-gradient-generator': cssGradientContent,
  'album-name-generator': albumNameContent,
  'discord-name-generator': discordNameContent,
  'domain-name-generator': domainNameContent,
  'shop-name-generator': shopNameContent,
  'store-name-generator': storeNameContent,
  'company-slogan-generator': companySloganContent,
  'business-slogan-generator': businessSloganContent,
  'website-name-generator': websiteNameContent,
  'youtube-title-generator': youtubeTitleContent,
  'pun-generator': punContent,
  'lyric-generator': lyricContent,
  'diet-plan-generator': dietPlanContent,
  'motivational-quote-generator': motivationalQuoteContent,
  'linkedin-summary-generator': linkedinSummaryContent,
  'cafe-name-generator': cafeNameContent,
  'twitch-username-generator': twitchUsernameContent,
  'xbox-gamertag-generator': xboxGamertagContent,
  'roblox-username-generator': robloxUsernameContent,
  'fortnite-name-generator': fortniteNameContent,
  'call-of-duty-name-generator': callOfDutyNameContent,
  'pubg-name-generator': pubgNameContent,
  'powerball-generator': powerballContent,
  'mega-millions-generator': megaMillionsContent,
  'pick-5-generator': pick5Content,
  'fantasy-5-generator': fantasy5Content,
  // NEW MAPPINGS ADDED
  'roblox-password-generator': robloxPasswordContent,
  'pet-name-generator': petNameContent,
  'cool-name-generator': coolNameContent,
  'funny-name-generator': funnyNameContent,
  'fake-name-generator': fakeNameContent,
  'playlist-name-generator': playlistNameContent,
  'movie-title-generator': movieTitleContent,
  'film-name-generator': filmNameContent,
  'band-logo-generator': bandLogoContent,
  'dj-name-generator': djNameContent,
  'artist-name-generator': artistNameContent,
  'stage-name-generator': stageNameContent,
  'rhyme-generator': rhymeContent,
  //'writing-prompt-generator': writingPromptContent,
  'bio-generator': bioContent,
  //'character-backstory-generator': characterBackstoryContent,
  //'plot-generator': plotContent,
  //'script-generator': scriptContent,
  'inspirational-quote-generator': inspirationalQuoteContent,
  'slogan-maker': sloganMakerContent,
  'tagline-generator': taglineContent,
  'instagram-bio-generator': instagramBioContent,
  'facebook-post-generator': facebookPostContent,
  'tiktok-hashtag-generator': tiktokHashtagContent,
  'meta-description-generator': metaDescriptionContent,
  'keyword-generator': keywordContent,
  'logo-name-generator': logoNameContent,
  'game-name-generator': gameNameContent, // Assuming this is the correct one for game names
  'guild-name-generator': guildNameContent,
  'clan-name-generator': clanNameContent,
  'superhero-name-generator': superheroNameContent,
  'dnd-name-generator': dndNameContent,
  'rapper-name-generator': rapperNameContent,
  'sci-fi-name-generator': sciFiNameContent,
  'villain-name-generator': villainNameContent,
  'rpg-name-generator': rpgNameContent,
  'anime-name-generator': animeNameContent,
  'sports-team-name-generator': sportsTeamNameContent,
  'fantasy-football-name-generator': fantasyFootballNameContent,
  'secure-password-generator': securePasswordContent,
  'random-letter-generator': randomLetterContent,
  'random-color-generator': randomColorContent,
  'random-date-generator': randomDateContent,
  'random-time-generator': randomTimeContent,
  'fake-email-generator': fakeEmailContent,
  //'html-code-generator': htmlCodeContent,
  'meme-text-generator': memeTextContent,
  'meme-caption-generator': memeCaptionContent,
  'roast-generator': roastContent,
  'comeback-generator': comebackContent,
  'cocktail-name-generator': cocktailNameContent,
  //'mission-statement-generator': missionStatementContent, // Commented out in original
};


// This data would ideally come from a central source or API
// Keeping it here for demonstration, but in a large app, it might be in a separate file
const generatorDetails = {
  // Only minimal details needed here, as the full description and FAQ come from content files
  'business-name-generator': {
    title: 'Business Name Generator',
    keywords: 'business name, company name, startup name, AI generator, free business name, creative business names',
    promptLabel: 'Enter keywords or a brief description of your business:',
    placeholder: 'e.g., eco-friendly fashion brand, AI software for marketing, gourmet dog treats',
    apiType: 'business-name'
  },
  'username-generator': {
    title: 'Username Generator',
    keywords: 'username, unique username, cool username, gaming username, social media username, AI username generator',
    promptLabel: 'Enter keywords or your desired style:',
    placeholder: 'e.g., cool, funny, gaming, short, "for streaming"',
    apiType: 'username'
  },
  'fantasy-name-generator': {
    title: 'Fantasy Name Generator',
    keywords: 'fantasy name, character name, RPG name, AI generator, magical names, mythical names, elf, dwarf, dragon, sci-fi names',
    promptLabel: 'Enter keywords for your fantasy name (e.g., "elven female warrior", "dark wizard", "dwarven city"):',
    placeholder: 'e.g., ancient forest, mystical creature, heroic knight',
    apiType: 'fantasy-name'
  },
  'random-name-generator': {
    title: 'Random Name Generator',
    keywords: 'random name, male name, female name, baby name, unique name, diverse names, AI name generator',
    promptLabel: 'Enter keywords or criteria for random names (e.g., "male names", "unisex", "french origin"):',
    placeholder: 'e.g., popular, old-fashioned, short, "for a story character"',
    apiType: 'random-name'
  },
  'random-word-generator': {
    title: 'Random Word Generator',
    keywords: 'random word, word generator, vocabulary, writing prompt, game ideas, AI word generator',
    promptLabel: 'Enter keywords or categories for random words (e.g., "adjectives", "animals", "action verbs"):',
    placeholder: 'e.g., common, rare, descriptive, "for a poem"',
    apiType: 'random-word'
  },
  'book-title-generator': {
    title: 'Book Title Generator',
    keywords: 'book title, novel title, story title, catchy title, AI title generator, creative writing',
    promptLabel: 'Enter keywords or a brief description of your book:',
    placeholder: 'e.g., fantasy adventure, historical romance, sci-fi thriller',
    apiType: 'book-title'
  },
  'paragraph-generator': {
    title: 'Paragraph Generator',
    keywords: 'paragraph writer, content generator, essay helper, article writing, AI text generator',
    promptLabel: 'Enter a topic or keywords for your paragraph:',
    placeholder: 'e.g., benefits of renewable energy, history of the internet, a day at the beach',
    apiType: 'paragraph'
  },
  'slogan-generator': {
    title: 'Slogan Generator',
    keywords: 'slogan maker, tagline generator, marketing slogan, advertising slogan, AI slogan generator',
    promptLabel: 'Enter keywords or a brief description of your business/product:',
    placeholder: 'e.g., organic coffee, sustainable fashion, innovative tech solution',
    apiType: 'slogan'
  },
  'hashtag-generator': {
    title: 'Hashtag Generator',
    keywords: 'hashtag finder, social media marketing, Instagram hashtags, Twitter trends, AI hashtag generator',
    promptLabel: 'Enter keywords or a description of your post/topic:',
    placeholder: 'e.g., summer travel, healthy recipes, new product launch',
    apiType: 'hashtag'
  },
  'company-name-generator': {
    title: 'Company Name Generator',
    keywords: 'company name, business name, startup name, corporate name, AI name generator',
    promptLabel: 'Enter keywords or a brief description of your company:',
    placeholder: 'e.g., tech startup, financial consulting, creative agency',
    apiType: 'company-name'
  },
  'band-name-generator': {
    title: 'Band Name Generator',
    keywords: 'band name, music group names, rock band names, creative names, AI band name generator',
    promptLabel: 'Enter keywords or your music genre/style:',
    placeholder: 'e.g., indie rock, folk acoustic, electronic dance, "mysterious"',
    apiType: 'band-name'
  },
  'character-name-generator': {
    title: 'Character Name Generator',
    keywords: 'character name, story character, RPG character, unique names, AI character name generator',
    promptLabel: 'Enter keywords or character traits (e.g., "brave knight male", "witty detective female"):',
    placeholder: 'e.g., fantasy, sci-fi, historical, "for a villain"',
    apiType: 'character-name'
  },
  'rap-lyrics-generator': {
    title: 'Rap Lyrics Generator',
    keywords: 'rap lyrics, hip-hop lyrics, song generator, rhyme generator, AI rap generator',
    promptLabel: 'Enter a topic or a theme for your rap lyrics:',
    placeholder: 'e.g., struggle, success, daily life, "about my city"',
    apiType: 'rap-lyrics'
  },
  'random-password-generator': {
    title: 'Random Password Generator',
    keywords: 'password generator, secure password, strong password, random password, password security, online safety',
    promptLabel: 'Specify password length and character types (e.g., "12 characters with symbols", "8 alphanumeric"):',
    placeholder: 'e.g., 16 characters, include numbers and symbols, easy to remember',
    apiType: 'random-password'
  },
  'cover-letter-generator': {
    title: 'Cover Letter Generator',
    keywords: 'cover letter, job application, resume cover letter, cover letter writer, AI cover letter generator',
    promptLabel: 'Enter job title, company name, and key skills/experience:',
    placeholder: 'e.g., Software Engineer at Google, Marketing Manager with 5 years experience, Customer Service role',
    apiType: 'cover-letter'
  },
  'brand-name-generator': {
    title: 'Brand Name Generator',
    keywords: 'brand name, product brand, company brand, memorable name, AI brand name generator',
    promptLabel: 'Enter keywords or a brief description of your brand/values:',
    placeholder: 'e.g., luxury fashion, innovative tech, sustainable products',
    apiType: 'brand-name'
  },
  'team-name-generator': {
    title: 'Team Name Generator',
    keywords: 'team name, sports team, gaming group, project team, unique team names, AI team name generator',
    promptLabel: 'Enter keywords or your team\'s purpose/vibe:',
    placeholder: 'e.g., competitive gaming, fun sports league, corporate challenge',
    apiType: 'team-name'
  },
  'nickname-generator': {
    title: 'Nickname Generator',
    keywords: 'nickname, cool nickname, funny nickname, cute nickname, AI nickname generator',
    promptLabel: 'Enter a name or a person\'s characteristics:',
    placeholder: 'e.g., John, "tall and quiet", "energetic leader"',
    apiType: 'nickname'
  },
  'blog-post-idea-generator': {
    title: 'Blog Post Idea Generator',
    keywords: 'blog ideas, content ideas, writing prompts, blog post topics, AI blog generator',
    promptLabel: 'Enter your blog niche or keywords:',
    placeholder: 'e.g., digital marketing, healthy eating, travel tips, personal finance',
    apiType: 'blog-post-idea'
  },
  'youtube-description-generator': {
    title: 'YouTube Description Generator',
    keywords: 'YouTube description, video SEO, YouTube creator, video marketing, AI YouTube description generator',
    promptLabel: 'Enter video topic and keywords:',
    placeholder: 'e.g., how to bake sourdough, gaming tutorial, travel vlog in Japan',
    apiType: 'youtube-description'
    },
    'restaurant-name-generator': {
    title: 'Restaurant Name Generator',
    keywords: 'restaurant name, cafe name, eatery name, dining name, food business name, AI restaurant name generator',
    promptLabel: 'Enter cuisine, style, or keywords:',
    placeholder: 'e.g., Italian bistro, cozy cafe, modern seafood',
    apiType: 'restaurant-name', // Assuming you have an API endpoint for this
    },
  'app-name-generator': {
    title: 'App Name Generator',
    keywords: 'app name, mobile app, application name, software name, AI app name generator',
    promptLabel: 'Enter app function or keywords:',
    placeholder: 'e.g., fitness tracker, puzzle game, social media app',
    apiType: 'app-name', // Assuming you have an API endpoint for this
  },
  'email-subject-line-generator': {
    title: 'Email Subject Line Generator',
    keywords: 'email subject, email marketing, subject line, catchy email, AI email subject generator',
    promptLabel: 'Enter email topic and call to action:',
    placeholder: 'e.g., new product launch, limited time offer, newsletter update',
    apiType: 'email-subject-line'
  },
  'instagram-caption-generator': {
    title: 'Instagram Caption Generator',
    keywords: 'Instagram caption, social media caption, photo caption, engaging caption, AI Instagram generator',
    promptLabel: 'Enter photo description and desired tone:',
    placeholder: 'e.g., sunset beach photo, funny moment with friends, motivational quote',
    apiType: 'instagram-caption'
  },
  'tweet-generator': {
    title: 'Tweet Generator',
    keywords: 'Twitter post, tweet ideas, social media content, viral tweet, AI tweet generator',
    promptLabel: 'Enter tweet topic and desired tone/purpose:',
    placeholder: 'e.g., tech news update, personal thought, question for followers',
    apiType: 'tweet'
  },
  'linkedin-headline-generator': {
    title: 'LinkedIn Headline Generator',
    keywords: 'LinkedIn headline, professional headline, career profile, LinkedIn optimization, AI LinkedIn generator',
    promptLabel: 'Enter your role, industry, and key achievements/skills:',
    placeholder: 'e.g., Software Engineer at Google, Marketing Manager with 5 years experience, Customer Service role',
    apiType: 'linkedin-headline'
  },
  'business-idea-generator': {
    title: 'Business Idea Generator',
    keywords: 'business ideas, startup ideas, entrepreneurship, innovation, AI business generator',
    promptLabel: 'Enter your interests, skills, or target market:',
    placeholder: 'e.g., eco-friendly products, online education, local services',
    apiType: 'business-idea'
  },
  'product-name-generator': {
    title: 'Product Name Generator',
    keywords: 'product name, new product, marketing names, unique product names, AI product name generator',
    promptLabel: 'Enter product type and key features/benefits:',
    placeholder: 'e.g., smart home device, natural skincare, productivity app',
    apiType: 'product-name'
  },
  'song-title-generator': {
    title: 'Song Title Generator',
    keywords: 'song title, music title, catchy song names, lyrical inspiration, AI song title generator',
    promptLabel: 'Enter song theme, genre, or keywords:',
    placeholder: 'e.g., love song, heartbreak ballad, summer anthem, "uplifting"',
    apiType: 'song-title'
  },
  'story-idea-generator': {
    title: 'Story Idea Generator',
    keywords: 'story ideas, plot generator, writing prompts, creative writing, AI story generator',
    promptLabel: 'Enter genre, characters, or setting:',
    placeholder: 'e.g., fantasy adventure, sci-fi mystery, romantic comedy, "post-apocalyptic world"',
    apiType: 'story-idea'
  },
  'random-fact-generator': {
    title: 'Random Fact Generator',
    keywords: 'random facts, interesting facts, fun facts, daily facts, AI fact generator',
    promptLabel: 'Enter a topic (optional) or leave blank for a general fact:',
    placeholder: 'e.g., space, animals, history, human body',
    apiType: 'random-fact'
  },
  'joke-generator': {
    title: 'Joke Generator',
    keywords: 'joke generator, funny jokes, dad jokes, clean jokes, AI joke generator',
    promptLabel: 'Enter a topic for the joke (optional) or leave blank for a random one:',
    placeholder: 'e.g., animals, food, technology, school',
    apiType: 'joke'
  },
  'quote-generator': {
    title: 'Quote Generator',
    keywords: 'quote generator, inspirational quotes, motivational quotes, famous quotes, AI quote generator',
    promptLabel: 'Enter a theme or keywords for the quote (e.g., "success", "happiness", "perseverance"):',
    placeholder: 'e.g., courage, friendship, knowledge',
    apiType: 'quote'
  },
  'recipe-generator': {
    title: 'Recipe Generator',
    keywords: 'recipe generator, cooking ideas, meal planner, ingredient suggestions, AI recipe generator',
    promptLabel: 'Enter ingredients you have or cuisine type:',
    placeholder: 'e.g., chicken and broccoli, Italian pasta, vegetarian dinner',
    apiType: 'recipe'
  },
  'meal-plan-generator': {
    title: 'Meal Plan Generator',
    keywords: 'meal plan, healthy eating, diet planner, nutrition, AI meal plan generator',
    promptLabel: 'Enter dietary preferences, calorie goals, or ingredients to include:',
    placeholder: 'e.g., vegetarian, high-protein, gluten-free, 1800 calories',
    apiType: 'meal-plan'
  },
  'workout-plan-generator': {
    title: 'Workout Plan Generator',
    keywords: 'workout plan, fitness routine, exercise plan, gym workout, home workout, AI workout generator',
    promptLabel: 'Enter fitness goal, available equipment, and duration:',
    placeholder: 'e.g., build muscle, lose weight, cardio, 30 minutes, bodyweight',
    apiType: 'workout-plan'
  },
  'travel-itinerary-generator': {
    title: 'Travel Itinerary Generator',
    keywords: 'travel itinerary, trip planner, vacation ideas, destination guide, AI travel generator',
    promptLabel: 'Enter destination, travel dates, and interests (e.g., "Paris, 5 days, art and food"):',
    placeholder: 'e.g., Rome, 7 days, historical sites, family-friendly',
    apiType: 'travel-itinerary'
  },
  'gift-idea-generator': {
    title: 'Gift Idea Generator',
    keywords: 'gift ideas, present ideas, unique gifts, birthday gifts, holiday gifts, AI gift generator',
    promptLabel: 'Enter recipient\'s age, interests, and occasion:',
    placeholder: 'e.g., 30s female, loves reading, birthday; "teenager, gamer, Christmas"',
    apiType: 'gift-idea'
  },
  'dilemma-resolver': {
    title: 'Dilemma Resolver',
    keywords: 'dilemma, decision making, problem solver, advice generator, AI dilemma resolver',
    promptLabel: 'Describe your dilemma or difficult choice:',
    placeholder: 'e.g., should I take this new job, moving to a new city, balancing work and family',
    apiType: 'dilemma-resolver'
  },
  'dream-interpreter': {
    title: 'Dream Interpreter',
    keywords: 'dream meaning, dream analysis, subconscious, dream symbols, AI dream interpreter',
    promptLabel: 'Describe your dream in detail:',
    placeholder: 'e.g., flying over a city, being chased by a monster, losing teeth',
    apiType: 'dream-interpreter'
  },
  'chat-bot': {
    title: 'Chat Bot',
    keywords: 'chatbot, AI chat, conversational AI, intelligent assistant, AI chatbot',
    promptLabel: 'Start chatting with the AI:',
    placeholder: 'e.g., tell me a story, explain quantum physics, brainstorm ideas for a startup',
    apiType: 'chat-bot'
  },
  'horoscope-generator': {
    title: 'Horoscope Generator',
    keywords: 'horoscope, zodiac, astrology, daily horoscope, AI horoscope generator',
    promptLabel: 'Enter your zodiac sign and desired period (e.g., "Leo, today", "Scorpio, weekly"):',
    placeholder: 'e.g., Aries, monthly; Taurus, tomorrow',
    apiType: 'horoscope'
  },
  'riddle-generator': {
    title: 'Riddle Generator',
    keywords: 'riddle generator, brain teasers, puzzles, kids riddles, challenging riddles, AI riddle generator',
    promptLabel: 'Enter a topic or a keyword for the riddle:',
    placeholder: 'e.g., apple, shadow, time, river',
    apiType: 'riddle'
  },
  'trivia-question-generator': {
    title: 'Trivia Question Generator',
    keywords: 'trivia questions, quiz generator, general knowledge, fun facts, AI trivia generator',
    promptLabel: 'Enter a topic for trivia questions (e.g., "history", "science", "movies"):',
    placeholder: 'e.g., geography, pop culture, sports',
    apiType: 'trivia-question'
  },
  'would-you-rather-generator': {
    title: 'Would You Rather Generator',
    keywords: 'would you rather, party game, icebreaker, fun questions, AI would you rather generator',
    promptLabel: 'Enter a theme (optional) or leave blank for a random question:',
    placeholder: 'e.g., funny, difficult, food, travel',
    apiType: 'would-you-rather'
  },
  'truth-or-dare-generator': {
    title: 'Truth or Dare Generator',
    keywords: 'truth or dare, party game, fun challenges, dares, AI truth or dare generator',
    promptLabel: 'Enter a theme (optional) or leave blank for random truths/dares:',
    placeholder: 'e.g., funny, embarrassing, adventurous',
    apiType: 'truth-or-dare'
  },
  'never-have-i-ever-generator': {
    title: 'Never Have I Ever Generator',
    keywords: 'never have I ever, party game, icebreaker, fun questions, AI never have I ever generator',
    promptLabel: 'Enter a theme (optional) or leave blank for a random statement:',
    placeholder: 'e.g., travel, food, embarrassing moments',
    apiType: 'never-have-i-ever'
  },
  'two-truths-and-a-lie-generator': {
    title: 'Two Truths and a Lie Generator',
    keywords: 'two truths and a lie, party game, icebreaker, fun facts, AI two truths and a lie generator',
    promptLabel: 'Enter a topic or personal characteristic for the statements:',
    placeholder: 'e.g., travel, hobbies, childhood memories, "about me"',
    apiType: 'two-truths-and-a-lie'
  },
  'mad-libs-generator': {
    title: 'Mad Libs Generator',
    keywords: 'mad libs, funny stories, fill in the blanks, creative writing game, AI mad libs generator',
    promptLabel: 'Enter a story theme or keywords for the blanks:',
    placeholder: 'e.g., adventure, daily routine, cooking, "at the park"',
    apiType: 'mad-libs'
  },
  'charades-generator': {
    title: 'Charades Generator',
    keywords: 'charades, party game, acting game, word guessing, AI charades generator',
    promptLabel: 'Enter a category for charades ideas (e.g., "movies", "animals", "actions"):',
    placeholder: 'e.g., books, songs, famous people',
    apiType: 'charades'
  },
  'catchphrase-generator': {
    title: 'Catchphrase Generator',
    keywords: 'catchphrase, memorable phrase, slogan, taglines, AI catchphrase generator',
    promptLabel: 'Enter keywords or a character/brand description:',
    placeholder: 'e.g., superhero, detective, tech product, "funny"',
    apiType: 'catchphrase'
  },
  'news-headline-generator': {
    title: 'News Headline Generator',
    keywords: 'news headline, article title, journalistic writing, catchy headlines, AI news headline generator',
    promptLabel: 'Enter a topic or keywords for the news story:',
    placeholder: 'e.g., technology breakthrough, local event, scientific discovery',
    apiType: 'news-headline'
  },
  'plot-twist-generator': {
    title: 'Plot Twist Generator',
    keywords: 'plot twist, story ideas, writing prompts, narrative surprises, AI plot twist generator',
    promptLabel: 'Enter your story genre and current plot elements:',
    placeholder: 'e.g., mystery, fantasy, thriller, "character discovers a secret"',
    apiType: 'plot-twist'
  },
  'dialogue-generator': {
    title: 'Dialogue Generator',
    keywords: 'dialogue writer, script generator, character conversation, creative writing, AI dialogue generator',
    promptLabel: 'Enter characters, setting, and topic of conversation:',
    placeholder: 'e.g., two friends discussing future plans, argument between rivals, a first date',
    apiType: 'dialogue'
  },
  'css-gradient-generator': {
    title: 'CSS Gradient Generator',
    keywords: 'css gradient, gradient generator, web design, UI, UX, color blend, AI CSS generator',
    promptLabel: 'Choose gradient type, colors, and direction/shape:',
    placeholder: 'e.g., linear, red to blue, to right; radial, circle, center, green to yellow',
    apiType: 'css-gradient'
  },
  'album-name-generator': {
    title: 'Album Name Generator',
    keywords: 'album name, music title, record name, band album, AI album name generator',
    promptLabel: 'Enter keywords or music genre/mood:',
    placeholder: 'e.g., rock, melancholic, futuristic, "for a concept album"',
    apiType: 'album-name'
  },
  'discord-name-generator': {
    title: 'Discord Name Generator',
    keywords: 'discord name, gaming name, online name, unique discord, AI discord name generator',
    promptLabel: 'Enter keywords or your desired style/theme:',
    placeholder: 'e.g., gamer, aesthetic, edgy, "for a chill server"',
    apiType: 'discord-name'
  },
  'domain-name-generator': {
    title: 'Domain Name Generator',
    keywords: 'domain name, website name, URL generator, brand name, AI domain name generator',
    promptLabel: 'Enter keywords or a brief description of your website/business:',
    placeholder: 'e.g., tech blog, online store, personal portfolio',
    apiType: 'domain-name'
  },
  'shop-name-generator': {
    title: 'Shop Name Generator',
    keywords: 'shop name, store name, retail name, e-commerce name, AI shop name generator',
    promptLabel: 'Enter keywords or a description of your products/niche:',
    placeholder: 'e.g., handmade crafts, vintage clothing, gourmet food',
    apiType: 'shop-name'
  },
  'store-name-generator': {
    title: 'Store Name Generator',
    keywords: 'store name, retail business, shop name, brand identity, AI store name generator',
    promptLabel: 'Enter keywords or type of products you sell:',
    placeholder: 'e.g., books, electronics, fashion boutique, coffee shop',
    apiType: 'store-name'
  },
  'company-slogan-generator': {
    title: 'Company Slogan Generator',
    keywords: 'company slogan, business tagline, corporate slogan, brand message, AI company slogan generator',
    promptLabel: 'Enter your company name, industry, and core values:',
    placeholder: 'e.g., "Eco-Solutions, renewable energy, sustainable future"',
    apiType: 'company-slogan'
  },
  'business-slogan-generator': {
    title: 'Business Slogan Generator',
    keywords: 'business slogan, marketing tagline, advertising motto, brand statement, AI business slogan generator',
    promptLabel: 'Enter your business name, industry, and unique selling points:',
    placeholder: 'e.g., "FreshBites, healthy meal delivery, convenience and taste"',
    apiType: 'business-slogan'
  },
  'website-name-generator': {
    title: 'Website Name Generator',
    keywords: 'website name, domain ideas, online platform, URL suggestions, AI website name generator',
    promptLabel: 'Enter keywords or topic of your website:',
    placeholder: 'e.g., photography portfolio, tech review blog, travel guide',
    apiType: 'website-name'
  },
  'youtube-title-generator': {
    title: 'YouTube Title Generator',
    keywords: 'youtube title, video title, SEO title, clickbait title, AI YouTube title generator',
    promptLabel: 'Enter video topic and keywords:',
    placeholder: 'e.g., "how to edit videos", "gaming highlights", "vlog daily life"',
    apiType: 'youtube-title'
  },
  'pun-generator': {
    title: 'Pun Generator',
    keywords: 'pun generator, funny puns, wordplay, humor, AI pun generator',
    promptLabel: 'Enter a keyword or topic for the pun:',
    placeholder: 'e.g., "cat", "food", "books", "weather"',
    apiType: 'pun'
  },
  'lyric-generator': {
    title: 'Lyric Generator',
    keywords: 'song lyrics, songwriting, music writing, verse generator, AI lyric generator',
    promptLabel: 'Enter a theme, genre, or keywords for the lyrics:',
    placeholder: 'e.g., "love", "adventure", "sadness", "pop song"',
    apiType: 'lyric'
  },
  'diet-plan-generator': {
    title: 'Diet Plan Generator',
    keywords: 'diet plan, meal planning, healthy eating, nutrition, AI diet plan generator',
    promptLabel: 'Enter dietary restrictions, health goals, or preferred cuisine:',
    placeholder: 'e.g., "keto", "vegan", "weight loss", "Mediterranean"',
    apiType: 'diet-plan'
  },
  'motivational-quote-generator': {
    title: 'Motivational Quote Generator',
    keywords: 'motivational quote, inspirational words, success quotes, positive affirmations, AI motivational quote generator',
    promptLabel: 'Enter a theme or challenge you need motivation for:',
    placeholder: 'e.g., "work", "fitness", "overcoming fear", "new beginnings"',
    apiType: 'motivational-quote'
  },
  'linkedin-summary-generator': {
    title: 'LinkedIn Summary Generator',
    keywords: 'linkedin summary, professional profile, career summary, personal branding, AI LinkedIn summary generator',
    promptLabel: 'Enter your profession, key skills, and career aspirations:',
    placeholder: 'e.g., "Software Engineer, React, Python, seeking senior roles"; "Marketing Manager, SEO, Social Media"',
    apiType: 'linkedin-summary'
  },
  'cafe-name-generator': {
    title: 'Cafe Name Generator',
    keywords: 'cafe name, coffee shop name, unique cafe, restaurant name, AI cafe name generator',
    promptLabel: 'Enter keywords or your cafe\'s style/vibe:',
    placeholder: 'e.g., "cozy", "modern", "boutique", "vintage"',
    apiType: 'cafe-name'
  },
  'twitch-username-generator': {
    title: 'Twitch Username Generator',
    keywords: 'twitch name, streamer name, gaming username, live streaming, AI Twitch username generator',
    promptLabel: 'Enter keywords, gaming style, or personal traits:',
    placeholder: 'e.g., "fast-paced gamer", "chill stream", "creative", "your real name"',
    apiType: 'twitch-username'
  },
  'xbox-gamertag-generator': {
    title: 'Xbox Gamertag Generator',
    keywords: 'xbox gamertag, gaming name, gamer tag, unique gamertag, AI Xbox gamertag generator',
    promptLabel: 'Enter keywords, gaming genre, or personal preferences:',
    placeholder: 'e.g., "shooter", "RPG", "funny", "clan name"',
    apiType: 'xbox-gamertag'
  },
  'roblox-username-generator': {
    title: 'Roblox Username Generator',
    keywords: 'roblox name, gaming username, kids games, unique roblox, AI Roblox username generator',
    promptLabel: 'Enter keywords, favorite games, or desired style:',
    placeholder: 'e.g., "adventure", "building", "cute", "cool"',
    apiType: 'roblox-username'
  },
  'fortnite-name-generator': {
    title: 'Fortnite Name Generator',
    keywords: 'fortnite name, gaming name, battle royale, cool names, AI Fortnite name generator',
    promptLabel: 'Enter keywords, play style, or desired vibe:',
    placeholder: 'e.g., "aggressive", "sneaky", "funny", "pro gamer"',
    apiType: 'fortnite-name'
  },
  'call-of-duty-name-generator': {
    title: 'Call of Duty Name Generator',
    keywords: 'call of duty name, cod name, gaming name, FPS game, AI Call of Duty name generator',
    promptLabel: 'Enter keywords, play style, or desired persona:',
    placeholder: 'e.g., "tactical", "aggressive", "sniper", "veteran"',
    apiType: 'call-of-duty-name'
  },
  'pubg-name-generator': {
    title: 'PUBG Name Generator',
    keywords: 'pubg name, playerunknown\'s battlegrounds, gaming name, battle royale, AI PUBG name generator',
    promptLabel: 'Enter keywords, play style, or desired image:',
    placeholder: 'e.g., "survivor", "marksman", "clutch king", "lone wolf"',
    apiType: 'pubg-name'
  },
  'powerball-generator': {
    title: 'Powerball Number Generator',
    keywords: 'powerball, lottery numbers, random numbers, lucky numbers, AI Powerball generator',
    promptLabel: 'Click "Generate" to get your lucky Powerball numbers!',
    placeholder: 'type "lucky" this will generate 5 play lines',
    apiType: 'powerball'
  },
  'mega-millions-generator': {
    title: 'Mega Millions Number Generator',
    keywords: 'mega millions, lottery numbers, random numbers, lucky numbers, AI Mega Millions generator',
    promptLabel: 'Click "Generate" to get your lucky Mega Millions numbers!',
    placeholder: 'type "lucky" this will generate 5 play lines',
    apiType: 'mega-millions'
  },
  'pick-5-generator': {
    title: 'Pick 5 Lottery Number Generator',
    keywords: 'pick 5, lottery numbers, daily lottery, random numbers, AI Pick 5 generator',
    promptLabel: 'Click "Generate" to get your lucky Pick 5 numbers!',
    placeholder: 'type "lucky" this will generate 5 play lines',
    apiType: 'pick-5'
  },
  'fantasy-5-generator': {
    title: 'Fantasy 5 Lottery Number Generator',
    keywords: 'fantasy 5, lottery numbers, state lottery, random numbers, AI Fantasy 5 generator',
    promptLabel: 'Click "Generate" to get your lucky Fantasy 5 numbers!',
    placeholder: 'type "lucky" this will generate 5 play lines',
    apiType: 'fantasy-5'
  },
  // NEW GENERATOR DETAILS ADDED
  'roblox-password-generator': {
    title: 'Roblox Password Generator',
    keywords: 'roblox password, secure password, gaming password, AI password generator',
    promptLabel: 'Specify desired password length and complexity:',
    placeholder: 'e.g., "16 characters, strong", "10 characters, letters and numbers"',
    apiType: 'roblox-password'
  },
  'pet-name-generator': {
    title: 'Pet Name Generator',
    keywords: 'pet name, dog names, cat names, unique pet names, AI pet name generator',
    promptLabel: 'Enter type of pet and desired style (e.g., "male dog, cute", "female cat, unique"):',
    placeholder: 'e.g., "golden retriever, playful", "black cat, mysterious"',
    apiType: 'pet-name'
  },
  'cool-name-generator': {
    title: 'Cool Name Generator',
    keywords: 'cool names, unique names, trendy names, AI name generator',
    promptLabel: 'Enter keywords or a style for cool names:',
    placeholder: 'e.g., "modern", "edgy", "nature-inspired"',
    apiType: 'cool-name'
  },
  'funny-name-generator': {
    title: 'Funny Name Generator',
    keywords: 'funny names, silly names, humorous names, AI funny name generator',
    promptLabel: 'Enter keywords or a comedic theme for funny names:',
    placeholder: 'e.g., "animal puns", "food-related", "witty"',
    apiType: 'funny-name'
  },
  'fake-name-generator': {
    title: 'Fake Name Generator',
    keywords: 'fake names, random identity, dummy names, AI fake name generator',
    promptLabel: 'Enter criteria for fake names (e.g., "male, American", "female, British"):',
    placeholder: 'e.g., "random, any nationality", "for a fictional character"',
    apiType: 'fake-name'
  },
  'playlist-name-generator': {
    title: 'Playlist Name Generator',
    keywords: 'playlist name, music playlist, catchy names, song compilation, AI playlist name generator',
    promptLabel: 'Enter music genre, mood, or activity:',
    placeholder: 'e.g., "workout songs", "chill vibes", "road trip anthems"',
    apiType: 'playlist-name'
  },
  'movie-title-generator': {
    title: 'Movie Title Generator',
    keywords: 'movie title, film title, cinema names, blockbuster titles, AI movie title generator',
    promptLabel: 'Enter movie genre, theme, or keywords:',
    placeholder: 'e.g., "sci-fi action, dystopian", "romantic comedy, charming"',
    apiType: 'movie-title'
  },
  'film-name-generator': {
    title: 'Film Name Generator',
    keywords: 'film name, movie title, independent film, documentary title, AI film name generator',
    promptLabel: 'Enter film genre, key concept, or keywords:',
    placeholder: 'e.g., "drama, family secrets", "thriller, psychological"',
    apiType: 'film-name'
  },
  'band-logo-generator': {
    title: 'Band Logo Generator',
    keywords: 'band logo, music logo, rock band logo, AI logo generator',
    promptLabel: 'Describe your band\'s style or desired logo aesthetic:',
    placeholder: 'e.g., "heavy metal, gothic", "indie folk, minimalist", "electronic, futuristic"',
    apiType: 'band-logo'
  },
  'dj-name-generator': {
    title: 'DJ Name Generator',
    keywords: 'DJ name, electronic music, producer name, unique DJ, AI DJ name generator',
    promptLabel: 'Enter music genre, desired vibe, or personal keywords:',
    placeholder: 'e.g., "EDM, energetic", "techno, dark", "hip-hop, classic"',
    apiType: 'dj-name'
  },
  'artist-name-generator': {
    title: 'Artist Name Generator',
    keywords: 'artist name, musician name, creative name, performer name, AI artist name generator',
    promptLabel: 'Enter your art form, style, or personal brand keywords:',
    placeholder: 'e.g., "painter, abstract", "singer-songwriter, soulful", "digital artist, vibrant"',
    apiType: 'artist-name'
  },
  'stage-name-generator': {
    title: 'Stage Name Generator',
    keywords: 'stage name, performer name, artist name, music name, AI stage name generator',
    promptLabel: 'Enter your style, genre, or desired vibe:',
    placeholder: 'e.g., "rock singer, powerful", "comedian, witty", "magician, mysterious"',
    apiType: 'stage-name'
  },
  'bio-generator': {
    title: 'Bio Generator',
    keywords: 'bio writer, professional bio, personal bio, social media bio, AI bio generator',
    promptLabel: 'Enter your profession, key achievements, or personality traits:',
    placeholder: 'e.g., "Software Engineer, Python, problem-solver"; "Artist, painter, nature lover"',
    apiType: 'bio'
  },
  'inspirational-quote-generator': {
    title: 'Inspirational Quote Generator',
    keywords: 'inspirational quotes, uplifting words, positive thoughts, motivation, AI quote generator',
    promptLabel: 'Enter a theme for inspiration:',
    placeholder: 'e.g., "courage", "growth", "happiness", "success"',
    apiType: 'inspirational-quote'
  },
  'slogan-maker': {
    title: 'Slogan Maker',
    keywords: 'slogan generator, tagline creator, marketing slogans, brand messages, AI slogan maker',
    promptLabel: 'Enter keywords or your business/product concept:',
    placeholder: 'e.g., "organic coffee, fresh"; "fitness app, progress"',
    apiType: 'slogan-maker'
  },
  'tagline-generator': {
    title: 'Tagline Generator',
    keywords: 'tagline creator, brand taglines, company slogans, memorable phrases, AI tagline generator',
    promptLabel: 'Enter your brand\'s essence, values, or unique benefit:',
    placeholder: 'e.g., "luxury, timeless, elegant"; "fast, reliable, secure"',
    apiType: 'tagline'
  },
  'instagram-bio-generator': {
    title: 'Instagram Bio Generator',
    keywords: 'instagram bio, social media bio, profile bio, engaging bio, AI instagram bio generator',
    promptLabel: 'Enter your niche, interests, and desired call-to-action:',
    placeholder: 'e.g., "travel blogger, adventurous, \'link in bio\'"; "fitness coach, healthy recipes"',
    apiType: 'instagram-bio'
  },
  'facebook-post-generator': {
    title: 'Facebook Post Generator',
    keywords: 'facebook post, social media content, engaging post, business post, AI facebook post generator',
    promptLabel: 'Enter topic, purpose, and desired tone for your post:',
    placeholder: 'e.g., "new product launch, exciting"; "daily tip, informative"; "ask a question, friendly"',
    apiType: 'facebook-post'
  },
  'tiktok-hashtag-generator': {
    title: 'TikTok Hashtag Generator',
    keywords: 'tiktok hashtags, viral hashtags, fyp, tiktok SEO, AI tiktok hashtag generator',
    promptLabel: 'Enter your video topic or keywords:',
    placeholder: 'e.g., "dance challenge", "cooking tutorial", "pet tricks"',
    apiType: 'tiktok-hashtag'
  },
  'meta-description-generator': {
    title: 'Meta Description Generator',
    keywords: 'meta description, SEO content, website description, search engine optimization, AI meta description generator',
    promptLabel: 'Enter page topic, keywords, and desired call-to-action:',
    placeholder: 'e.g., "product page, handmade jewelry, shop now"; "blog post, AI trends, learn more"',
    apiType: 'meta-description'
  },
  'keyword-generator': {
    title: 'Keyword Generator',
    keywords: 'keyword research, SEO keywords, content marketing, search terms, AI keyword generator',
    promptLabel: 'Enter a topic or broad keyword to find related keywords:',
    placeholder: 'e.g., "digital marketing", "healthy recipes", "electric cars"',
    apiType: 'keyword'
  },
  'logo-name-generator': {
    title: 'Logo Name Generator',
    keywords: 'logo name, brand name, visual identity, company logo, AI logo name generator',
    promptLabel: 'Enter keywords or your brand\'s aesthetic:',
    placeholder: 'e.g., "minimalist, tech"; "rustic, handmade"; "elegant, luxury"',
    apiType: 'logo-name'
  },
  'game-name-generator': {
    title: 'Game Name Generator',
    keywords: 'game name, video game title, board game name, app game, AI game name generator',
    promptLabel: 'Enter genre, theme, or core mechanic:',
    placeholder: 'e.g., "fantasy RPG, epic quest"; "puzzle adventure, colorful"',
    apiType: 'game-name'
  },
  'guild-name-generator': {
    title: 'Guild Name Generator',
    keywords: 'guild name, clan name, gaming community, unique guild names, AI guild name generator',
    promptLabel: 'Enter game type, guild purpose, or desired vibe:',
    placeholder: 'e.g., "MMORPG, raiding, fierce"; "casual, social, friendly"',
    apiType: 'guild-name'
  },
  'clan-name-generator': {
    title: 'Clan Name Generator',
    keywords: 'clan name, gaming team, competitive squad, unique clan names, AI clan name generator',
    promptLabel: 'Enter game type, clan focus, or desired image:',
    placeholder: 'e.g., "FPS, competitive, tactical"; "MOBA, strategic, elite"',
    apiType: 'clan-name'
  },
  'superhero-name-generator': {
    title: 'Superhero Name Generator',
    keywords: 'superhero name, hero name, comic character, powers, AI superhero name generator',
    promptLabel: 'Enter powers, personality, or origin:',
    placeholder: 'e.g., "flight, justice"; "telepathy, mysterious"; "tech-based, vigilant"',
    apiType: 'superhero-name'
  },
  'dnd-name-generator': {
    title: 'D&D Name Generator',
    keywords: 'dnd name, dungeons and dragons, fantasy names, character names, AI D&D name generator',
    promptLabel: 'Enter race, gender, and desired style (e.g., "elven female", "dwarven male", "human city"):',
    placeholder: 'e.g., "dragonborn, noble", "gnome, quirky", "orc, fierce"',
    apiType: 'dnd-name'
  },
  'rapper-name-generator': {
    title: 'Rapper Name Generator',
    keywords: 'rapper name, hip-hop name, stage name, unique rapper, AI rapper name generator',
    promptLabel: 'Enter keywords or your rap style/persona:',
    placeholder: 'e.g., "street, conscious", "trap, energetic", "old school, smooth"',
    apiType: 'rapper-name'
  },
  'sci-fi-name-generator': {
    title: 'Sci Fi Name Generator',
    keywords: 'sci fi name, futuristic names, alien names, space names, AI sci-fi name generator',
    promptLabel: 'Enter keywords, sci-fi concept, or character type:',
    placeholder: 'e.g., "futuristic city", "alien species", "android unit", "space explorer"',
    apiType: 'sci-fi-name'
  },
  'villain-name-generator': {
    title: 'Villain Name Generator',
    keywords: 'villain name, antagonist name, evil names, dark names, AI villain name generator',
    promptLabel: 'Enter powers, traits, or desired level of menace for the villain:',
    placeholder: 'e.g., "shadow powers, cunning", "mad scientist, destructive", "tyrant, ruthless"',
    apiType: 'villain-name'
  },
  'rpg-name-generator': {
    title: 'RPG Name Generator',
    keywords: 'rpg name, role-playing game, character names, fantasy world names, AI RPG name generator',
    promptLabel: 'Enter RPG genre, character type, or world element:',
    placeholder: 'e.g., "fantasy, warrior", "cyberpunk, hacker", "monster, mythical"',
    apiType: 'rpg-name'
  },
  'anime-name-generator': {
    title: 'Anime Name Generator',
    keywords: 'anime name, manga name, Japanese names, character names, AI anime name generator',
    promptLabel: 'Enter desired gender, style, or keywords:',
    placeholder: 'e.g., "female, strong", "male, mysterious", "cute, magical girl"',
    apiType: 'anime-name'
  },
  'sports-team-name-generator': {
    title: 'Sports Team Name Generator',
    keywords: 'sports team name, team names, club names, athletic names, AI sports team name generator',
    promptLabel: 'Enter sport, city/region, or desired mascot/theme:',
    placeholder: 'e.g., "basketball, New York, Eagles"; "soccer, fiery, dragons"',
    apiType: 'sports-team-name'
  },
  'fantasy-football-name-generator': {
    title: 'Fantasy Football Name Generator',
    keywords: 'fantasy football name, funny team name, creative league names, AI fantasy football name generator',
    promptLabel: 'Enter your favorite player, team, or a funny concept:',
    placeholder: 'e.g., "Mahomes, punny", "Eagles, funny", "touchdown, witty"',
    apiType: 'fantasy-football-name'
  },
  'secure-password-generator': {
    title: 'Secure Password Generator',
    keywords: 'secure password, strong password, password security, random password, AI password generator',
    promptLabel: 'Specify length and required characters (e.g., "16 chars, include numbers and symbols"):',
    placeholder: 'e.g., "20 characters, very strong", "12 chars, alphanumeric"',
    apiType: 'secure-password'
  },
  'random-letter-generator': {
    title: 'Random Letter Generator',
    keywords: 'random letter, alphabet, letter picker, word games, AI random letter generator',
    promptLabel: 'Specify how many letters you need:',
    placeholder: 'e.g., "1", "5", "10"',
    apiType: 'random-letter'
  },
  'random-color-generator': {
    title: 'Random Color Generator',
    keywords: 'random color, hex code, RGB, color palette, design tool, AI color generator',
    promptLabel: 'Click "Generate" for a random color or specify a color type:',
    placeholder: 'e.g., "warm color", "cool color", "pastel"',
    apiType: 'random-color'
  },
  'random-date-generator': {
    title: 'Random Date Generator',
    keywords: 'random date, date picker, event planner, AI random date generator',
    promptLabel: 'Specify a date range (optional):',
    placeholder: 'e.g., "between 2000 and 2024", "next month"',
    apiType: 'random-date'
  },
  'random-time-generator': {
    title: 'Random Time Generator',
    keywords: 'random time, time picker, schedule helper, AI random time generator',
    promptLabel: 'Specify a time range (optional):',
    placeholder: 'e.g., "between 9 AM and 5 PM", "at night"',
    apiType: 'random-time'
  },
  'fake-email-generator': {
    title: 'Fake Email Generator',
    keywords: 'fake email, temporary email, disposable email, privacy tool, AI fake email generator',
    promptLabel: 'Click "Generate" for a new temporary email address:',
    placeholder: 'No input needed',
    apiType: 'fake-email'
  },

  'meme-text-generator': {
    title: 'Meme Text Generator',
    keywords: 'meme text, funny text, caption generator, viral content, AI meme text generator',
    promptLabel: 'Enter keywords or the meme\'s situation:',
    placeholder: 'e.g., "confused cat", "distracted boyfriend", "success kid"',
    apiType: 'meme-text'
  },
  'meme-caption-generator': {
    title: 'Meme Caption Generator',
    keywords: 'meme caption, funny captions, internet memes, relatable humor, AI meme caption generator',
    promptLabel: 'Enter the meme\'s image description or context:',
    placeholder: 'e.g., "person looking surprised", "dog wearing glasses", "awkward family photo"',
    apiType: 'meme-caption'
  },
  'roast-generator': {
    title: 'Roast Generator',
    keywords: 'roast, funny insults, lighthearted teasing, humor, AI roast generator',
    promptLabel: 'Enter a topic or a characteristic to roast:',
    placeholder: 'e.g., "your friend\'s bad singing", "your messy room", "monday mornings"',
    apiType: 'roast'
  },
  'comeback-generator': {
    title: 'Comeback Generator',
    keywords: 'comeback, witty retort, clever reply, quick response, AI comeback generator',
    promptLabel: 'Enter the insult or situation you need a comeback for:',
    placeholder: 'e.g., "Someone called you short", "You spilled coffee on yourself"',
    apiType: 'comeback'
  },
  'cocktail-name-generator': {
    title: 'Cocktail Name Generator',
    keywords: 'cocktail name, drink names, mixology, bar menu, AI cocktail name generator',
    promptLabel: 'Enter key ingredients, desired mood, or flavor profile:',
    placeholder: 'e.g., "gin, citrus, refreshing", "whiskey, smoky, classic", "tropical, fruity"',
    apiType: 'cocktail-name'
  },
  // Add more generator details here following the same structure
};


// Function to determine related generators based on the current generatorType
const getRelatedGenerators = (currentType) => {
  const allGeneratorEntries = Object.entries(generatorDetails);
  const related = [];
  const maxRelated = 3; // Limit the number of related generators

  // Heuristic: Find generators with similar keywords or API types
  const currentKeywords = generatorDetails[currentType]?.keywords?.split(',').map(k => k.trim().toLowerCase()) || [];
  const currentApiType = generatorDetails[currentType]?.apiType;

  // Prioritize generators that are not the current one and have matching keywords/apiType
  for (const [key, value] of allGeneratorEntries) {
    if (key === currentType) continue; // Skip the current generator

    const otherKeywords = value.keywords.split(',').map(k => k.trim().toLowerCase());
    const commonKeywords = currentKeywords.filter(keyword => otherKeywords.includes(keyword));

    // Simple matching:
    if (commonKeywords.length > 0 || value.apiType === currentApiType) {
      related.push({
        name: value.title.replace(' Generator', ''), // Clean up title for display
        href: `/${key}`
      });
      if (related.length >= maxRelated) break;
    }
  }

  // If not enough related generators, pick some random ones
  while (related.length < maxRelated && related.length < allGeneratorEntries.length - 1) {
    const randomIndex = Math.floor(Math.random() * allGeneratorEntries.length);
    const [key, value] = allGeneratorEntries[randomIndex];
    const existsInRelated = related.some(gen => gen.href === `/${key}`);

    if (key !== currentType && !existsInRelated) {
      related.push({
        name: value.title.replace(' Generator', ''),
        href: `/${key}`
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
      // THIS IS THE CRITICAL CHANGE: Call your local API route, not the external Google API directly.
      const response = await fetch('/api/generate', { // <-- CHANGED URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the prompt and the generator type to your API route
        body: JSON.stringify({ prompt: prompt, type: apiType }), // Use apiType from generatorDetails
      });

      if (!response.ok) {
        // Log the error response from the API for debugging
        const errorData = await response.json();
        console.error("API error details from /api/generate:", errorData);
        // Display a user-friendly error message from your API route
        throw new Error(`Failed to generate result: ${errorData.error || errorData.message || 'Unknown error'}`);
      }

      const data = await response.json();

      // Your /api/generate endpoint returns { generatedText: text }
      if (data.generatedText) {
        setResult(data.generatedText);
      } else {
        setError('No result found from your API. Please try a different prompt.');
      }
    } catch (err) {
      console.error("Generation error (calling /api/generate):", err); // Log the full error
      setError(`Failed to generate result: ${err.message}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (result) {
      // Using document.execCommand('copy') for iFrame compatibility
      document.execCommand('copy');
      // IMPORTANT: Replace alert() with a custom modal for better UX and environment compatibility.
      // For now, I'll replace it with a console log for debugging, but a visual feedback is better.
      console.log('Result copied to clipboard!');
      // You could also add a temporary message on screen like "Copied!"
    }
  };


  return (
    // FIX: Added 'overflow-x-hidden' to the main container to prevent horizontal scrolling issues.
    // This helps in cases where content might slightly overflow on real devices vs. emulators.
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-inter overflow-x-hidden">
      <Head>
        {/* The title here is dynamically set from currentGeneratorDetails.title which is a string. */}
        {/* If you're still seeing the 'array with more than 1 element' warning, double-check that */}
        {/* 'title' itself isn't accidentally being passed as an array somewhere. */}
        <title>{title} - MarketProEdge AI Generators</title>
        <meta name="description" content={description.replace(/<[^>]*>?/gm, '')} /> {/* Clean HTML for meta description */}
        <meta name="keywords" content={`AI generator, online tool, free tool, ${keywords}`} />
        <meta property="og:title" content={`${title} - MarketProEdge`} />
        <meta property="og:description" content={description.replace(/<[^>]*>?/gm, '')} /> {/* Clean HTML for Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.marketproedge.com/${generatorType}`} />
        {/* Favicon in _document.js */}
      </Head>

      <Header />

      {/* FIX: Ensured the main content area also handles potential overflow if its children are too wide. */}
      <main className="flex-grow container mx-auto px-4 py-8 overflow-x-hidden w-full">
        {/* Ad Placeholder 1 (Top of content ad) */}
        <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mb-8 shadow-inner">
          [AdSense Ad Unit - Top of Generator]
        </div>

        <section className="bg-gray-850 p-6 sm:p-8 rounded-xl shadow-lg border border-blue-700 mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-400 mb-6">
            {title}
          </h1>

          {/* Adjusted font size, maintained centering, text-left for content flow, and ADDED BREAK-WORDS */}
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
                  onClick={() => navigator.clipboard.writeText(result)} // Modern approach
                  className="bg-green-600 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-300 transform hover:scale-105"
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
                {/* Dynamically get description snippet from the content map */}
                <p className="text-gray-400 text-xs">{generatorContentMap[gen.href.substring(1)]?.description.replace(/<[^>]*>?/gm, '').split('.')[0]}.</p>
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
  const paths = Object.keys(generatorDetails).map((key) => ({
    params: { generatorType: key },
  }));

  return {
    paths,
    fallback: false, // Set to 'blocking' or true if you have a lot of pages
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
