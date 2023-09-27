import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Formulario from '../views/form1.vue'
import {useAuthStore} from '../stores/counter'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/formulario',
      name: 'Formulario',
      component: Formulario
    }
  ]
})

router.beforeEach( async (to) => {
  // RUTAS EN EL QUE USUARIO PUEDE ACCEDER SI NO SE A LOGEADO
  const publicPages = ['/'];
  const authRequired =! publicPages.includes(to.path);

  // SI LA VARIABLE token ES NULA 
  if(authRequired && !localStorage.token){ 
    return '/';
  }
})

export default router


