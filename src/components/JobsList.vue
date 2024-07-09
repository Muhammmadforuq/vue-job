<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        {{truncatedDescription }}
      </div>

      <button type="button" @click="showText = !showText" class="font-bold text-indigo-400 hover:text-indigo-300 my-4">
        {{ showText ?  "Less" : "More"  }}
      </button>

      <h3 class="text-indigo-500 mb-2">{{ job.salary }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="flex items-center text-orange-700 gap-2 mb-3">
          <MapPinIcon class="size-6 text-gray-500"/>
          <p> {{ job.location }}</p>
        </div>
        <RouterLink
          :to="'/jobs/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPinIcon } from '@heroicons/vue/24/solid';
import { RouterLink } from 'vue-router';
import {ref, computed, defineProps} from "vue";

const props = defineProps({
  job:{
    typeo:Object
  }
});

let description = props.job.description;

const showText = ref(false);

const truncatedDescription = computed(()=>{ 
    return showText.value ? description : description.substring(0, 90) + " ..."
})





</script> 
