<template>
  <div
    class="grid grid-cols-3 gap-8 mt-12 max-lg:flex max-lg:flex-col max-lg:gap-6"
  >
    <div
      class="flex flex-row space-x-4"
      v-for="(article, index) in relatedArticles"
      :key="index"
    >
      <img
        :src="require(`@/assets/images/${article.image}`)"
        :alt="article.title"
        height="129"
        width="102"
      />
      <div class="flex flex-col space-y-2">
        <p class="text-4xl font-bold text-primary-color">
          {{ "0" + (index + 1) }}
        </p>
        <p
          class="text-lg font-bold hover:text-primary-color hover:cursor-pointer"
        >
          {{ article.title }}
        </p>
        <p class="text-paragraph text-dark-grayish-color text-justify">
          {{ article.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { relatedArticles } from "@/constants/dummyData";
</script>
