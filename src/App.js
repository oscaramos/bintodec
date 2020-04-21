import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binary: '',
      decimal: ''
    };
  }

  bin2dec = binary => {
    return binary.split('').reverse().reduce(
      (prev, value, index) => prev + value * (2 ** index)
      , 0)
  };

  dec2bin = decimal => {
    let binary = '';
    while (decimal) {
      binary = (decimal%2 ? '1' : '0') + binary;
      decimal = Math.floor(decimal/2);
    }
    return binary;
  }

  changeBinary = (e) => {
    const binary = e.target.value;
    const isValidInput = /^[01]*$/.test(binary);
    if (isValidInput)
      this.setState({
        binary,
        decimal: this.bin2dec(binary)
      });
    else
      alert('Only valid 1 or 0');
  };

  changeDecimal = (e) => {
    const decimal = e.target.value;
    const isValidInput = /^[\d]*$/.test(decimal);
    if (isValidInput) {
      this.setState({
        decimal,
        binary: this.dec2bin(decimal)
      });
    }
    else {
      alert('Only valid numbers');
    }
  };

  render() {
    const { binary, decimal } = this.state;
    return (
      <div className='App'>
        <div className='bin'>
          <div className='bin-form'>
            <input type='text' className='binary-text' value={binary} onChange={this.changeBinary} />
            <div className='binary-line' />
          </div>
        </div>
        <div className='dec'>
          <div className='dec-form'>
            <input type='text' className='decimal-text' value={decimal} onChange={this.changeDecimal} />
            <div className='decimal-line' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
