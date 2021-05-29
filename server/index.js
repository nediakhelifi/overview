const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3002;

const api = require("./routes");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));


app.use("/api", api);
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
