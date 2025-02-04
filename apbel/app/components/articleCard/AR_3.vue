<script setup lang="ts">
import imgHR from "~/assets/images/articles/HR.png"
const HRimg = ref(imgHR)
</script>

<template>
  <div
      class="p-4 block rounded-lg bg-white border border-gray-200 shadow-sm dark:bg-surface-dark">
    <a href="https://www.state.gov/reports/2020-country-reports-on-human-rights-practices/belarus/" target="_blank">
      <img
          class="rounded-t-lg"
          :src="HRimg"
          alt="" />


      <div class="p-6 text-surface dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight">2020 Country Reports on Human Rights Practices: Belarus</h5>
      </div>
    </a>
  </div>
</template>

<style scoped>

</style>