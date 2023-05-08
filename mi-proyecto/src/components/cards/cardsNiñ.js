import React from "react";
import Total from '../totals/totalNiñ'
import niñ from '../../assets/5.png'

function Card(props) {
    return (
    <div className="card"> 
        <h2 className="contenido">{props.titulos}</h2>
        <Total />
        <img className="imgCate" src={niñ} />;
    </div>
    );
  }

export default Card;