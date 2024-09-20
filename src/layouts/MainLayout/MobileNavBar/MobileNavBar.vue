<template>
  <header class="w-full bg-white h-12 mb-6 flex justify-between items-center">
    <div>
      <img src="@/assets/logo.svg" alt="logo" />
    </div>
    <div class="cursor-pointer" @click="onDrawerOpen">
      <img src="@/assets/icons/icon-menu.svg" alt="icon-menu" />
    </div>
  </header>
</template>
<script>
export default {
  props: {
    onDrawerOpen: Function,
  },
};
</script>
