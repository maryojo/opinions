import React from 'react'

const TweetMedia = (data) => {
  console.log(data?.[0]);
  if (data === undefined){
    return "";
  }


  //add while loading image
  let mediaInfo = {};

  // Object.entries(data).map( ([key, media]) => {
  //     if(media !== undefined){
  //     mediaInfo = media[0];
  //     }
  // });


  // if (mediaInfo?.type === "photo"){
    return (
      <div className='w-100 bg-cover'>
        <img src={data[0]} className="h-3/4"/>
      </div>
    )
  // } 

  //change this to correct logic
  // if(data === "video"){
  //   return (
  //     <div>
  //       <video></video>
  //     </div>
  //   )
  // }
}

export default TweetMedia