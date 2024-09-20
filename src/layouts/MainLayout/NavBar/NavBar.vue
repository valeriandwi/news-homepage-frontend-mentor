<template>
  <header class="w-full bg-white h-12 flex justify-between items-center">
    <div>
      <img src="@/assets/logo.svg" alt="logo" />
    </div>
    <nav>
      <ul class="flex justify-end text-lg items-center">
        <RouterLink
          v-for="route in routes"
          class="hover:text-primary-color text-secondary-color text-lg cursor-pointer px-6"
          :key="route.path"
          :to="route.path"
          activeClass="!text-primary-color"
        >
          {{ route.linkName }}
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { routes } from "@/routes/route";
</script>
<style></style>
