import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyNews.scss';
import { CompanyNew } from '../mocks/companyNewsMock';
import {ReactComponent as ArrowRight} from '../img/icons/Arrow-right.svg';

interface Props extends CompanyNew {}

export class CompanyNews extends React.Component<Props> {
    render () {
        const { content, image, linkText, title } = this.props;

        return (
            <div className="company-news list-item">
                <img src={image} className="image" alt="pic"></img>
                <span className="title">{title}</span>
                <span className="content">{content}</span>
                <Link to="/" className="orange">{linkText}<ArrowRight /></Link>
            </div>
        );
    } 
}

export default CompanyNews;
