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
import avatar from '../app/assets/images/avatar.jpg';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <Navbar dark color='black' sticky='top' expand='md' className='mt-0'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={avatar} alt='avatar' className='navlogo float-start' href='/'/>
            </NavbarBrand>
            <NavbarText className='h1 '>Erin Tustin</NavbarText>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/portfolio'>Projects </NavLink>
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