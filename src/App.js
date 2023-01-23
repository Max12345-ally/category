import React, { useState } from "react";
import Asset from "./Asset";
import Categories from "./Categories";
import items from "./data";
import Css from "./App.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [assetItems, setAssetItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setAssetItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setAssetItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>My Assets</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Asset items={assetItems} />
      </section>
    </main>
  );
}

export default App;
