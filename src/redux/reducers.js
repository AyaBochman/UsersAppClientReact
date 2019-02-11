import { ACTIONS } from "./action.config";

export default function reducers(state = {}, action) {
  switch (action.type) {

    case ACTIONS.INIT: {
      // console.log("im in init")
      return {
        ...state,
        users: []
      };
    }

    case ACTIONS.GET_USERS_DONE: {
      // console.log("inside get users done")
      let users = [];

      users = state.users.concat(action.users);

      return {
        ...state,
        users: users
      };
    }

    case ACTIONS.DELETE_USER_DONE: {
 
      const deletedId = action.id;
 
      let currentUsersArray = [...state.users];
      let newUsersArray = currentUsersArray.filter((user) => {
  
        return user.userId != deletedId;
      
      });
      
    
      return {
        ...state,
        users: newUsersArray
      };
    }

    case ACTIONS.ADD_USER_DONE: {
      console.log(action.addedUser)
      let users = [];
      users = state.users.concat(action.addedUser);
      return {
        ...state,
        users: users
      };
    }

    case ACTIONS.UPDATE_USER_DONE: {
      let userss = [...state.users];
      console.log(action.updatedUser)
      userss.map((user,index)=>{
        if(user._id == action.updatedUser._id){
          userss[index] = action.updatedUser
        }

      })
    console.log(userss)
      return {
        ...state,
        users: userss
    
      };
    }



    default:
      console.log("default")
      return state;
  }
}


// case ACTIONS.GET_USERS:
    // console.log("from reducer get users")
    // return {
    //   users: '',

    // };
    // case ACTIONS.GET_USERS_DONE: {
    //   console.log("from reducer")
    //   let theusers = [...state.users, ...action.users];
    //   // console.log(action.users)
    //   return {
    //     ...state,
    //     users: theusers
    //   };
    // }
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


// //update
// case ACTIONS.UPDATE_DONE: {
//   const updatedAcc = action;
//   console.log(updatedAcc.updatedAcc)

//   return{
//     ...state,
//     updatedAcc: updatedAcc.updatedAcc
//   }

// }

