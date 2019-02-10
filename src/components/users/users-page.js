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

    this.state = { users: "" };
    // this.getAccounts = this.getAccounts.bind(this);
    // this.sortBy = this.sortBy.bind(this)
  }

componentWillMount = ()=>{
  // this.props.actions.getUsers();
}

  componentDidMount = () => {
    this.props.actions.initApp();
    // this.props.actions.getUsers();
    this.props.actions.getUsers();
    // this.props.actions.getUsers(
    //   this.state.skip,
    //   this.state.limit,
    //   this.state.sort
    // );
  };

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
    // console.log(this.state.users)
    const { users } = this.props;
    return (
      <div className="container">
        <div className="row">
       <h1>My Users</h1>
{/*    
      <InfiniteScroll
        loadMore={() => {
          this.props.actions.getAccounts(
            this.state.skip,
            this.state.limit,
            this.state.sort
          );
        }}
        hasMore={this.props.hasMore}
        initialLoad={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
      
      </InfiniteScroll> */}
    
    
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
        initApp: allActions.initApp,
        getUsers: allActions.getUsersReq,
        // usersHere: allActions.getUsersDone
        // deleteAccount: bankActions.deleteAccount,
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