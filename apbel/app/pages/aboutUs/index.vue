<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'About Us',
    description: 'Adopt Your Fur Mate!',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <TheHeader>
    <div class="container mx-auto px-4">
      <h2 class="mb-2 text-5xl">About Us</h2>
    </div>
  </TheHeader>
  <div
    class="py-12 bg-white-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h3 class="capitalize">Small Gesture For A Big Impact</h3>
        <p class="mb-4 bg-blue-50 rounded-md">
          The APB is dedicated to raising awareness about the plight of political prisoners in Belarus and advocating for their release.
          The organization provides support to the families of prisoners, documents human rights abuses, and works to mobilize
          international pressure on the Belarusian government. By shining a light on these injustices,
          the APB helps to ensure that the voices of the oppressed are not silenced.

        </p>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <div class="container mx-auto px-4 py-12 relative">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="p-4 w-full lg:w-6/12">
              <NuxtImg
                  src="https://images.unsplash.com/photo-1597954626735-77c9f75707f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="rounded-3xl w-full"
                  alt="Our Mission"
              />
            </div>
            <div class="mx-auto p-4 w-full lg:w-5/12">
              <h6 class="mb-2 font-extrabold text-primary-600 dark:text-primary-200 uppercase">
                About us
              </h6>
              <h3 class="capitalize mb-2">
                Life changing experience for a valuable cause
              </h3>
              <div class="bg-blue-50 p-2 rounded-md">
                <p class="mb-6">
                  The Association of Political Prisoners of Belarus (APB) plays a crucial role in advocating for the rights
                  and freedoms of individuals unjustly imprisoned for their political beliefs and activities.
                  In a country where dissent is met with severe repression, supporting the APB is not just a moral
                  obligation but a necessary step towards promoting human rights and democracy in Belarus.
                </p>
                <p>
                  The Association of Political Prisoners of Belarus (APB) was founded in August 2023 by former political
                  prisoners as a grassroots initiative to support victims of political repression and their families.
                  On May 21, 2024, APB achieved legal registration in Lithuania, allowing it to expand its activities and impact.
                </p>
                <br>
                <p>
                  APB operates on the principle of “peer-to-peer support”, connecting those who have endured repression
                  with resources and opportunities for recovery. Guided by personal experience, we deeply understand the
                  challenges faced by political prisoners and their families, especially those in forced exile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
