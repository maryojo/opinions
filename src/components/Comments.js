import React from 'react'

const Comments = ({tweets}) => {
  // onClick={handleTweet(tweet)}
  return (
       <section className="flex flex-col gap-5">
              {tweets.map((tweet) => (
                <div className=" w-10/12 md:w-5/12 bg-slate-200  rounded-xl p-7" >
                  {tweet.split("\n").map((line) => (
                    <p>{line}</p>
                  ))}
                </div>
              ))}
            </section>
  )
}

export default Comments