import React, { SyntheticEvent } from 'react';
import './CollapsibleBlock.scss';
import {ReactComponent as Minus} from '../img/icons/minus.svg';
import {ReactComponent as Plus} from '../img/icons/plus.svg';

interface Props {
    title: string
    content: string
}

interface State {
    open: boolean
}

export class CollapsibleBlock extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            open: false
        }
    }

    togglePanel =  (e: SyntheticEvent) => {
        this.setState({open: !this.state.open})
    }

    render() {
        let { open } = this.state;
        return (
        <div className="collapsible-container">
            <div onClick={(e) => this.togglePanel(e)}
                 className={`collapsible-header + ${open ? ' open' : null}`}>
                     {this.props.title}
                     {open ? <Minus /> : <Plus />}
            </div>
            {this.state.open && 
                <div className="collapsible-content">{this.props.content}</div>}
        </div>);
    }
}

export default CollapsibleBlock;