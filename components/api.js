import axios from "axios";

export async function fetchMovies() {
    const {results} = await axios
        .get(`http://localhost:3000/api/movies`)
        .then((res) => res.data)
        .catch((error) => console.log(error.message, "error"));
    
    return results;
}