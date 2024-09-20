<template>
  <div>
    <!-- Backdrop with fade-in animation -->
    <div
      v-if="isDrawerOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
      :class="{ 'opacity-0': !isDrawerOpen, 'opacity-100': isDrawerOpen }"
      @click="closeDrawer"
    ></div>

    <!-- Drawer with slide-in animation -->
    <div
      class="px-8 flex items-center overflow-hidden fixed top-0 right-0 bg-off-white-color h-screen w-3/4 overflow-y-auto z-50 transform transition-transform duration-300"
      :class="{
        'translate-x-full': !isDrawerOpen,
        'translate-x-0': isDrawerOpen,
      }"
      tabindex="-1"
    >
      <div class="fixed top-8 right-8 justify-end">
        <img
          src="@/assets/icons/icon-menu-close.svg"
          alt="icon-menu"
          class="cursor-pointer"
          @click="closeDrawer()"
        />
      </div>
      <div class="h-fit flex items-start flex-col space-y-6">
        <RouterLink
          v-for="route in routes"
          class="text-2xl font-[600px] text-secondary-color cursor-pointer hover:text-primary-color"
          :key="route.path"
          :to="route.path"
          activeClass="!text-primary-color"
          @click="closeDrawer()"
          >{{ route.linkName }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { routes } from "@/routes/route";
// eslint-disable-next-line no-undef
defineProps({
  isDrawerOpen: Boolean,
  closeDrawer: Function,
});
</script>
