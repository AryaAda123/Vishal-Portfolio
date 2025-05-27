import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



const Contact = () => {
  return (
    <>
    <div className="container contact">
        <h1>CONTACT ME </h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
            <a href="https://www.instagram.com" taget="_blank" className="items">
            <FaSquareInstagram className="icons" />
            </a>
            <a href="https://www.facebook.com" taget="_blank" className="items">
            <FaFacebook className="icons" />
            </a>
            <a href="https://www.linkedin.com" taget="_blank" className="items">
            <FaLinkedin className="icons" />
            </a>
            <a href="https://www.twitter.com" taget="_blank" className="items">
            <FaSquareXTwitter className="icons" />
            </a>
            <a href="https://www.github.com" taget="_blank" className="items">
            <FaGithub className="icons" />
            </a>
            <a href="mailto:vishal831865@gmail.com" taget="_blank" className="items">
            <IoMdMail className="icons" />
            </a>
        </div>
    </div>
    </>
  )
}

export default Contact