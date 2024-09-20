<template>
  <div class="py-16 px-24 bg-off-white-color">
    <NavBar />
    <slot>
      <main>Children Component</main>
    </slot>
  </div>
</template>
<script setup>
import NavBar from "./NavBar/NavBar.vue";
</script>
<style lang=""></style>
