import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Button from '../components/Button'


const Cart = () => {
  return (
    <>
    <div className="py-[30px]">
        <Container >
           <div className={"shadow-sm"}>
           <h2 className='pb-[30px] text-2xl text-black'>Your Cart</h2>
            <div className="flex gap-x-10">
               <div className="">
               <Image imgSrc={"image path"} imgAlt={"image title"}/>
               </div>
               <div className="">
               <div className="">
                    <h3>Image title</h3>
                    <p>Price : $200</p>
                    <div className="">
                        <input type="number" min={"1"} className='py-[10] px-[5px] inline-block' />
                        <Button btntext={"Update"} className={"py-[8] ml-[20px] inline-block px-[28px] bg-[#FFA500] text-white font-bold"}/>
                        <Button btntext={"Remove"} className={"py-[8] ml-[20px] inline-block px-[28px] bg-[#FFA500] text-white font-bold"}/>
                    </div>
                </div>
               </div>
            </div>
            <div className="flex justify-between">
              <div></div>
               <div className="ms-auto">
                 <p>Total : $200</p>
                  <Button btntext={"Back to shop"} className="py-[8] mt-5 inline-block px-[28px] bg-[#FFA500] text-white font-bold"/>
               </div>
           </div>
           </div>
        </Container>
    </div>
    </>
  )
}

export default Cart