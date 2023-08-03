import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ShelterList.css";
export interface Shelter {
  id: number;
  name: string;
  voivodeship: string;
}

interface ShelterListProps {
  shelters: Shelter[];
}

const ShelterList: React.FC<ShelterListProps> = ({ shelters }) => {
  // Group shelters by voivodeship
  const sheltersByVoivodeship: { [key: string]: Shelter[] } = {};
  shelters.forEach((shelter) => {
    if (sheltersByVoivodeship[shelter.voivodeship]) {
      sheltersByVoivodeship[shelter.voivodeship].push(shelter);
    } else {
      sheltersByVoivodeship[shelter.voivodeship] = [shelter];
    }
  });

  return (
    <div className="shelter-list">
      {Object.entries(sheltersByVoivodeship).map(([voivodeship, shelters]) => (
        <div key={voivodeship}>
          <h2>{voivodeship}</h2>
          <ul>
            {shelters.map((shelter) => (
              <li key={shelter.id}>
                {/* Use Link component to navigate to ShelterView */}
                <Link to={`/shelterview/${shelter.id}`}>{shelter.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShelterList;
