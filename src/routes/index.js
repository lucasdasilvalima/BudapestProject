const express = require('express');
const multer  = require('multer');

const upload = multer({ dest: 'uploads/' });
const routes = express.Router();

const Emloyees = require('../controllers/Employees');

routes.get('/employees', Emloyees.list);
routes.post('/employee', upload.single('avatar'), Emloyees.create);
routes.put('/employee', upload.single('avatar'), Emloyees.update);
routes.delete('/employee', Emloyees.delete);

module.exports = routes; 
