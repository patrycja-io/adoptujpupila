import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./ShelterList.css";

export interface Shelter {
  id: number;
  name: string;
  voivodeship: string;
}

interface ShelterListProps {
  shelters: Shelter[];
  onSelectShelter: (shelterId: number) => void;
}

const ShelterList: React.FC<ShelterListProps> = ({
  shelters,
  onSelectShelter,
}) => {
  // Group shelters by voivodeship
  const sheltersByVoivodeship: { [key: string]: Shelter[] } = {};
  shelters.forEach((shelter) => {
    if (sheltersByVoivodeship[shelter.voivodeship]) {
      sheltersByVoivodeship[shelter.voivodeship].push(shelter);
    } else {
      sheltersByVoivodeship[shelter.voivodeship] = [shelter];
    }
  });
  // Function to fetch shelter data from the backend
  const getShelterData = async () => {
    try {
      const response = await fetch("/api/shelters");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      // Process the data and update your frontend state or UI
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching shelter data:", error.message);
      } else {
        console.error("Unknown error occurred:", error);
      }
    }
  };

  useEffect(() => {
    // Fetch shelter data when the component mounts
    getShelterData();
  }, []);

  return (
    <div className="shelter-list-container">
      <div className="shelter-list">
        <div className="shelter-list-row">
          {Object.entries(sheltersByVoivodeship).map(
            ([voivodeship, shelters]) => (
              <div className="shelter-list-row-style"key={voivodeship}>
                <h2>{voivodeship}</h2>
                <ul>
                  {shelters.map((shelter) => (
                    <li
                      key={shelter.id}
                      onClick={() => onSelectShelter(shelter.id)}
                    >
                      {/* Use Link component to navigate to ShelterView */}
                      <Link to={`/shelterview/${shelter.id}`}>
                        {shelter.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ShelterList;
