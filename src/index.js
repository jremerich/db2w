require("dotenv").config();

import PlSQLProcessor from "./processor/plsql";

import NodeConverter from "./converter/node";
import fs from "./services/fs";

const plsql = "./src/procedure.sql";

fs.readFile(plsql, (err, data) => {
  if (err) throw err;

  const plsqlMetadata = PlSQLProcessor.process(data.toString());

  convert2Node(plsqlMetadata);
});

function convert2Node(content) {
  const newContent = NodeConverter.exec(content);
}
