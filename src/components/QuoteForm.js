import React from "react";
import "./QuoteForm.css";

const maxLength = 10;

class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value.length <= maxLength) {
      this.setState({ character: event.target.value });
      event.target.className = "length-ok";
    } else {
      event.target.className = "length-maximum-reached";
    }
  }

  render() {
    const numRemaining = maxLength - this.state.character.length;
    return (
      <form className="QuoteForm">
        <label htmlFor="character">Character:</label>
        <input
          id="character"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
        />
        <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
        <p>You typed: {this.state.character}</p>
      </form>
    );
  }
}

export default QuoteForm;
