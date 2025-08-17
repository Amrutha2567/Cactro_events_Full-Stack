const db = require("./db");

module.exports = {
  info: (msg) => {
    console.log(msg);
    db.query("INSERT INTO logs(event) VALUES($1)", [msg]);
  }
};
