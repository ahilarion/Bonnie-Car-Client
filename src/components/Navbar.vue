<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-bc-gray text-sm py-4 border-b-2 border-b-bc-yellow">
    <nav class="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between" aria-label="Global">
      <a class="flex-none text-xl font-semibold" href="#">
        <img class="h-8" src="../assets/img/logo.png" alt="Logo" />
      </a>
      <div class="hidden sm:flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
        <a class="font-medium capitalize text-bc-white " href="#" aria-current="page">nos véhicules</a>
        <a class="font-medium capitalize text-bc-white hover:text-gray-400" href="#">à propos</a>
        <a class="font-medium capitalize text-bc-white hover:text-gray-400" href="#">nos guides</a>
      </div>
      <div class="flex sm:hidden flex-row items-center gap-5 justify-end mt-0 ps-5">
        <button class="text-bc-white" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation" @click="toggleMenu">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>

  <Sidebar />
</template>