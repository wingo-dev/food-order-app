import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnHighlighted] = useState(false);

    const { items } = cartCtx;

    const numberOfcarts = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;


    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }

    }, [items]);


    return (
        <button className={btnClasses} onClick={props.onClickCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfcarts}</span>
        </button>
    );
}

export default HeaderCartButton;