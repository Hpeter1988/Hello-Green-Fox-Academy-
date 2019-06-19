import React from 'react';
import Button from './button';


class App extends React.Component {
constructor(){
  super();
  this.state = {
    count: 0
  }
}

componentDidMount = () => {
  document.addEventListener('keyup', (event) => {
    if (event.keyCode === 38) {
      this.buyOne()
    } else if (event.keyCode === 40) {
      this.eatOne()
    }
  });
};


buyOne = () => {
  this.setState({count: this.state.count + 1})
}

eatOne = () => {this.state.count > 0 ?
  this.setState({count: this.state.count - 1}):
  this.setState({count: this.state.count + 0})
}


  render() {
    return (
      <div className="App">
        <Button handleClick={this.buyOne} name="Buy one" />
        {this.state.count}
        <Button handleClick={this.eatOne} name="Eat one" />
      </div>
    );
  }
}

export default App;