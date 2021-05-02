/**
 * file: src/components/pages/list-employee/ListEmployee.js
 * data: 29/04/2021
 * description: arquivo responsável pela lógica do componente
 * 'ListEmployeeComponent.vue'
 * author: Swamy Menezes
 */

import EmployeeService from '../../../services/EmployeeService';

export default {
  name: 'ListEmployeeComponent',
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.listAllEmployees();
  },
  methods: {
    async listAllEmployees() {
      const response = await EmployeeService.getEmployees();
      this.employees = response;
    },
    async removeEmployee(id) {
      this.$swal({
        title: 'Are you sure you want to delete the employee?',
        text: 'Whatch out! This Employee will be deleted!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confrimButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confimButtonText: 'Yes! Please, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await EmployeeService.deleteEmployee(id);
          this.$swal('Deleted', 'Successfully deleted', 'success');
          this.listAllEmployees();
        } else {
          this.$swal('Cancelled', 'Cancel deletion', 'info');
        }
      });
    },
  },
};
