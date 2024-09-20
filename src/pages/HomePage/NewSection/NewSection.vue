<template>
  <div class="h-full w-full bg-secondary-color py-8 px-6">
    <h2 class="text-4xl font-bold text-gold-color">New</h2>
    <div class="my-8" v-for="(data, index) in newData" :key="index">
      <p
        class="font-bold text-white text-2xl hover:cursor-pointer hover:text-gold-color"
      >
        {{ data.title }}
      </p>
      <p class="text-grayish-blue-color mt-2 text-paragraph">
        {{ data.description }}
      </p>
      <hr
        class="mt-6 text-grayish-blue-color"
        v-if="index !== newData.length - 1"
      />
    </div>
  </div>
</template>
<script setup>
import { newData } from "@/constants/dummyData";
</script>
