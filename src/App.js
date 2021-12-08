import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                title: 'Watch',
                price: 1500,
                qty: 5,
                img: 'https://images.unsplash.com/photo-1582150264904-e0bea5ef0ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                title: 'Laptop',
                price: 99000,
                qty: 3,
                img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80',
                id: 2
            },
            {
                title: 'Mobile',
                price: 8000,
                qty: 1,
                img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80',
                id: 3
            }
        ]
    }
    //this.increaseQty = this.increaseQty.bind(this);


    // this.testing();
}

// On increase quantity
handleIncreaseQuantity = (product) => {
    //console.log('Please increase the quantity of the product by 1',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products: products
    });
}

// On decrease quantity
handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products: products
    });
}

// on deleting product
handleDeleteProduct = (id) => {
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id);

    this.setState({
        products: items
    });
}

//get cart count

  getCartCount = () =>{
    const {products} = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }

  //cart total

  getCartTotal = () => {
    const {products} = this.state;
    let totalPrice = 0;
    products.map((product)=>{
      totalPrice = totalPrice+(product.qty*product.price);
    });
    return totalPrice;
  }
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize: 24,padding: 10}}>Cart Total: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
