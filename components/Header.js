import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter for navigation

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (searchQuery.trim()) {
      // Navigate to the /search page with the query parameter
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      console.log("Searching for:", searchQuery.trim()); // Log for debugging
      setSearchQuery(''); // Clear search bar after search
    }
  };

  return (
    <header className="bg-gray-800 shadow-lg py-4 px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between z-10 border-b border-blue-700">
      <div className="flex items-center mb-4 md:mb-0">
        {/* Logo and Site Title */}
        <Link href="/" className="flex items-center space-x-3 text-blue-400 rounded-md p-2 hover:bg-gray-700 transition-colors">
          {/* Your Logo Image - assuming it's in the public directory */}
          <img src="/logo.png" alt="marketproedge" className="h-20 w-auto rounded-full" />
          {/* The site title "AI Generator Hub" was removed based on your provided header */}
        </Link>
      </div>
      <nav className="flex space-x-4">
        {/* All Generators button - made larger */}
        <Link href="/all-generators" className="text-gray-300 hover:text-blue-400 font-bold text-lg py-4 px-8 rounded-md hover:bg-gray-900 transition-colors">
          All Generators
        </Link>
        {/* The "About" and "Contact" links were removed based on your provided header */}
      </nav>
      <div className="mt-4 md:mt-0 w-full md:w-auto">
        {/* Search Form: This form will trigger handleSearch on submission */}
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
    </header>
  );
};

export default Header;
