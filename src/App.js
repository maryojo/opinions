import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import SearchResult from './pages/searchresult';

  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search/:searchTerm' element={<SearchResult/>} />
    </Routes>
    </Router>
);
}
  
export default App;