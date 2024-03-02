const VmUser = require('../models/vmUser');

const vmUserController = {
    insertInfoVm: async (req, res) => {
        try {
            const { id_user, login, name, password } = req.body;

            const insertedId = await VmUser.insertInfoVm(id_user, login, name, password);

            res.status(201).json({ message: 'Informations de l\'utilisateur insérées avec succès', insertedId });
        } catch (error) {
            console.error('Erreur lors de l\'insertion des informations de l\'utilisateur dans la VM :', error);
            res.status(500).json({ message: 'Erreur lors de l\'insertion des informations de l\'utilisateur dans la VM' });
        }
    }
};

module.exports = vmUserController;
