import React , { useState } from 'react';
import Asset from './Asset';
import Categories from './Categories';
import items from './data'
import Css from './App.css'

function App() {
const [assetItems, setAssetItems] = useState(items);
const [categories, setCategories] = useState([]);

const filterItems = (category) => {
  const newItems = items.filter((item) => item.category===category);
  setAssetItems(newItems);
}

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>My Aseets!!!</h2>
        </div>
        <Categories filterItems={filterItems} />
        <Asset items={assetItems} />
       </section>
    </main>
  );
}

export default App;
