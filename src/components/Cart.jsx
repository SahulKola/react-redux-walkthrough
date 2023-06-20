import './Cart.css'
import Button from './Button'
import cartSvg from '../assets/cart.svg'
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from '../actions';

export default function Cart() {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="cart-wrap">
            <div className="cart" data-count={count}>
                <img src={cartSvg} alt="Cart Logo" />
            </div>
            <div className="btn-wrap">
                <Button actionType={increment} dispatch={dispatch} styles={{backgroundColor: '#23c552', color: 'white'}} > Add to Cart </Button>
                <Button actionType={decrement} dispatch={dispatch} styles={{backgroundColor: '#f84f31', color: 'white'}}> Remove from Cart </Button>

            </div>
        </div>
    )
}