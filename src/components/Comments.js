import React from "react";
import DateTime from "./DateTime";
import TweetMedia from "./TweetMedia";

const Comments = ({ tweets, mediaData, timeData }) => {
  // onClick={handleTweet(tweet)}
  return (
    <section className="flex flex-col gap-5 w-full md:w-3/5">
      <div className="text-lg text-slate-700 font-semibold">
            Comments
          </div>
      {tweets.map((tweet, index) => (
        <div className=" w-full bg-slate-200  rounded-xl p-7">
          {tweet.split("\n").map((line) => (
            <p>{line}</p>
          ))}
          <div className='w-100 bg-cover flex justify-center my-5'>
            <img src={mediaData[index]} className="max-w-md"/>
          </div>
          {/* <TweetMedia data={mediaData[index]} /> */}
          {/* <DateTime commentDateTime={timeData[index]} /> */}
        </div>
      ))}
    </section>
  );
};

export default Comments;
