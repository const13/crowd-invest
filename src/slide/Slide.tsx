import React from 'react';
import './Slide.scss';
import Button from 'react-bootstrap/Button'

interface Props {
    background?: any;
    title?: string;
    subtitle?: string;
    buttonName?: string;
}

export class Slide extends React.Component<Props> {
    render () {
        let { background, buttonName, subtitle, title } = this.props;
        const divStyle = {
            backgroundImage: `url(${background})`,
        };
        return (
        <section className="slide" style={divStyle}>
            <section className='slide-content'>
                {title && <h1 className='slide-title'>{title}</h1>}
                {subtitle && <h2 className='slide-subtitle'>{subtitle}</h2>}
                {buttonName && <Button bsPrefix='btn custom-btn-1'>{buttonName.toUpperCase()}</Button>}
            </section>
        </section>
        );
    } 
}

export default Slide;
