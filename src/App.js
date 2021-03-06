import React, { Component, Fragment } from 'react';
import './App.css';
import RowArray from './components/RowArray';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 10,
      mangCaro : Array(100).fill(null),
      defaultPlayer : 'X',
      isFinal : false,
      winner : '',
      activeElement : Array(5).fill(null)
    }
  }
  numberClick = (number) => {
    var { mangCaro, isFinal } = this.state;
    var currentValue = mangCaro[number];
    if(currentValue == null && isFinal == false){
      var player = this.state.defaultPlayer;
      var nextPlayer = player == 'X' ? 'O' : 'X';
      
      mangCaro[number] = player;
      this.setState({
        mangCaro : mangCaro,
        defaultPlayer : nextPlayer
      })
      
    }
    this.checkWin();
  }
  checkWin = () => {
    var number = parseInt(this.state.number);
    const { mangCaro, activeElement } = this.state;
    var result = false;
    var winner = '';
    for(var i = 0; i < number; i++){
      for(var j = 0; j < number; j++){
        if((mangCaro[(i+0)*number+j] == mangCaro[(i+1)*number+j] && mangCaro[(i+0)*number+j] == mangCaro[(i+2)*number+j] && mangCaro[(i+0)*number+j] == mangCaro[(i+3)*number+j] && mangCaro[(i+0)*number+j] == mangCaro[(i+4)*number+j] && mangCaro[(i+0)*number+j] != null) 
        // || (mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+1] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+2] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+3] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+4] && mangCaro[(i*number)+j+0] != null)
        // || (mangCaro[((i+0)*number)+j+0] == mangCaro[((i+1)*number)+j+1] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+2)*number)+j+2] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+3)*number)+j+3] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+4)*number)+j+4] && mangCaro[((i+0)*number)+j+0] != null)
        // || (mangCaro[((i+0)*number)+(j-0)] == mangCaro[((i+1)*number)+(j-1)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+2)*number)+(j-2)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+3)*number)+(j-3)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+4)*number)+(j-4)] && mangCaro[((i+0)*number)+(j+0)] != null && (j >= 4))
        ){
          result = true;
          winner = mangCaro[(i+0)*number+j];
          for(var k = 0; k < 5; k++){
            activeElement[k] = (i+k)*number+j;
          }
          this.setState({
            activeElement : activeElement
          })
        }else if(mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+1] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+2] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+3] && mangCaro[(i*number)+j+0] == mangCaro[(i*number)+j+4] && mangCaro[(i*number)+j+0] != null){
          result = true;
          winner = mangCaro[(i+0)*number+j];
          for(var k = 0; k < 5; k++){
            activeElement[k] = (i)*number+(j+k);
          }
          this.setState({
            activeElement : activeElement
          })
        }else if(mangCaro[((i+0)*number)+j+0] == mangCaro[((i+1)*number)+j+1] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+2)*number)+j+2] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+3)*number)+j+3] && mangCaro[((i+0)*number)+j+0] == mangCaro[((i+4)*number)+j+4] && mangCaro[((i+0)*number)+j+0] != null){
          result = true;
          winner = mangCaro[(i+0)*number+j];
          for(var k = 0; k < 5; k++){
            activeElement[k] = (i+k)*number+(j+k);
          }
          this.setState({
            activeElement : activeElement
          })
        }else if(mangCaro[((i+0)*number)+(j-0)] == mangCaro[((i+1)*number)+(j-1)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+2)*number)+(j-2)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+3)*number)+(j-3)] && mangCaro[((i+0)*number)+(j+0)] == mangCaro[((i+4)*number)+(j-4)] && mangCaro[((i+0)*number)+(j+0)] != null && (j >= 4)){
          result = true;
          winner = mangCaro[(i+0)*number+j];
          for(var k = 0; k < 5; k++){
            activeElement[k] = (i+k)*number+(j-k);
          }
          this.setState({
            activeElement : activeElement
          })
        }
        
      }
    }
    if(result){
      this.setState({
        isFinal : result,
        winner : winner,
        alertStatus : true
      })
      console.log(activeElement);
      // alert('Ng?????i ch??i chi???n th???ng: ' + winner);
    }
    
    
  }
  resetTable = () => {
    this.setState({
      number : 10,
      mangCaro : Array(100).fill(null),
      defaultPlayer : 'X',
      isFinal : false,
      winner : '',
      activeElement : Array(5).fill(null)
    })
  }
  onChangeTable = (event) => {
    var value = parseInt(event.target.value);
    this.setState({
      number : value,
      mangCaro : Array(value*value).fill(null),
      defaultPlayer : 'X',
      isFinal : false,
      winner : '',
      activeElement : Array(5).fill(null)
    })
  }
  titleGame = () => {
    const { defaultPlayer, isFinal, winner, number } = this.state;
    var result = null;
    if(isFinal == false){
      result = <div className="flex alert alert-primary">
        <div className="">Ng?????i ch??i ti???p theo: <span className="badge bg-danger">{ defaultPlayer }</span></div>
        <div>
          Nh???p s??? c???t : <input type="number" min={3} value={number} onChange={ this.onChangeTable }></input>
        </div>
        <button className="btn btn-success btn-sm" onClick={ this.resetTable }>Reset</button>
      </div>
    }else{
      result = <div className="flex alert alert-primary">
        <div className="">Ng?????i ch??i chi???n th???ng <span className="badge bg-danger">{ winner }</span></div>
        <div>
          Nh???p s??? c???t : <input type="number" min={3} value={number} onChange={ this.onChangeTable }></input>
        </div>
        <button className="btn btn-success btn-sm" onClick={ this.resetTable }>Reset</button>
      </div>
    }
    return result;
  }
  render(){
    var { number, mangCaro, activeElement } = this.state;
    var rowArray = new Array();
    for(var i = 0; i < number; i++){
      rowArray[i] = i;
    }
    
    var rowArrayContent = rowArray.map((row, index) => {
      let result = '';
      result = <RowArray key={index} numberClick={ this.numberClick } activeElement={activeElement} rowNumber={row} number={number} mangCaro={mangCaro} />
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
