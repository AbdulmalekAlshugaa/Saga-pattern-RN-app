import {cancel,fork,take,} from "redux-saga/effects";
import { productActions } from "./productAction";
import { navigateTo, goBack } from "../../navigation/RootNavigation";
import { mainAppRoutes } from "../../navigation/mainScreenRoutes";

export function* productMainRuntime(): any {
  while (true) {
    yield take(productActions.enterProductList);
    const product = yield fork(productRuntime);
    yield take(productActions.exitProductList);
    yield cancel(product);
  }
}

export function* productRuntime():any {
  while (true) {
    const { payload } = yield take(productActions.enterProductDetail);
    navigateTo(mainAppRoutes.productDetail, { product:payload});
    const dropOff = yield fork(productDropOffRuntime);
    yield take(productActions.dropOffProduct);
    yield cancel(dropOff);
  }
}

export function* productDropOffRuntime() {
  while (true) {
    yield take(productActions.dropOffProduct);
    // it safe to call goBack() 
    goBack();
  }
}
