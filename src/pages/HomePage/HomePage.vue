<template>
  <MainLayout>
    <div class="py-12">
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2">
          <HeroSection />
        </div>
        <NewSection />
      </div>
      <RelatedArticles />
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "@/layouts/MainLayout/MainLayout.vue";
import HeroSection from "@/pages/HomePage/HeroSection/HeroSection.vue";
import NewSection from "@/pages/HomePage/NewSection/NewSection.vue";
import RelatedArticles from "@/pages/HomePage/RelatedArticles/RelatedArticles.vue";
</script>
