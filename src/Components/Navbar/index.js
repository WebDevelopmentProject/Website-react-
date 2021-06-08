import React from 'react';
import { Nav, NavMenu, NavLink, Bars, NavBtn, NavBtnLink} from './Navbar';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>NAME</h1>
                </NavLink>
                <Bars />
                 <NavMenu> {/* For menu items in Navbar*/}
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/chat" activeStyle>
                        Chat
                    </NavLink>
                    <NavLink to="/my_account" activeStyle>
                        My Account
                    </NavLink>
                    {/* 2nd Nav */}
                    {/* <NavBtnLink to="/logout">Logout</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to="/logout">Logout</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar