import React from "react";
import Total from '../totals/totalDepo'
import depo from '../../assets/2.png'


function Card(props) {
    return (
    <div className="card"> 
        <h2 className="contenido">{props.titulos}</h2>
        <Total />
        <img className="imgCate" src={depo} />;
    </div>
    );
  }

export default Card;