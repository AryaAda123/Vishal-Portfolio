import React, { useEffect, useRef } from "react";
import Pdf from "../pdf/vishal-resume.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";

const Home = () => {
 const typedRef = useRef(null);

 useEffect(() => {
 const optinos = {
strings: [
 "Welcome to my profile",
 "My Name is Vishal Patel",
"I'm Full Stack Developer",
 ],
typeSpeed: 50,
 backSpeed: 50,
 loop: true,
 showCursor: false, // 👈 Cursor removed
 };

 const typed = new Typed(typedRef.current, optinos);

 return () => {
 typed.destroy();
 };
 }, []);

 return (
 <>
 <div className="container home">
 <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
 <h1 ref={typedRef}></h1>

 <a
  href={Pdf}
  download="vishal-resume.pdf"
  className="btn btn-outline-warning my-3"
>
  Download Resume
</a>
 </div>

<div className="right">
 <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
 <img src={`/assets/${hero.imgSrc}`} alt="hero" />
  </div>
</div>
 </div>
</>
 );
};

export default Home;
