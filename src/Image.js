import React from "react";

const Image = ({classNameText, name, altText}) => {
  try {
    const image = require(`./assets/images/${name}`);
    if (!image) return null;
    return <img className={classNameText} src={image} alt={altText}/>;
  }
  catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default Image;