import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';
import logo from '../img/logo.png';
import { ReactComponent as ManIcon } from '../img/icons/man.svg';
import { ReactComponent as MenuIcon } from '../img/icons/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../img/icons/close-menu.svg';

interface Props {
}

interface State {
    showMenu: boolean
}

export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showMenu: false
        }
    }

    toggleMenu = (value: boolean) => {
        this.setState({showMenu: !value});
    }

    render () {
        let { showMenu } = this.state;
        const headerContainerClass = `header-container ${showMenu && 'fixed'}`;

        return (
        <div className="header-wrapper">
            {showMenu && <div className="header-menu">
                <Nav className="header-menu-nav-links">
                    <NavLink to='/' activeClassName="is-active" className="menu-link" onClick={() => this.toggleMenu(showMenu)} exact={true}>Инвесторам</NavLink>
                    <NavLink to='/credits' activeClassName="is-active" className="menu-link"onClick={() => this.toggleMenu(showMenu)}>Заемщикам</NavLink>
                    <NavLink to='/about' activeClassName="is-active" className="menu-link" onClick={() => this.toggleMenu(showMenu)}>О компании</NavLink>
                    <NavLink to='/howitworks' activeClassName="is-active" className="menu-link" onClick={() => this.toggleMenu(showMenu)}>Как это работает</NavLink>
                </Nav>
                <div className="options menu-options">
                    <div className="lang-settings">
                        <span className="lang active">De</span>
                        <span className="lang">En</span>
                    </div>
                    <div className="entrance">
                        <ManIcon />
                        <span>вход</span>
                    </div>
                </div>
            </div>}
            <div className={headerContainerClass}>
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
                        {!showMenu && <MenuIcon onClick={() => this.toggleMenu(showMenu)} />}
                        {showMenu && <CloseMenuIcon onClick={() => this.toggleMenu(showMenu)} />}
                    </div>
                </div>
            </div>
        </div>
        );
    } 
}

export default Header;
