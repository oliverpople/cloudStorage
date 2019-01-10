import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// import LoginScreen from "./Loginscreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleLogout(event) {
  //   var loginPage = [];
  //   loginPage.push(
  //     <LoginScreen key={"login-screen"} appContext={this.props.appContext} />
  //   );
  //   this.props.appContext.setState({ loginPage: loginPage, dataScreen: [] });
  // }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title="Data Discovery Page" />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
