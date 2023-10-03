import {  configureStore, createListenerMiddleware, Middleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { useDispatch } from 'react-redux'
import rootSaga from '../daemon';
import counterSlice from '../../product/src/counterSlice';

const sagaMiddleware = createSagaMiddleware({
    onError: (error, { sagaStack }) => {
        console.log('Saga middleware error', error,sagaStack)
    },
});

const listenerMiddleware = createListenerMiddleware();

const MIDDLEWARE: Middleware[] = [
    //  you can add more middleware (eg. for testing) here
    sagaMiddleware,
];

export const store = configureStore({
    reducer: {
        counter:counterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 }, // We should be moving this lower as we get better
            serializableCheck: false, // The function to check if a value is considered serializable. Default this to false as it will affect a lot state in our reducer
        })
            .prepend(listenerMiddleware.middleware)
            .concat(MIDDLEWARE),

    devTools: true, // Redux DevTools integration.
});
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store


