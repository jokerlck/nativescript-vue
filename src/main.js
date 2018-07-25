import Vue from 'nativescript-vue';
import store from './store';
import './styles.scss';
import VueNativeSock from 'vue-native-websocket'
import Router from 'vue-router'

import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Counter from './components/Counter'
import SideMenu from './components/SideMenu'

Vue.registerElement('RadSideDrawer', ()=> require('nativescript-ui-sidedrawer').RadSideDrawer)

Vue.use(Router)

Vue.component('side-menu', SideMenu)

const router = new Router({
  pageRouting: true,
  routes: [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/home', component: Home},
    {path: '/counter', component: Counter},
    {path: '*', redirect: '/login'}]
})

router.replace('/login')

new Vue({
  router
}).$start()
