import { Fragment } from 'react';
import classes from './Header.module.css';
import image from '../../assets/pizza.jpg';
import HeaderButton from './HeaderCartButton';

function Header(props) {
    return (
        <Fragment>
            <div className={classes.nav}>
                <header className={classes.header}>
                    <h1>Food Order</h1>
                    <HeaderButton />
                </header>
            </div>
            <div className={classes['main-image']}>
                <img src={image} alt='Pizza' />
            </div>

        </Fragment>
    );
}

export default Header;