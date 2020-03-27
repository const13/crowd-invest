import React from 'react';
import { Link } from 'react-router-dom';
import './Stats.scss';
import {ReactComponent as Forbes} from '../img/Vector.svg';
import {ReactComponent as LogoCopy} from '../img/Logo Copy.svg';
import {ReactComponent as Investor} from '../img/INVESTOR.svg';
import {ReactComponent as ArrowRight} from '../img/icons/Arrow-right.svg';
import {ReactComponent as APlus} from '../img/icons/a+.svg';
import {ReactComponent as Checklist} from '../img/icons/checklist.svg';
import {ReactComponent as Percent} from '../img/icons/percent.svg';
import {ReactComponent as Vesy} from '../img/icons/vesy.svg';

export class Stats extends React.Component {
    render () {
        return (
        <section className="stats">
            <section className="list">
                <div className="list-item">
                    <div><Forbes /></div>
                    <span className="citata">“Мы никогда не видели настолько быстрорастущую компанию, очень круто, очень современно и стильно.”</span>
                    <Link to="/">Читать<ArrowRight /></Link>
                </div>
                <div className="list-item">
                    <div><LogoCopy /></div>
                    <span className="citata">“Цитата, буквально в пару строк, чтобы зацепить внимание любимейшего  пользователя.”</span>
                    <Link to="/">Читать<ArrowRight /></Link>
                </div>
                <div className="list-item">
                    <div><Investor /></div>
                    <span className="citata">“А тут еще одна цитата, только уже от другого издания, посмотрим, что они про нас пишут.”</span>
                    <Link to="/">Читать<ArrowRight /></Link>
                </div>
            </section>
            <section className="tablets">
                <div className="block">
                    <div className="tab odd">
                        <span className="title">10&nbsp;000</span>
                        <span className="subtitle">Пользователей платформы</span>
                    </div>
                    <div className="tab even">
                        <span className="title">100 млн</span>
                        <span className="subtitle">Привлеченных инвестиций</span>
                    </div>
                    <div className="tab odd">
                        <span className="title">20%</span>
                        <span className="subtitle">Средняя годовая доходность</span>
                    </div>
                    <div className="tab even">
                        <span className="title">0</span>
                        <span className="subtitle">Дефолтов</span>
                    </div>
                </div>
                <div className="block">
                    <div className="tab even">
                        <span className="title"><Percent /></span>
                        <span className="subtitle">Выгодная ставка</span>
                    </div>
                    <div className="tab odd">
                        <span className="title"><APlus /></span>
                        <span className="subtitle">Скоринг</span>
                    </div>
                    <div className="tab even">
                        <span className="title"><Checklist /></span>
                        <span className="subtitle">Проверка заемщиков сообществом</span>
                    </div>
                    <div className="tab odd">
                        <span className="title"><Vesy/></span>
                        <span className="subtitle">Юридическое ведение сделки</span>
                    </div>
                </div>
            </section>
        </section>
        );
    } 
}

export default Stats;
