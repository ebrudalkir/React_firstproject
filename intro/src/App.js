import "./App.css";
import Navi from "./Navi";
import React, { Component } from "react";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.name });
    this.getProducts(category.categoryID);
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (supplierID) => {
    let url = "http://localhost:3000/products";
    if (supplierID) {
      url += "?supplierID=" + supplierID;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addtoCart = (product) => {
    //alert(product.name);
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.productID === product.productID);
    if(addedItem){
     addedItem.quantity+=1;
    }else{
      newCart.push({product:product,quantity:1});
    }
    this.setState({cart:newCart});
  };

  render() {
    let productinfo = { title: "Products", subtitle: "sevval" };
    let categoryinfo = { title: "Categories" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart}/>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryinfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                addtoCart={this.addtoCart}
                currentCategory={this.state.currentCategory}
                info={productinfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
