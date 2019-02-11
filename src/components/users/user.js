import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import AddOperation from "../add-operation/AddOperation";
import { connect } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
// import Modal from "../Modal/Modal";
// import Backdrop from "../Backdrop/Backdrop";
// import accountClasses from "./account.module.css";
// import CheckBookForm from "./CheckBookForm";
import axios from "axios";

const styles = {
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
  }
};

class User extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      id: this.props.match.params.id,
      user: null,
    };
    this.goBack = this.goBack.bind(this);
  }

//   purchaseHandler = () => {
//     this.setState({ newCheckbook: true });
//   };

//   purchaseCancelHandler = () => {
//     this.setState({ newCheckbook: false });
//   };

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // CHECK THIS
    this.setState({
      account: nextProps.updatedAccount
    });
  }

  componentDidMount() {
    axios
      .get(`http://localhost:2200/users/${this.state.id}`, {
        withCredentials: true
      })
      .then(result => {
        console.log(result);
        this.setState({
          user: result.data[0]
        });
      });
  }

  goBack() {
    console.log(this.props.history);
    this.props.history.push("/users");
  }

  render() {
    console.log(this.state.user);
    const { classes } = this.props;
    return (
      <>
      
        <div className="container">
          <div className="row">
            <button onClick={this.goBack} className="btn btn-primary">
              {" "}
              &lt;{" "}
            </button>

            <h2 style={{ background: "lightblue", height: "46" }}>
              User Id: {this.state.id}
              {this.state.user && (
                <div>
                  name:
                  {this.state.user.name}
                </div>
               
             
              )}
              {this.state.user && <div>age:
              {this.state.user.age}</div>}
              {this.state.user && <div>balance:
              {this.state.user.balance}</div>}
              {this.state.user && <div>email:
              {this.state.user.email}</div>}

              {/* {!this.state.user && <div>loading...</div>} */}
           
            </h2>
          
           
          </div>
          <br />
          
        
      
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    updatedAccount: state.updatedAccount
  };
}

export default withStyles(styles)(connect(mapStateToProps)(User));
