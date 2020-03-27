import React from 'react';
import './Header.scss';
import logo from '../img/logo.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { ReactComponent as ManIcon } from '../img/icons/man.svg';

export class Header extends React.Component {
    render () {
        return (
        <div className="header-container">
            <div className='header-logo-group'> 
                <img src={logo} alt="logo" className='header-logo' />
            </div>
            <Nav fill as="ul">
                <Nav.Item><li><Nav.Link eventKey='/'><Link to='/'>Инвесторам</Link></Nav.Link></li></Nav.Item>
                <Nav.Item><li><Nav.Link eventKey='/credits'><Link to='/credits'>Заемщикам</Link></Nav.Link></li></Nav.Item>
                <Nav.Item><li><Nav.Link eventKey='/about'><Link to='/about'>О компании</Link></Nav.Link></li></Nav.Item>
                <Nav.Item><li><Nav.Link eventKey='/howitworks'><Link to='/howitworks'>Как это работает</Link></Nav.Link></li></Nav.Item>
            </Nav>
            <div className='options'>
                <div className='lang-settings'>
                    <span className='lang active'>De</span>
                    <span className='lang'>En</span>
                </div>
                <div className='entrance'>
                    <ManIcon />
                    <span>вход</span>
                </div>
            </div>
        </div>);
    } 
}

export default Header;
