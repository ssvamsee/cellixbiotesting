import axios from 'axios';
export function getProducts() {
    console.log("I am in getProducts");

    const promise = axios.get("http://localhost:3004/patents")

    return {
        type: "FETCH_PRODUCTS",
        payload: promise
    }
}
export default getProducts;