const BASE_URL_V2 = 'http://localhost:5000/api/v2/'

const PRODUCT_ROUTE = BASE_URL_V2 + 'product/'

export const endPoints = {
    createProduct: PRODUCT_ROUTE,
    getAllProducts: PRODUCT_ROUTE + 'all/'
}