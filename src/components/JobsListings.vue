
<script setup>
  // import jobs from "../jobs2.json";
  import JobsList from "./JobsList.vue";
  import { reactive, defineProps, onMounted } from 'vue';
  import PulseLoader from "vue-spinner/src/PulseLoader.vue";
  import axios from "axios";

  const state = reactive({
    jobs:[],
    isLoading:true
  })

  defineProps({
    limit: Number,
    showContent: {
      type: Boolean,
      default: false,
    },
});


  onMounted(async () => {
      try {
        const response = await axios.get("/api/jobs");
        state.jobs = response.data
      } catch (error) {
          console.error("Error fetching jobs", error);
      } finally{
        state.isLoading = false
      }
  })

</script>

<template>
  <!-- Browse Jobs -->
  <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          <!-- Browse Jobs -->{{ showContent ? "Recent Jobs" : "Browse Jobs" }}
        </h2>
        <div v-if="state.isLoading" class="text-center text-red-800">
          <PulseLoader/>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Job Listing 1 -->
          <JobsList v-for="job in state.jobs.slice(0, limit)" :key="job.id" :job="job"/>
        
        </div>
      </div>
    </section>

</template>

