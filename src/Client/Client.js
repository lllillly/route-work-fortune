import React from "react";
import App from "../App";
import { HashRouter } from "react-router-dom";

class Client extends React.Component {
  // RootJs와 같은 역할을 하는 컴포넌트
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}

export default Client;
