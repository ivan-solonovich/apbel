<script setup lang="ts">
  import ArticleCardList from "~/components/ArticleCardList.vue";

  definePageMeta({
    // layout: 'default',
    // name: 'articles',
    // alias: 'articles',
    title: 'Articles',
    description: 'Devour Knowledge, One Article at a Time!',
    navOrder: 4,
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <section>
    <TheHeader>
      <div class="container mx-auto px-4">
        <h2 class="mb-2 text-5xl">Articles</h2>
      </div>
    </TheHeader>
    <div class="px-8 w-100 flex justify-center">
     <ArticleCardList/>
    </div>
<!--    <ArticleList />-->
  </section>
</template>
<style scoped></style>
