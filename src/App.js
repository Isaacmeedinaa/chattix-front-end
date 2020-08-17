import React, { Component } from "react";

import ConversationList from "./components/ConversationsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConversationList />
      </div>
    );
  }
}

export default App;
