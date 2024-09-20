<template>
  <li class="hover:text-blue-500 text-gray-500 cursor-pointer px-4">
    <router-link :to="href">{{ linkName }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    href: String,
    linkName: String,
  },
};
</script>
