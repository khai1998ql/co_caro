import React, { Component, Fragment } from 'react';
import './../App.css';

class ElementRow extends Component {
    handleClick = count => {
        this.props.numberClick(count);
    }
    render(){
        var { rowNumber, elementNumber, number, mangCaro } = this.props;
        var count = parseInt(rowNumber) * parseInt(number) + parseInt(elementNumber);
        
        return (
            <Fragment>
                <span className="array_row_element" onClick={ () => this.handleClick(count) }>{ mangCaro[count] }</span>
            </Fragment>
        )
    }
}
export default ElementRow;
