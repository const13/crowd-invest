import React from 'react';
import Slide from '../slide/Slide'; 
import Tablets from '../stats/Stats';
import Greetings from '../greetings/Greetings';
import Howitworks from '../howitworks/Howitworks';
import HorizontalList from '../horizontalList/HorizontalList';
import InvestRequests from '../investRequests/InvestRequests';
import InvestRequestMock from '../mocks/investRequestMock';
import CompanyNews from '../companyNews/CompanyNews';
import CompanyNewsMock from '../mocks/companyNewsMock';
import Background from "../img/image10.png";

export class Investors extends React.Component {
    render () { 
        return (<div>  
            <Slide title="Площадка для инвестирования в успешные компании"
                    subtitle="Мы позаботимся о юридическом оформлении сделок и исполнения обязательств проектами"
                    buttonName="Зарегестрироваться"
                    background={Background} /> 
            <Tablets /> 
            <HorizontalList 
                title={'Последние заявки для инвестирования'}
                buttonLabel={'ВСЕ ЗАЯВКИ'} 
                data={InvestRequestMock}
                Item={InvestRequests} />
            <Greetings />
            <Howitworks />
            <HorizontalList 
                title={'Новости компании'}
                buttonLabel={'ВСЕ НОВОСТИ'} 
                data={CompanyNewsMock}
                Item={CompanyNews} />
            <Greetings />
        </div>);  
    }
}

export default Investors;
