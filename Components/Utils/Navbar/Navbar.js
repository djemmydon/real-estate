import Link from "next/link";
import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { Navbody, NavFlex, NavMobile } from "./NavbarStyle";
import "boxicons";

function Navbar() {
  const [open, setOpen] = useState(true);

  //Opem modal for Nav
  const openMenuHandler = () => {
    setOpen(!open);
  };

  return (
    <Navbody>
      <NavFlex>
        <div className="logo">
          <img src="/Assets/logo1.png" alt="" />
        </div>

        <div className="nav_items">
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Properties</a>
            </Link>
            <Link href="/">
              <a>Blog</a>
            </Link>
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Contact</a>
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
                <a>Home</a>
              </Link>
              <Link href="/">
                <a>Properties</a>
              </Link>
              <Link href="/">
                <a>Blog</a>
              </Link>
              <Link href="/">
                <a>About</a>
              </Link>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </ul>

            <div className="nav_button_mobile">
              <Button name="Book Property" />
            </div>
          </div>
        </NavMobile>

        <div className="nav_icons">
          {open ? (
            <box-icon  className="nav_ico"  name="chevron-right" onClick={openMenuHandler}></box-icon>
          ) : (
            <box-icon name="menu" onClick={openMenuHandler}></box-icon>
          )}
        </div>
      </NavFlex>
    </Navbody>
  );
}

export default Navbar;
