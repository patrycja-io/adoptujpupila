import React, { Fragment } from "react";
import "./MainPage.css";
import Avatar from "../../components/Avatar/Avatar";
import Dolnyslask from "../../assets/Dolnyslask.jpg";
import wielkopolskie from "../../assets/wielkopolskie.png";
import pomorskie from "../../assets/pomorskie.jpg";
import zp from "../../assets/zp.png";
import opolskie from "../../assets/opolskie.jpeg";
import mazowsze from "../../assets/mazowsze.png";

import { useTranslation } from "react-i18next";

interface Voivodeship {
  name: string;
  image: string; // Assuming the image is a URL or file path
}
const MainPage: React.FC = () => {
  const catAvatarsData: { name: string; svgData: string }[] = [
    {
      name: "cat1",
      svgData: "<svg ></svg>",
    },
    {
      name: "cat1",
      svgData: "<svg ></svg>",
    },
    {
      name: "cat1",
      svgData: "<svg ></svg>",
    },
    {
      name: "cat1",
      svgData: "<svg  ></svg>",
    },
    {
      name: "cat1",
      svgData: "<svg ></svg>",
    },
    {
      name: "cat1",
      svgData: "<svg ></svg>",
    },
    // Add more cat avatars data as needed
  ];

  const dogAvatarsData: { name: string; svgData: string }[] = [
    {
      name: "dog1",
      svgData: "<svg ></svg>",
    },
    {
      name: "dog1",
      svgData: "<svg ></svg>",
    },
    {
      name: "dog1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "dog1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "dog1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "dog1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    // Add more dog avatars data as needed
  ];

  const AvatarsList: React.FC<{
    avatarsData: { name: string; svgData: string }[];
  }> = ({ avatarsData }) => (
    <div className="avatar-row">
      {avatarsData.map((avatarData, index) => (
        <div key={`${avatarData.name}-${index}`} className="avatar-item">
          {/* Render the SVG component */}
          <Avatar name={avatarData.name} image={avatarData.svgData} />
        </div>
      ))}
    </div>
  );

  const voivodeShips: Voivodeship[] = [
    {
      name: "Dolnośląskie",
      image: Dolnyslask,
    },
    {
      name: "Kujawsko-Pomorskie",
      image: pomorskie,
    },
    {
      name: "Lubelskie",
      image: Dolnyslask,
    },
    {
      name: "Lubuskie",
      image: Dolnyslask,
    },
    {
      name: "Lódzkie",
      image: Dolnyslask,
    },
    {
      name: "Małopolskie",
      image: Dolnyslask,
    },
    {
      name: "Mazowieckie",
      image: mazowsze,
    },
    {
      name: "Opolskie",
      image: opolskie,
    },
    {
      name: "Podkarpackie",
      image: Dolnyslask,
    },
    {
      name: "Podlaskie",
      image: Dolnyslask,
    },
    {
      name: "Pomorskie",
      image: pomorskie,
    },
    {
      name: "Sląskie",
      image: Dolnyslask,
    },
    {
      name: "Swiętokrzyskie",
      image: Dolnyslask,
    },
    {
      name: "Warmińsko-mazurskie",
      image: Dolnyslask,
    },
    {
      name: "Wielkopolskie",
      image: wielkopolskie,
    },
    {
      name: "Zachodniopomorskie",
      image: zp,
    },
  ];
  const VoivodeshipsList: React.FC<{
    voivodeships: Voivodeship[];
  }> = ({ voivodeships }) => (
    <div className="avatar-row">
      {voivodeships.map((voivodeship, index) => (
        <div key={`${voivodeship.name}-${index}`} className="avatar-item">
          {/* Render the image using the "image" prop */}
          <Avatar name={voivodeship.name} image={voivodeship.image} />
        </div>
      ))}
    </div>
  );

  return (
    <Fragment>
      <div className="adoptujteraz-container">
        <header className="banner">
          <h1 className="centered-text">Adoptuj teraz</h1>
        </header>
        {/* Cats Row */}
        <AvatarsList avatarsData={catAvatarsData} />

        {/* Dogs Row */}
        <AvatarsList avatarsData={dogAvatarsData} />
      </div>

      <div className="schroniska-container">
        <header className="banner">
          <h1 className="centered-text">Schroniska</h1>
        </header>

        <VoivodeshipsList voivodeships={voivodeShips} />
      </div>
      <div className="promowane-container">
        <header className="banner">
          <h1 className="centered-text">Ogloszenia Promowane</h1>
        </header>
        {/* Cats Row */}
        <AvatarsList avatarsData={catAvatarsData} />

        {/* Dogs Row */}
        <AvatarsList avatarsData={dogAvatarsData} />
      </div>
    </Fragment>
  );
};

export default MainPage;
