<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'Blog',
    description: 'Read, Learn, Enjoy: Your Blog Destination!',
    navOrder: 5,
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div class="pb-12">
    <TheHeader>
      <div>
        <div class="flex items-center">
          <h2 class="text-5xl">Blog</h2>
        </div>
        <div class="flex items-center mt-2">
          <h6 class="mt-2">Source for this blog</h6>

        </div>
        <slot />
      </div>
    </TheHeader>
    <BlogList />
  </div>
</template>
