import React, { Component, Fragment } from 'react';
import './../App.css';

class ElementRow extends Component {
    handleClick = count => {
        this.props.numberClick(count);
    }
    render(){
        var { rowNumber, elementNumber, number, mangCaro, activeElement } = this.props;
        var count = parseInt(rowNumber) * parseInt(number) + parseInt(elementNumber);
        var active = false;
        activeElement.map((element, index) => {
            if(element == count && element != null){
                active = true;
            }
        })
        var classActive = (active == true) ? 'array_row_element active_element' : 'array_row_element';
        return (
            <Fragment>
                <span className={classActive} onClick={ () => this.handleClick(count) }>{ mangCaro[count] }</span>
            </Fragment>
        )
    }
}
export default ElementRow;
