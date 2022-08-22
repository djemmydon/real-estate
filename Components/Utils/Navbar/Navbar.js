import Link from "next/link";
import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { Navbody, NavFlex, NavMobile, NavTop } from "./NavbarStyle";
import { Spin as Hamburger } from "hamburger-react";

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
          <p>
            Have a question?{" "}
            <Link href="tel:23482377321">
              <a>+23481 237 7321</a>
            </Link>
          </p>
        </div>

        <div>
          <p>Visit us: 9am to 5pm ( Mon - Fri)</p>
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
              <a>Properties

        <div className="sub_nav">
        <Link href="/purpose/for-sale">
              <a>For Sale</a>
            </Link>
            <Link href="/purpose/for-rent">
              <a>For Rent</a>
            </Link>
        </div>
            
              </a>
            </Link>
          
            <Link href="/about">
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

              <Link href="/purpose/for-sale">
                <a onClick={openMenuHandler}>For Sale</a>
              </Link>
              <Link href="/purpose/for-rent">
                <a onClick={openMenuHandler}>For Rent</a>
              </Link>
              <Link href="/about">
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

          <Hamburger color="green" size={20} toggled={open} toggle={setOpen} />
        </div>
      </NavFlex>
    </Navbody>
  );
}

export default Navbar;
