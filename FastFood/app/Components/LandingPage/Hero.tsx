"use client";
import Image from "next/image";
import Waakye from "../../Img/waakye.jpg";
import jollof from "../../Img/Jollof-Rice-With-Chicken.jpg";
import FriedRice from "../../Img/fried rice.jpg";
import Banku from "../../Img/banku.jpg";
import SpringRolls from "../../Img/spring rolls.jpg";
import fufu from "../../Img/fufu.jpg";
import spagetti from "../../Img/Stirfry-spaghetti.jpeg";
import { Carousel } from "antd";
export const Hero_Section = () => {
  const contentStyle: React.CSSProperties = {
    // height: "160px",
    height: "260px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel className="-z-50 mt-[80px]" autoplay>
        <div >
          <Image style={contentStyle} src={SpringRolls} className="w-full" alt="Spring Rolls" />
        </div>
        <div>
          <Image style={contentStyle} src={Waakye} className="w-full" alt="waakye.png" />
        </div>
        <div>
          <Image style={contentStyle} src={jollof} className="w-full" alt="Jollof.png" />
        </div>
        <div>
          <Image style={contentStyle} src={FriedRice} className="w-full" alt="Fried.png" />
        </div>
        <div>
          <Image style={contentStyle} src={spagetti} className="w-full" alt="Spagetti" />
        </div>
        <div>
          <Image style={contentStyle} src={Banku} className="w-full" alt="Banku.png" />
        </div>
        <div>
          <Image style={contentStyle} src={fufu} className="w-full" alt="Fufu" />
        </div>
      </Carousel>
    </>
  );
};

// import React from 'react';
// import { Carousel } from 'antd';

// const App: React.FC = () => (
//   <Carousel autoplay>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
// );

// export default App;
