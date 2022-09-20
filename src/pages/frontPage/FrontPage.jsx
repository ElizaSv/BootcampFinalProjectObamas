import React from 'react'
import "./frontPage.css";
import eventData from "../../data.js"
import TimelineSection from '../../components/TimlineSection/TimelineSection';
import TopSection from '../../components/TopSection/TopSection';
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import 'react-vertical-timeline-component/style.min.css';

const FrontPage = () => {
    const sortedTimeline = eventData.sort((a, b) => b.year - a.year) //This should later go in useState()
    const timelineElement = sortedTimeline.map(elem => { 
      return <TimelineSection 
          year = {elem.year}
          month = {elem.month}
          event = {elem.event}
          notes = {elem.notes}
          external = {elem.external}
          image = {elem.image}
      />
    })
    return (
      <>
        <TopSection />
        <>
          <VerticalTimeline>
            {timelineElement}
          </VerticalTimeline>
        </>
  
      </>
    );
}

export default FrontPage

