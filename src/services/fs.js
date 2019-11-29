const fs = require("fs");

const outputDir = "./out";

class FileSystem {
  constructor() {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
  }

  readFile(file, callback) {
    fs.readFile(file, callback);
  }

  existsSync(file) {
    return fs.existsSync(file);
  }

  mkdirSync(dir) {
    fs.mkdirSync(dir);
  }

  writeFile(name, content) {
    const data = new Uint8Array(Buffer.from(content));
    fs.writeFile(`${outputDir}/${name}`, data, err => {
      if (err) throw err;
    });
  }
}

export default new FileSystem();
