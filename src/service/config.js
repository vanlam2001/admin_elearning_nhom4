import axios from "axios";


export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/";

const TokenCyberSoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MSIsIkhldEhhblN0cmluZyI6IjEyLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDQ3NjgwMDAwMCIsIm5iZiI6MTY2NTI0ODQwMCwiZXhwIjoxNjk0NjI0NDAwfQ.SUELcPShU58ZkNS3CbFDhM02KMzll9j00ndjVSaiJ8Q";

export let configHeaders = () => {
    return {
        TokenCyberSoft: TokenCyberSoft,

    }
}

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeaders(),
})