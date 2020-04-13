import React from 'react';
import Slide from '../slide/Slide'; 
import Tablets from '../stats/Stats';
import Greetings from '../greetings/Greetings';
import Howitworks from '../howitworks/Howitworks';
import HorizontalList from '../horizontalList/HorizontalList';
import CompanyNews from '../companyNews/CompanyNews';
import CompanyNewsMock from '../mocks/companyNewsMock';
import Background from "../img/mario.png";

export class Borrowers extends React.Component {
    render () { 
        return (<div>  
            <Slide title="Площадка для поиска инвестиций в ваши проекты" 
                    subtitle="Более 10 000 инвесторов со всего мира"
                    buttonName="Подать заявку" 
                    background={Background} /> 
            <Tablets /> 
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

export default Borrowers;
