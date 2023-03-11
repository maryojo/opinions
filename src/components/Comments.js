import React from "react";
import DateTime from "./DateTime";
import TweetMedia from "./TweetMedia";

const Comments = ({ tweets, mediaData, timeData }) => {
  // onClick={handleTweet(tweet)}
  return (
    <section className="flex flex-col gap-5 w-3/5">
      {tweets.map((tweet, index) => (
        <div className=" w-full bg-slate-200  rounded-xl p-7">
          {tweet.split("\n").map((line) => (
            <p>{line}</p>
          ))}
          <TweetMedia data={mediaData[index]} />
          <DateTime commentDateTime={timeData[index]} />
        </div>
      ))}
    </section>
  );
};

export default Comments;
