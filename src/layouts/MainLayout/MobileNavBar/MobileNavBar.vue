<template>
  <header
    class="w-full bg-white h-12 mb-6 flex justify-between items-center"
    role="banner"
  >
    <img src="@/assets/logo.svg" alt="logo" role="img" />
    <div class="cursor-pointer" @click="onDrawerOpen" role="button">
      <img src="@/assets/icons/icon-menu.svg" alt="icon-menu" role="img" />
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
