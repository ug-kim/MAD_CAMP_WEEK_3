<template>
  <div id="App">
    <div id="realhead">
      <div id="head">
        <div class="head-item1">
          <div class></div>
          <router-link :to="{ name: 'App'}" id="didomi"><span class="title">디도미</span></router-link>
          <div class></div>
        </div>
        <div class="head-item2">
          <div></div>
          <div>
            <router-link :to="{ name: 'Timetable'}"><span class="title">시간표</span></router-link>
            <a href="http://ugrp.dgist.ac.kr/~kjlee/curriculum/CurriculumTable_20180515.pdf" class="title"><span class="title">학점이수표</span></a>
          </div>
          <div></div>
        </div>
        <div class="head-item3">
          <div></div>
          <div>
            <span v-show="login"><span class="title">{{ name }}님, 안녕하세요</span></span>
            <router-link :to="{ name: 'Register'}" v-show="!login"><span class="title">회원가입</span></router-link>
            <router-link :to="{ name: 'Login'}" v-show="!login"><span class="title">로그인</span></router-link>
            <a href="#" v-on:click="logout" v-show="login"><span class="title">로그아웃</span></a>
          </div>
          <div></div>
        </div>
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
@import url('https://fonts.googleapis.com/css?family=Do+Hyeon');
@import url('https://fonts.googleapis.com/css?family=Sunflower:300');
#head a {
  text-decoration: none;
  color: #000;
}
#head {
  display: grid;
  grid-template-columns: 1fr 1050px 1fr;
  
}
.head-item2 a {
  margin-left: 10px;
  margin-right: 20px;
}
.head-item3 a {
  margin-left: 10px;
}
#didomi {
  margin-left: 10px;
  font-weight: bold; 
}
.title {
  font-size: 20px;
  color: white;
  font-family: 'Do Hyeon', sans-serif;

}
#realhead {
  height: 5vh;
  background-color: #AAABD3;
  margin: 0;
  padding: 0;
  display: grid;
}
body {
  margin: 0;
}
.head-item1, .head-item2, .head-item3 {
  display: grid;
  grid-template-rows: 1.5vh 2vh 1.5vh;
}
</style>