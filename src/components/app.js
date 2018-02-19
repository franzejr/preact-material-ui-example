import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Home from "../routes/home";
import Profile from "../routes/profile";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

import { Provider } from "preact-redux";
import store from "../store";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";
import Typography from "material-ui/Typography";

import { withStyles } from "material-ui/styles";
import withRoot from "../withRoot";
if (module.hot) {
  require("preact/debug");
}
const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    console.log(e);
    this.currentUrl = e.url;
  };

  render() {
    console.log("props", this.props);
    const { classes } = this.props;
    const { open } = this.state;
    console.log("APP");
    return (
      <div id="app">
        <div className={classes.root}>
          <Typography variant="display1" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subheading" gutterBottom>
            example project
          </Typography>
          <Button variant="raised" color="secondary" onClick={this.handleClick}>
            Super Secret Password
          </Button>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
