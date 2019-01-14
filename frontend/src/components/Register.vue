<template>
    <div>
        <h2>Register</h2>
        <form v-on:submit="register">
            name: <input type="text" name="name"/><br>
            email: <input type="text" name="email"/><br>
            password: <input type="password" name="password"/><br>
            <input type="submit" value="register"/>
        </form>
    </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
export default {
  name: 'Register',
  methods: {
    register: (e) => {
      let email = e.target.elements.email.value
      let name = e.target.elements.name.value
      let password = e.target.elements.password.value
      let register = () => {
        let data = {
          email: email,
          name: name,
          password: password
        }
        axios.post('/api/register', data)
          .then((response) => {
            console.log('register')
            router.push('/login')
          })
          .catch((errors) => {
            console.log('email already exist')
            router.push('/register')
          })
      }
      register()
    }
  }
}
</script>
