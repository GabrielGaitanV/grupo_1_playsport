import React from "react";
import Total from '../totals/totalHom'
import hom from '../../assets/3.png'


function Card(props) {
    return (
    <div className="card"> 
        <h2 className="contenido">{props.titulos}</h2>
        <Total />
        <img className="imgCate" src={hom} />;
    </div>
    );
  }

export default Card;