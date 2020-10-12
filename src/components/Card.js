import React, { Component } from "react";
import "./Card.css";

const Card = (props) => (
  <div 
  className={props.card.animation}// passes the styles from card in card.css and triggers card animated zoomOut on click
  onClick={() => props.clickCard(props.card)}
  >
    <img src="juice.jpg" alt="Vitamin Juice" className="card-image" />
    <div className="container">
      <h3>
        Vitamin Juice <span className="price">24.99€</span>
      </h3>
      <p>
        Need a jum on your vitamins while drinking? Tired of popping pills?
        Drink our vitamins enhanced juice, available in several flavours.
      </p>
    </div>
  </div>
);

export default Card;