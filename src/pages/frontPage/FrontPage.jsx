import React from 'react'
import "./frontPage.css";
import eventData from "../../data.js"
import TimelineSection from '../../components/TimlineSection/TimelineSection';
import TopSection from '../../components/TopSection/TopSection';


const FrontPage = () => {
    const sortedTimeline = eventData.sort((a, b) => b.year - a.year) //This should later go in useState()
    const timelineElement = sortedTimeline.map(elem => { 
      return <TimelineSection 
          year = {elem.year}
          month = {elem.month}
          event = {elem.event}
          notes = {elem.notes}
          external = {elem.external}
      />
    })
    return (
      <>
        <TopSection />
        <>{timelineElement}</>
  
      </>
    );
}

export default FrontPage

