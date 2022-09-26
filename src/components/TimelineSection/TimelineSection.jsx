import React, { useContext, useState, useEffect, useMemo } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineSection.css";
import { Context } from "../../Context";
import likes from '../../likes.json'
import axios from 'axios'


const TimelineSection = (props) => {
  const {user} = useContext(Context);
  const [likeState, setLikeState]=useState(likes)
  const [timelineEvents, setTimelineEvents] = useState([])
  const likeAggragation = useMemo(() => likeState.reduce((obj, i) => {
      if (!(i.postId in obj)) {
        obj[i.postId] = {
          likes: 0,
          dislikes: 0,
          youLiked: 0,
          youDisliked: 0,
        };
      }
      if (i.mark) {
        obj[i.postId].likes++;
        if (user && i.personId === user._id) {
          obj[i.postId].youLiked++;
        }
      } else {
        obj[i.postId].dislikes++;
        if (user && i.personId === user._id) {
          obj[i.postId].youDisliked++;
        }
      }
      return obj;
    }, {}),
    [likeState]
  );

// --- GETTING TIMELINE DATA FROM DATABASE ---//
useEffect(() => {
  axios.get('http://localhost:8000/events')
    .then(result => setTimelineEvents(result.data.sort((a, b) => b.year - a.year)))  
}, [])

const handleLike = (postId, value) => {
  let index = likeState.findIndex(like=>like.postId === postId)
  if(index >= 0){
    likeState[index].mark = value
  } else{
    likeState.push({personId:user._id,postId:postId, mark:value})
  }
  setLikeState([...likeState])
}

  const likeHandler = () => props.handleLike(true) //makerequest find your like and change it to positive or add it if none
  const dislikeHandler = () => props.handleLike(false)

  return (
    <>
      {timelineEvents
            .map((i, index) => ({ ...i, ...(likeAggragation[index]||{likes:0,dislikes:0}) }))
            .map((elem, index) => {
                return (
                  <VerticalTimelineElement  handleLike={(value)=>handleLike(index,value)} key={index} {...elem} className="vertical-timeline-element--work">
                    <img src={elem.image} className="timeline-img" alt="history"></img>
                    <h3 className="vertical-timeline-element-title">{elem.year} {elem.month}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{elem.event}</h4>
                    <p>{elem.notes}</p>
                    <button className="event-btn" onClick={() => window.open(elem.more, "_blank")}>Read more</button>
                    {user && (
                    <>
                      <button
                          className="like-btn"
                          onClick={likeHandler}
                          disabled={props.youLiked}
                          style={{ background: props.youLiked ? "#c2a8a8" : "white" }}
                        > Like {props.likes > 0 ? props.likes : null}</button>
                      <button
                          className="like-btn"
                          onClick={dislikeHandler}
                          disabled={props.youDisliked}
                          style={{ background: props.youDisliked ? "#c5a892" : "white" }}
                        > Dislike {props.dislikes > 0 ? props.dislikes : null}</button>
                      </>
                    )}
                  </VerticalTimelineElement>
                );
            })
          }
    </>
    );
};

export default TimelineSection;
