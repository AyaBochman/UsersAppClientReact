
import axios from "axios";
const mainUrl = "http://localhost:2200/users";


export const getUsersService = ()=> {
  return axios.get(`http://localhost:2200/users`);
  };

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