import React from "react";
import AvatarLogo from "../AvatarLogo/AvatarLogo";
import dolnośląskie from "../../assets/dolnośląskie.jpg";
import pomorskie from "../../assets/pomorskie.jpg";
import mazowieckie from "../../assets/mazowsze.png";
import opolskie from "../../assets/opolskie.jpeg";
import wielkopolskie from "../../assets/wielkopolskie.png";
import lubuskie from "../../assets/lubuskie.jpg";
import zachodniopomorskie from "../../assets/zachodniopomorskie.png";
import lódzkie from "../../assets/lódzkie.png";
import slaskie from "../../assets/slaskie.png";
import podkarpackie from "../../assets/podkarpackie.png";
import podlaskie from "../../assets/podlaskie.jpeg";
import swietokrzyskie from "../../assets/swietokrzyskie.jpeg";
import malopolskie from "../../assets/malopolskie.jpeg";
import warminskomazurskie from "../../assets/warminskomazurskie.png";
import lubelskie from "../../assets/lubelskie.png";

export interface Voivodeship {
  id: number;
  name: string;
  image: string;
}

const voivodeships: Voivodeship[] = [
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

const VoivodeshipsList: React.FC<{
  voivodeships: Voivodeship[];
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
