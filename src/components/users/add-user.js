import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import { allActions } from "../../redux/index";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { accountAdded } from "../../redux/actions";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});
class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        userId: "",
        name: "",
        balance: 0,
        gender: ""
      },
    //   resultMessage: "",
    //   isModalOpened: false
    };
    //resultMessage
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

  handleInputChange = e => {
    let currentUser = {
      ...this.state.currentUser,
      [e.currentTarget.name]: e.target.value
    };
    this.setState(prevState => ({
        currentUser
    }));
  };

//   handleClose = () => {
//     this.setState(prevState => ({
//       isModalOpened: false
//     }));
//     this.props.history.push("/account");
//   };

createUser = () => {
    console.log(this.state.currentUser)
    let newUser = this.state.currentUser

    this.props.actions.addingUser(newUser); 
    this.props.history.push("/users");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2> Add New User </h2>

        <TextField
          id="userId"
          name="userId"
          label="userId"
          className={classes.textField}
          value={this.state.userId}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <br />
        <TextField
          id="name"
          label="name"
          name="name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <br />
        <TextField
          id="balance"
          label="balance"
          name="balance"
          type="number"
          className={classes.textField}
          value={this.state.balance}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <br />
        <TextField
          id="gender"
          label="gender"
          name="gender"
          className={classes.textField}
          value={this.state.gender}
          onChange={this.handleInputChange}
          margin="normal"
        />
        <br/>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.createUser}
        >
          create User
        </Button>

      
      </div>
    );
  }
}

AddUser.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
  users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addingUser: allActions.addNewUser
      },
      dispatch
    )
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddUser)
);


