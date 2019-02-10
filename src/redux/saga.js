import { takeEvery, fork, call, put } from "redux-saga/effects";
import {
  getUsersDone,
  
} from "./actions";
//services/
import {
  getUsersService
//   getAccountsService,
//   postLoginService,
// postOperationsService,
//   delAccountsService,
//   updateAccountsService,
//   orderCheckService
} from "./services";
import { ACTIONS } from "./action.config";


function* getUsers(action) {
  try {
    console.log("im in saga")
    const users = yield call(getUsersService,action);
    console.log(users)
    yield put(getUsersDone(users));
  } catch (ex) {
    //   todo  yield put error action \ no accounts account
  }
}

function* GetUsers() {
  console.log("GetUsers in saga");
  console.log(ACTIONS.GET_USERS)
  yield takeEvery(ACTIONS.GET_USERS, getUsers);
}



// function* getAccounts(action) {
//   try {
//     const accounts = yield call(getAccountsService, action);

//     yield put(getAccountsDone(accounts));
//   } catch (ex) {
//     //   todo  yield put error action \ no accounts account
//   }
// }

// function* GetAccounts() {
//   console.log("GetAccounts");
//   yield takeEvery(ACTIONS.GET_ACCOUNTS, getAccounts);
// }

//login
// function* loginUser(action) {
//   try {
//     const currentUser = yield call(postLoginService, action );
//     console.log("hi im in saga")
//     console.log(action)
//     console.log(currentUser)
//     yield put(loginDone(currentUser));
//   } catch (ex) {
//     //   todo  yield put error action 
//   }
// }

// function* GetLogin(){
//   yield takeEvery(ACTIONS.LOGIN, loginUser);
// }


// //operations
// function* getOperations(action) {
//   try {
//     const operations = yield call(postOperationsService ,action);
//     yield put(getOperationsDone(operations));
//   } catch (ex) {
//     //   todo  yield put error action \ no accounts account
//   }
// }

// function* GetOperations() {
//   yield takeEvery(ACTIONS.GET_OPERATIONS, getOperations);
// }

// function* getOrder(action){
//   try {
//     const quantity = yield call(orderCheckService ,action);
//     // yield put(orderCheckService(quantity));
//   } catch (ex) {
//     //   todo  yield put error action \ no accounts account
//   }
// }

// function* GetOrder(){
//   yield takeEvery(ACTIONS.ORDER_CHECK, getOrder);
// }


// //new

// function* deleteAccount(action) {
//   try {
//     const del = yield call(delAccountsService, action);
//     yield put(deleteAccountDone(action.id));
//     // yield put(init());
//     // yield put(getAccountFromApi(0, 20));
//   } catch (ex) {
//     //   todo  yield put error action \ no accounts account
//   }
// }

// function* updateAccount(action) {
//   try {
//     const update = yield call(updateAccountsService, action);
//     console.log("update saga")
//     console.log(update.data.message);
//     yield put(updateDone(update.data.message))
    
//     //some action!
//   } catch (ex) {
//     //   todo  yield put error action \ no accounts account
//   }
// }

// function* DeleteAccount() {
//   yield takeEvery(ACTIONS.DELETE_ACCOUNT, deleteAccount);
// }

// function* UpdateAccount() {
//   yield takeEvery(ACTIONS.UPDATE_ACCOUNT, updateAccount);
// }

function* rootSaga() {
  yield [fork(GetUsers)];
}

// fork(GetOperations), fork(GetLogin), fork(DeleteAccount),
//     fork(UpdateAccount), fork(GetOrder)
export default rootSaga;