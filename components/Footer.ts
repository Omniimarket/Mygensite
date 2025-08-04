import React from 'react';

const generatorLinks = [
  { name: "Business Name", href: "/business-name-generator" },
  { name: "Username", href: "/username-generator" },
  { name: "Fantasy Name", href: "/fantasy-name-generator" },
  { name: "Random Name", href: "/random-name-generator" },
  { name: "Random Word", href: "/random-word-generator" },
  { name: "Book Title", href: "/book-title-generator" },
  { name: "Paragraph", href: "/paragraph-generator" },
  { name: "Slogan", href: "/slogan-generator" },
  { name: "Hashtag", href: "/hashtag-generator" },
  { name: "Company Name", href: "/company-name-generator" },
  { name: "Band Name", href: "/band-name-generator" },
  { name: "Character Name", href: "/character-name-generator" },
  { name: "Rap Lyrics", href: "/rap-lyrics-generator" },
  { name: "Random Password", href: "/random-password-generator" },
  { name: "Cover Letter", href: "/cover-letter-generator" },
  { name: "Brand Name", href: "/brand-name-generator" },
  { name: "Team Name", href: "/team-name-generator" },
  { name: "Nickname", href: "/nickname-generator" },
  { name: "Superhero Name", href: "/superhero-name-generator" },
  { name: "D&D Name", href: "/dnd-name-generator" },
  { name: "Poetry", href: "/poetry-generator" },
  { name: "Lyric", href: "/lyric-generator" },
  { name: "Rhyme", href: "/rhyme-generator" },
  { name: "Rapper Name", href: "/rapper-name-generator" },
  { name: "Fake Name", href: "/fake-name-generator" },
  { name: "Fake Email", href: "/fake-email-generator" },
  { name: "Random Letter", href: "/random-letter-generator" },
  { name: "Random Color", href: "/random-color-generator" },
  { name: "YouTube Title", href: "/youtube-title-generator" },
  { name: "Instagram Caption", href: "/instagram-caption-generator" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4 md:px-8 lg:px-12 border-t border-blue-800">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">Quick Links to Generators</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
          {generatorLinks.map((gen, index) => (
            <a key={`footer-gen-${index}`} href={gen.href} className="text-gray-400 hover:text-blue-300 text-sm transition-colors py-1">
              {gen.name} Generator
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
