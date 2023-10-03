import {createAction} from '@reduxjs/toolkit';

export const productActions = {
    // ** GET products params that will be passed two vars id and status  **
    enterProductList: createAction('product/enterProductList'),
    enterProductDetail: createAction<product.productResponse>('product/enterProductDetail'),
    dropOffProductList: createAction('product/dropOffProductList'),
    exitProductList: createAction('product/exitProductList'),


    getProducts: createAction<{id: number}>('product/getProducts'),
    dropOffProduct: createAction('product/dropOffProduct'),
    exitProduct: createAction('product/exitProduct'),



} as const;