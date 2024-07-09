<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
      <ExclamationTriangleIcon class="text-yellow-400 size-28 mb-4"/>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink to="/" class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4">
          Go Back
      </RouterLink>
    </section>
</template>

<script setup>
  import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid';
  import { RouterLink } from 'vue-router';
</script>
