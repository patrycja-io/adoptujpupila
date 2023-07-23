import React, { useState } from 'react';
import './SearchBar.css';

// Define the category options (you can modify this based on your categories)
const categories: string[] = ['Wszystkie', 'Koty', 'Psy', 'Pozostale'];

// Define the location options for Polish cities and "All Poland"
const locations: string[] = ['Cala Polska', 'Dolnośląskie', 'Kujawsko-Pomorskie', 'Lubelskie', 'Lubuskie', 'Łódzkie', 'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie', 'Pomorskie', 'Śląskie', 'Warmińsko-Mazurskie', 'Wielkopolskie', 'Zachodniopomorskie'
];

interface SearchBarProps {
  onSearch: (query: string, location: string, category: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [location, setLocation] = useState<string>('All Poland');
  const [category, setCategory] = useState<string>('All');

  const handleSearch = () => {
    onSearch(query, location, category);
  };

  return (
      <div className="search-bar">
        <input
            type="text"
            placeholder="Szukaj..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((locationOption) => (
              <option key={locationOption} value={locationOption}>
                {locationOption}
              </option>
          ))}
        </select>
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
  );
};

export default SearchBar;
