<template>
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
        <h6 class="mb-2  text-primary-600 dark:text-primary-200 uppercase">
          Our Mission
        </h6>
        <h3 class="capitalize mb-2">
          Life changing experience for a valuable cause
        </h3>
        <p class="mb-6">
          Our mission is to defend human rights, provide relief to those impacted by political repression,
          and help them reclaim their lives.
        </p>
        <BaseButton
            class="focus:outline-none text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 p-4 mr-4"

            size="xl" to="/ourMission"> Learn More </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
