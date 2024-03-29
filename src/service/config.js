import axios from "axios";
import { localUserServ } from "./localService";


export const BASE_URL = "https://elearningnew.cybersoft.edu.vn/";

const TokenCyberSoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY";

export let configHeaders = () => {
    return {
        TokenCyberSoft: TokenCyberSoft,

        ['Authorization']: "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNjgzMDg0OTY2LCJleHAiOjE2ODMwODg1NjZ9.cREuBBCsGAKg_HlsFRmmosR5W43BHsZi3LPVAJ0TnQA',

        ["Authorization"]: "Bearer " + localUserServ.get()?.accessToken,

    }
}

export const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeaders(),
})