import React from 'react'

const TweetMedia = (data) => {
  if (data === undefined){
    return "";
  }
  //add while loading image
  let mediaInfo = {};

  Object.entries(data).map( ([key, media]) => {
      if(media !== undefined){
      mediaInfo = media[0];
      }
  });
  



  if (mediaInfo?.type === "photo"){
    return (
      <div>
        <img src={mediaInfo?.media_url}/>
      </div>
    )
  } 

  //change this to correct logic
  if(data === "video"){
    return (
      <div>
        <video></video>
      </div>
    )
  }
}

export default TweetMedia