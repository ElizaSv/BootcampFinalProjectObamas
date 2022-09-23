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

const NavIcons = () => {
  return (
    <div className="links">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} className="link-icon" />
        </Link>
        <Link to="/map">
          <FontAwesomeIcon icon={faGlobe}  className="link-icon"/>
        </Link>
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket}  className="link-icon"/>
        </Link>
        <Link to="/register">
          <FontAwesomeIcon icon={faRegistered}  className="link-icon"/>
        </Link>
        <Link to="/submit">
          <FontAwesomeIcon icon={faFileUpload}  className="link-icon"/>
        </Link>
      </div>
  )
}

export default NavIcons