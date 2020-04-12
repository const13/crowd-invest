import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';
import logo from '../img/logo.png';
import { ReactComponent as ManIcon } from '../img/icons/man.svg';
import { ReactComponent as MenuIcon } from '../img/icons/menu.svg';

export class Header extends React.Component {
    render () {
        return (
        <div className="header-container">
            <Navbar>
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt="logo" className="header-logo" />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to='/' exact>Инвесторам</Nav.Link>
                    <Nav.Link as={NavLink} to='/credits'>Заемщикам</Nav.Link>
                    <Nav.Link as={NavLink} to='/about'>О компании</Nav.Link>
                    <Nav.Link as={NavLink} to='/howitworks'>Как это работает</Nav.Link>
                </Nav>
            </Navbar>
            <div className="options">
                <div className="lang-settings">
                    <span className="lang active">De</span>
                    <span className="lang">En</span>
                </div>
                <div className="entrance">
                    <ManIcon />
                    <span>вход</span>
                </div>
                <div className="menu">
                    <MenuIcon />
                </div>
            </div>
        </div>);
    } 
}

export default Header;
