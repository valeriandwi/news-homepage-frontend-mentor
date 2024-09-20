<template>
  <header
    class="w-full bg-white h-12 flex justify-between items-center"
    role="navigation"
  >
    <img src="@/assets/logo.svg" alt="logo" role="img" />
    <nav role="navigation">
      <div class="flex justify-end text-lg items-center" role="none">
        <RouterLink
          v-for="route in routes"
          class="hover:text-primary-color text-secondary-color text-lg cursor-pointer px-6"
          :key="route.path"
          :to="route.path"
          activeClass="!text-primary-color"
          role="menu"
        >
          {{ route.linkName }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { routes } from "@/routes/route";
</script>
<style></style>
