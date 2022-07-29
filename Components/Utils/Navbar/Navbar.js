import Link from "next/link";
import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { Navbody, NavFlex, NavMobile, NavTop } from "./NavbarStyle";
import { Spin as Hamburger } from 'hamburger-react'

import "boxicons";


function Navbar() {
  const [open, setOpen] = useState(false);

  //Opem modal for Nav
  const openMenuHandler = () => {
    setOpen(!open);
  };

  return (
    <Navbody>
      <NavTop>
        <div>
         <p>Have a question? <Link href="phone:23482377321">
         <a >+2348 237 7321</a>
         </Link></p>
        </div>

        <div>
         <p>Visit us: 9am to 10 pm ( Mon - Fri)</p>
        </div>
      </NavTop>
      <NavFlex>
        <div className="logo">
          <img src="/Assets/logo1.png" alt="" />
        </div>

        <div className="nav_items">
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/products">
              <a>Properties</a>
            </Link>
            <Link href="/#">
              <a>Blog</a>
            </Link>
            <Link href="/#">
              <a>About</a>
            </Link>
            <Link href="/#">
              <a>Contact</a>
            </Link>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </ul>

          <div className="nav_button">
            <Button name="Book Property" />
          </div>
        </div>

        <NavMobile>
          <div className={open ? "active not_active" : "not_active"}>
            <ul>
              <Link href="/">
                <a onClick={openMenuHandler}>Home</a>
              </Link>
              <Link href="/products">
                <a onClick={openMenuHandler}>Properties</a>
              </Link>
              <Link href="/#">
                <a onClick={openMenuHandler}>Blog</a>
              </Link>
              <Link href="/#">
                <a onClick={openMenuHandler}>About</a>
              </Link>
              <Link href="/#">
                <a onClick={openMenuHandler}>Contact</a>
              </Link>
              <Link href="/search">
                <a onClick={openMenuHandler}>Search</a>
              </Link>
            </ul>

            <div className="nav_button_mobile">
              <Button name="Book Property" />
            </div>
          </div>
        </NavMobile>

        <div className="nav_icons">
          {/* {open ? (
            <box-icon  className="nav_ico"  name="chevron-right" onClick={openMenuHandler}></box-icon>
          ) : (
            <box-icon name="menu" onClick={openMenuHandler}></box-icon>
          )} */}

          <Hamburger color="green" size={20}  toggled={open} toggle={setOpen}/>
          
        </div>
      </NavFlex>
    </Navbody>
  );
}

export default Navbar;
