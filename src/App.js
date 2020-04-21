import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binary: '10111101',
      decimal: '377'
    };
  }

  render() {
    const { binary, decimal } = this.state;
    return (
      <div className='App'>
        <div className='bin'>
          <div className='bin-form'>
            <input type='text' className='binary-text' value={binary} />
            <div className='binary-line' />
          </div>
        </div>
        <div className='dec'>
          <div className='dec-form'>
            <input type='text' className='decimal-text' value={decimal} />
            <div className='decimal-line' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
