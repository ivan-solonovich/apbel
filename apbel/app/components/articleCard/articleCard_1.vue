<script setup lang="ts">
import imgFH from "~/assets/images/articles/freedomhouse.png"
const FHimg = ref(imgFH)
</script>

<template>
  <div
      class="p-4 block rounded-lg bg-white border border-gray-200 shadow-sm dark:bg-surface-dark">
    <a href="https://freedomhouse.org/country/belarus/freedom-world/2020" target="_blank">
      <img
          class="rounded-t-lg"
          :src="FHimg"
          alt="" />


      <div class="p-6 text-surface dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight">FreeDom House - Belarus is an authoritarian police state</h5>

      </div>
    </a>
  </div>
</template>

<style scoped>

</style>