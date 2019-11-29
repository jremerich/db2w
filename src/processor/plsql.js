class PlSQLProcessor {
  constructor() {
    this.content = "";
  }

  process(content) {
    this.content = content;

    return this;
  }

  getContent() {
    return this.content;
  }

  getName() {
    if (this.name === undefined) {
      const regex = new RegExp("CREATE OR REPLACE PROCEDURE ([^(]+)");
      const result = regex.exec(this.content);
      const name = result[1].trim().replace(/"/g, "");
      this.name = name;
    }
    return this.name;
  }
}

export default new PlSQLProcessor();
