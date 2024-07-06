// src/pages/ClassifiedsPage.tsx
import React from 'react';
import ClassifiedItem from "../../components/ClassifiedItem/ClassifiedItems";


const classifiedItems = [
  {
    id: 1,
    title: 'Car for Sale',
    description: 'This is a great car for sale!',
    price: '$10,000',
  },
  {
    id: 2,
    title: 'Bike for Sale',
    description: 'A high-quality bike in good condition.',
    price: '$500',
  },
  // Add more classified items as needed
];

const ClassifiedsPage: React.FC = () => {
  return (
      <div>
        <h1>Classifieds Page</h1>
        <div>
          {classifiedItems.map(item => (
              <ClassifiedItem key={item.id} item={item} />
          ))}
        </div>
      </div>
  );
};

export default ClassifiedsPage;
