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
      <h2 class="mb-2 text-5xl">Our Mission</h2>
    </div>
  </TheHeader>
  <div
      class="pb-12 text-center bg-white-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="container mx-auto px-4">
      <div class="-mx-4 flex flex-wrap">
        <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
          <div class="container px-6 py-12 rounded-lg tertiary-card">
            <h3 class="mb-6 text-left">
              Our mission is to defend human rights, provide relief to those impacted by political repression, and help them reclaim their lives.
            </h3>

            <h4 class="text-left">
              We are committed to:
            </h4>
            <ul class="list-disc text-left bg-gray-50 p-6 rounded-md">
              <li>Supporting political prisoners and their families as they heal from trauma and rebuild their futures.</li>
              <li>Advocating for the recognition of human rights violations and promoting justice.</li>
              <li>Creating opportunities for individuals to thrive in freedom, with dignity and security.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <div class="container mx-auto px-4 py-12 relative">
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="p-4 w-full lg:w-6/12">
              <NuxtImg
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="rounded-3xl w-full"
                  alt="Our Mission"
              />
            </div>
            <div class="mx-auto p-4 w-full lg:w-5/12">
              <h6 class="mb-2 font-extrabold text-primary-800 dark:text-primary-200 uppercase">
                Core Objectives
              </h6>
              <div class="bg-blue-50 p-2 rounded-md text-left">
                <p class="pb-4">
                  At the Association of Political Prisoners of Belarus (APB), our mission is to advocate for the rights
                  and freedoms of individuals unjustly imprisoned for their political beliefs and activities.
                  We are dedicated to raising awareness about the plight of political prisoners in Belarus and working
                  tirelessly to secure their release and promote human rights in our country.
                </p>
                <p class="pb-4">
                  Advocacy for Political Prisoners: We strive to be the voice for those who have been silenced. Our
                  organization actively campaigns for the release of political prisoners, providing them with the support
                  they need and ensuring their stories are heard both locally and internationally.
                </p>
                <p class="pb-4">
                  Raising Awareness: We believe that knowledge is power. Through education, outreach, and advocacy,
                  we aim to inform the public and the international community about the human rights abuses occurring in
                  Belarus. By shining a light on these injustices, we hope to mobilize support for our cause.
                </p>
                <p class="pb-4">
                  Support for Families: The families of political prisoners often bear the brunt of the emotional and
                  financial toll of their loved ones' imprisonment. We provide assistance to these families, offering
                  resources, support, and a community of solidarity to help them navigate their challenges.
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <div class="container mx-auto px-4 py-12 relative">
          <div class="-mx-4 flex flex-wrap items-center">

            <div class="mx-auto p-4 w-full lg:w-5/12">
              <div class="bg-blue-50 p-2 rounded-md text-left">
                <p class="pb-4">
                  Documentation of Human Rights Violations: Accurate documentation is essential for advocacy. We work to
                  gather evidence of human rights abuses, maintain comprehensive records of political prisoners, and report
                  these findings to relevant international bodies and organizations.
                </p>
                <p class="pb-4">Promoting Democracy and Human Rights: Our ultimate goal is to foster a society where democracy,
                  freedom of expression, and human rights are upheld. We engage in initiatives that promote democratic
                  values and encourage civic participation among the citizens of Belarus.</p>
                <h6 class="mb-2 font-extrabold text-primary-800 dark:text-primary-200 uppercase">
                  Our Vision
                </h6>
                <p>We envision a Belarus where every individual can express their beliefs without fear of persecution,
                  where political dissent is respected, and where human rights are protected. We believe in a future where
                  justice prevails, and every political prisoner is free to return to their families and communities.</p>
              </div>


            </div>
            <div class="p-4 w-full lg:w-6/12">
              <NuxtImg
                  src="https://images.unsplash.com/photo-1591522810850-58128c5fb089?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="rounded-3xl w-full"
                  alt="Our Mission"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
    <div class="w-100 flex justify-center items-center">
      <div class=" p-2 rounded-md">

        <h4 class="container">
          Our mission is only possible with the support of individuals, organizations, and communities who share
          our commitment to human rights and justice. We invite you to join us in our efforts to advocate for
          political prisoners in Belarus, raise awareness about their plight, and work towards a brighter future
          for all. Together, we can make a difference and stand in solidarity with those who are fighting for
          their rights and freedoms.
        </h4>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
