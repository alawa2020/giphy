import React, { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifs";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  console.log(gifs);

  return (
    <>
      {loading && <p>Cargando </p>}

      <div className="gif-grid">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
        <h4>{category}</h4>
      </div>
    </>
  );
};

export default GifGrid;
