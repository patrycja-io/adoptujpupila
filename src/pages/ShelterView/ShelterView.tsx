import React from 'react';
import styles from './ShelterView.module.css'; // Import CSS module

interface SocialLink {
  platform: string;
  url: string;
}

interface AdData {
  id: number;
  title: string;
  description: string;
  // Add more ad-specific data
}

interface ShelterData {
  name: string;
  avatar: string;
  socialLinks: SocialLink[];
  contact: {
    email: string;
    phone: string;
    // Add more contact details as needed
  };
}

interface ShelterViewProps {
  shelterId: string;
}

const ShelterView: React.FC<ShelterViewProps> = ({ shelterId }) => {
  // Fetch shelter's data based on shelterId or any other logic you have
  // Replace the placeholders with actual data
  const shelterData: ShelterData = {
    name: 'Shelter Name',
    avatar: 'avatar_url.jpg',
    socialLinks: [
      { platform: 'Facebook', url: 'https://www.facebook.com/shelter' },
      { platform: 'Instagram', url: 'https://www.instagram.com/shelter' },
      // Add more social links as needed
    ],
    contact: {
      email: 'contact@shelter.com',
      phone: '+1234567890',
      // Add more contact details as needed
    },
  };

  // Fetch ads added by the shelter (Assuming an array of ads)
  // Replace the placeholders with actual data
  const adsData: AdData[] = [
    {
      id: 1,
      title: 'Ad Title 1',
      description: 'Ad Description 1',
      // Add more ad-specific data
    },
    {
      id: 2,
      title: 'Ad Title 2',
      description: 'Ad Description 2',
      // Add more ad-specific data
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
          <img src={shelterData.avatar} alt={shelterData.name} className={styles.avatar} />
          <h2>{shelterData.name}</h2>
          <div className={styles.socialLinks}>
            {shelterData.socialLinks.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
            ))}
          </div>
          <div className={styles.contact}>
            <p>Email: {shelterData.contact.email}</p>
            <p>Phone: {shelterData.contact.phone}</p>
            {/* Render more contact details as needed */}
          </div>
        </div>
        <div className={styles.adsList}>
          <h3>Ads added by {shelterData.name}:</h3>
          <ul>
            {adsData.map((ad) => (
                <li key={ad.id}>
                  <h4>{ad.title}</h4>
                  <p>{ad.description}</p>
                  <button onClick={() => addToFavorites(ad.id)}>Add to Favorites</button>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default ShelterView;
