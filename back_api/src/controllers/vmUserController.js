const VmUser = require('../models/vmUser');

const vmUserController = {
    insertInfoVm: async (req, res) => {
        try {
            const { id_user, login, name, password, ip } = req.body;

            const insertedId = await VmUser.insertInfoVm(id_user, login, name, password, ip);

            res.status(201).json({ message: 'VM INFO INSERER', insertedId });
        } catch (error) {
            console.error('Erreur lors de l\'insertion des informations de l\'utilisateur dans la VM :', error);
            res.status(500).json({ message: 'Erreur lors de l\'insertion des informations de l\'utilisateur dans la VM' });
        }
    },
    getInfoVmByIdUser: async (req, res) => {
        try {
            const id_user = req.params.id_user;
            const infoVm = await VmUser.getVmInfoByIdUser(id_user);
            res.json(infoVm);
        } catch (error) {
            console.error('Erreur lors de la récupération des informations de l\'utilisateur dans la VM :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des informations de l\'utilisateur dans la VM' });
        }
    }
};

module.exports = vmUserController;
