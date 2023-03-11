import React, {useState} from 'react'
import { FcSearch } from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
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
  )
}

export default Search