import logo from './logo.svg';
import React, { useState } from 'react';
import TourTable from './components/tourtable.jsx';
import DiscoTable from './components/discotable.jsx';
import BandImage from './components/bandimage.jsx';
import './App.css';


require("es6-promise").polyfill();
require("isomorphic-fetch");

const discoBaseURL = "https://cb361.herokuapp.com/fetch/"
const artistBaseURL = "https://rest.bandsintown.com/artists/"

function App() {
  const [tourdata, setTourData] = useState({});
  const [discodata, setDiscoData] = useState({});
  const [artistdata, setArtistData] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    var inputVal = document.getElementById("searchInput").value;

    // fetch artist data
    await fetch(artistBaseURL+inputVal+'/?app_id='+process.env.REACT_APP_BANDSINTOWNID)
    .then(res => res.json())
    .then((result) => {setArtistData(result)})
    .catch((error) => {
      console.log(error)
    });

    //fetch event data
    await fetch('/bandtracker/MOCK_DATA.json')
      .then(res => res.json())
      .then((result) => {setTourData(result)})
      .catch((error) => {
        console.log(error)
      });

    //fetch discography data - service provided by project team member
    await fetch(discoBaseURL+inputVal)
      .then(res => res.json())
      .then((result) => {setDiscoData(result)})
      .catch((error) => {
        console.log(error)
      });
  };

  //const {band_name, img_src, stops} = tourdata

  return (
    <React.Fragment>
      <nav className="navbar bg-dark navbar-nav">
          <img src={logo} width="50" height="50" className="navbar-brand" alt="" />
          <h2 className="title-text navbar-brand">Bandtracker</h2>
          <form className="form-inline">
            <div className="input-group nav-item">
              <button className="btn btn-outline-secondary nav-item" type="button" onClick={handleClick}>Submit</button>
              <input id="searchInput" type="text" className="form-control" placeholder="Search for a band..."></input>
            </div>
          </form>
      </nav>

      <BandImage img_src = {artistdata.thumb_url} band_name = {artistdata.name}/>

      <div className="container">
        <div className="row">
            <TourTable tourdata = {tourdata} />
            <DiscoTable discodata = {discodata} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;