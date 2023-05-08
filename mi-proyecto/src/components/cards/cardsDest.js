import React from "react";
import Total from '../totals/totalDest'
import dest from '../../assets/1.png'


function Card(props) {
    return (
    <div className="card"> 
        <h2 className="contenido">{props.titulos}</h2>
        <Total />
        <img className="imgCate" src={dest} />;
    </div>
    );
  }

export default Card;