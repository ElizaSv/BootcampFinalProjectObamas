import { useContext } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
<<<<<<< HEAD
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineSection.css";
import { Context } from "../../Context";
=======
import 'react-vertical-timeline-component/style.min.css';
import '..//TimlineSection/TimelineSection.css'
>>>>>>> e3d083b9ed24890a2587ad30a2cf093f3c98813a

const TimelineSection = (props) => {
  let {user} = useContext(Context)

  function likeHandler(){
    //makerequest find your like and change it to positive or add it if none
  }
  function dislikeHandler(){

  }

  return (
<<<<<<< HEAD
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(59, 59, 59)", color: "ghostwhite" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(59, 59, 59)" }}
        iconStyle={{ background: "rgb(59, 59, 59)", color: "#fff" }}
        // position={{ right: "50px" }}
      >
        <h3 className="vertical-timeline-element-title">
          {props.year} {props.month}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">{props.event}</h4>
        <p>{props.notes}</p>
        <button
          className="eventBtn"
          onClick={() => window.open(props.external, "_blank")}
        >
          Read more
        </button>
        {user && (
          <>
            <button style={{ background: props.youLiked ? "blue" : "white" }}>
              like {props.likes}
            </button>
            <button style={{ background: props.youDisliked ? "red" : "white" }}>
              dislike {props.dislikes}
            </button>
          </>
        )}
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
=======
        <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(123, 123, 123)', color: 'ghostwhite' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(123, 123, 123)' }}
            iconStyle={{ background: 'rgb(123, 123, 123)', color: '#fff' }}
          
        >   <img src={props.image} className="timeline-img" alt="history"></img>
            <h3 className="vertical-timeline-element-title">{props.year} {props.month}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.event}</h4>
            <p>{props.notes}</p>
        </VerticalTimelineElement>
  )
}
>>>>>>> e3d083b9ed24890a2587ad30a2cf093f3c98813a

export default TimelineSection;
