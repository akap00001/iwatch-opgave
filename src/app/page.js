"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Heading from "@/app/components/Heading";
import Dot from "@/app/components/Dot";
import Thumbnail from "@/app/components/Thumbnail";

export default function Home() {
  const [isActiveImg, setActiveImg] = useState("/navy.png");

  return (
    <div className="container">
      <Header />
      <main>
        <section className="left">
          <Heading />

          <button>Buy Now</button>

          <div className="page-indicator">
            <p>← 1 →</p>
          </div>
        </section>

        <section className="right">
          <figure>
            <Image src={isActiveImg} alt="Iwatch ur" width={450} height={450} />
          </figure>

          <div>
            <Thumbnail imgsrc="/navy.png" color="#40435499" setActiveImg={setActiveImg} />
            <Thumbnail imgsrc="/mint.png" color="#58D7C499" setActiveImg={setActiveImg} />
            <Thumbnail imgsrc="/ocean.png" color="#D0DFE599" setActiveImg={setActiveImg} />
          </div>
        </section>

        <div className="dots">
          <Dot color="#404354" />
          <Dot color="#58D7C4" />
          <Dot color="#D0DFE5" />
        </div>
      </main>
    </div>
  );
}
