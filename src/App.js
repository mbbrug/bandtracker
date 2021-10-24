//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import TourTable from './components/tourtable.jsx';
import DiscoTable from './components/discotable.jsx';
import BandImage from './components/bandimage.jsx';
import './App.css';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [tourdata, setTourData] = useState([]);
  const [discodata, setDiscoData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    fetch('./MOCK_DATA.json')
      .then(res => res.json())
      .then((result) => {setTourData(result)})
      .catch((error) => {
        console.log(error)
      });

      fetch('./MOCK_DISCO.json')
      .then(res => res.json())
      .then((result) => {setDiscoData(result)})
      .catch((error) => {
        console.log(error)
      });
  };

  const {band_name, img_src, stops} = tourdata

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col p-3">
            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary" type="button" 
              id="button-addon1" onClick={handleClick}>Submit</button>
              <input type="text" class="form-control" placeholder="Search for a band..."></input>
            </div>
          </div>
        </div>
      </div>

      <BandImage img_src = {img_src} band_name = {band_name}/>

      <div className="container">
        <div className="row">
          <div className="col p-3">
            <TourTable tourdata = {tourdata} />
          </div>
          <div className="col p-3">
            <DiscoTable discodata = {discodata} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
