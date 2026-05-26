<!-- ============================================
     APP.VUE - Komponen Root
     // Dibuat oleh: Siti Nurlaela
     // Universitas Dian Nusantara
============================================ -->

<template>
  <div id="app">
    <!-- Navbar tampil kalau sudah login -->
    <NavBar v-if="isLoggedIn" />
    <RouterView />
    <div class="watermark">Dibuat oleh: Siti NurLaela | Universitas Dian Nusantara</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

const isLoggedIn = computed(() => !!localStorage.getItem('eco_token'))
</script>