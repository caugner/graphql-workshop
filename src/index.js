const express = require("express");
const service = require("./service");
const restRouter = require("./route/rest");

const app = express();
const port = process.env.PORT || 3000;

app.use("/rest", restRouter);

service
  .open()
  .then(
    app.listen(port, () => {
      console.log(`App listen on ${port}`);
    })
  )
  .catch(err => {
    console.error(`SQLite database cannot be opened. Reason :\n${err}`);
  });
