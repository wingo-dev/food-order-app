import { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const HideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={HideCartHandler} />}
      <Header onCartShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
