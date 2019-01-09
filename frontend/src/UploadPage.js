import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import UploadScreen from "./UploadScreen";
import LoginScreen from "./Loginscreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: [] };
  }
  componentDidMount() {
    var currentScreen = [];
    currentScreen.push(<UploadScreen appContext={this.props.appContext} />);
    this.setState({ currentScreen });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title="Upload Page" />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
