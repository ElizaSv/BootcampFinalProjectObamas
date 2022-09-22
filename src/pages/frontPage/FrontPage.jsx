import React, { useContext } from "react";
import "./frontPage.css";
import eventData from "../../data.js";
import likes from '../../likes.json'
import TimelineSection from "../../components/TimlineSection/TimelineSection";
import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
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

  const sortedTimeline = eventData
    .sort((a, b) => b.year - a.year)
    .map((i, index) => ({ ...i, ...(likeAggragation[index]||{likes:0,dislikes:0}) })); //This should later go in useState()

  return (
    <> 
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
