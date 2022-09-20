import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import 'react-vertical-timeline-component/style.min.css';
import '..//TimlineSection/TimelineSection.css'

const TimelineSection = (props) => {
  return (
          <VerticalTimelineElement 
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(123, 123, 123)', color: 'ghostwhite' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(123, 123, 123)' }}
            iconStyle={{ background: 'rgb(123, 123, 123)', color: '#fff' }}
          
        >   <img src={props.image} className="timeline-img" alt="history"></img>
            <h3 className="vertical-timeline-element-title">{props.year} {props.month}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.event}</h4>
            <p>{props.notes}</p>
            <button className="eventBtn" onClick={() => window.open((props.external), "_blank")}>Read more</button>

        </VerticalTimelineElement>
  )
}

export default TimelineSection