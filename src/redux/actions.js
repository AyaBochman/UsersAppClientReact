import { ACTIONS } from "./action.config";

export const initApp = () => ({

    type: ACTIONS.USERS_INIT


});

export const getUsersReq = () => {
  console.log("inside getusersreq")
  // console.log(action)
  return {
    type: ACTIONS.GET_USERS
  };
};

export const getUsersDone=  users => { 
  console.log("inside getuserdone")
  return {
  type: ACTIONS.GET_USERS_DONE,
  users
};
}
// export const accountAdded = newAccount => {
//   return {
//     type: ACTIONS.ACCOUNT_ADDED,
//     newAccount
//   };
// };


// export const closeSnack = ()=>{
//   return{
//     type: ACTIONS.CLOSE_SNACK
//   };
// }

// //login
// export const loginUser = (currUser)  =>{
//   console.log("im inside actions")
//   console.log(currUser)
  
//   return{

//     type: ACTIONS.LOGIN,
//     currUser
//   }
// }


// export const loginDone = (currentUser)  =>{
//   console.log("im inside actions login done")
//   console.log(currentUser)
  
//   return{

//     type: ACTIONS.LOGIN_DONE,
//     currentUser
//   }
// }

// export const getAccountsDone = accounts => {
//   return {
//     type: ACTIONS.GET_ACCOUNTS_DONE,
//     accounts
//   };
// };



// export const init = () => {
//   return {
//     type: ACTIONS.INIT
//   };
// };

// //operations
// export const getOperationsDone = (operations) => {
//   return {
//     type: ACTIONS.GET_OPERATIONS , operations
//   };
// };

// //new
// export const deleteAccount = id => {
//   return {
//     type: ACTIONS.DELETE_ACCOUNT,
//     id
//   };
// };

// export const deleteAccountDone = id => {
//   return {
//     type: ACTIONS.DELETE_ACCOUNT_DONE,
//     id
//   };
// };

// export const updateAccount = (accountId, operation, amount) => {
//   console.log("the operation")
//   console.log(operation)
//   return {
//     type: ACTIONS.UPDATE_ACCOUNT,
//     accountId,
//     operation,
//     amount
//   };
// };

// export const updateDone = (updatedAcc) =>{
//   console.log("update done action")
//   console.log(updatedAcc)
//   return {
//     type: ACTIONS.UPDATE_DONE,
//     updatedAcc,

//   };
// }

// export const orderCheck = (quantity) => {
//   console.log("the operation")
//   console.log(quantity)
//   return {
//     type: ACTIONS.ORDER_CHECK,
//     quantity
//   };
// };