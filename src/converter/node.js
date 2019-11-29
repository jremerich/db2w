import fs from "../services/fs";

class NodeConverter {
  exec(content) {
    console.log(content.getName());
    fs.writeFile(`${content.getName()}.js`, content.getContent());
  }
}
export default new NodeConverter();
