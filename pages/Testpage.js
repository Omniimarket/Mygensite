import React from 'react';
import Head from 'next/head';

const TestStyledPage = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center p-8">
      <Head>
        <title>Styled Test Page</title>
      </Head>
      <h1 className="text-5xl font-extrabold mb-4 text-yellow-300">
        Hello, Tailwind!
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        If you see this styled, Tailwind is working!
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
        Styled Button
      </button>
      <p className="mt-8 text-sm text-gray-400">
        Check the URL: /test-styled-page
      </p>
    </div>
  );
};

export default TestStyledPage;