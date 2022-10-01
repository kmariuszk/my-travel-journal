import React from "react";
import pointer from "../images/map_point.png"

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="postcard" className="card--image"></img>
            <section className="card--description">
                <img src={pointer} alt="pointer"></img>
                <span className="card--location">
                    {props.location.toUpperCase()}
                </span>
                <a href={props.googleMapsUrl} className="card--maps-link">
                    View on Google Maps
                </a>

                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--text">{props.description}</p>
            </section>
        </div>
    )
}

export default Card;