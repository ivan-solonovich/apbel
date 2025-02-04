<script setup lang="ts">
import changeImg from "~/assets/images/changes.jpg"
const imgChange = ref(changeImg)
  const callToActions = [
    {
      img: 'https://images.unsplash.com/photo-1601157901129-67c544092bcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlbGFydXMlMjAyMDIwfGVufDB8fDB8fHww',
      action: 'About Us',
      to: '/aboutUs',
    },
    {
      img: 'https://images.unsplash.com/photo-1604739835169-46f1d28fd3b6?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      action: 'I want to be a Volunteer',
      to: '/volunteer',
    },
    {
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      action: 'I want to Donate',
      to: '/',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Get Involved
      </h6>
      <h3 class="capitalize mt-3 text-center">
        Small gesture for a big impact
      </h3>
      <p class="mt-4 text-center">
        Solidarity with Victims: Many political prisoners are ordinary citizens who have bravely stood up against
        oppression. Supporting the APB is a way to express solidarity with these individuals and their families,
        showing that they are not alone in their struggle.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>
<style scoped></style>
