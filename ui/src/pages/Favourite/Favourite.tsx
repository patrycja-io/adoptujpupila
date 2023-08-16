// src/pages/FavoritesPage.tsx
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { getFavoriteItemsForUser } from '../api'; // Replace with your API function to fetch favorite items

interface FavoriteItem {
  id: number;
  title: string;
  description: string;
  price: string;
}

const FavoritesPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    if (isAuthenticated && user) {
      // Fetch the user's favorite items from the database
      // getFavoriteItemsForUser(user.sub).then((items) => {
      //   setFavoriteItems(items);
      // });
    }
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return <div>Please log in to view your favorite items.</div>;
  }

  return (
      <div>
        <h1>Your Favorite Items</h1>
        {favoriteItems.length > 0 ? (
            favoriteItems.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
            ))
        ) : (
            <p>You have not favorited any items yet.</p>
        )}
      </div>
  );
};

export default FavoritesPage;
