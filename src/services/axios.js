import axios from "axios";

const api = axios.create({
  baseURL: "https://io.adafruit.com/api/v2/fogazza/feeds/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "X-AIO-Key": "aio_yuwn43VjTMw8ncn46128ivfdanA6",
  },
});

const sheets = {
  toggleLed: (stateLed) => api.post(`botaoled/data`, stateLed),
};

export default sheets;
