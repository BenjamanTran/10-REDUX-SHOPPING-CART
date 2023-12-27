import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';
const CartButton = () => {
  const dispatch = useDispatch()
  const total = useSelector(state => state.cart.totalQuantity)
  const toggelHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggelHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
