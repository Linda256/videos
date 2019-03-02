import axios from "axios";
import Authorization from "../config/Authorization";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    
})