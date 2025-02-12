import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { applyTempUpdate, removeFromCart, updateTempQuantity } from '../features/Shopcart/cartSlice';

const Cart = () => {
  const { items: cartItems, totalPrice,tempItems } = useSelector(state => state.cart);
  // useSelector(state=>(state)) 
   const dispatch=useDispatch()

  const handleRemoveItem=(id)=>{
    dispatch(removeFromCart(id))
  }
  const handleUpdateQuantity=(id,quantity)=>{
    dispatch(updateTempQuantity({id,quantity}))
    
  }
  const handleApplyUpdates = () => {
    tempItems.forEach((item) => {
      dispatch(applyTempUpdate({ id: item.id, quantity: item.quantity })); // Pass quantity correctly
    });
  };
 
  

  return (
    <div className="py-[30px]">
      <Container>
        <div className="shadow-sm">
          <h2 className="pb-[30px] text-2xl text-black">Your Cart</h2>

          {cartItems.length > 0 ? (
            cartItems.map(item=> (
              <div key={item.id} className="flex gap-x-10 border-b pb-4 mb-4">
                <div>
                  <Image imgSrc={item.image} imgAlt={item.title} className={"h-[80px] w-auto mx-auto"} />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>Price: ${item.price .toFixed(2)}</p>
                  <div className="mt-2">
                    <input 
                      type="number" 
                      min="1" 
                      // defaultValue={item.quantity} 
                      value={tempItems.find((tempItem)=>tempItem.id===item.id)?.
                        quantity|| item.quantity}
                        onChange={(e)=>handleUpdateQuantity(item.id,parseInt(e.target.value))}
                    
                       className="py-[10px] px-[5px] border"
                    />
                    <button
                      onClick={handleApplyUpdates}
                      className="py-[8px] cursor-pointer ml-[20px] inline-block px-[28px] bg-[#FFA500] text-white font-bold"
                    >Update</button>
                    <button className="py-[8px] cursor-pointer ml-[20px] inline-block px-[28px] bg-[#FF0000] text-white font-bold"
                      onClick={()=>handleRemoveItem(item.id)}
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-4xl">Your cart is empty.</p>
           
          
           
          )}

          <div className="flex justify-between">
            <div></div>
            <div className="ms-auto">
              <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
             <Link to={"/"}>
             <Button 
                btntext="Back to Shop" 
                className="py-[8px] mt-5 inline-block px-[28px] bg-[#FFA500] text-white font-bold"
              />
             </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
