import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID yRvsjO36o5tlmXlHjrlPJKuJEoMwu4joj-eazxr8YLA"
    }
})