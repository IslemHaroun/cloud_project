const db = require("../../db/db.js");
const bcrypt = require("bcrypt");

class VmUser {
    static insertInfoVm(id_user, login, name, password) {
        return new Promise((resolve, reject) => {
            // Utilisez la méthode 'run' pour les opérations d'insertion
            db.run("INSERT INTO vm_user (id_user, login, name, password) VALUES (?, ?, ?, ?)", [id_user, login, name, password], function(err) {
                if (err) {
                    reject(err);
                } else {
                    // Renvoie l'ID de la dernière ligne insérée
                    resolve(this.lastID);
                }
            });
        });
    }
}
