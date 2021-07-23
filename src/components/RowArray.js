import React, { Component, Fragment } from 'react';
import './../App.css';
import ElementRow from './ElementRow';

class RowArray extends Component {
    render(){
        var { rowNumber, number, mangCaro, activeElement } = this.props;
        var rowArray = new Array();
        for(var i = 0; i < number; i++){
            rowArray[i] = i;
        }
        var elementContent = rowArray.map((element, index) => {
            let result = '';
            result = <ElementRow key={index} numberClick={this.props.numberClick} rowNumber={rowNumber} activeElement={activeElement} elementNumber={element} number={number} mangCaro={mangCaro}  />
            return result;
        })
        return (
            <Fragment>
                <div className="row_array">
                    { elementContent }
                </div>
            </Fragment>
        )
    }
}
export default RowArray;
