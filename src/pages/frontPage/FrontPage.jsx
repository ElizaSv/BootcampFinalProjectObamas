import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'
import "./frontPage.css";
import likes from '../../likes.json'
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import TopSection from "../../components/TopSection/TopSection";
import { Context } from "../../Context";
import NavIcons from "../../components/NavIcons/NavIcons";
import ReactPaginate from "react-paginate";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.jsx'

const FrontPage = () => {
  const {user} = useContext(Context);

// --- GETTING TIMELINE DATA FROM DATABASE ---//
  const [timelineEvents, setTimelineEvents] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/events').then(result => setTimelineEvents(result.data
    .sort((a, b) => b.year - a.year)
    ))  
  }, []);
  // --- SETTING UP PAGINATION INFO --- //
  const [pageNumber, setPageNumber] = useState(0);
  const eventsPerPage = 6;
  const displayedEventCount = pageNumber * eventsPerPage
  const displayEvents = timelineEvents
      .map((elem, index) => {
        return (
          <TimelineSection key={index}{...elem}
          />
        )})
      .slice(displayedEventCount, displayedEventCount + eventsPerPage)

  const pageCount = Math.ceil(timelineEvents.length / eventsPerPage)
  const changePage = ({selected}) => {
        setPageNumber(selected)
        }     
  return (
      <div className="parallax">
        <NavIcons />
        <TopSection />
        <VerticalTimeline>
            {displayEvents}
        </VerticalTimeline>
        <ScrollToTop />
        <ReactPaginate 
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-btn"}
            previousLinkClassName={"previous-btn"}
            nextLinkClassName={"next-btn"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"active-page"}
        />
      </div>
  );
};
export default FrontPage
