<script setup>
import QuesComponent from "./components/QuesComponent.vue";
</script>

<template>
  <div
    class="flex relative font-Kumbh items-center justify-center bg-gradient-to-b from-Soft-violet to-Soft-blue h-screen w-screen"
  >
    <div
      class="container flex flex-col lg:flex-row pb-8 gap-12 items-center justify-center rounded-3xl w-5/6 lg:w-3/5 lg:h-fit lg:py-11 bg-white relative lg:overflow-hidden lg:justify-between lg:items-center"
    >
      <!-- Mobile -->
      <img
        src="./assets/illustration-woman-online-mobile.svg"
        alt="illustration-woman-online"
        class="w-4/5 absolute -top-[120px] md:-top-[240px] z-10 lg:hidden block"
      />
      <img
        src="./assets/bg-pattern-mobile.svg"
        alt
        class="w-4/5 absolute top-[0px] lg:hidden block"
      />

      <!-- desktop -->
      <img src="./assets/illustration-woman-online-desktop.svg" alt class="hidden lg:block -m-10" />
      <img src="./assets/bg-pattern-desktop.svg" alt class="absolute -left-[300px] w-[740px]" />
      <div class="flex flex-col items-center w-full">
        <h1 class="font-bold text-4xl text-Very-dark-desaturated-blue pt-36 md:pt-64 lg:p-0">FAQ</h1>
        <QuesComponent />
      </div>
    </div>
    <img
      src="./assets/illustration-box-desktop.svg"
      alt
      class="hidden lg:block absolute left-[280px]"
    />
  </div>
</template>

