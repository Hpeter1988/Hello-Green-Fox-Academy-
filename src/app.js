import React from 'react';
import {Button} from './button';
import{connect} from 'react-redux'

class App extends React.Component {
constructor(props){
  super(props);
  console.log(props)
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
        {this.props.count}
        <Button handleClick={this.eatOne} name="Eat one" />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    count: state.count
  }
}

export default connect(mapStateToProps)(App);