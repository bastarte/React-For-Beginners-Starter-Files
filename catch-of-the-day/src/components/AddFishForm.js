import React from "react";

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    event.preventDefault();
    console.log(event);
    console.log(this.descRef.current.value);

    const fish = {
    name: this.nameRef.current.value,
    price: parseFloat(this.priceRef.current.value),
    status: this.statusRef.current.value,
    desc: this.descRef.current.value,
    image: this.imageRef.current.value,
    }
    console.log(fish);

  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Available</option>
          <option value="unavailable">Sold out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} type="text" placeholder="desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">add fish</button>
      </form>
    );
  }
}

export default AddFishForm;
