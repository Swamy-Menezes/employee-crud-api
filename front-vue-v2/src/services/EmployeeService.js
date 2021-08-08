/**
 * file: src/services/EmployeeService.js
 * data: 27/04/2021
 * description: arquivo responsável pelos métodos de requisições das Apis via HTTP
 * author: Swamy Menezes <@DevMenez - Twitter>
 */

import Api from './Api';

export default {
  /**
     * Método responsável por Criar um novo 'Employee'
     * (POST): localhost:3000/api/employees
     */
  async createNewEmployee(employee) {
    try {
      const response = await Api().post('/employees\', employee');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
     * Método responsável por Listar todos os 'Employees'
     * (GET): localhost:3000/api/employees
     */
  async getEmployees() {
    try {
      const response = await Api().get('/employees');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
     * Método responsável por Listar um determinado 'Employee' por Id
     * (GET): localhost:3000/api/employees/:id
     */
  async getEmployeeId(id) {
    try {
      const response = await Api().get(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
     * Método responsável por Atualizar um determinado 'Employee' por Id
     * (PUT): localhost:3000/api/employees/:id
     */
  async updateEmployee(id) {
    try {
      const response = await Api().put(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  /**
     * Método responsável por Excluir um determinado 'Employee' por Id
     * (DELETE): localhost:3000/api/employees/:id
     */
  async deleteEmployee(id) {
    try {
      const response = await Api().delete(`/employees/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
