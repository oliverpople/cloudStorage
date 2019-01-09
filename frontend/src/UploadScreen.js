import React, { Component } from "react";
import "./App.css";
import LoginScreen from "./Loginscreen";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

var apiBaseUrl = "http://localhost:4000/api/";

var request = require("superagent");

class UploadScreen extends Component {
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
    return <div className="App" />;
  }
}

const style = {
  margin: 15
};

export default UploadScreen;
