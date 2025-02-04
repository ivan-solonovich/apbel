<script setup lang="ts">

import ArticleCard_1 from "~/components/articleCard/articleCard_1.vue";
import AR_2 from "~/components/articleCard/AR_2.vue";
import AR_3 from "~/components/articleCard/AR_3.vue";
import AR_4 from "~/components/articleCard/AR_4.vue";
import AR_5 from "~/components/articleCard/AR_5.vue";
import AR_6 from "~/components/articleCard/AR_6.vue";
</script>

<template>
  <div class="w-100 flex items-center justify-center py-10">
          <div class="container w-100  grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center align-items-center justify-items-center">
              <article-card_1/>
              <AR_2/>
              <AR_3/>
              <AR_4/>
              <AR_5/>
              <AR_6/>
          </div>
  </div>
</template>

<style scoped>


</style>