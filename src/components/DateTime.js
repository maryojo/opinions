import React from 'react'

const DateTime = (commentDateTime) => {
 let dateTime = commentDateTime.commentDateTime;
  dateTime = new Date(dateTime);
  const currentDate = new Date().toDateString();

  const commentDate = dateTime.toDateString();
  const commentTime = dateTime.toLocaleTimeString();

  if(currentDate === commentDate){
    commentDate = "Today";
  }
  return (
    <div className='flex justify-between'>
      <p>{commentDate}</p>
      <p>{commentTime}</p>
    </div>
  )
}

export default DateTime