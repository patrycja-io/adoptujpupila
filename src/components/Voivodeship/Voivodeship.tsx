import React from 'react';
import {FaPaw} from "react-icons/fa";

interface Voivodeship {
  name: string;
  svgData: React.ReactNode;
}

interface VoivodeshipsListProps {
  voivodeships: Voivodeship[];
}

const voivodeShip: { name: string; svgData: React.ReactNode }[] = [
  {
    name: "Dolnośląskie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Kujawsko-Pomorskie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Lubelskie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Lubuskie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Lódzkie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Małopolskie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Mazowieckie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Opolskie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Podkarpackie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Podlaskie",
    svgData: <FaPaw className="logo" />,
  },
  {
    name: "Pomorskie",
    svgData: ' <FaPaw className="logo" />',
  },
  {
    name: "Sląskie",
    svgData: ' <FaPaw className="logo" />',
  },
  {
    name: "Swiętokrzyskie",
    svgData: ' <FaPaw className="logo" />',
  },
  {
    name: "Warmińsko-mazurskie",
    svgData: ' <FaPaw className="logo" />',
  },
  {
    name: "Wielkopolskie",
    svgData: ' <FaPaw className="logo" />',
  },
  {
    name: "Zachodniopomorskie",
    svgData: ' <FaPaw className="logo" />',
  },
];

const VoivodeshipsList: React.FC<VoivodeshipsListProps> = ({ voivodeships }) => (
    <div className="voivodeships-list">
      {voivodeships.map((voivodeship, index) => (
          <div key={`${voivodeship.name}-${index}`} className="voivodeship-item">
            {/* Render the SVG component */}
            {voivodeship.svgData}
          </div>
      ))}
    </div>
);

export default VoivodeshipsList;
