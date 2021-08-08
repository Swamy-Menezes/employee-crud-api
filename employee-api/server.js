/**
 * file: server.js
 * description: arquivo responsável por toda a configuração e execução do Back-End ('Employee')
 * data: 01/05/2021
 * author: Swamy Menezes <@DevMenez - Twitter>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta:', port);
});
