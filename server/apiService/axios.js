var axios = require("axios");

const api = axios.create({
  baseURL: "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc",
  headers: {
    Authorization: "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",
  },
});
module.exports = api