const db = require("../../db/db.js");
const bcrypt = require("bcrypt");

class VmUser {
    static insertInfoVm(id_user, login, name, password,ip) {
        return new Promise((resolve, reject) => {
            // Utilisez la méthode 'run' pour les opérations d'insertion
            db.run("INSERT INTO user_machine (id_user, login, name, password,ip) VALUES (?, ?, ?, ?, ?)", [id_user, login, name, password,ip], function(err) {
                if (err) {
                    reject(err);
                } else {
                    // Renvoie l'ID de la dernière ligne insérée
                    resolve(this.lastID);
                }
            });
        });
    }

    static getVmInfoByIdUser(id_user) {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM user_machine WHERE id_user = ?", [id_user], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = VmUser;

