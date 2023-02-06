import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import axios from "../apis/twitter";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Comments from "../components/Comments";
import Sidebar from "../components/Sidebar";
import DataAnalysis from "../components/DataAnalysis";

// import { getSentimentScore } from '../model/sentimentAnalysis'

const SearchResult = () => {
  const { searchTerm } = useParams();
  let tweetArr = [];

  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "https://twitter135.p.rapidapi.com/Search/",
    requestConfig: {
      params: {
        q: searchTerm,
        count: "20",
      },
    },
  });

  console.log(data);
  console.log(loading);
  console.log(error);

  // const convertToSentence = (text) =>{
  //   text.split('\n').map((line) =>(
  //     return <p>{line}</p>
  //   ))
  // }

  if (loading) return <div className="h-screen flex flex-col gap-3 justify-center items-center"><Loader/><p className="text-center">Please wait while we listen to conversations...</p></div>;

  if (error) return <div className="h-screen flex flex-col justify-center items-center"><Error message={error}/></div>;

  if (data) {
    Object.entries(data?.globalObjects?.tweets).map(([key, value]) => {
      tweetArr.push(value?.full_text);
    });
  }

  console.log(tweetArr);

  // const handleTweet = (tweet) =>{
  //   // console.log(getSentimentScore(tweet));
  // }


  return (
    <div className="p-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div>
              Settings
            </div>
            <div>
              <div className="flex gap-2">
              <p>Language</p>
              <dropdown>
                <select>English</select>
              </dropdown>
              </div>
              <div className="flex gap-2">
              <p>Language</p>
              <dropdown>
                <select>English</select>
              </dropdown>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-5">
            Search results for {searchTerm}
          </div>
          
          <div className="flex flex-col ">
           <Sidebar />
           <Comments tweets={tweetArr}/>
           <DataAnalysis />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchResult;
