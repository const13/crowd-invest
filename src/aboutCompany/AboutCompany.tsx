import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AboutCompany.scss';
import {ReactComponent as PDF} from '../img/icons/pdf.svg'

export class AboutCompany extends React.Component {
    render () {
        return (
        <section className="about-company">
            <div className="about-company-content">
                <h1 className="about-company-title">О компании Crowdinvest</h1>
                <p className="about-company-subtitle"><b>Crowdinvest</b> – платформа крауд инвестинга. Была создана профессионалами финансового рынка в 1976 году.</p>
                <p className="about-company-subtitle">Средняя доходность инвестора составляет <b>971% годовых</b>.</p>
                <Button bsPrefix='btn custom-btn-1'>{'Зарегестрироваться'.toUpperCase()}</Button>
            </div>
            <div className="about-company-docs">
                <div className="about-company-doc">
                    <PDF />
                    <div className="doc-text">
                        <span className="doc-text-name">Какой–то документ регулирования юридических отношений</span>
                        <Link to="/" className="orange">Скачать</Link>
                    </div>
                </div>
                <div className="about-company-doc">
                    <PDF />
                    <div className="doc-text">
                        <span className="doc-text-name">Какой–то документ регулирования юридических отношений</span>
                        <Link to="/" className="orange">Скачать</Link>
                    </div>
                </div>
                <div className="about-company-doc">
                    <PDF />
                    <div className="doc-text">
                        <span className="doc-text-name">Какой–то документ регулирования юридических отношений</span>
                        <Link to="/" className="orange">Скачать</Link>
                    </div>
                </div>
            </div>
        </section>
        );
    } 
}

export default AboutCompany;
