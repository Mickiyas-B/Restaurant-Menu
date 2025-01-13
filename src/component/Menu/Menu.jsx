import React, { Component } from "react";
import menu from "../../assets/Data/data.js";

class Menu extends Component {
  render() {
    let { title, category, price, img, desc } = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <a href="https://axum-restaurant.be/#menu">
            <img src={img} />
          </a>
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{desc}</div>
      </div>
    );
  }
}

export default Menu;
