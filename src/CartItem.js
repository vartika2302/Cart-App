
import React from 'react';


class CartItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="cart-item">
            <div className = "left-block">
                <img src="" alt="" style = {styles.image}/>
            </div>
            <div className = "right-block">
            <div style = {{fontSize: 24}}>card name</div>
            <div style = {{color: 'grey'}}>Rs. 999</div>
            <div style = {{color: 'grey'}}>1</div>
            <div className = "cart-item-actions">
                {/* cart-items */}
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
        backgroundColor: 'grey'
    }
}

export default CartItem;