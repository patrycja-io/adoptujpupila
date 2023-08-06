import React, { useState } from "react";
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
import ItemView from "./components/Item/ItemView";
import ShelterList from "./pages/ShelterList/ShelterList";
import {Voivodeship} from "./components/VoivoideshipList/VoivoideshipsList";

// Define the Shelter and Voivodeship types/interfaces
interface SocialLink {
  platform: string;
  url: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface Shelter {
  id: number;
  name: string;
  voivodeship: string;
  avatar: string;
  socialLinks: SocialLink[];
  contact: Contact;
}

// Define the placeholder image URL
const placeholder = "https://example.com/placeholder.png";

const dummyShelters: Shelter[] = [
  {
    id: 1,
    name: "Shelter 1",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "+1234567890",
    },
  },
  {
    id: 2,
    name: "Shelter 2",
    voivodeship: "Mazowieckie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "+1234567890",
    },
  },
  {
    id: 3,
    name: "Shelter 3",
    voivodeship: "Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "+1234567890",
    },
  },
  // Add more shelters as needed
];

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
  // State to keep track of the selected shelterId
  const [selectedShelterId, setSelectedShelterId] = useState<number | null>(
    null,
  );

  // Function to handle selecting a shelter
  const handleShelterSelect = (shelterId: number) => {
    setSelectedShelterId(shelterId);
  };

  // Dummy data for the item
  const itemData = {
    itemId: 123,
    imageUrl: "https://example.com/item.jpg",
    title: "Example Item",
    price: "100",
    description: "This is an example item for testing.",
    contactPhone: "123-456-7890",
    contactName: "John Doe",
  };

  const handleSelectShelter = (shelterId: number) => {
    setSelectedShelterId(shelterId);
  };
  const isMobileScreen = () => window.innerWidth <= 767;
  const [sheltersData, setSheltersData] = useState<Shelter[]>(dummyShelters);
  const [voivodeshipsData, setVoivodeshipsData] = useState<Voivodeship[]>();

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
          <Route path="/" element={<MainPage voivodeships={voivodeshipsData} />} />
          <Route path="/searchview" element={<SearchView />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route
            path="/shelterlist"
            element={
              <ShelterList
                shelters={sheltersData}
                onSelectShelter={handleShelterSelect}
              />
            }
          />
          <Route
            path="/shelterview/:shelterId"
            element={
              selectedShelterId ? (
                <ShelterView parsedShelterId={selectedShelterId} />
              ) : (
                <div>Loading...</div>
              )
            }
          />
          <Route
            path="/items/:itemId" // Use the URL parameter "itemId"
            element={
              <ItemView
                itemId={itemData.itemId}
                imageUrl={itemData.imageUrl}
                title={itemData.title}
                price={itemData.price}
                description={itemData.description}
                contactPhone={itemData.contactPhone}
                contactName={itemData.contactName}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
