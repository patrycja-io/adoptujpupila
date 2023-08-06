import React from "react";
import AvatarLogo from "../AvatarLogo/AvatarLogo";
import Dolnyslask from "../../assets/Dolnyslask.jpg";
import pomorskie from "../../assets/pomorskie.jpg";
import mazowsze from "../../assets/mazowsze.png";
import opolskie from "../../assets/opolskie.jpeg";
import wielkopolskie from "../../assets/wielkopolskie.png";
import zp from "../../assets/zp.png";
import lubuskie from "../../assets/lubuskie.png";
import podlaskie from "../../assets/podlaskie.jpeg";

export interface Voivoideship {
  id: number;
  name: string;
  image: string;
}

const voivodeships: Voivoideship[] = [
  { id: 1, name: "Dolnośląskie", image: Dolnyslask },
  { id: 2, name: "Kujawsko-Pomorskie", image: pomorskie },
  { id: 3, name: "Lubelskie", image: Dolnyslask },
  { id: 4, name: "Lubuskie", image: lubuskie },
  { id: 5, name: "Lódzkie", image: Dolnyslask },
  { id: 6, name: "Małopolskie", image: Dolnyslask },
  { id: 7, name: "Mazowieckie", image: mazowsze },
  { id: 8, name: "Opolskie", image: opolskie },
  { id: 9, name: "Podkarpackie", image: Dolnyslask },
  { id: 10, name: "Podlaskie", image: podlaskie },
  { id: 11, name: "Pomorskie", image: pomorskie },
  { id: 12, name: "Sląskie", image: Dolnyslask },
  { id: 13, name: "Swiętokrzyskie", image: Dolnyslask },
  { id: 14, name: "Warmińsko-mazurskie", image: Dolnyslask },
  { id: 15, name: "Wielkopolskie", image: wielkopolskie },
  { id: 16, name: "Zachodniopomorskie", image: zp },
];

const VoivodeshipsList: React.FC<{
  voivodeships: Voivoideship[];
}> = ({ voivodeships }) => (
  <div className="avatar-row">
    {voivodeships.map((voivodeship, index) => (
      <div key={`${voivodeship.name}-${index}`} className="avatar-logo-item">
        {/* Render the image using the "image" prop */}
        <a href={`/voivodeship/${voivodeship.name}`}>
          <AvatarLogo name={voivodeship.name} image={voivodeship.image} />
        </a>
      </div>
    ))}
  </div>
);

export default VoivodeshipsList;
