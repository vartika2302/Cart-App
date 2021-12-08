import React from 'react';


// class Navbar extends React.Component {
//     render() {
//         return (
//             <div style={styles.navbar}>
//             <div style={styles.cartImageContainer}>
//             <img style={styles.cartImage} src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1638975737~hmac=f9054daa0dc4cd2510e31a51f54384e7" alt="cartImage"/>
//             <span style={styles.cartCount}>3</span>
//             </div>
//             </div>
//         );
//     }
// }

//Above is a class component & it don't have any state and we will change it to a functional component. And in that 'props' is send
//as an argument of the function by default.

const Navbar = () => {
    return (
        <div style={styles.navbar}>
        <div style={styles.cartImageContainer}>
        <img style={styles.cartImage} src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1638975737~hmac=f9054daa0dc4cd2510e31a51f54384e7" alt="cartImage"/>
        <span style={styles.cartCount}>3</span>
        </div>
        </div>
    );
}

const styles = {
    navbar: {
        height: 55,
        backgroundColor: '#344CB7',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartImageContainer: {
        marginTop: 5,
        marginRight: 20,
        position: 'relative',
    },
    cartImage: {
        height: 40
    },
    cartCount: {
        width: 20,
        padding: '4 8',
        position: 'absolute',
        top: -5,
        right: -5,
        textAlign: 'center',
        backgroundColor: 'Yellow',
        color: 'black',
        borderRadius: '50%'

    }

};

export default Navbar;