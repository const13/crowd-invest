import React from 'react';
import Slide from '../slide/Slide'; 
import Tablets from '../stats/Stats';
import InvestRequests from '../invest-requests/InvestRequests';
import Greetings from '../greetings/Greetings';
import Howitworks from '../howitworks/Howitworks';

export class Investors extends React.Component {
    render () { 
        return (<div>  
            <Slide /> 
            <Tablets /> 
            <InvestRequests />
            <Greetings />
            <Howitworks />
            <Greetings />
        </div>);  
    }
}

export default Investors;
