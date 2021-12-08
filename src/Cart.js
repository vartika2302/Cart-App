import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
        const {products} = props;
        return (
            <div className="cart">
            {/* <CartItem title={'Watch'} price={1500} qty='5' img={''}/> */}
            {products.map((product)=>{
                return <CartItem
                 product={product} 
                 key={product.id}
                //  func={()=>console.log('hello')}
                //  jsx={<h1>heelo</h1>}
                //  isLoggedIn={false}
                onIncreaseQuantity = {props.onIncreaseQuantity}
                onDecreaseQuantity = {props.onDecreaseQuantity}
                onDeleteProduct = {props.onDeleteProduct}
                 />
            })}
            </div>
            
        );
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