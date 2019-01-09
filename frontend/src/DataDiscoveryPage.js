import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import LoginScreen from "./Loginscreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogout(event) {
    // console.log("logout event fired",this.props);
    var loginPage = [];
    loginPage.push(<LoginScreen appContext={this.props.appContext} />);
    this.props.appContext.setState({ loginPage: loginPage, uploadScreen: [] });
  }

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
