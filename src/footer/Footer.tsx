import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../img/logo.png';
import {ReactComponent as Facebook} from '../img/icons/facebook-orange.svg';
import {ReactComponent as Telegram} from '../img/icons/telegram-orange.svg';
import {ReactComponent as Slack} from '../img/icons/slack-orange.svg';
import {ReactComponent as ManIcon} from '../img/icons/man.svg';

export class Footer extends React.Component {
    render () {
        return (
        <footer className="footer-container">
            <section className="footer-content">
                <h1 className="footer-title">Создайте надежный источник дохода</h1>
                <Button bsPrefix="btn custom-btn-1">{'Инвестировать'.toUpperCase()}</Button>
            </section>
            <section className="footer-links">
                <div className="footer-logo">
                    <img src={logo} alt="logo" />
                    <span className="copyright">©2019</span>
                </div>
                <div className="footer-nav-links">
                    <div className="footer-nav-links-block">
                        <Link to='/'>Инвесторам</Link>
                        <Link to='/'>Заемщикам</Link>
                    </div>
                    <div className="footer-nav-links-block">
                        <Link to='/'>О компании</Link>
                        <Link to='/'>Как это работает</Link>
                    </div>
                </div> 
                <div className="footer-social-links123">
                    <Facebook className="footer-social-link123" />
                    <Slack className="footer-social-link123" />
                    <Telegram className="footer-social-link123" />
                </div>
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
            </section>
        </footer>);
    } 
}

export default Footer;
