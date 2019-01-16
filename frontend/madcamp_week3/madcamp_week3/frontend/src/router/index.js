import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Timetable from '@/components/Timetable'
import Review from '@/components/Review'
import Credit from '@/components/Credit'
import Calculate from '@/components/Calculate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/timetable',
      name: 'Timetable',
      component: Timetable
    },
    {
      path: '/',
      name: 'Main',
      component: Main
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
