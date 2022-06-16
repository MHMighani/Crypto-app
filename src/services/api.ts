import axios from 'axios'
import config from "../config.json";
import Asset from "../models/Asset";

const { BASE_URL, API_KEY } = config;

const assetsHTTP = axios.create({
  headers: {
    "X-CoinAPI-Key": API_KEY,
  },
  baseURL: `${BASE_URL}/v1/assets/`
})

export async function fetchAllAssetsData()  {
  const response = await assetsHTTP.get<Asset[]>('/')
  return response.data
}