import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './Home.vue';
import GaussianSplatting from './GaussianSplatting.vue';
import Photogrammetry from './Photogrammetry.vue';
import PlaquesMap from './PlaquesMap.vue';
import Projects from '../components/Projects.vue';
import AboutMe from './AboutMe.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/projects/',
    component: Projects
  },
  {
    path: '/project/gaussian-splatting/',
    component: GaussianSplatting
  },
  {
    path: '/project/photogrammetry/',
    component: Photogrammetry
  },
  {
    path: '/project/london-plaques/',
    component: PlaquesMap
  },
  {
    path: '/about-me/',
    component: AboutMe
  },
]

export default function (history) {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
}