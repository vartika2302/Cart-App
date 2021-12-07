
import React from 'react';


class CartItem extends React.Component {
    // state
    constructor() {
        super();
        this.state = {
            title: 'Phone',
            price: 9999,
            qty: 1,
            img: ''
        }
        //this.increaseQty = this.increaseQty.bind(this);
    }
    increaseQty = () => {
        //this.state.qty += 1 
        //console.log('this', this.state);

        //setState() function to tell the react to change the state...it comes from 
        //React.Component class.

        //setState() form 1 (object form)
        //if we don't require previous state, then use object form

        //setState() function triggers re-rendering of our component with the updated value
        // this.setState( 
        //     //this obj gets shallow merged with the state obj changing only specified property
        //     //and don't touch any other property

        //     //after setting state react will automatically re-render our component with the updated
        //     //data
        
        //     {
        //         qty: this.state.qty+1
        //     }
        // );

        //setState() form 2 (function form)
        //If we require previous state then use the function form
        this.setState((prevState)=>{
            return {
                qty: prevState.qty+1
            }
        });

    }
    render() {
        const {title, price, qty} = this.state;
        return (
            <React.Fragment>
                <div class="cart-item">
            <div className = "left-block">
                <img style = {styles.image}/>
            </div>
            <div className = "right-block">
            <div style = {{fontSize: 24}}>{title}</div>
            <div style = {{color: 'grey'}}>Rs.{price}</div>
            <div style = {{color: 'grey'}}>Qty: {qty}</div>
            <div className = "cart-item-actions">
                {/* cart-items */}
                
                <img src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1638886795~hmac=5969a789d2dcadb14e556c224c5e1256" alt="increase" className="action-icons" onClick={this.increaseQty}/>
                <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1638886667~hmac=865f7e7800adabc3ba146acf462b83f5" alt="decrease" className="action-icons"/>
                
                <img src="https://cdn-icons.flaticon.com/png/512/484/premium/484560.png?token=exp=1638886897~hmac=8aa28a55d26e67f55c15d571208cce8f" alt="delete" className="action-icons"/>
            </div>
            </div>
            </div>
            </React.Fragment>
        );
    }
}

const styles = {
    image: {
        width: 110,
        height: 110,
        borderRadius: 4,
        background: 'grey'
    }
}

export default CartItem;