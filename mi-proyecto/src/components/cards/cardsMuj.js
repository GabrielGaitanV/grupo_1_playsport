import React from "react";
import Total from '../totals/totalMuj'
import muj from '../../assets/4.png'


function Card(props) {
    return (
    <div className="card"> 
        <h2 className="contenido">{props.titulos}</h2>
        <Total />
        <img className="imgCate" src={muj} />;
    </div>
    );
  }

export default Card;