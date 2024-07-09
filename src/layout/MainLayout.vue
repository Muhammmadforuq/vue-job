<template>
  <header>
        <Navbar/>
        <slot/>
        <RouterView/>
        <Footer/>
     </header>
</template>

<script setup>
import { RouterView } from "vue-router";
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue"
</script>
