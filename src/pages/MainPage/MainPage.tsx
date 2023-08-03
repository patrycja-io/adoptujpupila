import React, { Fragment } from "react";
import "./MainPage.css";
import Avatar from "../../components/Avatar/Avatar";
import AvatarLogo from "../../components/AvatarLogo/AvatarLogo";
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
  const catAvatarsData: { name: string; svgData: string; location: string }[] =
    [
      {
        name: "Mißka",
        location: "Lodz",
        svgData: "https://source.unsplash.com/njAgfTkYSAA",
      },
      {
        name: "cat1",
        location: "Lodz",
        svgData: "https://source.unsplash.com/TweD8nUb3Pc",
      },
      {
        name: "cat1",
        location: "Lodz",
        svgData: "https://source.unsplash.com/Px2Y-sio6-c",
      },
      {
        name: "cat1",
        location: "Lodz",
        svgData: "https://source.unsplash.com/3im_-kzsoNo",
      },
      {
        name: "cat1",
        location: "Lodz",
        svgData: "https://source.unsplash.com/ZTvR9wv3OFs",
      },
      {
        name: "cat1",
        location: "Lodz",
        svgData: "https://source.unsplash.com/fVNyjet1CXY",
      },
      // Add more cat avatars data as needed
    ];

  const dogAvatarsData: { name: string; svgData: string }[] = [
    {
      name: "dog1",
      svgData: "https://source.unsplash.com/WX4i1Jq_o0Y",
    },
    {
      name: "dog1",
      svgData: "https://source.unsplash.com/NE0XGVKTmcA",
    },
    {
      name: "dog1",
      svgData: "https://source.unsplash.com/TzjMd7i5WQI",
    },
    {
      name: "dog1",
      svgData: "https://source.unsplash.com/WX4i1Jq_o0Y",
    },
    {
      name: "dog1",
      svgData: "https://source.unsplash.com/JNm1dAElVtE",
    },
    {
      name: "dog1",
      svgData: "https://source.unsplash.com/tUCvnMOvXFQ",
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
        <div key={`${voivodeship.name}-${index}`} className="avatar-logo-item">
          {/* Render the image using the "image" prop */}
          <AvatarLogo name={voivodeship.name} image={voivodeship.image} />
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
