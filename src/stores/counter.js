import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router/index'
import Swal from 'sweetalert2'

export const useAuthStore = defineStore('auth', {
  state: () => ({ 
    authUser: null, 
    authToken: null,
    authRol: null}),

  getters: {
    user:(state) => state.authUser, 
    token:(state) => state.authToken,
    rol:(state) => state.authRol

  },
  actions:{
      async login(json){
          await axios.post(`http://localhost:3000/auth`, json).then( 
            (res) => {
              if(res.data.status == "ok" ){

              this.authToken = res.data.token;
              this.authRol = res.data.rol;
              this.authUser = res.data.user;
              localStorage.token = this.authToken;
              localStorage.rol = this.authRol;
              router.push('/dashboard');
              }else{

                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'usuario o contraseña incorrectas!',
                  background: '#3A3B3C',
                  color: '#fff'
                })
              }
         
          }).catch(
            (errors)=>{
              console.log(errors)
            }
          )
     },
      async logout(){
          const token = sessionStorage.token;
          localStorage.removeItem('token') = null;
          router.push('/');
      }
  },
  // AYUDA A QUE LA SESSION NO SE PIERDA CUANDO SE REFRESQUE LA PAGINA 
  persist:true
})
