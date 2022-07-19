import { BrowserRouter as Router, Route, Routes,useLocation,withRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import Search from "./components/Search/Search";
import Sliders from './components/Sliders/Sliders'

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element = {<Home/>}/>
            <Route path="/movie/:imdbID" element = {<MovieDetail/>}/>
            <Route path="/pagenotfound" element = {<PageNotFound/>}/>
            <Route path="/search" element = {<Search/>}/>
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
