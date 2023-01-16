import React from "react";

const Asset = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((assetItems) => {
        const { id, title, img, desc, price } = assetItems;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>

                {/* <p classNAme="price">${price}</p> */}
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Asset;
