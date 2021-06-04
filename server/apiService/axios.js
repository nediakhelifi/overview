var axios = require("axios");

const api = axios.create({
  baseURL: "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc", 
  headers: {
    Authorization: " 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",
  },
});
module.exports = api