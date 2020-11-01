import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>QuantityPerUnit</th>
              <th>UnitPrice</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.productID}>
                <th scope="row">{product.productID}</th>
                <td>{product.name}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td><Button onClick={()=>this.props.addtoCart(product)} color="info">Add</Button>{' '}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
