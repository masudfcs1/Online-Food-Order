import {useContext} from 'react'
import CartContext from '../../Store/Cart-contex'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

export default function HeaderCartButton(props) {
  const cartctx=useContext(CartContext)
   
  const numberOfCartItems =cartctx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0)

  return (
    <button className={classes.button} onClick={props.onClickkk} >
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span className={classes.bump}>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
