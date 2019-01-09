import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
var apiBaseUrl = "http://localhost:4000/api/";
import axios from "axios";
import DataDiscoveryPage from "./DataDiscoveryPage";

const style = {
  margin: 15
};

class Login extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider key={"local-login-Component"}>
        <div>
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={(event, newValue) =>
              this.setState({ username: newValue })
            }
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={event => this.handleClick(event)}
          />
        </div>
      </MuiThemeProvider>
    );
    this.state = {
      username: "",
      password: "",
      menuValue: 1,
      loginComponent: localloginComponent
    };
  }
  componentWillMount() {
    // console.log("willmount prop values",this.props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider key={"local-login-Component"}>
        <div>
          <TextField
            hintText="Enter your Email"
            floatingLabelText="email"
            onChange={(event, newValue) =>
              this.setState({ username: newValue })
            }
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={event => this.handleClick(event)}
          />
        </div>
      </MuiThemeProvider>
    );
    this.setState({
      menuValue: 1,
      loginComponent: localloginComponent
    });
  }
  handleClick(event) {
    var self = this;
    var payload = {
      email: this.state.username,
      password: this.state.password
    };
    axios
      .post(apiBaseUrl + "login", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successfull");
          var uploadScreen = [];
          uploadScreen.push(
            <DataDiscoveryPage
              key={"Data-Discovery-Page"}
              appContext={self.props.appContext}
            />
          );
          self.props.appContext.setState({
            loginPage: [],
            uploadScreen: uploadScreen
          });
        } else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert(response.data.success);
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="Login" />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <p>Login as:</p>
          </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

export default Login;
