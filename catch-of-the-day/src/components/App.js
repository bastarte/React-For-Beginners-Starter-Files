import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes }; // we just copy fishes into fishes
    fishes[`fish${Date.now()}`] = fish; // and we add one more fish
    // then we pass the pieces we want to be updated
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder = (key) => {
    // take a copy of state
    const order = { ...this.state.order };
    // increment the quantity for the key, or initiate the quantity
    // note that "key" is given when we call the fish component in render()
    order[key] = order[key] + 1 || 1;
    // then we need to update the state else it's like nothing happened
    this.setState({ order }); // equivalent to this.setState({order: order})
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="From Wes Cos to Es Cos" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish
                                                            key = {key}
                                                            index = {key}
                                                            details={this.state.fishes[key]}
                                                            addToOrder={this.addToOrder}
                                                            />
            )}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
