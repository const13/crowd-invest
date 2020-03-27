import React from 'react';
import './Slide.scss';
import Button from 'react-bootstrap/Button'

export class Slide extends React.Component {
    render () {
        return (
        <section className="slide">
            <section className='slide-content'>
                <h1 className='slide-title'>Площадка для инвестирования в успешные компании</h1>
                <h2 className='slide-subtitle'>Мы позаботимся о юридическом оформлении сделок и исполнения обязательств проектами</h2>
                <Button bsPrefix='btn custom-btn-1'>{'Зарегестрироваться'.toUpperCase()}</Button>
            </section>
            {/* <img src={background} alt='background' className='slide-background'></img> */}
        </section>
        );
    } 
}

export default Slide;
