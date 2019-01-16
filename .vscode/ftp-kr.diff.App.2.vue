<template>
  <div id="App">
      <div id="head">
        <div class="head-item1">
          <!--router-link :to="{ name: 'App'}">디도미</router-link-->
          <router-link :to="{ name: 'Main'}" v-on:click="getUserData"><img src="./assets/logo.png"/></router-link>
        </div>
        <div class="head-item2">
          <router-link :to="{ name: 'Timetable'}">시간표</router-link>
          <router-link :to="{ name: 'Review'}">수강후기</router-link>
          <a href="http://ugrp.dgist.ac.kr/~kjlee/curriculum/CurriculumTable_20180515.pdf">학점이수표</a>
          <router-link :to="{ name: 'Calculate'}">학점계산기</router-link>
        </div>
        <div class="head-item3">
          <span v-show="login">{{ name }}님, 안녕하세요</span>
          <router-link :to="{ name: 'Register'}" v-show="!login">회원가입</router-link>
          <router-link :to="{ name: 'Login'}" v-show="!login">로그인</router-link>
          <a href="#" v-on:click="logout" v-show="login">로그아웃</a>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'
import Login from './components/Login.vue'

export default {
  name: 'App',
  data () {
    return {
      name: 'guest',
      login: false,
      email: 'guest'
    }
  },
  methods: {
    logout: function (e) {
      axios.post('/api/logout')
        .then((response) => {
          console.log('logout ok')
          this.name = 'guest'
          this.login = false
          this.email = 'guest'
          router.push('/')
          alert('로그아웃되었습니다.')
        })
        .catch((errors) => {
          console.log('cananot logout')
        })
    },
    getUserData: function () {
      let self = this
      axios.post('/api/user')
        .then((response) => {
          self.$set(this, 'user', response.data.user)
          this.name = response.data.user.name
          this.email = response.data.user.email
          console.log('getuser')
          console.log(response.data.user)
          this.login = true
          router.push('/')
          return response.data.user.email
        })
        .catch((errors) => {
          console.log('getuserdata err')
          router.push('/')
        })
      
    }
  },
  mounted () {
    this.getUserData()
  },
  components: {
    login: Login
  }
}
</script>

<style>
#head a {
  text-decoration: none;
  color: #000;
}
#head {
  display: grid;
  grid-template-columns: 1fr 1250px 1fr;
  margin-top: 20px;
  margin-bottom: 20px;
}
.head-item2 a {
  margin-left: 10px;
  margin-right: 20px;
}
.head-item3 a {
  margin-left: 10px;
}
</style>