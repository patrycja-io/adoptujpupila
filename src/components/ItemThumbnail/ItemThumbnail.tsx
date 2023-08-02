import React, { useState } from "react";
import styles from "./ItemThumbnail.module.css";
import { Link } from "react-router-dom";

interface ItemThumbnailProps {
  id: number;
  title: string;
  dateAdded: string;
  category: string;
  location: string;
  imageUrl: string;
}

const ItemThumbnail: React.FC<ItemThumbnailProps> = ({
  id,
  title,
  category,
  dateAdded,
  location,
  imageUrl,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); // State for favorite button

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <a href={`/item/${id}`} className={styles.itemThumbnailLink}>
      <div className={styles.searchResultItem} onClick={toggleDetails}>
        <div className={styles.thumbnailContainer}>
          <img
            src={imageUrl}
            alt="Item Thumbnail"
            className={styles.thumbnailImage}
          />
        </div>
        <div className={styles.itemContent}>
          <h3 className={styles.itemTitle}>{title}</h3>
          <p className={styles.itemDescription}>
            <Link to="/shelterview" className={styles.categoryLink}>
              {category === "private" ? "Private" : "Shelter"}
            </Link> <br />
            Added: {dateAdded}
          </p>
          {/* Add location text in the top-right corner */}
          <p className={styles.itemLocation}>{location}</p>
          <div
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.favoriteActive : ""
            }`}
            onClick={toggleFavorite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              {/* Add the heart icon SVG path here */}
              <path d="M12 21.35l-1.45-1.32C5.4 16.06 2 12.61 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 4.11-3.4 7.56-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ItemThumbnail;
