import { takeEvery, fork, call, put } from "redux-saga/effects";
import { all } from 'redux-saga/effects'
//services/
import {
  getUsersService,
  delUsersService,
  addUserService,
  updateUsersService
//   getAccountsService,
//   postLoginService,
// postOperationsService,
//   delAccountsService,
//   updateAccountsService,
//   orderCheckService
} from "./services";
import {allActions} from "./index";
import { ACTIONS } from "./action.config";


function* getUsers(action) {
  try {
    // console.log("im in saga")
    const users = yield call(getUsersService,action);
    // console.log(users)
    yield put(allActions.getUsersDone(users));
  } catch (ex) {
    //   todo  yield put error action \ no accounts account
  }
}

function* GetUsers() {
  // console.log("GetUsers in saga");
  console.log(ACTIONS.GET_USERS)
  yield takeEvery(ACTIONS.GET_USERS, getUsers);
}

//delete
function* deleteUser(action) {
  console.log("im in saga delete")
  console.log(action.id)
  try {
    const delUser = yield call(delUsersService, action.id);
    yield put(allActions.deleteUserDone(delUser));
    // yield put(init());
    // yield put(getAccountFromApi(0, 20));
  } catch (ex) {
    //   todo  yield put error action \ no accounts account
  }
}

function* DeleteUser() {
  yield takeEvery(ACTIONS.DELETE_USER, deleteUser);
}

//add
function* addUser(action){
  try {
    const addedUser = yield call(addUserService, action);
    console.log(addedUser)
    yield put(allActions.addUserDone(addedUser.data));
    // yield put(init());
    // yield put(getAccountFromApi(0, 20));
  } catch (ex) {
    //   todo  yield put error action \ no accounts account
  }
}

function* AddUser() {
  yield takeEvery(ACTIONS.ADD_USER, addUser);
}

//update
function* updateUser(action) {
  console.log(action)
  try {
    const update = yield call(updateUsersService, action);
    console.log(update.data);
    yield put(allActions.updateUserDone(update.data))
    
  } catch (ex) {
    //   todo  yield put error action \ no accounts account
  }
}



function* UpdateUser() {
  yield takeEvery(ACTIONS.UPDATE_USER, updateUser);
}


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





function* rootSaga() {
  yield all([fork(GetUsers), fork(DeleteUser), fork(AddUser), fork(UpdateUser)]);
}

// fork(GetOperations), fork(GetLogin), fork(DeleteAccount),
//     fork(UpdateAccount), fork(GetOrder)
export default rootSaga;