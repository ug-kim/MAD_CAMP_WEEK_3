<template>
  <div id="App">
      <div id="head">
        <div class="head-item1">
          <!--router-link :to="{ name: 'App'}">디도미</router-link-->
          <a href="#" v-on:click="getUserData">디도미</a>
        </div>
        <div class="head-item2">
          <router-link :to="{ name: 'Timetable'}">시간표</router-link>
          <router-link :to="{ name: 'Review'}">수강후기</router-link>
          <router-link :to="{ name: 'Credit'}">학점이수표</router-link>
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
      name: 'default',
      login: false
    }
  },
  methods: {
    logout: function (e) {
      axios.get('/api/logout')
        .then((response) => {
          console.log('logout ok')
          this.name = ''
          this.login = false
          router.push('/')
        })
        .catch((errors) => {
          console.log('cananot logout')
        })
    },
    getUserData: function () {
      let self = this
      axios.get('/api/user')
        .then((response) => {
          self.$set(this, 'user', response.data.user)
          this.name = response.data.user.name
          this.login = true
        })
        .catch((errors) => {
        })
    }
  },
  mounted () {
    this.getUserData()
  },
  components: {
    login: Login,
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
  grid-template-columns: 1fr 1400px 1fr;
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
