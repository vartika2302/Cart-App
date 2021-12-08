
import React from 'react';

const CartItem = (props) => {
    // state
    // constructor() {
    //     super();
    //     this.state = {
    //         title: 'Phone',
    //         price: 9999,
    //         qty: 1,
    //         img: ''
    //     }
    //     //this.increaseQty = this.increaseQty.bind(this);


    //     // this.testing();
    // }
    // increaseQty = () => {
    //     //this.state.qty += 1 
    //     //console.log('this', this.state);

    //     //setState() function to tell the react to change the state...it comes from 
    //     //React.Component class.

    //     //setState() form 1 (object form)
    //     //if we don't require previous state, then use object form

    //     //setState() function triggers re-rendering of our component with the updated value
    //     // this.setState( 
    //     //     //this obj gets shallow merged with the state obj changing only specified property
    //     //     //and don't touch any other property

    //     //     //after setting state react will automatically re-render our component with the updated
    //     //     //data

    //     //     {
    //     //         qty: this.state.qty+1
    //     //     }
    //     // );

    //     //setState() form 2 (function form)
    //     //If we require previous state then use the function form
    //     this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty+1
    //         }
    //     },
    //     //this callback will be called when setState() call will be over. it is for performing actions
    //     //just after the state finished updating. Applicable on both form 1 and form 2

    //     ()=>{
    //         console.log('this.state', this.state);
    //     });
        
        
    //     //using setState() form 1---------------
    //     //In any event handler, no matter how many times we call setState() function, due to the 
    //     //concept of 'Batching' in react it will merge all the setState() calls into one & 
    //     //render the page/application only once. React does this to make our app more efficent b'coz
    //     //rendering the page a number of times won't look nice and also it is inefficient.
    //     //react will do shallow merging-> and take up the last object passed to it or last set state 
    //     //function call.

    //     //using setState() form 2----------------
    //     //in this using set state function multiple times ,it will increase the qty that much time
    //     //but our app will be rendered only once(batching), it manages a queue in which the previous state
    //     //is updated in every function call.

    //     //setState() call is asynchronous in case of React event handlers


    // }

    // //In case of AJAX call or promises, setState() call will act like synchronous call. In this case 
    // //React will not do batching for us and the app will be re-rendered that much number
    // //of time as setState() function is called.

    // // testing () {
    // //     const promise = new Promise((resolve,reject)=>{
    // //         setTimeout(()=>{
    // //             resolve('done');
    // //         },5000);
    // //     })

    // //     promise.then(()=>{
    // //         this.setState({qty: this.state.qty+10});
    // //         this.setState({qty: this.state.qty+10});
    // //         this.setState({qty: this.state.qty+10});
    // //         console.log('state', this.state);
    // //     });
    // // }


    // decreaseQty = () => {
    //     const {qty} = this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return {
    //             qty: prevState.qty-1
    //         }
    //     });
    // }
        //props
        //In react, data flows only in one direction i.e., from parent to children via 'props'.
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        const {title,price,qty} = props.product;
        //const {title, price, qty} = this.state;
        return (
            <React.Fragment>
                <div class="cart-item">
                {/* {this.props.jsx} */}

            <div className = "left-block">
                <img src={product.img} style = {styles.image}/>
            </div>
            <div className = "right-block">
            <div style = {{fontSize: 24}}>{title}</div>
            <div style = {{color: 'grey'}}>Rs.{price}</div>
            <div style = {{color: 'grey'}}>Qty: {qty}</div>
            <div className = "cart-item-actions">
                {/* cart-items */}
                
                <img src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1638886795~hmac=5969a789d2dcadb14e556c224c5e1256" alt="increase" className="action-icons" /*onClick={this.increaseQty}*/onClick={()=>onIncreaseQuantity(product)}/>
                <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1638886667~hmac=865f7e7800adabc3ba146acf462b83f5" alt="decrease" className="action-icons" /*onClick={this.decreaseQty}*/onClick={()=>onDecreaseQuantity(product)}/>
                
                <img src="https://cdn-icons.flaticon.com/png/512/484/premium/484560.png?token=exp=1638886897~hmac=8aa28a55d26e67f55c15d571208cce8f" alt="delete" className="action-icons" onClick={()=>onDeleteProduct(product.id)}/>
            </div>
            </div>
            </div>
            </React.Fragment>
        );
}

const styles = {
    image: {
        width: 150,
        height: 150,
        borderRadius: 4
    }
}

export default CartItem;