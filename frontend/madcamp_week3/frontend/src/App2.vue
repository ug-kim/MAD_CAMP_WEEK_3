<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link :to="{ name: 'Dashboard'}">Dashboard</router-link>
      <router-link :to="{ name: 'Login'}">Login</router-link>
      <router-link :to="{ name: 'Register'}">Register</router-link>
      <a href="#" v-on:click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
export default {
  name: 'App',
  methods: {
    logout: function (e) {
      axios.get('/api/logout')
        .then(() => {
          router.push('/login')
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
