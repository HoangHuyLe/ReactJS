import { fork, call, put, take, delay, takeEvery } from 'redux-saga/effects';
import { getListTask, addTask, deleteTask, updateTask } from '../apis/tasks';
import {getAccount} from './../apis/accounts';
import * as ManageWorkTypes from './../constants/ManageWork/ActionTypes';
import {
    fetchListTaskSuccess,
    fetchListTaskFailed,
    saveTaskSuccess,
    saveTaskFailed,
    deleteTaskSuccess,
    deleteTaskFailed,
    updateStatusSuccess,
    updateStatusFailed
} from './../actions/ManageWork/index';
import { 
    STATUS_CODE,
    AUTHENTICATE 
} from './../constants/index';
import { showLoading, hideLoading } from '../actions/loading';

function* watchFetchListTaskAction() {
    while (true) {
        const action = yield take(ManageWorkTypes.FETCH_TASK); // Khi FETCH_TASK được dispatch => code phía sau dòng lệnh này mới chạy được.
        const { params } = action.payload;
        yield put(showLoading());
        const resp = yield call(getListTask, params);
        if (resp.status === STATUS_CODE.SUCCESS) { // Nếu load api thành công
            yield put(fetchListTaskSuccess(resp.data));
        }
        else { // Nếu load api thất bại
            yield put(fetchListTaskFailed(resp.data))
        }
        yield delay(500);
        yield put(hideLoading());
    }
}

function* saveTaskSaga(action) {
    yield put(showLoading());
    const { task } = action;
    // 2 case: add task and edit task
    // Add task
    if (task.id === '') {
        yield addTaskSaga(task);
    }
    // edit task
    else {
        yield updateTaskSaga(task);
    }

    yield put(hideLoading());
}

function* addTaskSaga(task) {
    const resp = yield call(addTask,
        {
            name: task.name,
            status: task.status
        }
    );
    if (resp.status === STATUS_CODE.CREATED) {
        yield put(saveTaskSuccess(resp.data))
    }
    else {
        yield put(saveTaskFailed(resp.data))
    }
}

function* updateTaskSaga(task) {
    const resp = yield call(updateTask, task.id,
        {
            name: task.name,
            status: task.status
        }
    );
    if (resp.status === STATUS_CODE.SUCCESS) {
        yield put(saveTaskSuccess(resp.data))
    }
    else {
        yield put(saveTaskFailed(resp.data))
    }
}


function* deleteTaskSaga(action) {
    console.log(action);
    yield put(showLoading());
    const { id } = action;
    const resp = yield call(deleteTask, id);
    console.log(resp)
    if (resp.status === STATUS_CODE.SUCCESS) {
        yield put(deleteTaskSuccess(resp.data.id));
    }
    else {
        yield put(deleteTaskFailed(resp.data));
    };
    yield put(hideLoading());
}

function* updateStatusTaskSaga(action) {
    console.log(action);
    yield put(showLoading());
    const { task } = action;
    const resp = yield call(updateTask, task.id, {status:!task.status});
    console.log(resp)
    if (resp.status === STATUS_CODE.SUCCESS) {
        yield put(updateStatusSuccess(resp.data.id));
    }
    else {
        yield put(updateStatusFailed(resp.data));
    };
    yield put(hideLoading());
}

function* authenticateSaga(action){
    console.log(action)
    const {user} = action
    yield delay(500);
    yield put(showLoading());
    const resp = yield put (getAccount({
        username: user.username,
        password: user.password
    }));
    console.log(resp);
    yield put(hideLoading());
}

export default function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeEvery(ManageWorkTypes.SAVE_TASK, saveTaskSaga); // saveTaskSaga sẽ nhận được kết quả trả về của action SAVE_TASK
    yield takeEvery(ManageWorkTypes.DELETE_TASK, deleteTaskSaga);
    yield takeEvery(ManageWorkTypes.UPDATE_STATUS_TASK, updateStatusTaskSaga);
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}