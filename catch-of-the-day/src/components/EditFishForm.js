import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget);
    // stoerthe new state in a temp variable, before we push it up
    const updatedFish = {
      ...this.props.fish,
      // this will dynamically get the name of the stuff which changed, and update it
      [event.currentTarget.name]: event.currentTarget.value
    };
    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  }
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.name}/>
        <input name="price"
          type="text"
          onChange={this.handleChange}
          value={parseFloat(this.props.fish.price)}/>
        <select name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}>
          <option value="available">Available</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea name="desc"
          ref={this.descRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.desc}>
        </textarea>
        <input name="image"
          ref={this.imageRef}
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.image}/>
        <button type="submit">Edit fish</button>
      </form>
    );
  };
};

export default EditFishForm;
