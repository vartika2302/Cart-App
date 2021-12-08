import React from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: 'Watch',
                    price: 1500,
                    qty: 5,
                    img: '',
                    id: 1
                },
                {
                    title: 'Laptop',
                    price: 99000,
                    qty: 3,
                    img: '',
                    id: 2
                },
                {
                    title: 'Mobile',
                    price: 8000,
                    qty: 1,
                    img: '',
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

    render() {
        const {products} = this.state;
        return (
            <React.Fragment>
            <Navbar/>
            <div className="cart">
            {/* <CartItem title={'Watch'} price={1500} qty='5' img={''}/> */}
            {products.map((product)=>{
                return <CartItem
                 product={product} 
                 key={product.id}
                //  func={()=>console.log('hello')}
                //  jsx={<h1>heelo</h1>}
                //  isLoggedIn={false}
                onIncreaseQuantity = {this.handleIncreaseQuantity}
                onDecreaseQuantity = {this.handleDecreaseQuantity}
                onDeleteProduct = {this.handleDeleteProduct}
                 />
            })}
            </div>
            </React.Fragment>
            
            
        );
    }
}

export default Cart;

// Props are similar to arguments passed to a function and then we use arguments inside the function.
// Here, we pass props to the CartItem class & use its data there.
// Props are passed as attributes. 
// Props is basically object with the properties coming from the attributes defined in CartItem in Cart.
// Every instance of CartItem will have a property called Props & props will have the properties which we pass as attributes to the 
// CartItem.
 
//Key is not a prop. It is for internal react purposes.

//If a parent needs to share data with its children. It can use props to do so.
// We can pass anything as props.like jsx, function,etc and use as {this.props.jsx},etc.