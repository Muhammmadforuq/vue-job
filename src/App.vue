<template>
     <AppNavbar/>
      <main class="min-h-screen">
        <RouterView/>
      </main>
      <!-- <AppFooter/> -->
</template>

<script setup>
  import { RouterView } from "vue-router";
  import AppNavbar from "./components/Navbar.vue";
  import AppFooter from "./components/Footer.vue";
</script>
