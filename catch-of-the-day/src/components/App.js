import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const {params} = this.props.match; // we are going to dig through the routes (stored in match)

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)})
    };
    console.log(localStorageRef);
    // store reference to the database
  }

  // If the component is updated, we store the new state in the local storage
  componentDidUpdate() {
    const {params} = this.props.match; // we are going to dig through the routes (stored in match)
    console.log(this.state.order);
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  // to free memory stuff
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes }; // we just copy fishes (from state) into fishes
    fishes[`fish${Date.now()}`] = fish; // and we add one more fish
    // then we pass the pieces we want to be updated
    this.setState({
      fishes: fishes
    });
  };

  updateFish = (key, updatedFish) => {
    // store state in a variable
    const fishes = { ...this.state.fishes };
    // update the variable with the updatedFish
    fishes[key] = updatedFish ;
    // put it back in the state
    this.setState({ fishes });
  }

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
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          updateFish={this.updateFish}
          fishes = {this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
