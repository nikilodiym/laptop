import React from "react";
// import baner from "../assets/baner.jpeg";
import images from "../utils/images.js";
const Baner = () => {
  console.log(images);
  const selectedImage = images[0];
  const selectedImage2 = images[1];
  return (
    <div>
      <img src={selectedImage} width={1080} height={600} alt="" />
      <img src={selectedImage2} width={1080} height={600} alt="" />
    </div>
  );
};
export default Baner