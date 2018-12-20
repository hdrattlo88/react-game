import React from "react";
import "./style.css";

function Card(props){
    return (
        <div className="card">
        <div className="img-container">
        <button onClick={() => props.addPoint(props.id)} className="point"><img alt={props.name} src={props.image} /></button>
        </div>
        </div>
    );
}

export default Card;