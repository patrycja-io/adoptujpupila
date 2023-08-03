import React from "react";

interface ItemViewProps {
  itemId: number;
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  contactPhone: string;
  contactName: string;
}
const ItemView: React.FC<ItemViewProps> = ({
  itemId,
  imageUrl,
  title,
  price,
  description,
  contactPhone,
  contactName,
}) => {
  return (
    <div className="item">
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="details">
        <h2 className="title">{title}</h2>
        <p className="price">{price}</p>
        <p className="description">{description}</p>
        <div className="contact">
          <p>{contactName}</p>
          <p className="phone">{contactPhone}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
