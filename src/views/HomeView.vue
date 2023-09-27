<script setup>
// import axios from "axios";
// // import  from "@/stores/auth.js";
// export default {
//   name: "Home",
//   components: {},
//   data: () => {
//     return {
//       usuario: "",
//       password: "",
//       error: false,
//       error_msg: "",
//     };
//   },
//   methods: {
//     login() {
//       let json = { 
//         usuario: this.usuario,
//         password: this.password,
//       };

//       axios.post("http://localhost:3000/auth", json).then((data) => {
//         if (data.data.status == "ok") { 
//           sessionStorage.token = data.data.token;
//           this.$router.push("dashboard");
          
//         } else {
//           this.error = true;
//           this.error_msg = "Usuario o password incorrecto...";
//         }
//       });
//     },
//   },
// };
import { useAuthStore } from '../stores/counter.js';
import { ref } from 'vue';

const authStore = useAuthStore();
const json = ref({usuario:'', password:''});


</script>

<template>
    <div class="contenedor_login">
        <div class="form-container">
            <p class="title">MERGE</p>
            <form class="form" @:submit.prevent="$event => authStore.login(json)">
                <div class="input-group">
                    <label for="username">Correo</label>
                    <input type="text" 
                    autocomplete= "off"
                    name="usuario" 
                    id="username" 
                    v-model="json.usuario"
                    >
                </div>
                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    v-model="json.password"
                    >
                    <div class="forgot">
                        <a href="#" target="_blank">Olvidaste tu contraseña?</a>
                    </div>
                </div>
                <button class="sign">Iniciar sesion</button>
            </form>
            <div class="social-message">
                <div class="line"></div>
                <p class="message">copyright &copy; Merge 2023 </p>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

/* LOGIN */
.login_body{
    background: #242526 ;
}
.contenedor_login{
    display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: #424242;
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
    margin:auto; 
    
  }
  
  .title {
    text-align: center;
    font-size: 3rem;
    line-height: 2rem;
    font-family: 'Bebas Neue', sans-serif;
  }
  
  .form {
    margin-top: 1.5rem;
  }
  
  .input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .input-group label {
    display: block;
    color: rgb(152, 158, 167);
    margin-bottom: 4px;
  }
  
  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: none;
    outline: 0;
    background: #242526;
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }
  
  .input-group input:focus {
    border-color:  var(--primary-color);
  }
  
  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175,1);
    margin: 8px 0 14px 0;
  }
  
  .forgot a,.signup a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;
  }
  
  .forgot a:hover, .signup a:hover {
    text-decoration: underline  var(--primary-color);
  }
  
  .sign {
    display: block;
    width: 100%;
    background-color: #42b883;
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: .3s ease all ;
  }

  .sign:hover{
    background-color: #2dc261;
    cursor: pointer;
  }
  
  .social-message {
    display: flex;
    align-items: center;
    padding-top: 1rem;
  }
  
  .line {
    height: 1px;
    flex: 1 1 0%;
    background-color: rgba(55, 65, 81, 1);
  }
  
  .social-message .message {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(156, 163, 175, 1);
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
  }
  
  .social-icons .icon {
    border-radius: 0.125rem;
    padding: 0.75rem;
    border: none;
    background-color: transparent;
    margin-left: 8px;
  }
  
  .social-icons .icon svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: #fff;
  }
  
  .signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
  }
  
</style>
