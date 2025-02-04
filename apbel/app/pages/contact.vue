<script setup lang="ts">
definePageMeta({
  // layout: 'default',
  // name: 'volunteer',
  // alias: 'volunteer',
  title: 'Volunteer',
  description: "Don't Miss Out – Stay in the Know, Subscribe Today!",
  navOrder: '6',
  type: 'secondary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})
</script>
<template>
  <TheHeader>
    <div class="container mx-auto px-4">
      <h2 class="mb-2 text-5xl">Contact Us</h2>
    </div>
  </TheHeader>
  <div
      class="pb-12 text-center bg-white-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <p>
      If you want to become a member of the Association, need help or want to help, and also have ideas
      and projects that you want to implement, contact to us
    </p>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <div class="container mx-auto px-4 py-12 relative">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="p-4 w-full lg:w-6/12">
              <NuxtImg
                  src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="rounded-3xl w-full"
                  alt="Our Mission"
              />
            </div>
            <div class="mx-auto p-4 w-full lg:w-5/12">


              <div class="bg-blue-50 p-2 rounded-md">

                <h6>Find our representatives via Telegram:</h6>
                <ul class="list-disc m-6 text-left p-2">
                  <li>Warsaw @palitvyazen</li>
                  <li>Bialystok @maxdim</li>
                  <li>Vilnius @maksdim</li>
                  <li>Georgia @Maf_1991</li>
                  <li>Germany @AmmoOne</li>
                  <li>@APBel_FIN</li>
                  <li>Sweden @lae0089</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped></style>
