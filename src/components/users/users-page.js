import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// import InfiniteScroll from "react-infinite-scroller";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { getAccounts, init } from "./../../redux/actions";
import { allActions } from "../../redux/index";
import InfiniteScroll from "react-infinite-scroller";



import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});


class UsersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      currUser: {
        userId: "",
        name: "",
        balance: 0,
        gender: ""
      }
    };
    // this.getAccounts = this.getAccounts.bind(this);
    // this.sortBy = this.sortBy.bind(this)
  }

  componentWillMount = () => {
    // this.props.actions.getUsers();
  }

  componentDidMount = () => {

    this.props.actions.init();
    this.props.actions.getUsers();

  };

  openModal = (user) => {
    console.log(user)
    this.setState({
      open: true,
      currUser: user
    })
    console.log(this.state.currUser)
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleChange = e => {
    let currUser = {
      ...this.state.currUser,
      [e.currentTarget.name]: e.target.value
    };
    console.log(currUser)
    this.setState({
      currUser: currUser
    });
    // let updatedUser = {
    //   ...this.state.updatedUser,
    //   [e.currentTarget.name]: e.target.value
    // };
    // this.setState({
    //   currUser:e.target.value
    // });
  }

  saveUpdate = () =>{
    this.props.actions.updateUser(this.state.currUser)
    this.setState({
      open: false
    })
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     skip: nextProps.users.length
  //   });
  // }

  // componentDidMount() {
  //   // this.props.actions.init();


  // }

  //   sortBy(e){
  //     this.props.actions.init();
  //     this.props.actions.getAccounts(this.state.skip, 
  //       this.state.take, 
  //       e.currentTarget.innerText);
  //     // this.setState({
  //     //   ...this.state,
  //     //   sort: e.currentTarget.innerText
  //     // })
  //   }


  render() {
    const { classes } = this.props;
 
    // console.log(this.props.users)
    const { users } = this.props;
    return (
      <div className="container">
        <h1>My Users</h1>
        <div className="row">

          {this.props.users.map((currUser, index) => {
            return (
              <div
                key={index}
                style={{ display: "inline", margin: "10px" }}
                className="col-3"
              >
                <div
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    height: "150px",
                    boxShadow: "5px 10px",
                    position: "relative"
                  }}
                >
                  <Link to={`/user/${currUser.userId}`}>
                    <h4> {currUser.userId} </h4>
                  </Link>

                  <div>{currUser.name} </div>
                  <div>{currUser.gender} </div>
                  <div>{currUser.company} </div>



                  {/* DELETE BUTTON */}
                  <button
                    className={"btn btn-danger"}
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onClick={() =>
                      this.props.actions.deleteUser(currUser.userId)
                    }
                  >
                    X
                      </button>

                  <button
                    className={"btn btn-success"}
                    style={{ position: "absolute", top: 0, left: 0 }}
                    onClick={() =>
                      this.openModal(currUser)
                    }
                  >
                    EDIT
                      </button>
                </div>
                <div>



                </div>

              </div>
            );
          })}

          {/* modal */}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <TextField
                id="standard-name"
                label="Name"
                name="name"
                className={classes.textField}
                value={this.state.currUser.name}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Balance"
                name="balance"
                className={classes.textField}
                value={this.state.currUser.balance}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="userId"
                name="userId"
                className={classes.textField}
                value={this.state.currUser.userId}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                id="standard-name"
                label="Gender"
                name="gender"
                className={classes.textField}
                value={this.state.currUser.gender}
                onChange={this.handleChange}
                margin="normal"
              />

              <button className={"btn btn-success"}
             onClick={
              this.saveUpdate
             
             
            }>Save
              </button>

            </div>
          </Modal>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        init: allActions.init,
        getUsers: allActions.getUsersReq,
        deleteUser: allActions.deleteUser,
        updateUser: allActions.updateUser


        // init: bankActions.init
      },
      dispatch
    )
  };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersPage)
);