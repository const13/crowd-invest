import React from 'react';
import './HorizontalList.scss';
import Button from 'react-bootstrap/Button';

interface Props {
    title: string,
    buttonLabel: string,
    data?: any,
    Item?: any
}

export class HorizontalList extends React.Component<Props> {
    render () {
        const { buttonLabel, data, title, Item } = this.props;
        const items = data.map((i: any, key: number) => <Item key={key} {...i}/>);

        return (
        <div className="horizontal-list-container">
            <div className="horizontal-list-content">
                <h1 className="title">{title}</h1>
                <div className="list">
                    {items}
                </div>
                <div className="btn-container">
                    <Button className='outline-orange' style={{width: '17.2rem', height: '5rem'}}>{buttonLabel}</Button>
                </div>
            </div>
        </div>);
    } 
}

export default HorizontalList;
