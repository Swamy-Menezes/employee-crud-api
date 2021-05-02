<template>
  <div class="container">
    <h3 class="text-center">List All Employees</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Employee Name</th>
          <th class="text-center">Job Role</th>
          <th class="text-center">Salary</th>
          <th class="text-center">Birth</th>
          <th class="text-center">Employee Registration</th>
          <th class="text-center" colspan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.employee_id">
          <td class="text-center">{{ employee.name }}</td>
          <td class="text-center">{{ employee.job_role }}</td>
          <td class="text-center">{{ employee.salary }}</td>
          <td class="text-center">{{ employee.birth }}</td>
          <td class="text-center">{{ emplotee.employee_registration }}</td>
          <td class="text-center">
            <router-link
              :to="{ name: 'update', params: { id: employee.employee_id }}"
              class="btn btn-success">
            <font-awesome-icon :icon="['fas', 'user-edit']"/> Edit
            </router-link>
          </td>
          <td>
            <button @click="removeEmployee(employee.employee_id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']"/> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./ListEmployee.js"></script>

<style src="" scoped></style>
