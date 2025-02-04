<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'StatsSection',
  // 	},
  // })
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <!-- <img
            src="https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          /> -->
          <NuxtImg
            src="https://images.unsplash.com/photo-1617080090911-91409e3496ad?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6
            class="font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase"
          >
            Our Work
          </h6>
          <h3 class="capitalize mb-6">Impact we make</h3>
          <h5>Why Your Support Matters</h5>
          <p>
            These initiatives are the first step toward creating lasting change. We invite donors, organizations, and
            individuals to join us in making these ideas a reality. Together, we can bring hope and support to those who need it most.
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">120+</h2>
              <p>People Helped</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">100+</h2>
              <p>Families Helped</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">20+</h2>
              <p>Active Volunteers</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">10+</h2>
              <p>Project Realised</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
