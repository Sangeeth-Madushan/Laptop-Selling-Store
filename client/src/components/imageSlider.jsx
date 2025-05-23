import React, { useState } from "react";

export default function ImageSlider(props) {
  const images = props.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-[500px] h-[600px] bg-amber-50">
      <img className="w-full h-[500px] object-cover rounded-2xl" src={images[currentIndex]} />
      <div className="w-full h-[100px] flex justify-center items-center">
        {images.map((image, index) => (
          <img
            key={index}
            className={"rounded-2xl w-[80px] h-[80px] cursor-pointer m-2 object-cover hover:border-4 "+(index == currentIndex && "border-amber-300 border-4" )}
            src={image}
            onClick={()=>{
                setCurrentIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  );
}
