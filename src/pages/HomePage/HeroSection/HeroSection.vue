<template>
  <img class="w-full" :src="require(`@/${getOptimizedImage()}`)" alt="banner" />
  <div
    class="grid grid-cols-2 gap-8 mt-8 max-md:flex max-md:flex-col max-md:gap-4 max-md:mt-4"
    role="article"
  >
    <h1 class="font-bold text-5xl text-secondary-color">
      The Bright Future of Web 3.0
    </h1>
    <div role="definition">
      <p class="text-dark-grayish-color text-paragraph text-justify">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button
        class="hover:bg-secondary-color hover:text-white bg-primary-color font-bold text-secondary-color w-[185px] h-12 mt-8"
      >
        READ MORE
      </button>
    </div>
  </div>
</template>
<script setup>
import { isMobile } from "@/utils/isMobile";

const getOptimizedImage = () => {
  return `assets/images/${isMobile() ? "mobile" : "desktop"}/image-web-3.jpg`;
};
</script>
