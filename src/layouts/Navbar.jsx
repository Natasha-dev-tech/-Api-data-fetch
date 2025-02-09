import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                <li className='text-[#000000] font-bold text-[24px]'>Cart</li>
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