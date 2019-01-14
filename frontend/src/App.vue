<template>
  <div>
      <div id="head">
        <div class="head-item1">
          <router-link :to="{ name: 'Main'}">디도미</router-link>
        </div>
        <div class="head-item2">
          <router-link :to="{ name: 'Timetable'}">시간표</router-link>
          <router-link :to="{ name: 'Review'}">수강후기</router-link>
          <router-link :to="{ name: 'Credit'}">학점이수표</router-link>
          <router-link :to="{ name: 'Calculate'}">학점계산기</router-link>
        </div>
        <div class="head-item3">
          <router-link :to="{ name: 'Login'}">로그인</router-link>
          <!-- <a href="#" v-on:click="logout">로그아웃</a> -->
        </div>
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
          router.push('/')
        })
    }
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
