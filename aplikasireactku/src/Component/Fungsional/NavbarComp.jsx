import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Button,
} from 'reactstrap';

import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../App';

    function NavbarComp () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/">HARMONY MUSIC COURSE</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">ABOUT US</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/classes" className="nav-link">CLASSES</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/teachers" className="nav-link">TEACHERS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/gallery" className="nav-link">GALLERY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact" className="nav-link">CONTACT US</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/datasiswa" className="nav-link">DATA SISWA</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/loginadmin" className="nav-link">LOGIN</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp