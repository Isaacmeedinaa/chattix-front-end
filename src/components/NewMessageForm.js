import React, { Component } from "react";
import { API_ROOT, HEADERS } from "../constants/index";

class NewMessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      conversation_id: props.conversation_id,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ conversation_id: nextProps.conversation_id });
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(this.state),
    });

    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="newMessagesForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewMessageForm;
