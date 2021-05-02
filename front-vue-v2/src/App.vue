<template>
  <div id="app">
    <!-- INÍCIO NAVBAR -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" style="margin-bottom: 50px;">
      <a class="navbar-brand order-md-last">CRUD Vue.js + PostGreSQL + Node + Azure</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Create New Employee</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list-employees">List All Employees</router-link>
        </li>
      </ul>
    </nav>
    <!-- FIM NAVBAR -->

      <router-view/>
  </div>
</template>
