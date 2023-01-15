import axios from "axios"

const baseUrl = "https://api.deezer.com/chart/0/tracks"

const api = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
})

export default api
