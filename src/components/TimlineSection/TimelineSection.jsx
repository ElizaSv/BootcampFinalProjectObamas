import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import 'react-vertical-timeline-component/style.min.css';
import './TimelineSection.css'

const TimelineSection = (props) => {
  return (
    <VerticalTimeline>
        <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(59, 59, 59)', color: 'ghostwhite' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(59, 59, 59)' }}
            iconStyle={{ background: 'rgb(59, 59, 59)', color: '#fff' }}
            position={{ right: '50px'}}
        >
            <h3 className="vertical-timeline-element-title">{props.year} {props.month}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.event}</h4>
            <p>{props.notes}</p>
            <button className="eventBtn" onClick={() => window.open((props.external), "_blank")}>Read more</button>

        </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default TimelineSection