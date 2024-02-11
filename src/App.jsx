import React from 'react';
import './App.css'

function Portfolio (props) {
  return (
    <div className="portfolio">
      {props.projects.map((photo, key) => (
        <div className="portfolio-item" key={key}>
        <img src={photo.img}/>
        </div>
        ))}
    </div>
  );
};

export default Portfolio;

