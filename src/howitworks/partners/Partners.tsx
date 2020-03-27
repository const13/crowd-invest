import React from 'react';
import './Partners.scss';
import {ReactComponent as Google} from '../../img/Google.svg';
import {ReactComponent as AstellKern} from '../../img/astell-kern.svg';
import {ReactComponent as HarmanKardon} from '../../img/Harman_Kardon.svg';
import {ReactComponent as Marshall} from '../../img/Marshall.svg';
import {ReactComponent as MediaMarkt} from '../../img/Media_Markt.svg';
import {ReactComponent as Mercedes} from '../../img/mercedes.svg';
import {ReactComponent as Yandex} from '../../img/Yandex.svg';

export class Partners extends React.Component {
    render () {
        return (
        <section className="partners">
            <div className="partners-container">
                <div className="partners-title">Наши партнеры</div>
                <div className="partners-logo">
                    <Google />
                    <MediaMarkt />
                    <Mercedes />
                    <MediaMarkt />
                    <Mercedes />
                    <Google />
                    <Mercedes />
                    <Google />
                </div>
            </div>
        </section>
        );
    } 
}

export default Partners;
