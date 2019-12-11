import { fork,call, put, take, delay, takeEvery } from 'redux-saga/effects';
import { getListTask, addTask, deleteTask } from '../apis/tasks';
import * as ManageWorkTypes from './../constants/ManageWork/ActionTypes';
import { 
    fetchListTaskSuccess, 
    fetchListTaskFailed,
    saveTaskSuccess,
    saveTaskFailed,
    deleteTaskSuccess,
    deleteTaskFailed
} from './../actions/ManageWork/index';
import {STATUS_CODE} from './../constants/index';
import { showLoading, hideLoading } from '../actions/loading';

function* watchFetchListTaskAction() {
    while(true){
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

function* addTaskSaga(action){
    yield put(showLoading());
    const {task} = action;
    const resp = yield call(addTask, {
        name: task.name,
        status: task.status
    });
    if (resp.status === STATUS_CODE.CREATED){
        yield put(saveTaskSuccess(resp.data))
    }
    else {
        yield put(saveTaskFailed(resp.data))
    }
    yield put(hideLoading());
}

function* deleteTaskSaga(action){
    console.log(action);
    yield put(showLoading());
    const {id} = action;
    const resp = yield call(deleteTask, id);
    console.log(resp)
    if(resp.status === STATUS_CODE.SUCCESS){
        yield put(deleteTaskSuccess(resp.data.id));
    }
    else{
        yield put(deleteTaskFailed(resp.data));
    };
    yield put(hideLoading());
}

export default function* rootSaga() {
    yield fork(watchFetchListTaskAction);
    yield takeEvery(ManageWorkTypes.SAVE_TASK, addTaskSaga); // acdTask sẽ nhận được kết quả trả về của action SAVE_TASK
    yield takeEvery(ManageWorkTypes.DELETE_TASK, deleteTaskSaga)
}