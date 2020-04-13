import React from 'react';
import './Howitworks.scss';
import {ReactComponent as Verification} from '../img/icons/verification.svg';
import {ReactComponent as Money} from '../img/icons/money.svg';
import {ReactComponent as ArrowDown} from '../img/icons/arrow-down.svg';
import Banknotes from '../img/icons/banknotes.png';
import Scheme from '../img/scheme.png';
import {ReactComponent as Bank} from '../img/icons/bank.svg';
import {ReactComponent as Scroll} from '../img/icons/scroll.svg';
import Button from 'react-bootstrap/Button'
import Partners from './partners/Partners';
import CollapsibleBlock from '../collapsibleBlock/CollapsibleBlock';

interface Props {
    noScheme?: boolean
    about?: boolean
}

export class Howitworks extends React.Component<Props> {
    render () {
        let { about, noScheme } = this.props;
        const howitworksClass = `howitworks ${about ? 'horizontal' : null}`;
        const stepsClass = `howitworks-steps ${about ? 'horizontal' : null}`;
        const containerClass = `howitworks-steps-container ${about ? 'horizontal' : null}`;

        return (
        <section className={howitworksClass}>
            {about && <Scroll className='scroll-me' />}
            <div className="howitworks-wrapper">
                <div className="howitworks-container">
                    <div className={stepsClass}>
                        {!about && <h1 className="steps-title">Что нужно для начала инвестиций?</h1>}
                        <div className={containerClass}>
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
                        </div>
                        {!about && <Button bsPrefix='custom-btn-1 invest'>{'Инвестировать'.toUpperCase()}</Button>}
                    </div>
                    {!noScheme && <div className="desc">
                        <h1 className="desc-title">Как мы работаем:</h1>
                        <img src={Scheme} alt="scheme" className="desc-scheme" />
                        <div className="faq">
                            <CollapsibleBlock title={'А зачем первый вопрос?'} content={'Да просто так!'} />
                            <CollapsibleBlock title={'А зачем второй вопрос?'} content={'Да просто так же!'} />
                            <CollapsibleBlock title={'А зачем третий?'} content={'Лучше не спрашивай...'} />
                            <CollapsibleBlock title={'Не открывать'} content={'Иди нахер!'} />
                        </div>
                    </div>}
                </div>
                {!about && <Partners />}
            </div>
        </section>
        );
    } 
}

export default Howitworks;
