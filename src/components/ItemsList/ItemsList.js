import React from "react";
import "./ItemsList.css";
import Card from "../Cards/Cards";

const ItemsList = ({prods}) => {
  return (
    <div id="itemsList">
      {prods?.map((prod) => {
        return (
          <Card
            key={prod.id}
            item={prod}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            src={prod.src}
          />
        )
      })}
    </div>
  );
};

export default ItemsList;