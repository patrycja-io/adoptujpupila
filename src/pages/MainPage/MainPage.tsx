import React, { Fragment } from "react";
import "./MainPage.css";
import Avatar from "../../components/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import styles from "../../components/ItemThumbnail/ItemThumbnail.module.css";
import VoivodeshipsList, {Voivodeship} from "../../components/VoivoideshipList/VoivoideshipsList";

interface MainPageProps {
  voivodeships: Voivodeship[];
}

const MainPage: React.FC<MainPageProps> = ({ voivodeships }: MainPageProps) => {
  const catAvatarsData: {
    name: string;
    svgData: string;
    location: string;
    itemId: number;
  }[] = [
    {
      itemId: 1,
      name: "Mißka",
      location: "Lodz",
      svgData: "https://source.unsplash.com/njAgfTkYSAA",
    },
    {
      itemId: 12,
      name: "cat1",
      location: "Lodz",
      svgData: "https://source.unsplash.com/TweD8nUb3Pc",
    },
    {
      itemId: 2,
      name: "cat1",
      location: "Lodz",
      svgData: "https://source.unsplash.com/Px2Y-sio6-c",
    },
    {
      itemId: 22,
      name: "cat1",
      location: "Lodz",
      svgData: "https://source.unsplash.com/3im_-kzsoNo",
    },
    {
      itemId: 222,
      name: "cat1",
      location: "Lodz",
      svgData: "https://source.unsplash.com/ZTvR9wv3OFs",
    },
    {
      itemId: 223,
      name: "cat1",
      location: "Lodz",
      svgData: "https://source.unsplash.com/fVNyjet1CXY",
    },
    // Add more cat avatars data as needed
  ];

  const dogAvatarsData: { name: string; svgData: string; itemId: number }[] = [
    {
      itemId: 223,
      name: "dog1",
      svgData: "https://source.unsplash.com/WX4i1Jq_o0Y",
    },
    {
      itemId: 203,
      name: "dog1",
      svgData: "https://source.unsplash.com/NE0XGVKTmcA",
    },
    {
      itemId: 2293,
      name: "dog1",
      svgData: "https://source.unsplash.com/TzjMd7i5WQI",
    },
    {
      itemId: 2233,
      name: "dog1",
      svgData: "https://source.unsplash.com/WX4i1Jq_o0Y",
    },
    {
      itemId: 2223,
      name: "dog1",
      svgData: "https://source.unsplash.com/JNm1dAElVtE",
    },
    {
      itemId: 2123,
      name: "dog1",
      svgData: "https://source.unsplash.com/tUCvnMOvXFQ",
    },
    // Add more dog avatars data as needed
  ];

  const AvatarsList: React.FC<{
    avatarsData: { name: string; svgData: string; itemId: number }[];
  }> = ({ avatarsData }) => (
    <div className="avatar-row">
      {avatarsData.map((avatarData, index) => (
        <div key={`${avatarData.name}-${index}`} className="avatar-item">
          {/* Render the SVG component */}
          <Avatar
            name={avatarData.name}
            image={avatarData.svgData}
            itemId={avatarData.itemId}
          />
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
        <VoivodeshipsList voivodeships={voivodeships} />
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
