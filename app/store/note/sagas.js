import { call, put, takeLatest } from "redux-saga/effects";
import { addNoteToDb, getNotesFromDb } from "../../services/notesService";
import { setGlobalError, setSignInError } from "../error";
import { setLoader } from "../loader";
import { addNote, addNotes, getNotes } from "../note";
import { LOAD_NOTES, SAVE_NOTE } from "./actionTypes";


function* saveNote({ payload }) {
    try {
        yield put(setLoader(true));
        const data = yield call(addNoteToDb, payload);
        yield put(addNote(data));
        // NavigationService.navigate('AuthLoading');
    } catch (error) {
        if (error.response.status === 401) {
            yield put(setSignInError(true));
        } else {
            yield put(setGlobalError(true));
        }
    } finally {
        yield put(setLoader(false));
    }
}

function* loadNotes() {
    try {
        yield put(setLoader(true));
        const data = yield call(getNotesFromDb);
        yield put(addNotes(data));
        // NavigationService.navigate('AuthLoading');
    } catch (error) {
        console.error('error: ', error)
        if (error.response.status === 401) {
            yield put(setSignInError(true));
        } else {
            yield put(setGlobalError(true));
        }
    } finally {
        yield put(setLoader(false));
    }
}

export function* watchLoadNotes() {
    yield takeLatest(LOAD_NOTES, loadNotes);
}

export function* watchSaveNote() {
    yield takeLatest(SAVE_NOTE, saveNote);
}
