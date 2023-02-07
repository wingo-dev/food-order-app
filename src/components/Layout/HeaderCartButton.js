import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfcarts = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClickCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfcarts}</span>
        </button>
    );
}

export default HeaderCartButton;