<template>
  <div class="relative flex flex-col items-center justify-center bg-bc-gray shadow-sm p-4 h-[70vh] md:p-5 overflow-hidden">
    <div class="top-0 left-0 z-10 absolute w-full h-full md:h-52 overflow-hidden">
      <img class="absolute w-full h-full object-cover brightness-50" src="../assets/img/bg-home.jpg" alt="Image" />
    </div>
    <div class="relative z-20 flex flex-col items-center justify-center">
      <h1 class="text-3xl mt-10 md:text-4xl font-black text-bc-yellow text-left">Achetez et vendez votre véhicule en toute sécurité</h1>
      <p class="mt-4 text-bc-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <Search />
    </div>
  </div>
</template>
<script setup>
import Search from "@/components/Search.vue";
</script>