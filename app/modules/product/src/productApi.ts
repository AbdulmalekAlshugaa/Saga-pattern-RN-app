import networkApi from '../../network/src/networkApi';

export const ProductApiRoute = {
    GET_PRODUCTS: '/products',
};

export async function GetProducts() {
    const response = await networkApi.get(ProductApiRoute.GET_PRODUCTS);
    return response.data;
}
