import React, { Fragment } from "react";
import "./MainPage.css";
import Avatar from "../../components/Avatar/Avatar";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const personName = "John Doe";
  const avatarImage = "src/assets/dog.png"; // Use the correct path and filename

  const catAvatarsData: { name: string; svgData: string }[] = [
    {
      name: "cat1",
      svgData: '<svg ></svg>',
    },
    {
      name: "cat1",
      svgData: '<svg ></svg>',
    },
    {
      name: "cat1",
      svgData: '<svg  ></svg>',
    },
    {
      name: "cat1",
      svgData: '<svg ></svg>',
    },
    {
      name: "cat1",
      svgData: '<svg ></svg>',
    },
    // Add more cat avatars data as needed
  ];

  const dogAvatarsData: { name: string; svgData: string }[] = [
    {
      name: "dog1",
      svgData: '<svg ></svg>',
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
          <Avatar name={avatarData.name} svgData={avatarData.svgData} />
        </div>
      ))}
    </div>
  );

  const voivodeShips: { name: string; svgData: string }[] = [
    {
      name: "Dolnośląskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Kujawsko-Pomorskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Lubelskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Lubuskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Lódzkie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Małopolskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Mazowieckie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Opolskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Podkarpackie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Podlaskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Pomorskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Sląskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Swiętokrzyskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Warmińsko-mazurskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Wielkopolskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "Zachodniopomorskie",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
  ];
  const VoivodeshipsList: React.FC<{
    shipsData: { name: string; svgData: string }[];
  }> = ({ shipsData }) => (
    <div className="avatar-row">
      {shipsData.map((shipData, index) => (
        <div key={`${shipData.name}-${index}`} className="avatar-item">
          {/* Render the SVG component */}
          <Avatar name={shipData.name} svgData={shipData.svgData} />
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

        <VoivodeshipsList shipsData={voivodeShips} />
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
