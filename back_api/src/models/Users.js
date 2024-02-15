// models/User.js
const db = require("../../db/db.js");
const bcrypt = require("bcrypt");

class User {
  static findByMail(mail) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE mail = ?", [mail], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  static createUser(name, firstName, mail, password,role) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          reject(err);
        } else {
          db.run(
            "INSERT INTO users (first_name, name, mail, password, role) VALUES (?, ?, ?, ?, ?)",
            [firstName, name, mail, hashedPassword,role],
            function (err) {
              if (err) {
                reject(err);
              } else {
                resolve({ id: this.lastID });
              }
            }
          );
        }
      });
    });
  }
}

module.exports = User;
