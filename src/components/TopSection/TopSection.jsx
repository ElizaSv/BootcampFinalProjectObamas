import "./TopSection.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowRightToBracket,
  faRegistered,
  faGlobe,
  faFileUpload
} from "@fortawesome/free-solid-svg-icons";

const TopSection = () => {
  return (
    <div className="topSection">
      <h1 className="title">The magical life of Barack and Michelle Obama</h1>
      <h4 className="titleInfo">
        One of the most powerful couples in the history. Go trough their
        separate and common journeys... Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Modi, harum.
      </h4>
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
    </div>
  );
};

export default TopSection;
