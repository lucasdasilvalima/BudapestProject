# Budapest Project 

## Descrição
 - Uma API para servir aplicação mobile e web/desktop da escola de líderes manancial
## Pré requesitos
 - Node, MongoDB
## Como usar
 - Crie o arquivo .env e informe as seguintes variveis de ambientes:
	- NODE_ENV=development
	- PORT=8080
	- DB_PROTOCOL=mongodb+srv://
	- DB_USER=<user>:
	- DB_PASS=<pass>
	- DB_URL=localhost/
	- DB_SCHEMA=test
	- DB_PARAMS=retryWrites=true&w=majority
 - Caso possua o yarn instalado:
	- yarn add
	- yarn dev
 - Caso possua o npm:
	- npm install
	- nodejs .
## Rotas 
**Vou usar localhost como exemplo, mas troque pela sua url se necessário**
	**Listar Todos os empregados**
	- [ GET ] => localhost:8080/api/employees
	
	**Cadastrar um empregado**
	- [ POST ] => localhost:8080/api/employee
	body => json: { firstName, lastName, phoneNumber, congregation, jobTitle, avatar }
	return { TOKEN + ID_USER }	

	**Atualizar um empregado**
	- [ PUT ] => localhost:8080/api/employee
	body => json: { firstName, lastName, phoneNumber, congregation, jobTitle, avatar }
	params => identificador { Authorization: Bearer TOKEN, id: ID_USER }
	
	**Excluir um empregado**
	- [ DELETE ] => localhost:8080/api/employee
	params => identificador { Authorization: Bearer TOKEN, id: ID_USER }
	
@autor: Lucas Lima
