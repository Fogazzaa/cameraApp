import axios from "axios";

const api = axios.create({
  baseURL: "https://io.adafruit.com/api/v2/fogazza/feeds/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    "X-AIO-Key": "aio_Ymaa42WF9j7LgA6Lq1DBEqIzdOB5",
  },
});

const sheets = {
  toggleLed: (stateLed) => api.post(`botaoled/data`, stateLed),
  toggleAlarm: (stateAlarm) => api.post(`botaoalarme/data`, stateAlarm),
  getAlarm: () => api.get(`botaoalarme/`),
};

export default sheets;
