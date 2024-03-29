import {createRouter} from 'vue-router'
import Homepage from './Home.vue';
import GaussianSplatting from './GaussianSplatting.vue';
import Photogrammetry from './Photogrammetry.vue';
import PlaquesMap from './PlaquesMap.vue';
import Projects from '../components/Projects.vue';

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
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}