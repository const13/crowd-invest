import React from 'react';
import './InvestRequests.scss';
import {ReactComponent as Star} from '../img/icons/Star.svg'
import {InvestRequestItem} from '../mocks/investRequestMock';

interface Props extends InvestRequestItem {}

export class InvestRequests extends React.Component<Props> {
    render () {
        const { due, image, rate, rating, title, collected } = this.props;

        return (
            <div className="invest-request list-item">
            <img src={image} className="image" alt="pic"></img>
            <span className="item-title">{title}</span>
            <div className="params">
                <div className="param">
                    <span className="name">СТАВКА</span>
                    <span className="value">{rate}%</span>
                </div>
                <div className="param">
                    <span className="name">СРОК</span>
                    <span className="value">{due} года</span>
                </div>
                <div className="param">
                    <span className="name">РЕЙТИНГ</span>
                    <span className="value"><Star />{rating} / 5</span>
                </div>
            </div>
            <div className="score">
                <span className="title">СОБРАНО</span>
                <span className="scored">${collected.current}</span>
                <span className="total">${collected.total}</span>
                <div className="progress"></div>
            </div>
        </div>
        );
    } 
}

export default InvestRequests;
