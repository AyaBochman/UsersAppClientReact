import { ACTIONS } from "./action.config";

export const init = () => {
  return {
    type: ACTIONS.INIT
  };
};

export const getUsersReq = () => {
  console.log("get users action")
  console.log(ACTIONS.GET_USERS)

  return {
    type: ACTIONS.GET_USERS
  };
};

export const getUsersDone = users => { 
  // console.log("inside getuserdone")
  return {
  type: ACTIONS.GET_USERS_DONE,
  users
};
}

//delete
export const deleteUser = id => {
  console.log(id)
  console.log("im in del user")
  return {
    type: ACTIONS.DELETE_USER,
    id
  };
};

export const deleteUserDone = id => {
  console.log("im in del user done")
  return {
    type: ACTIONS.DELETE_USER_DONE,
    id
  };
}

export const addNewUser = newUser =>{
  return {
    type: ACTIONS.ADD_USER,
    newUser
  };

}

export const addUserDone = addedUser =>{
  return {
    type: ACTIONS.ADD_USER_DONE,
    addedUser
  };

}

export const updateUser = updatedUser =>{
  console.log(updatedUser)
  console.log("update user")
  return {
    type: ACTIONS.UPDATE_USER,
    updatedUser
  };

}


export const updateUserDone = updatedUser => {
  return {
    type: ACTIONS.UPDATE_USER_DONE,
    updatedUser
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