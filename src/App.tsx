import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import MainPage from "./pages/MainPage/MainPage";



const App = () => {
  const handleSearch = (searchTerm: string) => {
    // Implement your search logic here
    console.log('Search term:', searchTerm);
  };


  return (
      <div className="app">
        <Navbar />
        <SearchBar onSearch={handleSearch} />
        <MainPage />
        <Footer />
      </div>
  );
};

export default App;
