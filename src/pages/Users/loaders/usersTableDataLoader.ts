import {store} from '__store/configureStore';

import {apiInstance} from '../api/usersApi';
import {actions} from '../reduxSlices/tableDataSlice';

const {dispatch} = store;

const {
    failed,
    pending,
    success,
} = actions;

export const tableDataLoader = async () => {
    try {
        dispatch(pending());

        const data = await apiInstance.get();

        dispatch(success(data));
    } catch (error: unknown | any) {
        dispatch(failed(error?.message as string));
    }
};