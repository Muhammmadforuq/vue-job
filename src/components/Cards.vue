<template>
  <div  class="p-6 rounded-lg shadow-md" :class="job.bgClass">
    <h2 class="text-2xl font-bold">{{ job.title }}</h2>
    <p class="mt-2 mb-4"> {{ job.subtitle }}</p>
    <RouterLink :to="job.link" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
        {{ job.linkName }}
    </RouterLink>
  </div>
  
</template>

<script setup>
  import {ref} from 'vue'
  const props = defineProps({
    job:Object
  })

  const JobsAvaible = ref([
    {
      id:1,
      title:"For Developers",
      subtitle:"Browse our React jobs and start your career today",
      bgClass:"bg-gray-100",
      link:"/",
    },
    {
      id:2,
      title:"For Employers",
      subtitle:"List your job to find the perfect developer for the role",
      bgClass:"bg-indigo-100",
      link:"/",
    },
  ])

</script>
