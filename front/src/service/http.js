import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5094",
    headers: {
        "Content-type": "application/json",
    },
})