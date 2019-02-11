import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
// import InfiniteScroll from "react-infinite-scroller";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { getAccounts, init } from "./../../redux/actions";
import { allActions } from "../../redux/index";
import InfiniteScroll from "react-infinite-scroller";




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


class UsersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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

  openModal = (user) =>{
console.log(user)
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
    console.log("hey component")
    console.log(this.props.users)
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


              </div>
            );
          })}


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