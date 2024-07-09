
<template>
  <!-- Developers and Employers -->
  <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Cards v-for="job in JobsAvaible" :job="job" :key="job.id"/>
        </div>
      </div>
    </section>
</template>

<script setup>
  import Cards from "./Cards.vue";
  import {ref} from 'vue'

  const JobsAvaible = ref([
    {
      id:1,
      title:"For Developers",
      subtitle:"Browse our React jobs and start your career today",
      bgClass:"bg-gray-100",
      link:"/jobs",
      linkName:"Browse Jobs"
    },
    {
      id:2,
      title:"For Employers",
      subtitle:"List your job to find the perfect developer for the role",
      bgClass:"bg-indigo-100",
      link:"/jobs/add",
      linkName:"Browse Jobs"
    },
  ])
</script>

