import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Switch
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import MainPage from "./pages/MainPage/MainPage";
import MyAccount from "./pages/MyAccount/MyAccount";
import SearchView from "./pages/SearchView/SearchView";
import ShelterView from "./pages/ShelterView/ShelterView";
import SearchBarMobile from "./components/SearchBarMobile/SearchBarMobile";

// Assuming you have a valid shelterId that you want to pass to ShelterView

// Rest of your code

const App = () => {
  const handleSearch = (query: string, location: string, category: string) => {
    // Perform search logic
    console.log("Search:", query, location, category);
  };
  // Handle mobile search action
  const handleMobileSearch = (query: string) => {
    // Perform search logic for mobile
    console.log("Mobile Search:", query);
  };

  // Assuming you have a valid shelterId that you want to pass to ShelterView
  const shelterId = 123;
  const isMobileScreen = () => window.innerWidth <= 767;

  return (
    <Router>
      <div className="app">
        <Navbar />
        {/* Conditionally render SearchBar based on the route */}
        {isMobileScreen() ? (
          <SearchBarMobile onSearch={(query) => handleMobileSearch(query)} />
        ) : (
          <SearchBar
            onSearch={(query, location, category) =>
              handleSearch(query, location, category)
            }
          />
        )}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/searchview" element={<SearchView />} />
          <Route path="/my-account" element={<MyAccount />} />
          {/* Pass the shelterId prop to the ShelterView component */}
          <Route
            path="/shelterview"
            element={<ShelterView shelterId={shelterId} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
