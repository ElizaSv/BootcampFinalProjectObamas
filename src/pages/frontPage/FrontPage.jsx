import React, { useContext, useState, useEffect } from "react";
import "./frontPage.css";
import likes from '../../likes.json'
import TimelineSection from "../../components/TimelineSection/TimelineSection";
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import TopSection from "../../components/TopSection/TopSection";
import { Context } from "../../Context";
import axios from 'axios'
import NavIcons from "../../components/NavIcons/NavIcons";

const FrontPage = () => {
  let {user} = useContext(Context);
  console.log(user)
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
      if(i.personId===user._id){
        obj[i.postId].youLiked++;
      }
    }else{
      obj[i.postId].dislikes++;
      if (i.personId === user._id) {
        obj[i.postId].youDisliked++;
      }
    }
    return obj
  },{})
  console.log(likeAggragation)

// --- GETTING TIMELINE DATA FROM DATABASE ---//
  const [timelineEvents, setTimelineEvents] = useState([])

  useEffect(() => {
  axios.get('http://localhost:8000/events').then(result => setTimelineEvents(result.data))  
  }, [])

  const sortedTimeline = timelineEvents
    .sort((a, b) => b.year - a.year)
    .map((i, index) => ({ ...i, ...(likeAggragation[index]||{likes:0,dislikes:0}) })); //This should later go in useState()

  return (
    <> 
    <NavIcons />
    <TopSection />
    <VerticalTimeline>
      {sortedTimeline.map((elem,index) => {
        return (
          <TimelineSection
          key={index}
            {...elem}
          />
        );
      })}
    </VerticalTimeline>
    </>
  );
};

export default FrontPage;
