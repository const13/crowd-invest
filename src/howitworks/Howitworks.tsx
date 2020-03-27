import React from 'react';
import './Howitworks.scss';
import {ReactComponent as Verification} from '../img/icons/verification.svg';
import {ReactComponent as Money} from '../img/icons/money.svg';
import {ReactComponent as ArrowDown} from '../img/icons/arrow-down.svg';
import Banknotes from '../img/icons/banknotes.png';
import Scheme from '../img/scheme.png';
import {ReactComponent as Bank} from '../img/icons/bank.svg';
import Button from 'react-bootstrap/Button'
import Partners from './partners/Partners';

export class Howitworks extends React.Component {
    render () {
        return (
        <section className="howitworks">
            <div className="howitworks-wrapper">
                <div className="howitworks-container">
                    <div className="howitworks-steps">
                        <h1 className="steps-title">Что нужно для начала инвестиций?</h1>
                        <div className="hoitworks-step">
                            <Verification />
                            <span>Регистрация</span>
                        </div>
                        <ArrowDown className="step-arrow" />
                        <div className="hoitworks-step">
                            <img src={Banknotes} alt="banknotes" />
                            <span>Внесение средств</span>
                        </div>
                        <ArrowDown className="step-arrow" />
                        <div className="hoitworks-step">
                            <Bank />
                            <span>Инвестирование</span>
                        </div>
                        <ArrowDown className="step-arrow" />
                        <div className="hoitworks-step">
                            <Money />
                            <span>Получение прибыли</span>
                        </div>
                        <Button bsPrefix='custom-btn-1 invest'>{'Инвестировать'.toUpperCase()}</Button>
                    </div>
                    <div className="desc">
                        <h1 className="desc-title">Как мы работаем:</h1>
                        <img src={Scheme} alt="scheme" className="desc-scheme" />
                        <div className="faq">
                            <div className="question"></div>
                        </div>
                    </div>
                </div>
                <Partners />
            </div>
        </section>
        );
    } 
}

export default Howitworks;
