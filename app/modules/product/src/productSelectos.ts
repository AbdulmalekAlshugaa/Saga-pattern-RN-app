import { createSelector } from '@reduxjs/toolkit';

const productSelector = (state:any) => state.counter

export const productValue = createSelector(
    productSelector,
    (counter) => counter.value
)

