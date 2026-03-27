"use client";
import Image from "next/image";
import { useState } from "react";

const Thumbnail = ({ imgsrc, color, setActiveImg }) => {
  return (
    <figure onClick={() => setActiveImg(imgsrc)} className="thumbnail" style={{ backgroundColor: color }}>
      <Image src={imgsrc} alt="" width="90" height="90" />
    </figure>
  );
};

export default Thumbnail;

// setActiveImg(!isActiveImg)}
