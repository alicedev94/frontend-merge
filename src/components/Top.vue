<template>
    <div class="top">
         <button :class="{ close: isSelected }" @click="$emit('is_Selected')"> 
            <i class="ri-menu-line sidebar-toggle"></i>
        </button> 

        <div class="search-box">
            <i class="ri-search-2-line"></i>
            <input type="text" id="searchField" placeholder="Buscar (Ctrl + k)">
        </div>

        <img src="../assets/profile3.png" alt="imagen de perfil">
    </div>
</template>

<script setup >
    defineEmits(['is_Selected']);

</script>