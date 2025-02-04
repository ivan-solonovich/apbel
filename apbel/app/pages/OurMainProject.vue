<script setup lang="ts">
import PC_1 from "~/components/projectCards/PC_1.vue";
import PC_2 from "~/components/projectCards/PC_2.vue";
import PC_3 from "~/components/projectCards/PC_3.vue";
</script>

<template>
  <TheHeader>
    <div class="container mx-auto px-4">
      <h2 class="mb-2 text-5xl">Our Main Projects</h2>
    </div>
  </TheHeader>
  <div
      class="py-12 bg-white-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h3 class="capitalize">Small Gesture For A Big Impact</h3>
        <p class="mb-4 bg-blue-50 rounded-md">
          At the Association of Political Prisoners of Belarus (APB), we focus on raising awareness, developing initiatives,
          and building partnerships to support political prisoners and their families. Together with organizations and donors,
          we aim to create opportunities for real change.
        </p>
      </div>
    </div>
    <div class="w-100 flex items-center justify-center py-10">
      <div class="container w-100  grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center align-items-center justify-items-center">
        <PC_1/>
        <PC_2/>
        <PC_3/>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>