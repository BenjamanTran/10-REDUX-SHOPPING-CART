import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { fetDataCart, sendCartData } from './store/cart-actions';

let isInitial = true
function App() {
  const showCart = useSelector(state => state.ui.cartIsVisiable)
  const cart = useSelector(state => state.cart)
  const notifycation = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetDataCart())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])
  return (
    <Fragment>
      {notifycation && (
        <Notification status={notifycation.status} title={notifycation.title} message={notifycation.message} />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
