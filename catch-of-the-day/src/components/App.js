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
    console.log(this); // state was defined manually
    const fishes = { ...this.state.fishes }; // we just copy fishes into fishes
    fishes[`fish${Date.now()}`] = fish; // and we add one more fish
    // then we pass the pieces we want to be updated
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="From Wes Cos to Es Cos" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key = {key} details={this.state.fishes[key]}/>)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
