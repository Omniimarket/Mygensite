// components/Header.js

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { categories } from '../data/categories'; // Import the categories data

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      console.log("Searching for:", searchQuery.trim());
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg py-4 px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 border-b border-blue-700">
      <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
        {/* Logo and Site Title */}
        <Link href="/" className="flex items-center space-x-3 text-blue-400 rounded-md p-2 hover:bg-gray-700 transition-colors">
          <img src="/logo.png" alt="marketproedge" className="h-20 w-auto rounded-full" />
        </Link>

        {/* Mobile menu button (hamburger icon) */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation (visible on md screens and up) */}
      <nav className="hidden md:flex items-center space-x-4 flex-grow justify-center">
        <Link href="/all-generators" className="text-gray-300 hover:text-blue-400 font-bold text-lg py-2 px-4 rounded-md hover:bg-gray-900 transition-colors">
          All Generators
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`} // Correct: uses category.slug
            className="text-gray-300 hover:text-blue-400 font-bold text-lg py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
          >
            {category.name}
          </Link>
        ))}
      </nav>

      {/* Search Form (visible on desktop) */}
      <div className="hidden md:block w-auto">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search generators..."
            className="w-full md:w-64 px-4 py-2 border border-gray-600 bg-gray-700 text-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>

      {/* Mobile Menu (collapsible) and Search Bar (mobile only) */}
      <div className={`md:hidden w-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block opacity-100 max-h-screen' : 'hidden opacity-0 max-h-0 overflow-hidden'}`}>
        <form onSubmit={handleSearch} className="flex mt-4 mb-4">
          <input
            type="text"
            placeholder="Search generators..."
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-gray-100 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
        <nav className="flex flex-col space-y-3">
          <Link href="/all-generators" className="block text-xl hover:text-blue-400 py-2 transition-colors duration-200 font-semibold border-b border-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
            All Generators
          </Link>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`} // Correct: uses category.slug
              className="block text-xl hover:text-blue-400 py-2 transition-colors duration-200 font-semibold border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
