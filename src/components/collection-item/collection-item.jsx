import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../button/custom-button";
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div key={id} className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name.toUpperCase()}</span>
      <span className="price"> {price}</span>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>
  </div>
);

export default CollectionItem;
