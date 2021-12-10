import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      //we will not be needing this array of products as we will now fetch data from firebase. 
      //products array will be default empty one.
      products: [],
      loading: true

        // products: [
        //     {
        //         title: 'Watch',
        //         price: 1500,
        //         qty: 5,
        //         img: 'https://images.unsplash.com/photo-1582150264904-e0bea5ef0ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        //         id: 1
        //     },
        //     {
        //         title: 'Laptop',
        //         price: 99000,
        //         qty: 3,
        //         img: 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1251&q=80',
        //         id: 2
        //     },
        //     {
        //         title: 'Mobile',
        //         price: 8000,
        //         qty: 1,
        //         img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80',
        //         id: 3
        //     }
        // ]
    }
    //this.increaseQty = this.increaseQty.bind(this);

    this.db = firebase.firestore();
    // this.testing();
}


componentDidMount() {
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);
  //   snapshot.docs.map((doc) => {
  //     console.log(doc.data());
  //   })

  //   const products = snapshot.docs.map((doc) => {
  //     const data = doc.data();
  //     data['id']=doc.id;
  //     return data;
  //   });

  //   this.setState({
  //     products,
  //     loading: false
  //   })
  // });

  this.db
  .collection('products')
  // .where('price','>=',8000)
  // .where('title','==','Trolley bagpack')
  //sort products according to a constraint
  .orderBy('price','desc')
  .onSnapshot((snapshot) => {
    console.log(snapshot);
    snapshot.docs.map((doc) => {
      console.log(doc.data());
    })

    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id']=doc.id;
      return data;
    });

    this.setState({
      products,
      loading: false
    })
  })
} 
//onSnapshot() is called whenever something changes in our products collection array.


// On increase quantity
handleIncreaseQuantity = (product) => {
    //console.log('Please increase the quantity of the product by 1',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products: products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty+1
    })
    .then(()=>{
      console.log('Product successfully updated');
    })
    .catch((error)=>{
      console.log('Error: ',error);
    });
}

// On decrease quantity
handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    // if(products[index].qty===0){
    //     return;
    // }
    // products[index].qty -= 1;
    // this.setState({
    //     products: products
    // });

    const docRef = this.db.collection('products').doc(products[index].id);

    if(products[index].qty===0){
      alert('Product qty is already 0.');
      return;
    }
    else{
      docRef
      .update({
        qty: products[index].qty-1
      })
      .then(()=>{
        console.log('Product successfully updated');
      })
      .catch((error)=>{
        console.log('Error: ',error);
      });
    }
}

// on deleting product
handleDeleteProduct = (id) => {
    const {products} = this.state;
    // const items = products.filter((item)=> item.id !== id);

    // this.setState({
    //     products: items
    // });

    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(()=>{
      alert('Product deleted successfully');
    })
    .catch((error)=>{
      console.log('Error: ',error);
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
      return '';
    });
    return totalPrice;
    
  }

  //Adding a product
  addProduct = () =>{
    this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: "Washing Machine"
    })
    .then((docRef)=>{
      alert('Product is successfully added');
      console.log(docRef);
    })
    .catch((error) => {
      console.log('Error ',error);
    });

  }

  render() {
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding: 8,fontSize: 24,backgroundColor: 'yellow',margin: 20}}>Add a product</button>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading products...</h1>}
        <div style={{fontSize: 24,padding: 10}}>Cart Total: {this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
