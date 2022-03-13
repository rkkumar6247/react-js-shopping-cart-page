import React from 'react';
import '../style.css';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: '',
    };
  }
  render() {
    return (
      <div className="container add-item">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(
              this.state.productName,
              Number(this.state.productPrice)
            );
            this.state.productName = '';
            this.state.productPrice = '';
          }}
        >
          <div className="form-group col-5">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control my-2"
              id="productName"
              placeholder="Enter product name"
              required
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="form-group col-5 mt-3">
            <label htmlFor="productPrice">Price</label>
            <input
              type="number"
              className="form-control my-2"
              id="productPrice"
              placeholder="Enter Price"
              required
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.currentTarget.value) });
              }}
              value={this.state.productPrice}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
export default AddItem;
