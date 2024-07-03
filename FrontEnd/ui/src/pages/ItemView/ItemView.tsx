// ItemView.tsx
import React from 'react';

interface ItemViewProps {
  title: string;
  description: string;
}

const ItemView: React.FC<ItemViewProps> = ({ title, description }) => {
  return (
      <div className="item-view">
        <h2>{title}</h2>
        <p>{description}</p>
        {/* Additional details or content for the item view */}
      </div>
  );
};

export default ItemView;
