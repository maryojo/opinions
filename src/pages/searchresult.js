import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import axios from "../apis/twitter";
import Logo from "../components/Logo";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Comments from "../components/Comments";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
// import DataAnalysis from "../components/DataAnalysis";
// import { textAnalysis, keyPhraseExtraction } from "../components/SentimentAnalysis";

// import { getSentimentScore } from '../model/sentimentAnalysis'

const SearchResult = () => {
  const { searchTerm } = useParams();
  let tweetArr = [];

  let tweetData = {};
  let tweetError = "";
  let tweetLoading = false;

  const mediaDataArr = [];
  const dateTimeDataArr = [];
  const [queryLanguage, setQueryLanguage] = useState(null);
  const [queryType, setQueryType] = useState(null);


  console.log("lang", queryLanguage);

  
  const handleQueryParameters = (selectedLang, selectedType) => {
    setQueryLanguage(selectedLang);
    setQueryType(selectedType);

    let searchItem = "";
    
    if (queryLanguage !== null){
        searchItem = `${searchTerm} lang:${queryLanguage.value}`;
    }

    GetTweetData(searchItem);
  };


  //stored data in localstorage for development

  if (localStorage.getItem("tweetArr")) {
    [tweetData, tweetError, tweetLoading] = JSON.parse(
      localStorage.getItem("tweetArr")
    );
  } else {
    GetTweetData(searchTerm);
  }

  function GetTweetData(term) {
    [tweetData, tweetError, tweetLoading] = useAxios({
      axiosInstance: axios,
      method: "GET",
      url: "https://twitter135.p.rapidapi.com/Search/",
      requestConfig: {
        params: {
          q: term,
          count: "20",
        },
      },
    });
  }

  //equate data to tweetInfo saved

  let data = tweetData;
  let error = tweetError;
  let loading = tweetLoading;

  console.log(data);
  console.log(error);
  console.log(loading);

  // const convertToSentence = (text) =>{
  //   text.split('\n').map((line) =>(
  //     return <p>{line}</p>
  //   ))
  // }

  if (loading)
    return (
      <div className="h-screen flex flex-col gap-3 justify-center items-center">
        <Loader />
        <p className="text-center">
          Please wait while we listen to conversations...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <Error message={error} />
      </div>
    );

  if (data) {
    Object.entries(data?.globalObjects?.tweets).map(([key, value]) => {
      tweetArr.push(value?.full_text);
      mediaDataArr.push(value?.entities?.media);
      dateTimeDataArr.push(value?.created_at);
    });
  }
  // console.log(mediaDataArr);

  console.log(tweetArr);

  localStorage.setItem("tweetArr", JSON.stringify([data, error, loading]));

  const documents = [
    "I did not like the restaurant. The food was too spicy.",
    "The restaurant was decorated beautifully. The atmosphere was unlike any other restaurant I've been to.",
    "The food was yummy.",
  ];

  // textAnalysis(documents);
  // keyPhraseExtraction(documents);

  return (
    <div className="p-16">
      <div className="flex justify-between">
        <div>
          <div className="flex flex-col md:flex-row justify-between mb-16 ">
            <div className="flex gap-5">
              <Logo />
              <div className="font-bold text-2xl mb-5">
                {`Search results for "${searchTerm}"`}
              </div>
            </div>

            <Search />
          </div>

          <div className="flex flex-col md:flex-row gap-10 w-full">
            <Sidebar onQueryParameters={handleQueryParameters} />
            <Comments
              tweets={tweetArr}
              mediaData={mediaDataArr}
              timeData={dateTimeDataArr}
            />
            {/* <DataAnalysis /> */}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchResult;
