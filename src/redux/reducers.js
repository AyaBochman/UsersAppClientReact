import { ACTIONS } from "./action.config";

export default function reducers(state = {}, action) {
  switch (action.type) {

    case ACTIONS.USERS_INIT: {
      return {
        ...state,
        users: []
      };
    }
    // case ACTIONS.GET_USERS:
    // console.log("from reducer get users")
    // return {
    //   users: '',
    
    // };
    case ACTIONS.GET_USERS_DONE: {
      console.log("from reducer")
      let theusers = [...state.users, ...action.users];
      // console.log(action.users)
      return {
        ...state,
        users: theusers
      };
    }
    // case ACTIONS.INIT: {
    //   return {
    //     accounts: [],
    //     snackBarStatus: false,
    //     message: ""
    //   };
    // }

    // case ACTIONS.ACCOUNT_ADDED: {
    //   return {
    //     snackBarStatus: true,
    //     message: `account ${action.newAccount.id} added`
    //   };
    // }

    // case ACTIONS.CLOSE_SNACK: {
    //   console.log("hey close k")
    //   return{
    //     snackBarStatus: false
    //   };
    // }



 
// //operations
//     case ACTIONS.GET_OPERATIONS:{
//       return {
//         ...state,
//         operations: state.operations
//       };
//     }

//     //new
// case ACTIONS.DELETE_ACCOUNT_DONE: {
//   const deletedId = action.id;
//   let currentAccountsArray = [...state.accounts];
//   let found = currentAccountsArray.findIndex((account, index) => {
//     return account._id == deletedId;
//   });
//   if (found) {
//     currentAccountsArray.splice(found, 1);
//   }

//   return {
//     ...state,
//     accounts: currentAccountsArray
//   };
// }

// //update
// case ACTIONS.UPDATE_DONE: {
//   const updatedAcc = action;
//   console.log(updatedAcc.updatedAcc)

//   return{
//     ...state,
//     updatedAcc: updatedAcc.updatedAcc
//   }

// }


    default:
    console.log("default")
      return state;
  }
}


