import {createRouter} from 'vue-router'
import Homepage from './Home.vue';
// import {SignInComponent} from './user';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  // {
  //   path: '/sign-in/',
  //   component: SignInComponent
  // },

  // {
  //   path: '/cart/',
  //   component: Cart
  // },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}