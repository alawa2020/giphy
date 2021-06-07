import React from "react";

const GifGridItem = ({ url, title }) => {
  return (
    <div className="gif-item">
      <figure>
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};

export default GifGridItem;
