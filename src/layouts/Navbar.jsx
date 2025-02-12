import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cartItems=useSelector(state=>state.cart.items)
  return (
   <>
   <div className="py-[30px]">
    <Container>
        <Flex classNamee={"items-center justify-between gap-x-20"}>
         <div className="w-[70%]">
         <Link to={"/"}>
            <h1 className='text-[#000000] font-bold text-[24px]'>Shopping Cart</h1>
            </Link>
         </div>
         <div className="w-[30%] justify-end">
            <Menu className={"flex text-[#000] gap-x-20"}>
              <Link to={"/"}>
              <li className='text-[#000000] font-bold text-[24px]'>Home</li>
              </Link>
                <Link to={"/cart"}>
                <li className='text-[#000000] font-bold text-[24px]' >Cart ({cartItems.length})</li>
                </Link>
            </Menu>
         </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Navbar