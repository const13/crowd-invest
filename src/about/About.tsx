import React from 'react';
import Tablets from '../stats/Stats';
import Greetings from '../greetings/Greetings';
import Howitworks from '../howitworks/Howitworks';
import HorizontalList from '../horizontalList/HorizontalList';
import CompanyNews from '../companyNews/CompanyNews';
import CompanyNewsMock from '../mocks/companyNewsMock';
import AboutCompany from '../aboutCompany/AboutCompany';

export class About extends React.Component {
    render () { 
        return (<div>  
            <AboutCompany />
            <Howitworks noScheme={true} about={true} />
            <Tablets about={true} /> 
            <HorizontalList 
                title={'Новости компании'}
                buttonLabel={'ВСЕ НОВОСТИ'} 
                data={CompanyNewsMock}
                Item={CompanyNews} />
            <Greetings />
        </div>);  
    }
}

export default About;
