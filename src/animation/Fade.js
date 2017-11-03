import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

/*const Fade = ({ in: inProp }) => (

/!*  {(state) => (

  I'm A fade Transition!

)}*!/

);*/

class App extends React.Component{
  constructor(){
    super();
    this.state = { in: false };
  }
  toggleEnterState = () => {
    this.setState({ in: true });
  }
  render() {
    return (
      <div onClick={this.toggleEnterState}>Click to Enter</div>
  );
  }
}