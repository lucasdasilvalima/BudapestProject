const mongoose = require('mongoose');
const data2Buffer = require('./utils/parseDatFileToBuffer');
const Employees = mongoose.model('Employee');

module.exports = {
  async list(req, res) {
    const employees = await Employees.find();
    return res.json(employees);
  },

  async create(req, res) {
    const {
      firstName,
      lastName,
      phoneNumber,
      address,
      congregation,
      jobTitle,
    } = req.body;
    const file = req.file;

    /**
     * Estava Com pressa depois melhoro isso aqui, minha pressa foi maior que
     * meu "toque" ....
     */
    const { data, contentType } = data2Buffer(file);
    const profileImage = data;
    const profileImageContentType = contentType;

    await Employees.create({
      firstName,
      lastName,
      phoneNumber,
      address,
      congregation,
      jobTitle,
      profileImage,
      profileImageContentType
    }).then(response => {
      return res.json(response);
    }).catch(error => {
      console.error(error);
      return res.status(400).send({ error: "Desculpe, mas o usuário não pode ser criado!" });
    });
  },

  async update(req, res) {
    const { id } = req.params.id;
    const { phoneNumber, address, congregation, jobTitle } = req.body;
    const file = req.file;
    
    /**
     * Estava Com pressa depois melhoro isso aqui, minha pressa foi maior que
     * meu "toque" ....
     */
    const { data, contentType } = data2Buffer(file);
    const profileImage = data;
    const profileImageContentType = contentType;

    await Employees.findByIdAndUpdate(id, {
      phoneNumber,
      address,
      congregation,
      jobTitle,
      profileImage,
      profileImageContentType
    })
      .then(newEmployee => {
        return res.json(newEmployee);
      })
      .catch(error => {
        console.error(error);
        return res.status(400).send({ error: "Desculpe, mas o usuário não pode ser atualizado!" });
      });

  },

  async delete(req, res) {
    const { id } = req.query.id;
    await Employees.findByIdAndRemove(id)
      .then(employee => {
        return res.send({ id_user: employee._id, message: "Usuário deletado com sucesso!" });
      })
      .catch(error => {
        console.error(error);
        return res.status(400).send({ error: "Error ao processar requisição verifique se usuário ainda existe!" });
      });
  }
};
