import { Fragment } from 'react';
import classes from './Header.module.css';
import image from '../../assets/pizza.jpg';

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt='Pizza' />
            </div>
        </Fragment>
    );
}

export default Header;