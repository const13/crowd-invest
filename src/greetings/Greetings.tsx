import React from 'react';
import './Greetings.scss';
import {ReactComponent as Facebook} from '../img/icons/facebook.svg'
import {ReactComponent as Slack} from '../img/icons/slack.svg'
import {ReactComponent as Telegram} from '../img/icons/telegram.svg'
import logo from '../img/logo.png';

export class Greetings extends React.Component {
    render () {
        return (
        <section className="greetings">
            <div className="greetings-container">
                <img src={logo} alt="logo" />
                <div className="greetings-content">
                    <span className="greetings-title">Присоединяйтесь к нашему сообществу</span>
                    <span className="greetings-subtitle">Обсуждайте сделки, делитесь опытом и стратегиями</span>
                    <div className="greetings-links">
                        <div className="greetings-link">
                            <Facebook />
                            <span>FACEBOOK</span>
                        </div>
                        <div className="greetings-link">
                            <Slack />
                            <span>SLACK</span>
                        </div>
                        <div className="greetings-link">
                            <Telegram />
                            <span>TELEGRAM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    } 
}

export default Greetings;
