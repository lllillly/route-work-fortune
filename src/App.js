import React from "react";
import { Route } from "react-router-dom";
import Ascreen from "./Screens/Ascreen";
import Bscreen from "./Screens/Bscreen";
import Cscreen from "./Screens/Cscreen";
import Dscreen from "./Screens/Dscreen";
import Escreen from "./Screens/Escreen";
import Fscreen from "./Screens/Fscreen";
import Gscreen from "./Screens/Gscreen";
import Hscreen from "./Screens/Hscreen";
import Iscreen from "./Screens/Iscreen";
import Jscreen from "./Screens/Jscreen";
import Kscreen from "./Screens/Kscreen";
import Lscreen from "./Screens/Lscreen";
import Navigation from "./Layouts/Navigation";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: 0,
    };
  }

  render() {
    return (
      <div>
        <Route path="/" component={Navigation} />

        <Route exact path="/ascreen" component={Ascreen} />
        <Route exact path="/bscreen" component={Bscreen} />
        <Route exact path="/cscreen" component={Cscreen} />
        <Route exact path="/dscreen" component={Dscreen} />
        <Route exact path="/escreen" component={Escreen} />
        <Route exact path="/fscreen" component={Fscreen} />
        <Route exact path="/gscreen" component={Gscreen} />
        <Route exact path="/hscreen" component={Hscreen} />
        <Route exact path="/iscreen" component={Iscreen} />
        <Route exact path="/jscreen" component={Jscreen} />
        <Route exact path="/kscreen" component={Kscreen} />
        <Route exact path="/lscreen" component={Lscreen} />
      </div>
    );
  }
}

export default App;
