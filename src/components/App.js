import React, { useState } from "react";
import Menu from "./Menu";

const App = () => {
  const menuData = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99
    },
    {
      id: 2,
      title: "Country Delight",
      category: "lunch",
      price: 20.99
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99
    },
    {
      id: 4,
      title: "Egg Attack",
      category: "breakfast",
      price: 22.99
    },
    {
      id: 5,
      title: "Diner Double",
      category: "lunch",
      price: 13.99
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 18.99
    }
  ];

  const [items, setItems] = useState(menuData);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menuData
        : menuData.filter((item) => item.category === category);
    setItems(filtered);
  };

  return (
    <div id="main">
      <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>
      <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
        Lunch
      </button>
      <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
        Shakes
      </button>

      <Menu items={items} />
    </div>
  );
};

export default App;
