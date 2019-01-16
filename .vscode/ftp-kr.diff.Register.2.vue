<template>
  <div class="register-page">
    <div class="form">
      <form href="#" v-on:submit="register">
          <input type="text" placeholder="Name" name="name"/><br>
            <input type="email" placeholder="E-mail" name="email"/><br>
            <input type="password" placeholder="password" name="password"/><br>
            <input type="submit" value="register"/>
        </form>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
export default {
  name: 'Register',
  methods: {
    register: (e) => {
      e.preventDefault()
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
            if(response.data ==='이미 가입된 email입니다.'){
              alert('이미 존재하는 email입니다.')
              router.push('/register')
            }
            else{
            alert('회원가입이 완료되었습니다.')
            router.push('/login')
            }
          })
          .catch((errors) => {    
          })
      }
      register()
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.register-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>
