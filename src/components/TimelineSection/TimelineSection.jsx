import { useContext } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineSection.css";
import { Context } from "../../Context";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TimelineSection = (props) => {
  let {user} = useContext(Context)

  function likeHandler(){
    //makerequest find your like and change it to positive or add it if none
  }
  function dislikeHandler(){
  }
  return (
      <VerticalTimelineElement className="vertical-timeline-element--work">
        <img src={props.image} className="timeline-img" alt="history"></img>
        <h3 className="vertical-timeline-element-title">{props.year} {props.month}</h3>
        <h4 className="vertical-timeline-element-subtitle">{props.event}</h4>
        <p>{props.notes}</p>
        <button className="event-btn" onClick={() => window.open(props.more, "_blank")}>Read more</button>
        
        {user && (
          <>
            <button className="like-btn" disabled={props.youLiked} style={{ background: props.youLiked ? "blue" : "white" }}>Like {props.likes>0? props.likes : null }</button>
            <button className="like-btn" disabled={props.youDisliked } style={{ background: props.youDisliked ? "red" : "white" }}>Dislike {props.dislikes>0? props.dislikes : null}</button>
          </>
        )}
      </VerticalTimelineElement>
  );
};


export default TimelineSection;
