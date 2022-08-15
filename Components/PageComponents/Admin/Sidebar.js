import React from "react";
import { SideBarBody, SideNav, SideNavItem } from "./style/SidebarStyle";
import Link from "next/link"
import {
  AiOutlineHome,
  AiOutlineFileAdd,
  AiOutlineUsergroupAdd,
  AiOutlineUser,
  AiOutlineWechat,
} from "react-icons/ai";
function Sidebar() {
  return (
    <>
      <SideBarBody>
        <SideNav>
          <Link href="/admin/#">
            <SideNavItem>
              <AiOutlineHome color="#01614e" size="30"  />
              <h5>All Property</h5>
            </SideNavItem>
          </Link>

          
          <Link href="/admin/#">
            <SideNavItem>
              <AiOutlineUser color="#01614e" size="30" />
              <h5>All User</h5>
            </SideNavItem>
          </Link>

          
          <Link href="/admin/#">
            <SideNavItem>
              <AiOutlineFileAdd color="#01614e" size="30" />
              <h5>Add Property</h5>
            </SideNavItem>
          </Link>
          
          <Link href="/admin/#">
            <SideNavItem>
              <AiOutlineWechat color="#01614e" size="30" />
              <h5>Messages</h5>
            </SideNavItem>
          </Link>
        </SideNav>
      </SideBarBody>
    </>
  );
}

export default Sidebar;
