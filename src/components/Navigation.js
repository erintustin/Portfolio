import { useState } from 'react';
import { Navbar, 
        NavbarBrand,
        Collapse,
        NavbarToggler,
        Nav,
        NavItem,
        NavbarText
        } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../app/assets/images/logo.png';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <Navbar dark color='black' sticky='top' expand='md' className='mt-0'>
            <NavbarBrand className='ms-5 navbarbrand' href='/'>
                <img src={logo} alt='Et logo' className='navlogo float-start' href='/'/>
            <NavbarText className='h1'>Erin Tustin</NavbarText>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/projects'>Projects </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/resume'>Resume </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>Contact </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>


    );
};

export default Navigation;