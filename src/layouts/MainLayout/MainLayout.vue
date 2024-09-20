<template>
  <MobileMenu :isDrawerOpen="isDrawerOpen" :closeDrawer="closeDrawer" />
  <div
    class="py-16 max-md:pt-4 max-md:pb-16 px-24 max-md:px-6 bg-off-white-color flex flex-col items-center"
  >
    <NavBar v-if="!isMobile()" />
    <MobileNavBar v-if="isMobile()" :onDrawerOpen="openDrawer" />
    <div class="max-w-[1440px]" role="main">
      <slot>
        <main>Children Component</main>
      </slot>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./NavBar/NavBar.vue";
import MobileNavBar from "./MobileNavBar/MobileNavBar.vue";
import MobileMenu from "./MobileMenu/MobileMenu.vue";
import { isMobile } from "@/utils/isMobile";
import { ref } from "vue";

const isDrawerOpen = ref(false);

function openDrawer() {
  isDrawerOpen.value = true;
}

function closeDrawer() {
  isDrawerOpen.value = false;
}
</script>
