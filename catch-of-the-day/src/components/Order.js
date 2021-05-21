import React from "react";
import {formatPrice} from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const qty = this.props.order[key];
    const isAvailable = (fish && fish.status === "available");
    if (!fish) return null ; // we check if the fish is loaded before we render something
    if(!isAvailable) {
      return <li key={key}> Sorry there is no more {fish ? fish.name : 'fish'} </li>
    }
    return (
      <li key={key}>
      {qty} kg {fish.name}
      {formatPrice(qty * fish.price)}
      </li>
    );
  };


  render() {
    const order = this.props.order;
    const fishes = this.props.fishes;
    const fishOfOrder = Object.keys(order);

    const total = fishOfOrder.reduce((currentTotal, key) => {
      const fish = fishes[key];
      const qty = order[key];
      const isAvailable = fish && fish.status === "available"
      if(isAvailable) {
        return currentTotal + (qty * fish.price);
      }
      return currentTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {fishOfOrder.map(this.renderOrder)}
        </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  };
};

export default Order;
