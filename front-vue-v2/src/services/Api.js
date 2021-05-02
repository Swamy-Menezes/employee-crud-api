/**
 * file: src/services/Api.js
 * date: 27/04/2021
 * description: arquivo responsável por inicializar o 'axios' e
 * as requisições da url base dos HTTP's
 * author: Swamy Menezes <e-mail: swamy.menezes@gmail.com>
 */

import axios from 'axios';

export default () => axios.create({
  // 'baseURL' do Back-End -> fará a comunicação do Front com o Back
  baseURL: 'http://localhost:3000/api',
});
