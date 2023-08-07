import React, { Fragment } from "react";
import styles from "./ShelterView.module.css";
import ItemThumbnail from "../../components/ItemThumbnail/ItemThumbnail"; // Import CSS module
import placeholder from "../../assets/placeholder.png";
import { useParams } from "react-router-dom";

interface Contact {
  email: string;
  phone: string;
  // Add more contact details as needed
}
interface SocialLink {
  platform: string;
  url: string;
}

interface AdData {
  id: number;
  shelterId: number;
  title: string;
  dateAdded: string;
  category: string;
  location: string;
  imageUrl: string;
  // Add more ad-specific data
}

interface ShelterData {
  id: number;
  name: string;
  voivodeship: string;
  avatar: string;
  socialLinks: SocialLink[];
  contact: Contact[];
}

interface ShelterViewProps {
  parsedShelterId?: number;
}

const dummyShelters: ShelterData[] = [
  {
    id: 1,
    name: "Shelter 1",
    voivodeship: "Dolnośląskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: [
      {
        email: "contact@shelter1.com",
        phone: "+1234567890", // Add more contact details as needed
      },
    ],
  },
  {
    id: 22,
    name: "Shelter 22",
    voivodeship: "Wielkopolskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: [
      {
        email: "contact@shelter1.com",
        phone: "+1234567890", // Add more contact details as needed
      },
    ],
  },
  {
    id: 222,
    name: "Shelter 222",
    voivodeship: "Lubuskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: [
      {
        email: "contact@shelter1.com",
        phone: "+1234567890", // Add more contact details as needed
      },
    ],
  },
  {
    id: 7777,
    name: "Shelter 7777",
    voivodeship: "Pomorskie",
    avatar: placeholder,
    socialLinks: [
      { platform: "Facebook", url: "http://www.patrycja.io" },
      { platform: "Instagram", url: "http://www.patrycja.io" },
      // Add more social links as needed
    ],
    contact: [
      {
        email: "contact@shelter1.com",
        phone: "+1234567890", // Add more contact details as needed
      },
    ],
  },
];

const ShelterView: React.FC<ShelterViewProps> = ({ parsedShelterId }) => {
  const { shelterId } = useParams<{ shelterId: string }>(); // Get shelterId from URL parameter

  let parsedShelterIdNumber: number | null = null;

  if (shelterId != null) {
    parsedShelterIdNumber = parseInt(shelterId, 10);
  }

  const shelterData = dummyShelters.find(
    (shelter) => shelter.id === parsedShelterIdNumber,
  );

  if (!shelterData) {
    return <div>Shelter not found.</div>;
  }

  // Fetch ads added by the shelter (Assuming an array of ads)
  // Replace the placeholders with actual data
  const adsData: AdData[] = [
    {
      id: 1,
      shelterId: 1, // Replace 1 with the actual shelterId for this ad
      title: "Pregowana 3 miesieczna kotka",
      dateAdded: "2022-03-12",
      category: "shelter",
      location: "Kartuzy, Kujawsko-Pomorskie ",
      imageUrl: "https://source.unsplash.com/ZCHj_2lJP00", // URL of the image for Item 1
    },
    {
      id: 2,
      shelterId: 2, // Replace 1 with the actual shelterId for this ad
      title: "Item 2",
      dateAdded: "2022-03-12",
      category: "shelter",
      location: "Location 2",
      imageUrl: "https://source.unsplash.com/yMSecCHsIBc", // URL of the image for Item 2
    },
    // Add more ads as needed
  ];

  // Function to handle adding an ad to favorites
  const addToFavorites = (adId: number) => {
    // Implement the logic to add the ad to favorites
    console.log(`Ad with ID ${adId} added to favorites.`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.shelterInfo}>
        <img
          src={shelterData.avatar}
          alt={shelterData.name}
          className={styles.avatar}
        />
        <h2>{shelterData.name}</h2>
        <div className={styles.socialLinks}>
          {shelterData.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform}
            </a>
          ))}
        </div>
        <div className={styles.contact}>
          <Fragment>
            {shelterData.contact.map((contacts) => (
              <>
                <p>Email: {contacts.email}</p>
                <p>Phone: {contacts.phone}</p>
              </>
            ))}
          </Fragment>
        </div>
      </div>
      <div className={styles.adsList}>
        <h3>Ads added by {shelterData.name}:</h3>
        <ul>
          {adsData.map((result) => (
            <div key={result.id}>
              {/* Render the item thumbnail with the link to the item view */}
              <ItemThumbnail
                id={result.id}
                title={result.title}
                dateAdded={result.dateAdded}
                category={result.category}
                location={result.location}
                imageUrl={result.imageUrl}
                // Add other properties from the AdData interface as needed
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShelterView;
