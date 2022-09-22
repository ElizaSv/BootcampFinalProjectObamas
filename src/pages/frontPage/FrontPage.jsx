import React, { useContext } from "react";
import "./frontPage.css";
<<<<<<< HEAD
import eventData from "../../data.js";
import likes from '../../likes.json'
import TimelineSection from "../../components/TimlineSection/TimelineSection";
import TopSection from "../../components/TopSection/TopSection";
import { Context } from "../../Context";

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
=======
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
>>>>>>> e3d083b9ed24890a2587ad30a2cf093f3c98813a

  const sortedTimeline = eventData
    .sort((a, b) => b.year - a.year)
    .map((i, index) => ({ ...i, ...(likeAggragation[index]||{likes:0,dislikes:0}) })); //This should later go in useState()

  return (
    <>
      <TopSection />
      {sortedTimeline.map((elem,index) => {
        return (
          <TimelineSection
          key={index}
            {...elem}
          />
        );
      })}
    </>
  );
};

export default FrontPage;
