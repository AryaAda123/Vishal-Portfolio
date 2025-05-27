import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="container nav_bar center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items warning">Vishal Patel</div>
        <div classname="right nav_items">
        <a className="nav_items" href="#home">Home</a>
        <a className="nav_items" href="#education">Education</a>
  <a className="nav_items" href="#experience">Experience</a>
  <a className="nav_items" href="#skills">Skills</a>
  <a className="nav_items" href="#projects">Projects</a>
  <a className="nav_items" href="#contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
