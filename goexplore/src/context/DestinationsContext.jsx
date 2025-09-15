import React, { createContext, useContext, useEffect, useState } from 'react';

// DestinationsContext provides destination data across the app
// useEffect simulates fetching destinations (e.g., from API/local JSON)
const DestinationsContext = createContext({
  destinations: [],
  isLoading: false,
  error: null
});

export const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate async fetch with a timeout
    setIsLoading(true);
    const timer = setTimeout(() => {
      try {
        // Static dataset related to the topic (travel destinations)
        const data = [
          { name: 'Bali, Indonesia', flag: '🇮🇩', popular: true },
          { name: 'Tokyo, Japan', flag: '🇯🇵', popular: true },
          { name: 'Santorini, Greece', flag: '🇬🇷', popular: true },
          { name: 'Switzerland', flag: '🇨🇭', popular: false },
          { name: 'Peru', flag: '🇵🇪', popular: false },
          { name: 'Kenya', flag: '🇰🇪', popular: false },
          { name: 'Thailand', flag: '🇹🇭', popular: false },
          { name: 'Italy', flag: '🇮🇹', popular: false }
        ];
        setDestinations(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load destinations');
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DestinationsContext.Provider value={{ destinations, isLoading, error }}>
      {children}
    </DestinationsContext.Provider>
  );
};

// Custom hook for easy consumption in components
export const useDestinations = () => useContext(DestinationsContext);

export default DestinationsContext;


