import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import createPersistedState  from 'pinia-plugin-persistedstate'
import axios from 'axios'

window.axios = axios;


const pinia = createPinia() 

pinia.use(({store}) =>{
    store.router = markRaw(router)
})
pinia.use(createPersistedState)

const app = createApp(App)

// CODIGO BASIC DE JS

document.addEventListener('keydown', function(event) {

    const buscador = document.getElementById('searchField');
    if (event.ctrlKey  && event.key === 'k') {
      // Activar el campo de búsqueda
      event.preventDefault();
      buscador.focus();
    }
  });


app.use(createPinia())
app.use(router)
app.mount('#app')


