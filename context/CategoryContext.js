// context/CategoryContext.js

import React, { createContext, useContext } from 'react';
import { categories } from '../data/categories'; // Import your categories data

// Create the Context
const CategoryContext = createContext();

// Create a Provider component
export const CategoryProvider = ({ children }) => {
  // The 'categories' data is static, so we can just pass it directly.
  // If your categories were fetched from an API, you'd do that here (e.g., with useState and useEffect).
  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  );
};

// Create a custom hook to use the CategoryContext
export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
};
