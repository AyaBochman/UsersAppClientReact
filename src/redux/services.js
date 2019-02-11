
import axios from "axios";
const mainUrl = "http://localhost:2200/users";


export const getUsersService = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:2200/users/`, {
        withCredentials: true
      })
      .then(response => {
        // console.log(response.data);
        resolve(response.data);
        // return response.data;
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const delUsersService = async _id => {
  console.log("in service")
  console.log(_id)
  let response = await axios
    .delete(`http://localhost:2200/users/${_id}`)
    .then(response => {
      return response.data;
    });
  return response;
};


export const addUserService = async newUser => {
  let newuser = newUser.newUser
  let response = await axios
    .post(`http://localhost:2200/users/add-user`, {
      newuser
    }).then(response => {
      return response;
    })
  return response;


}

export const updateUsersService = async updatedUser => {
  console.log(updatedUser)
  let response = await axios
    .put(`http://localhost:2200/users/update-user`, {
      updatedUser
    })
    .then(response => {
      return response;
    });
  return response;

}

  //operations
//   export const postOperationsService = async action => {
//     let response = await fetch("http://localhost:2200/operations", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(action)
//   });
//   let data = await response.json();
//   console.log(data);
//   return data;

//   };


//   //login 
//   export const postLoginService = async action => {
//     console.log(action)
//     // console.log(action.currUser.username)
//     // console.log(action.currUser.password)
//     let currUser = {username:action.currUser.username, password: action.currUser.password}

//     let response = await fetch("http://localhost:2200/login", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(currUser)
//   });
//   console.log("this is the response from server")
//   console.log(response)
//   if(response.status == 200){
//     let data = await response.json();
//     console.log("this is the data")
//     console.log(data);

//       return data;
//   }else{
//     console.log("wronggg")
//   }

//   };

//   //new
//   export const delAccountsService = async action => {
//     let result = await deleteById(action.id);
//     return result;
//   };

//   const deleteById = id => {
//     return new Promise((resolve, reject) => {
//       axios.delete(`${mainUrl}/${id}`).then(response => {
//         resolve(response);
//       });
//     });
//   };

//   export const updateAccountsService = async action => {
//     let result = await updateById(
//       action.accountId,
//       action.operation,
//       action.amount
//     );
//     return result;
//   };

//   export const updateById = (accountId, operation, amount) => {
//     return new Promise((resolve, reject) => {
//       axios
//         .put(`${mainUrl}`, {
//           accountId,
//           operation,
//           amount
//         })
//         .then(response => {
//           resolve(response);
//         });
//     });
//   };

// export const orderCheckService = async(action)=>{
//   let response = await fetch("http://localhost:2200/order-check", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(action)
//   });
//   let data = await response.json();
//   console.log(data);
//   return data;

// }