const express = require("express");
const bodyParser = require("body-parser");
const service = require("./service");
const path = require("path");
const loggerConf = require("./logger-conf");
const restRouter = require("./route/rest");

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, "../public");
const expressLogger = loggerConf.expressLogger;
const logger = loggerConf.logger;

app.use(expressLogger);
app.use(bodyParser.json());

app.use("/", express.static(publicPath));
app.use("/rest", restRouter);
app.get("*", (req, res) => res.redirect("/"));

service
  .onReady()
  .then(() =>
    app.listen(port, () => {
      logger.info(`App listen on ${port}`);
      logger.debug(`Exposing public folder ${publicPath}`);
    })
  )
  .catch(err => logger.error(`Database cannot be opened. Reason :\n${err}`));
