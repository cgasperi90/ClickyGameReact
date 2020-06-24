import React, { Component } from 'react';
import NavBar from "./components/navbar";
import './App.css';
import Jumbotron from "./components/jumbotron";
import Cards from "./components/cards";

class Counter extends Component {
  state = {
    counter: 0,
    totalCounter: 0,
    clicked: {
      image1: false,
      image2: false,
      image3: false,
      image4: false,
      image5: false,
      image6: false,
      image7: false,
      image8: false,
      image9: false
    }
  }

  clickedFunction = (id) => {
    const {clicked} = this.state;
    console.log(id);
    if (clicked[id]) {
      this.resetGame();
    } else {
      clicked[id] = true;
      console.log(clicked[id]);
      this.setState({clicked: clicked});
    }
    
  }

  resetGame = () => {
    this.setState({
      counter: 0,
      clicked: {
        image1: false,
        image2: false,
        image3: false,
        image4: false,
        image5: false,
        image6: false,
        image7: false,
        image8: false,
        image9: false
      }
    })
  }

  incrementButton = (e) => {
    const {id} = e.target;
    const {totalCounter} = this.state;
    this.setState({counter: this.state.counter + 1}, function() {
      const {counter, clicked} = this.state;
      if (counter >= totalCounter && !clicked[id]) {
        this.setState({totalCounter: counter})
      }
      this.clickedFunction(id);
    })
    
  }

  // totalIncrement = () => {
  //   this.setState({totalCounter: this.state.totalCounter + 1})
  // }
  
  render () {
    return (
      <div>
        <NavBar />
        <Jumbotron
        counter={this.state.counter}
        totalCounter={this.state.totalCounter}
        />
        <div className="container">
          <Cards
          incrementButton={this.incrementButton}
          clickedFunction={this.clickedFunction}
          clicked={this.state.clicked}
          />
        </div>
      </div>
    );
  }

}


export default Counter;
