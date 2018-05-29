const express = require("express");
const service = require("./service");
const loggerConf = require("./logger-conf");
const restRouter = require("./route/rest");

const app = express();
const port = process.env.PORT || 3000;
const expressLogger = loggerConf.expressLogger;
const logger = loggerConf.logger;

app.use(expressLogger);
app.use("/rest", restRouter);

service
  .onReady()
  .then(db => app.listen(port, () => logger.info(`App listen on ${port}`)))
  .catch(err => logger.error(`Database cannot be opened. Reason :\n${err}`));
