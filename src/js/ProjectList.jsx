import React from 'react';
import '../css/projectlist.css'

function Projectlist (props) {
  return (
    <div className="projectlist">
      {props.map((photo, key) => (
        <div className="portfolio-item" key={key}>
        <img src={photo}/>
        </div>
        ))}
    </div>
  );
};

export default Projectlist;

