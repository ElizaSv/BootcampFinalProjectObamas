import React from 'react'
import "./frontPage.css";
import TimelineSection from '../TimelineSection';
import TopSection from '../TopSection';
import eventData from "../../data.js"


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

