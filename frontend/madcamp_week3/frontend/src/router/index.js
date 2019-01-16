import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import App from '@/App.vue'
import Timetable from '@/components/Timetable'
import Review from '@/components/Review'
import Credit from '@/components/Credit'
import Calculate from '@/components/Calculate'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/timetable',
      name: 'Timetable',
      component: Timetable
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    },
    {
      path: 'http://ugrp.dgist.ac.kr/~kjlee/curriculum/CurriculumTable_20180515.pdf',
      name: 'Credit',
      component: Credit
    },
    {
      path: '/calculate',
      name: 'Calculate',
      component: Calculate
    }
  ]
})
