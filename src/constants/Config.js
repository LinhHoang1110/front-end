console.log(process.env)
export const API_URL = process.env.NODE_ENV === "development" ?
    "http://localhost:6969"
    : "https://back-end-lc-commerce.herokuapp.com"
// export const API_URL = "http://localhost:6969"