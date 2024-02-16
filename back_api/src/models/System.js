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

    static getAllVersions(systemId) {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM system", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
    static deleteVersion(versionId) {
        return new Promise((resolve, reject) => {
            db.run("DELETE FROM system WHERE id = ?", [versionId], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
    static updateVersion(versionId, newName, newVersion) {
        return new Promise((resolve, reject) => {
            db.run("UPDATE system SET name = ?, version = ? WHERE id = ?", [newName, newVersion, versionId], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

}

module.exports = System;
