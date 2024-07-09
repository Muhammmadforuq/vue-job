<script setup>
  import Hero from "../components/Hero.vue";
  import HomeCards from "../components/HomeCards.vue";
  import JobsListings from "../components/JobsListings.vue";
  import ViewAllCards from "../components/ViewAllCards.vue";
</script>

<template>
    <main>
        <Hero title="Take a job around Vue.js" subtitle="Find the Vue job that fits your skills and needs"/>
        <HomeCards/>
        <JobsListings :limit="3" :showContent="true"/>
        <ViewAllCards/>
      </main>
</template>
