import React from 'react'
import ItemList from './ItemList'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
const Cart = () => {
  const dispatch = useDispatch();
  //Subscribing to store
  const cartData = useSelector((store)=>store.cart.items)

  const ClearCart = () =>{
      dispatch(clearCart());
  }
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
      <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={ClearCart}>Clear Cart</button>
      {cartData.length === 0 && <h1>Cart is empty Please add items to Checkout</h1>}
      <ItemList items={cartData}/>
      </div>
    </div>
  )
}

export default Cart