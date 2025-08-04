import React from 'react';
import Head from 'next/head'; // For SEO meta tags
import Header from '../components/Header';
import Footer from '../components/Footer'; // Your main generator links footer
import SubFooter from '../components/SubFooter'; // Your legal/about links footer

// You would likely fetch these from an API or a local data file in a real app
const featuredGenerators = [
  { name: "Business Name Generator", icon: "💡", color: "blue", href: "/business-name-generator", desc: "Find the perfect name for your startup or company with our smart AI." },
  { name: "Company Name Generator", icon: "🏢", color: "green", href: "/company-name-generator", desc: "Brainstorm professional and unique names for your new company." },
  { name: "Song Title Generator", icon: "🎵", color: "purple", href: "/song-title-generator", desc: "Discover catchy and memorable titles to inspire your next musical hit." },
  { name: "Random Password Generator", icon: "🔑", color: "yellow", href: "/random-password-generator", desc: "Create strong, secure, and unique passwords instantly." },
  { name: "Slogan Generator", icon: "💬", color: "red", href: "/slogan-generator", desc: "Craft compelling and memorable slogans for your brand or campaign." },
  { name: "Fantasy Name Generator", icon: "✨", color: "teal", href: "/fantasy-name-generator", desc: "Generate unique and imaginative names for your fantasy characters." },
  { name: "Xbox Gamertag Generator", icon: "🎮", color: "orange", href: "/xbox-gamertag-generator", desc: "Find an epic and unique Gamertag for your Xbox profile." },
  { name: "Random Color Generator", icon: "🎨", color: "cyan", href: "/random-color-generator", desc: "Discover random hex codes and RGB values for your designs." },
  { name: "Instagram Caption Generator", icon: "📸", color: "pink", href: "/instagram-caption-generator", desc: "Generate engaging captions for your Instagram posts." },
  { name: "Movie Title Generator", icon: "🎬", color: "indigo", href: "/movie-title-generator", desc: "Find captivating titles for your film projects." },
  { name: "Game Name Generator", icon: "🎮", color: "lime", href: "/game-name-generator", desc: "Discover cool and unique names for your games." },
  { name: "Superhero Name Generator", icon: "🦸", color: "fuchsia", href: "/superhero-name-generator", desc: "Create powerful and memorable names for your heroes." },
  // New Lottery Generators Added Below
  { name: "Powerball Generator", icon: "🎱", color: "red", href: "/powerball-generator", desc: "Generate random numbers for your next Powerball ticket." },
  { name: "Mega Millions Generator", icon: "💰", color: "green", href: "/mega-millions-generator", desc: "Generate random numbers for your next Mega Millions ticket." },
  { name: "Pick 5 Generator", icon: "🔢", color: "purple", href: "/pick-5-generator", desc: "Generate 5 random numbers for Pick 5 lottery games." },
  { name: "Fantasy 5 Generator", icon: "🍀", color: "teal", href: "/fantasy-5-generator", desc: "Generate 5 random numbers for Fantasy 5 lottery games." },
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>AI Generator Hub - Your Source for Creative AI Tools</title>
        <meta name="description" content="Generate unique business names, creative content, catchy slogans, and more with our AI-powered tools. Boost your creativity instantly!" />
        <meta name="keywords" content="AI generator, name generator, content ideas, free tools, Gemini API, business names, slogans, passwords, writing prompts" />
        <link rel="icon" href="/favicon.ico" />
        {/* AdSense Auto Ads Script - This should ideally be in _document.js or _app.js for global inclusion */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" crossOrigin="anonymous"></script>
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl shadow-xl mb-12 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">Unlock Creativity with Our AI-Powered Generators</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Generate unique names, compelling content, fresh ideas, and more instantly with the power of AI.</p>
          <a href="#featured-generators" className="bg-white text-blue-700 hover:bg-blue-100 px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">Explore Generators</a>
        </section>

        {/* Ad Placeholder 1 (Above the fold, prominent) */}
        <div className="ad-placeholder h-32 w-full max-w-4xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mb-12 shadow-inner">
          [AdSense Ad Unit - Horizontal Banner]
        </div>

        {/* "Featured Generators" Section */}
        <section id="featured-generators" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-white-800">Our Top AI Generators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredGenerators.map((gen, index) => (
              <a key={index} href={gen.href} className={`generator-card bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-blue-700 hover:shadow-xl hover:border-${gen.color}-500 transform hover:scale-[1.02] transition-all duration-300 ease-in-out`}>
                <div className={`text-${gen.color}-400 text-6xl mb-4`}>{gen.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-blue-300">{gen.name}</h3>
                <p className="text-gray-400 mb-6">{gen.desc}</p>
                <span className={`bg-gradient-to-r from-${gen.color}-600 to-${gen.color}-700 text-white px-6 py-3 rounded-full text-md font-semibold hover:from-${gen.color}-700 hover:to-${gen.color}-800 transition-colors shadow-md`}>Generate Now</span>
              </a>
            ))}
          </div>
        </section>

        {/* Ad Placeholder 2 (Mid-page content ad) */}
        <div className="ad-placeholder h-24 w-full max-w-3xl mx-auto my-12 bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm shadow-inner">
          [AdSense Ad Unit - Responsive Rectangle]
        </div>

        {/* Ad Placeholder 3 (Bottom of content ad) */}
        <div className="ad-placeholder h-32 w-full max-w-4xl mx-auto mt-12 mb-8 bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm shadow-inner">
          [AdSense Ad Unit - Large Rectangle]
        </div>
      </main>

      <Footer /> {/* Main generator links footer */}
      <SubFooter /> {/* Legal/about links footer */}
    </div>
  );
};

export default HomePage;
