import React from "react";
import axios from "axios"

import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";

const sampleQuote = {
  quote:
    "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
  character: "Homer Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
};

class App extends React.Component {
  state = {
    quote: sampleQuote
  }

  getQuote = () => {
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then(response => response.data)
    .then(data => {
      this.setState({quote: data[0]})
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <button type="button" onClick={this.getQuote}>Get new quote</button>
        <QuoteCard quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
