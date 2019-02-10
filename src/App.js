import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import Header from "./components/header/header";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UsersPage from "./components/users/users-page"
import { allActions } from "./redux/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
    <Header/>
              <div>

              {/* routes */}
            <Switch>
              <Route key="users" path="/users" component={UsersPage} />
              {/* <Route key="operations" path="/operations" component={accountOperation} />
              <Route key="login" path="/login" component={Login} />
              <Route key="order" path="/order-check" component={checkOrder} />
              <Route
                key="bank-details"
                path="/bank-details"
                component={BankDetails}
              />
              <Route
                key="add-account"
                path="/add-account"
                component={addAccount}
              />
              <Route
                key="account"
                exact={true}
                path="/account/:id"
                component={Account}
              /> */}
              <Redirect from="/" to="/users" />
            </Switch>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}


// function mapStateToProps(state) {
//   return {
//     snackBarStatus: state.snackBarStatus,
//     message: state.message
    
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
     
        getUsers: allActions.getUsersReq

      },
      dispatch
    )
  };
}


export default connect(mapDispatchToProps)(App);
