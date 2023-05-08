import React from "react";
import Total from '../totals/totalCate'



function Card(props) {
    return (
    <div className="card"> 
        <h2 className="contenido">{props.titulos}</h2>
        <Total />
        <img src="" >{props.imagenes}</img>
    </div>
    );
  }

export default Card;