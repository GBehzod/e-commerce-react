import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.scss'
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {useNavigate} from "react-router";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, dispatch}) => {
    let navigate = useNavigate();

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )
                }
            </div>
            <CustomButton onClick={() => {
                navigate('/shop/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps,)(CartDropdown);