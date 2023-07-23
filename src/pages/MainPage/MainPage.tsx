import React, { Fragment } from "react";
import "./MainPage.css";
import Avatar from "../../components/Avatar/Avatar";
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const personName = "John Doe";
  const avatarImage = "src/assets/dog.png"; // Use the correct path and filename

  const catAvatarsData: { name: string; svgData: string }[] = [
    {
      name: "cat1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
    name: "cat1",
          svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "cat1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "cat1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    {
      name: "cat1",
      svgData: '<svg viewBox="0 0 36 36" fill="none" ... ></svg>',
    },
    // Add more cat avatars data as needed
  ];

  const dogAvatarsData: { name: string; svgData: string }[] = [
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
