import React, { Component } from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewComponent from "../../Components/preview/preview.component";

export default class shoppageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <PreviewComponent key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
