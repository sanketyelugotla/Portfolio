import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SectionWrapper } from "../hoc";

function Social() {
    return (
        <div className="w-full flex flex-col items-center justify-center -mt-10">
            <h1 className="text-white text-[40px] font-bold mb-2 font-Volkhov">FIND <span className="text-purple-500">Me</span> ON</h1>
            <p className="text-secondary mb-4 font-Montserrat">
                Feel free to <span className="text-purple-500">connect</span> with me
            </p>
            <div className="flex gap-6">
                <a
                    href="https://github.com/sanketyelugotla"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-3xl hover:text-purple-500 transition"
                >
                    <AiFillGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/sanketyelugotla/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-3xl hover:text-purple-500 transition"
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://www.instagram.com/_only__sanket_/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-3xl hover:text-purple-500 transition"
                >
                    <AiFillInstagram />
                </a>
                <a
                    href="https://wa.me/+919550572255"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-3xl hover:text-purple-500 transition"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="tel:+919550572255"
                    className="text-white text-3xl hover:text-purple-500 transition"
                >
                    <FaPhoneAlt />
                </a>
            </div>
        </div>
    )
}

export default SectionWrapper(Social, "");