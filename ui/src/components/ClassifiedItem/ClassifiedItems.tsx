import React from 'react';

interface Classified {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface Props {
  item: Classified;
}

const ClassifiedItem: React.FC<Props> = ({ item }) => {
  return (
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
  );
};

export default ClassifiedItem;
