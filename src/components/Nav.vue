<script setup>
// export default {
//   data: () => {
//     return {
//       token: sessionStorage.token,
//     };
//   },
//   methods: {
//     logout() {
//         sessionStorage.removeItem('token');
//     },
//   },
// };

import { useAuthStore } from '../stores/counter.js';
import { useDark, useToggle } from "@vueuse/core";



const isDark = useDark({
    selector: "body"
});

const toggleDark = useToggle(isDark);
const authStore = useAuthStore();




</script>

<template>
   <nav class="close">
        <a href="/dashboard">
            <div class="logo-name">
                <div class="logo-image">
                    <img src="../assets/mezcla.png" alt="Logo merge">
                </div>
    
                <span class="logo_name">MERGE</span>

                
            </div>
        </a>

        <div class="menu-items">
            <ul class="nav-links">
                <!-- OPCIONES -->
                <li><a href="/dashboard">
                    <i class="ri-home-2-line"></i>
                    <span class="link-name">Dashboard</span>
                </a></li>
                <!-- OPCIONES -->
                <li><a href="#">
                    <i class="ri-inbox-unarchive-line"></i>
                    <span class="link-name">Tablas</span>
                </a></li>
                <!-- OPCIONES -->
                <li><a href="/formulario">
                    <i class="ri-advertisement-line"></i>
                    <span class="link-name">Formularios</span>
                </a></li>
            </ul>

            <ul class="logout-mode">
                <!-- LOGOUT -->
                <li ><a href="/" @click="authStore.logout()">
                    <i class="ri-logout-box-line"></i>
                    <span class="link-name">Logout</span>
                </a></li>
                <!-- DARK MODE -->
                <li class="mode">
                    <a href="#">
                        <i class="ri-moon-line"></i>
                        <span class="link-name">Dark mode</span>
                    </a>

                    <div class="mode-toggle" @click="toggleDark()">
                        <span class="switch"></span>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    
</template>


