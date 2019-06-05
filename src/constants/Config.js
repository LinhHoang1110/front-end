console.log(process.env)
export const API_URL = process.env === "development" ?
    "https://back-end-lc-commerce.herokuapp.com" :
    "http://localhost:6969"

// export const API_URL = "http://localhost:6969"