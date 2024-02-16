const db = require("../../db/db.js");

class System {
  static insertSystem(name, version) {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO system (name, version) VALUES (?, ?)",
        [name, version],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID });
          }
        }
      );
    });
  }
}

module.exports = System;
