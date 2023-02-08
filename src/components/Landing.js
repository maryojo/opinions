import React, { useState, useEffect } from "react";
import People from "../images/people.png";
import PeopleSm from "../images/people_sm.png"
import logo from "../images/logo.png";
import axios from "axios";
import { FcSearch } from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyBadge from "./MyBadge";


const Landing = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState('');

  console.log(searchInput)

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
     return navigate(`/search/${searchInput}`);
    }
  }

  return (
    <div className="h-screen w-screen relative pt-5 sm:pt-10 p-3 sm:p-10 md:p-14 pb-0">
      <div className="flex justify-between items-center">
        <img src={logo} alt="" className="w-[2.7rem] sm:w-[3.5rem] md:w-[4.2rem]" />
        <div className="flex gap-3">
          <svg
           
            className="h-5 w-5 md:w-[30px] md:h-[30px]"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 20H17.5C18.1904 20 18.75 20.5596 18.75 21.25C18.75 21.891 18.2675 22.4194 17.6458 22.4916L17.5 22.5H12.5C11.8096 22.5 11.25 21.9404 11.25 21.25C11.25 20.609 11.7326 20.0806 12.3542 20.0084L12.5 20H17.5H12.5ZM10 13.75H20C20.6904 13.75 21.25 14.3096 21.25 15C21.25 15.641 20.7675 16.1694 20.1458 16.2416L20 16.25H10C9.30965 16.25 8.75 15.6904 8.75 15C8.75 14.359 9.23255 13.8306 9.85423 13.7584L10 13.75H20H10ZM6.25 7.5H23.75C24.4404 7.5 25 8.05965 25 8.75C25 9.39105 24.5175 9.91939 23.8958 9.99159L23.75 10H6.25C5.55965 10 5 9.44035 5 8.75C5 8.10895 5.48255 7.58061 6.10422 7.50841L6.25 7.5H23.75H6.25Z"
              fill="#212121"
            />
          </svg>
          <svg
            className="h-5 w-5 md:w-[30px] md:h-[30px]"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0159 2.8125C15.9333 2.82308 16.8471 2.92908 17.7427 3.1288C18.1336 3.21599 18.426 3.54189 18.4704 3.93995L18.6831 5.84851C18.7794 6.72483 19.5194 7.38855 20.4014 7.38947C20.6385 7.38985 20.873 7.34047 21.0921 7.24354L22.8429 6.47445C23.207 6.31449 23.6325 6.4017 23.9042 6.69203C25.1695 8.0433 26.1117 9.66394 26.6602 11.432C26.7785 11.8132 26.6424 12.2275 26.321 12.4644L24.7692 13.6082C24.3265 13.9335 24.0651 14.45 24.0651 14.9994C24.0651 15.5486 24.3265 16.0651 24.7701 16.3911L26.3234 17.5354C26.6448 17.7721 26.781 18.1865 26.6628 18.5679C26.1145 20.3356 25.1728 21.9561 23.9083 23.3076C23.6366 23.5979 23.2116 23.6854 22.8475 23.5258L21.0895 22.7556C20.5866 22.5355 20.009 22.5678 19.5338 22.8425C19.0585 23.1171 18.7423 23.6015 18.6818 24.1471L18.4705 26.0555C18.4269 26.449 18.1407 26.7728 17.7556 26.8644C15.9451 27.2951 14.0588 27.2951 12.2482 26.8644C11.863 26.7728 11.5769 26.449 11.5333 26.0555L11.3223 24.15C11.2603 23.6054 10.9435 23.1225 10.4686 22.8487C9.99375 22.575 9.41711 22.5429 8.91586 22.7617L7.15758 23.532C6.79339 23.6916 6.36815 23.6041 6.09659 23.3136C4.83139 21.9606 3.8896 20.3381 3.34211 18.5685C3.22419 18.1874 3.36044 17.7732 3.68166 17.5366L5.23584 16.3916C5.67851 16.0664 5.93995 15.5499 5.93995 15.0006C5.93995 14.4513 5.67851 13.9347 5.23525 13.6091L3.68206 12.4661C3.36035 12.2293 3.22398 11.8147 3.34233 11.4332C3.89076 9.66519 4.83304 8.04455 6.09826 6.69327C6.3701 6.40295 6.79554 6.31574 7.15966 6.4757L8.91014 7.24465C9.41381 7.4657 9.99286 7.43231 10.4703 7.15336C10.9457 6.87761 11.2622 6.39278 11.3233 5.84705L11.5359 3.93995C11.5803 3.54169 11.8729 3.21567 12.2641 3.12867C13.1608 2.92927 14.0755 2.82331 15.0159 2.8125ZM15.0002 11.2499C12.9291 11.2499 11.2502 12.9289 11.2502 15C11.2502 17.071 12.9291 18.75 15.0002 18.75C17.0712 18.75 18.7502 17.071 18.7502 15C18.7502 12.9289 17.0712 11.2499 15.0002 11.2499Z"
              fill="#212121"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-7 mt-10">
        <div className="flex flex-col gap-10 justify-center">
          <div className="flex gap-2  relative">
            <input
              type="text"
              className="rounded-full px-3 py-2 sm:px-5 sm:py-3 bg-gray-200 w-full "
              placeholder="Search"
              onInput={handleChange}
              value={searchInput}
              onKeyDown={handleKeyDown}
            />
            <Link to={`/search/${searchInput}`}>
              <FcSearch className="absolute right-5 z-10 cursor-pointer top-[25%] w-4 h-4 sm:w-6 sm:h-6"/>
            </Link>
          </div>

          <div>
            <p className="text-lg sm:text-xl font-medium text-center">
              Get insight about your service performance
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-center">
        <img src={People} alt="" className="hidden sm:block w-10/12 md:w-8/12 lg:w-6/12" />
        <img src={PeopleSm} alt="" className="block sm:hidden w-8/12 " />
      </div>
      {/* <MyBadge/> */}
    </div>
  );
};

export default Landing;
