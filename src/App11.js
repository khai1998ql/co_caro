import React, { Component, Fragment } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 7,
      mangCaro : Array(49).fill(null),
      defaultPlayer : 'X',
      isFinal : false,
      winner : '',
    }
  }
  handleClick = (number) => {
    // console.log(number);
    const { mangCaro, isFinal } = this.state;
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
    // return result;
    
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
    var { mangCaro } = this.state;
    return (
      
      <Fragment>
        <div className="container mt-30">
          { this.titleGame() }
          <div className="mt-30 row_caro">
            <div className="row_array">
              <span className="array_row_element" onClick={ () => this.handleClick(0) }>{ mangCaro[0] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(1) }>{ mangCaro[1] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(2) }>{ mangCaro[2] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(3) }>{ mangCaro[3] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(4) }>{ mangCaro[4] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(5) }>{ mangCaro[5] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(6) }>{ mangCaro[6] }</span>
            </div>
            <div className="row_array">
              <span className="array_row_element" onClick={ () => this.handleClick(7) }>{ mangCaro[7] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(8) }>{ mangCaro[8] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(9) }>{ mangCaro[9] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(10) }>{ mangCaro[10] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(11) }>{ mangCaro[11] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(12) }>{ mangCaro[12] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(13) }>{ mangCaro[13] }</span>
            </div>
            <div className="row_array">
              <span className="array_row_element" onClick={ () => this.handleClick(14) }>{ mangCaro[14] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(15) }>{ mangCaro[15] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(16) }>{ mangCaro[16] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(17) }>{ mangCaro[17] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(18) }>{ mangCaro[18] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(19) }>{ mangCaro[19] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(20) }>{ mangCaro[20] }</span>
            </div>
            <div className="row_array">
              <span className="array_row_element" onClick={ () => this.handleClick(21) }>{ mangCaro[21] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(22) }>{ mangCaro[22] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(23) }>{ mangCaro[23] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(24) }>{ mangCaro[24] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(25) }>{ mangCaro[25] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(26) }>{ mangCaro[26] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(27) }>{ mangCaro[27] }</span>
            </div>
            <div className="row_array">
              <span className="array_row_element" onClick={ () => this.handleClick(28) }>{ mangCaro[28] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(29) }>{ mangCaro[29] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(30) }>{ mangCaro[30] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(31) }>{ mangCaro[31] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(32) }>{ mangCaro[32] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(33) }>{ mangCaro[33] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(34) }>{ mangCaro[34] }</span>
            </div>
            <div className="row_array">
              <span className="array_row_element" onClick={ () => this.handleClick(35) }>{ mangCaro[35] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(36) }>{ mangCaro[36] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(37) }>{ mangCaro[37] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(38) }>{ mangCaro[38] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(39) }>{ mangCaro[39] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(40) }>{ mangCaro[40] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(41) }>{ mangCaro[41] }</span>
            </div>
            <div className="row_array">
              <span className="array_row_element" onClick={ () => this.handleClick(42) }>{ mangCaro[42] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(43) }>{ mangCaro[43] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(44) }>{ mangCaro[44] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(45) }>{ mangCaro[45] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(46) }>{ mangCaro[46] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(47) }>{ mangCaro[47] }</span>
              <span className="array_row_element" onClick={ () => this.handleClick(48) }>{ mangCaro[48] }</span>
            </div>
          </div>
        
        </div>
        
      </Fragment>
    )
  }
}

export default App;
