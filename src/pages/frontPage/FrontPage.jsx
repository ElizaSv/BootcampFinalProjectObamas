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

const FrontPage = () => {
  let {user} = useContext(Context);
  let likeAggragation = likes.reduce((obj,i)=>{
    if(!(i.postId in obj)){
      obj[i.postId]={
        likes:0,
        dislikes:0,
        youLiked:0,
        youDisliked:0
      }
    }
    if(i.mark){
      obj[i.postId].likes++
      if(user && i.personId===user._id){
        obj[i.postId].youLiked++;
      }
    }else{
      obj[i.postId].dislikes++;
      if (user && i.personId === user._id) {
        obj[i.postId].youDisliked++;
      }
    }
    return obj
  },{})

// --- GETTING TIMELINE DATA FROM DATABASE ---//
const [timelineEvents, setTimelineEvents] = useState([])
useEffect(() => {
  axios.get('http://localhost:8000/events').then(result => setTimelineEvents(result.data
  .sort((a, b) => b.year - a.year)
  .map((event, index) => ({ ...event, ...(likeAggragation[index]||{likes:0,dislikes:0}) }))
  ))  
}, [timelineEvents.length]);

// --- SETTING UP PAGINATION INFO --- //
const [pageNumber, setPageNumber] = useState(0);
const eventsPerPage = 6;
const displayedEventCount = pageNumber * eventsPerPage
const displayEvents = timelineEvents.slice(displayedEventCount, displayedEventCount + eventsPerPage)
.map((event, index) => {
    return (
      <TimelineSection
        key={index}
        {...event}
      />
    ); })
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
export default FrontPage;
