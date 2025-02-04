<script setup lang="ts">
 import imgHand from "~/assets/images/red-hands.avif"
 const redHand = ref(imgHand)
</script>
<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h6 class="text-primary-100 dark:text-primary-700 uppercase">
              Adopt A Pet
            </h6>
            <h3 class="capitalize">Small Gesture For A Big Impact</h3>
            <p class="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              vitae congue tortor.
            </p>
          </div>

        </div>
        <div class="container mx-auto px-4 py-12 relative">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="p-4 w-full lg:w-6/12">
              <NuxtImg
                  :src="redHand"
                  class="rounded-3xl w-full"
                  alt="Our Mission"
              />
            </div>
            <div class="mx-auto p-4 w-full lg:w-5/12">
              <h6 class="mb-2  text-primary-600 dark:text-primary-200 uppercase">
                Painting "Hand of Support"
              </h6>
              <h3 class="capitalize mb-2">
                Life changing experience for a valuable cause
              </h3>
              <p class="mb-6">
                Political prisoners leave their handprints on the canvas and thank you for your support.
              </p>
              <p class="mb-6">
                All proceeds from the sale of paintings will be used to support political prisoners.
              </p>
              <p class="mb-6">
                Size: 24х18 cm
              </p>
              <p class="mb-6">
                Acryl on Canva, Framed
              </p>
              <BaseButton
                  class="focus:outline-none text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 p-4 mr-4"

                  size="xl" to="/"> Buy it now </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
