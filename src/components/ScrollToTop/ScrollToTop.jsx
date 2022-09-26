import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import './ScrollToTop.css';
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
               <FontAwesomeIcon icon={faArrowAltCircleUp}  className="icon-position icon-style"  onClick={goToTop}/>
             
            )}{" "}
        </div>
    );
};
export default ScrollToTop;