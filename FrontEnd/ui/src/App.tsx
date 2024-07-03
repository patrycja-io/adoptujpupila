import React, { useEffect, useState } from "react";
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
import { Voivodeship } from "./components/VoivoideshipList/VoivoideshipsList";
import dolnośląskie from "./assets/dolnośląskie.jpg";
import pomorskie from "./assets/pomorskie.jpg";
import lubelskie from "./assets/lubelskie.png";
import lubuskie from "./assets/lubuskie.jpg";
import lódzkie from "./assets/lódzkie.png";
import malopolskie from "./assets/malopolskie.jpeg";
import mazowieckie from "./assets/mazowsze.png";
import opolskie from "./assets/opolskie.jpeg";
import podkarpackie from "./assets/podkarpackie.png";
import podlaskie from "./assets/podlaskie.jpeg";
import slaskie from "./assets/slaskie.png";
import swietokrzyskie from "./assets/swietokrzyskie.jpeg";
import warminskomazurskie from "./assets/warminskomazurskie.png";
import wielkopolskie from "./assets/wielkopolskie.png";
import zachodniopomorskie from "./assets/zachodniopomorskie.png";

// Define the Shelter and Voivodeship types/interfaces
interface SocialLink {
  platform: string;
  url: string;
}

interface Contact {
  email?: string;
  phone: string;
  address: string;
  www?: string;
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
    name: "Azyl",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(74) 83 11 800",
      address: "ul. Brzegowa 151,\n" + "58-200 Dzierżoniów",
    },
  },
  {
    id: 2,
    name: "Schronisko dla zwierząt w Jeleniej Górze",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(75) 64 20 156",
      address: "ul. Spółdzielcza 33a\n" + "58-500 Jelenia Góra",
    },
  },
  {
    id: 3,
    name: "Schronisko dla zwierząt w Legnicy",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(76) 86 60 265",
      address: "ul. Ceglana 1\n" + "59-220 Legnica",
    },
  },
  {
    id: 4,
    name: "Schronisko dla zwierząt w Oleśnicy",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "605-782-214, 607-613-280",
      address: "Ligota Nowa 19\n" + "56-400 Oleśnica",
    },
  },
  {
    id: 5,
    name: "Schronisko dla zwierząt w Pieńsku",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(75) 77 80 412",
      address: " Dłużyna Górna 1F\n" + "ul. Kuźniczyska, 59-930 Pieńsk",
    },
  },
  {
    id: 6,
    name: "Schronisko dla zwierząt w Wałbrzychu",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(74) 84 24 223",
      address: " ul. Łokietka 7\n" + "58-303 Wałbrzych",
    },
  },
  {
    id: 7,
    name: "Schronisko dla zwierząt we Wrocławiu",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(71) 36 25 674",
      address: " ul. Skarbowców 52,\n" + "53-025 Wrocław",
    },
  },
  {
    id: 8,
    name: "Schronisko dla Zwierząt w Bydgoszczy",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(52) 37 22 130, (52) 34 90 390",
      address: " ul. Grunwaldzka 298,\n" + "85-438 Bydgoszcz",
    },
  },
  {
    id: 9,
    name:
      "Schronisko dla zwierząt w Grudziądzu\n" +
      "Centrum Opieki nad Zwierzętami",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      email: "contact@shelter1.com",
      phone: "(56) 450 42 28",
      address: " ul. Przytulna 1\n" + "86-300 Grudziądz",
    },
  },
  {
    id: 10,
    name: "Schronisko dla Zwierząt w Węgrowie",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(56) 46 46 100",
      address: " Węgrowo 4\n" + "86-300 Grudziądz",
      www: "http://www.schronisko-grudziadz.eu",
    },
  },
  {
    id: 10,
    name: "Schronisko dla zwierząt w Toruniu",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(56) 62 24 887",
      address: " ul. Przybyszewskiego 3\n" + "87-100 Toruń",
      www: "http://schronisko-torun.oinfo.pl/",
    },
  },
  {
    id: 11,
    name: "Schronisko dla Zwierząt we Włocławku",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(54) 23 32 021, (54) 23 31 730",
      address: " ul. Przemysłowa 16,\n" + "87-800 Włocławek",
      www: "http://schronisko-torun.oinfo.pl/",
    },
  },
  {
    id: 12,
    name: "Schronisko dla Zwierząt w Inowrocławiu",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(52) 35 72 320",
      address: " ul. Toruńska 165A,\n" + "88-100 Inowrocław",
    },
  },
  {
    id: 13,
    name: "Schronisko dla Zwierząt w Brodnicy",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(56)49 82 629",
      address: "ul. Ustronie 20,\n" + "87-300 Brodnica",
    },
  },
  {
    id: 14,
    name: "Schronisko dla Zwierząt w Nakle",
    voivodeship: "Kujawsko-Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(52) 58 14 494, (52) 38 55 176",
      address: "w Rozwarzynie\n" + "89-100 Nakło\n" + "ul. Nowa 11",
    },
  },
  {
    id: 15,
    name: "Schronisko dla Zwierząt w Lubartowie",
    voivodeship: "Lubelskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(81) 444-45-73",
      address: "w Nowodworze\n" + "21-100 Lubartów",
    },
  },
  {
    id: 16,
    name: "Przytulisko dla Zwierząt w Puławach",
    voivodeship: "Lubelskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(81) 533-10-24, (81) 886-30-63",
      address: "ul. Dubińska 2,\n" + "24-100 Puławy",
    },
  },
  {
    id: 17,
    name: "Schronisko dla Zwierząt w Białej Podlaskiej",
    voivodeship: "Lubelskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: {
      phone: "(83) 344-51-37",
      address: "ul. Olszowa 4,\n" + "21-500 Biała Podlaska",
    },
  },
];
const dummyVoivodeships: Voivodeship[] = [
  { id: 1, name: "Dolnośląskie", image: dolnośląskie },
  { id: 2, name: "Kujawsko-Pomorskie", image: pomorskie },
  { id: 3, name: "Lubelskie", image: lubelskie }, // Corrected image name
  { id: 4, name: "Lubuskie", image: lubuskie },
  { id: 5, name: "Łódzkie", image: lódzkie }, // Corrected name and image name
  { id: 6, name: "Małopolskie", image: malopolskie }, // Corrected image name
  { id: 7, name: "Mazowieckie", image: mazowieckie }, // Corrected image name
  { id: 8, name: "Opolskie", image: opolskie },
  { id: 9, name: "Podkarpackie", image: podkarpackie }, // Corrected image name
  { id: 10, name: "Podlaskie", image: podlaskie },
  { id: 11, name: "Pomorskie", image: pomorskie },
  { id: 12, name: "Śląskie", image: slaskie }, // Corrected name and image name
  { id: 13, name: "Świętokrzyskie", image: swietokrzyskie }, // Corrected name and image name
  { id: 14, name: "Warmińsko-mazurskie", image: warminskomazurskie }, // Corrected name and image name
  { id: 15, name: "Wielkopolskie", image: wielkopolskie },
  { id: 16, name: "Zachodniopomorskie", image: zachodniopomorskie }, // Corrected image name
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
  const [voivodeshipsData, setVoivodeshipsData] =
    useState<Voivodeship[]>(dummyVoivodeships);

  useEffect(() => {
    console.log("Fetching data...");
    setVoivodeshipsData(voivodeshipsData);
  }, []);

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
          <Route
            path="/"
            element={<MainPage voivodeships={voivodeshipsData} />}
          />
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
