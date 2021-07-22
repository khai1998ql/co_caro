import React, { Component, Fragment } from 'react';
import './App.css';
import RowArray from './components/RowArray';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 20,
      mangCaro : Array(49).fill(null),
      defaultPlayer : 'X',
      isFinal : false,
      winner : '',
    }
  }
  numberClick = (number) => {
    var { mangCaro, isFinal } = this.state;
    var number = parseInt(number);
    var currentValue = mangCaro[number];
    if(currentValue == null && isFinal == false){
      var player = this.state.defaultPlayer;
      var nextPlayer = player == 'X' ? 'O' : 'X';
      
      mangCaro[number] = player;
      this.setState({
        mangCaro : mangCaro,
        defaultPlayer : nextPlayer
      })
      this.checkWin();
    }
  }
  checkWin = () => {
    var number = parseInt(this.state.number);
    const { mangCaro, isFinal } = this.state;
    var result = false;
    var winner = '';
    for(var i = 0; i < number; i++){
      for(var j = 0; j < number; j++){
        if((mangCaro[(i+0)*number+j] == mangCaro[(i+1)*number+j] && mangCaro[(i+0)*number+j] == mangCaro[(i+2)*number+j] && mangCaro[(i+0)*number+j] == mangCaro[(i+3)*number+j] && mangCaro[(i+0)*number+j] == mangCaro[(i+4)*number+j] && mangCaro[(i+0)*number+j] != null) 
        || (mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+1] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+2] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+3] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+4] && mangCaro[(i*number)+j+0] != null)
        || (mangCaro[((i+0)*number)+j+0] == mangCaro[((i+1)*number)+j+1] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+2)*number)+j+2] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+3)*number)+j+3] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+4)*number)+j+4] && mangCaro[((i+0)*number)+j+0] != null)
        || (mangCaro[((i+0)*number)+(j-0)] == mangCaro[((i+1)*number)+(j-1)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+2)*number)+(j-2)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+3)*number)+(j-3)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+4)*number)+(j-4)] && mangCaro[((i+0)*number)+(j+0)] != null && (j >= 4))
        ){
          result = true;
          winner = mangCaro[(i+0)*number+j];
        }
        
      }
    }
    this.setState({
      isFinal : result,
      winner : winner
    })
    
  }
  resetTable = () => {
    this.setState({
      number : 7,
      mangCaro : Array(49).fill(null),
      defaultPlayer : 'X',
      isFinal : false,
      winner : '',
    })
  }
  titleGame = () => {
    const { defaultPlayer, isFinal, winner } = this.state;
    var result = null;
    if(isFinal == false){
      result = <div className="flex alert alert-primary">
        <div className="">Người chơi tiếp theo: <span className="badge bg-danger">{ defaultPlayer }</span></div>
        <button className="btn btn-success btn-sm" onClick={ this.resetTable }>Reset</button>
      </div>
    }else{
      result = <div className="flex alert alert-primary">
        <div className="">Người chơi chiến thằng <span className="badge bg-danger">{ winner }</span></div>
        <button className="btn btn-success btn-sm" onClick={ this.resetTable }>Reset</button>
      </div>
    }
    return result;
  }
  render(){
    var { number, mangCaro } = this.state;
    var rowArray = new Array();
    for(var i = 0; i < number; i++){
      rowArray[i] = i;
    }
    var rowArrayContent = rowArray.map((row, index) => {
      let result = '';
      result = <RowArray key={index} numberClick={ this.numberClick } rowNumber={row} number={number} mangCaro={mangCaro} />
      return result;
    })
    return (
      
      <Fragment>
        <div className="container mt-30">
          { this.titleGame() }
          <div className="mt-30 row_caro" style={ {width : 40*number, borderTop : '1px solid black', borderLeft : '1px solid black'} }>
            { rowArrayContent }
          </div>
        
        </div>
        
      </Fragment>
    )
  }
}

export default App;
