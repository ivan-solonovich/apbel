<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'
  import heroImg from "~/assets/images/hero.png"
  import heroVid from "~/assets/video/prison-short.mp4"
  import heroVidW from "~/assets/video/prison-short.webm"
  const vidHero = ref(heroVid)
  const vidWHero = ref(heroVidW)
  const imgHero = ref(heroImg)
  const heroCaption = 'We provide support to rebuilds lives'
  const heroTitle = 'Created by political prisoners for political prisoners'
  const heroDescription =
    'Find your new furry friend today! We have a wide variety of lovable pets available for adoption. Come visit us and take home your new best friend!'
</script>
<template>
  <section class="hero-section mx-auto  pb-12 ">

      <div class>
        <div class="hero-container  pb-6  px-6 relative ">
          <div
            class="-mx-4 flex justify-center align-middle items-center  space-y-6 lg:space-y-0"
          >
            <div class="p-4 m-4 w-full md:w-8/12 xl:w-6/12 opacity-1000 bg-gray-400">
              <h4
                class="hero-caption font-bold mb-1 text-primary-600 dark:text-primary-200 opacity-1000 uppercase "
              >
                {{ heroCaption }}
              </h4>
              <h1 class="hero-title capitalize leading-tight mb-2 text-white">
                {{ heroTitle }}
              </h1>
<!--              <p class="font-thin mb-6 text-gray-300">-->
<!--                Find your new furry friend today! We have a wide variety of-->
<!--                lovable pets available for adoption. Come visit us and take home-->
<!--                your new best friend!-->
<!--              </p>-->
              <Button
                class="focus:outline-none text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 p-4 mr-4"
                size="xl"
                label="I want to help"
                target="_blank"
                to="/"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">I want to help</div>

              </Button>
              <Button
                  class="focus:outline-none text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 p-4 mr-4"

                  size="xl"
                  label="I need a help"
                  target="_blank"
                  to="/"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">I need a help</div>

              </Button>
            </div>
          </div>
        </div>

      </div>
    <video id="main-video"  autoplay playsinline loop muted class="absolute box-border z-10 w-auto w-screen min-h-100 max-w-none bg-opacity-50" >
      <source :src="vidHero" type="video/mp4">Your browser does not support the video tag.
      <source :src="vidWHero" type="video/webm">Your browser does not support the video tag.
    </video>
  </section>

</template>
<style scoped>
.hero-section{
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: Roboto;

}
.hero-container{
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

}
@media only screen and (max-width: 991px) {
  #main-video{
    height: 100vh;
    width: auto;
    object-fit: contain;
  }
  .hero-title{
    font-size: large;
  }
  .hero-caption{
    font-size: large;
  }
}
  .background-hero{
    width: 100%;
    height: 592px;
    background-image: url("@/assets/images/hero.png");
    background-size: cover;
    background-repeat: no-repeat;

  }
</style>
