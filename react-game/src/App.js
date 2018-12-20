import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import img from "./img.json";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={Home} />
       </div>
    </Router>
  );
}

class App extends Component {
  state = {
    img,
    clickedArray: [],
    topScore: 0,
    score: 0,
  };

  randomize = (imgArray) => {
    for (let i = imgArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray;
  }

  addPoint = id => {
    const randomize = this.randomize(img);
    this.setState({img: randomize});
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: []});
      alert(" 💩 YOU LOST! Click ok to start over!"); 
      this.setState({ topScore: this.state.topScore +1})
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>South Park Game
        <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
        </Title>
        <p>Click each image to get a point. If all are clicked, you win. If you click the same image twice or you'll lose!!! </p>
        {this.state.img.map(img => (
          <Card
            addPoint={this.addPoint}
            id={img.id}
            key={img.id}
            name={img.name}
            image={img.image}
           
          />
        ))}
        <Footer><a href ="https://hdrattlo88.github.io/">Created By: Heather Drattlo &copy; 2018</a></Footer>
      </Wrapper>
    );
  }
}

export default App;
