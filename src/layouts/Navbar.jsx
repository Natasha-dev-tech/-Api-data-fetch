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
        <Flex classNamee={"items-center justify-between"}>
         <div className="w-[50%]">
            <h1 className='text-[#000000] font-bold text-[24px]'>Shopping Cart</h1>
         </div>
         <div className="w-[50%]">
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