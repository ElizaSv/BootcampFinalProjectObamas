import './NavIcons.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowRightToBracket,
  faRegistered,
  faGlobe,
  faFileUpload
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const NavIcons = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () =>  setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false)

  return (
    <div className="links">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={isHovering ? "link-icon fa-bounce" : "link-icon"} />
        </Link>
        <Link to="/map">
          <FontAwesomeIcon icon={faGlobe}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={isHovering ? "link-icon fa-bounce" : "link-icon"}/>
        </Link>
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={isHovering ? "link-icon fa-bounce" : "link-icon"}/>
        </Link>
        <Link to="/register">
          <FontAwesomeIcon icon={faRegistered}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={isHovering ? "link-icon fa-bounce" : "link-icon"}/>
        </Link>
        <Link to="/submit">
          <FontAwesomeIcon icon={faFileUpload}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={isHovering ? "link-icon fa-bounce" : "link-icon"}/>
        </Link>
      </div>
  )
}

export default NavIcons