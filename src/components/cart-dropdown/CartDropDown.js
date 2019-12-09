import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CardItem';
import CustomButton from '../custom-button/CustomButton';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './CartDropDown.scss';

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);
