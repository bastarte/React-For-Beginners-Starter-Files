import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleAddToOrder = () => {
    this.props.addToOrder(this.props.index);
  }
  render() {
    const {name, image, status, price, desc } = this.props.details ;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleAddToOrder} >{isAvailable ? 'Add to order' :'No more!'}</button>
      </li>
    );
  }
}

export default Fish;
