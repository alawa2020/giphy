import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import  GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Alita']);

  return (
    <>
      <h1>Buscador de Gifs</h1>
      <div>
          <AddCategory setCategories = {setCategories}/>
      </div>

      <div>
        <ol>
          {categories.map((category) => (
              <GifGrid 
                key={category}
                category={category}
              />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifExpertApp;
