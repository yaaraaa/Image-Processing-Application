import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobelFilterView from '../views/SobelFilterView.vue'
import LaplaceFilterView from '../views/LaplaceFilterView.vue'
import RemovePeriodicNoiseView from '../views/RemovePeriodicNoiseView.vue'
import HistogramCalculationView from '../views/HistogramCalculationView.vue'
import HistogramEqualizationView from '../views/HistogramEqualizationView.vue'
import FourierTranformView from '../views/FourierTransformView.vue'
import AddSaltPepperNoiseView from '../views/AddSaltPepperNoiseView.vue'
import RemoveSaltPepperNoiseView from '../views/RemoveSaltPepperNoiseView.vue'
import AddPeriodicNoiseView from '../views/AddPeriodicNoiseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobel-filter',
    name: 'sobel filter',
    component: SobelFilterView
  },
  {
    path: '/laplace-filter',
    name: 'laplace filter',
    component: LaplaceFilterView
  },
  {
    path: '/remove-periodic-noise',
    name: 'remove periodic noise',
    component: RemovePeriodicNoiseView
  },
  {
    path: '/histogram-calculation',
    name: 'histogram calculation',
    component: HistogramCalculationView
  },
  {
    path: '/histogram-equalization',
    name: 'histogram equalization',
    component: HistogramEqualizationView
  },
  {
    path: '/fourier-transform',
    name: 'fourier transform',
    component: FourierTranformView
  },
  {
    path: '/add-salt-&-pepper-noise',
    name: 'add salt & pepper noise',
    component: AddSaltPepperNoiseView
  },
  {
    path: '/remove-salt-&-pepper-noise',
    name: 'remove salt & pepper noise',
    component: RemoveSaltPepperNoiseView
  },
  {
    path: '/add-periodic-noise',
    name: 'add periodic noise',
    component: AddPeriodicNoiseView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
