import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function Header() {
  return (
    <div>
      <Navbar fluid rounded className="bg-red-800">  {/* 🔴 dark red background */}
        <NavbarBrand href="https://flowbite-react.com">
          <img 
            src="https://cdn.dribbble.com/users/79396/screenshots/3175195/counter.gif" 
            className="mr-3 h-6 sm:h-9" 
            alt="Flowbite React Logo" 
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Redux Counter App
          </span>
        </NavbarBrand>
        <NavbarToggle />
       
      </Navbar>
    </div>
  )
}

export default Header