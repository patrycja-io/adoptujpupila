import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; // Import BrowserRouter, Route, and Switch
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import MainPage from "./pages/MainPage/MainPage";
import MyAccount from "./pages/MyAccount/MyAccount";

const App = () => {
  const handleSearch = (searchTerm: string) => {
    // Implement your search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <Router>
      {" "}
      {/* Wrap the entire app with Router */}
      <div className="app">
        <Navbar />
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/my-account" element={<MyAccount/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
