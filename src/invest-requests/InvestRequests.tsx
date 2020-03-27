import React from 'react';
import './InvestRequests.scss';
import '../styles/buttons.scss';
import Item1 from '../img/item.png'
import Item2 from '../img/item2.png'
import Item3 from '../img/item3.png'
import Item4 from '../img/item4.png'
import {ReactComponent as Star} from '../img/icons/Star.svg'
import Button from 'react-bootstrap/Button';

export class InvestRequests extends React.Component {
    render () {
        return (
        <section className="invest-requests">
            <div className="invest-requests-content">
                <h1 className="title">Последние заявки для инвестирования</h1>
                <div className="list">
                    <div className="list-item">
                        <img src={Item1} className="image" alt="pic"></img>
                        <span className="item-title">Рога и копыта для космического полета</span>
                        <div className="params">
                            <div className="param">
                                <span className="name">СТАВКА</span>
                                <span className="value">17%</span>
                            </div>
                            <div className="param">
                                <span className="name">СРОК</span>
                                <span className="value">2 года</span>
                            </div>
                            <div className="param">
                                <span className="name">РЕЙТИНГ</span>
                                <span className="value"><Star />4.2 / 5</span>
                            </div>
                        </div>
                        <div className="score">
                            <span className="title">СОБРАНО</span>
                            <span className="scored">$420</span>
                            <span className="total">$500 000</span>
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="list-item">
                        <img src={Item2} className="image" alt="pic"></img>
                        <span className="item-title">Полет космический за счет каких–то рог и копыт</span>
                        <div className="params">
                            <div className="param">
                                <span className="name">СТАВКА</span>
                                <span className="value">17%</span>
                            </div>
                            <div className="param">
                                <span className="name">СРОК</span>
                                <span className="value">2 года</span>
                            </div>
                            <div className="param">
                                <span className="name">РЕЙТИНГ</span>
                                <span className="value"><Star />4.2 / 5</span>
                            </div>
                        </div>
                        <div className="score">
                            <span className="title">СОБРАНО</span>
                            <span className="scored">$420</span>
                            <span className="total">$500 000</span>
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="list-item">
                        <img src={Item3} className="image" alt="pic"></img>
                        <span className="item-title">Какой–то очередной заголовок мощный </span>
                        <div className="params">
                            <div className="param">
                                <span className="name">СТАВКА</span>
                                <span className="value">17%</span>
                            </div>
                            <div className="param">
                                <span className="name">СРОК</span>
                                <span className="value">2 года</span>
                            </div>
                            <div className="param">
                                <span className="name">РЕЙТИНГ</span>
                                <span className="value"><Star />4.2 / 5</span>
                            </div>
                        </div>
                        <div className="score">
                            <span className="title">СОБРАНО</span>
                            <span className="scored">$420</span>
                            <span className="total">$500 000</span>
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="list-item">
                        <img src={Item4} className="image" alt="pic"></img>
                        <span className="item-title">Ну конечно, супер старт–ап, как Илон Маск слово</span>
                        <div className="params">
                            <div className="param">
                                <span className="name">СТАВКА</span>
                                <span className="value">17%</span>
                            </div>
                            <div className="param">
                                <span className="name">СРОК</span>
                                <span className="value">2 года</span>
                            </div>
                            <div className="param">
                                <span className="name">РЕЙТИНГ</span>
                                <span className="value"><Star />4.2 / 5</span>
                            </div>
                        </div>
                        <div className="score">
                            <span className="title">СОБРАНО</span>
                            <span className="scored">$420</span>
                            <span className="total">$500 000</span>
                            <div className="progress"></div>
                        </div>
                    </div>
                </div>
                <div className="btn-container">
                    <Button className='outline-orange' style={{width: '17.2rem', height: '5rem'}}>ВСЕ ЗАЯВКИ</Button>
                </div>
            </div>
        </section>
        );
    } 
}

export default InvestRequests;
