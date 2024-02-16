<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <header class="fixed top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 transition-all">
    <nav class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap items-center justify-between" aria-label="Global">
      <a class="flex-none text-xl font-semibold" href="#">
        <img class="h-12" src="../assets/img/logo.svg" alt="Logo" />
      </a>
      <div class="hidden sm:flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
        <ul class="flex space-x-4">
          <li>
            <RouterLink to="/" class="text-bc-white text-medium">Nos annonces</RouterLink>
          </li>
          <li>
            <RouterLink to="/nos-guides" class="text-bc-white text-medium">Nos guides</RouterLink>
          </li>
          <li>
            <RouterLink to="/a-propos" class="text-bc-white text-medium">À propos</RouterLink>
          </li>
          <li>
            <RouterLink to="/new-post" class="bg-bc-yellow text-gray-900 p-3 text-medium rounded-full">Déposer une annonce</RouterLink>
          </li>
          <li>
            <RouterLink to="/se-connecter" class="bg-transparent border-bc-yellow border-2 text-bc-yellow p-3 text-medium rounded-full">Se connecter / S'inscrire</RouterLink>
          </li>
        </ul>
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

<script>
   export default {
     mounted() {
       let header = document.querySelector("header");
       document.addEventListener("scroll", () => {
         if (window.scrollY > 0) {
            header.classList.add("bg-bc-gray");
            header.classList.add("border-b-2");
            header.classList.add("border-bc-yellow");
         } else {
            header.classList.remove("bg-bc-gray");
            header.classList.remove("border-b-2");
            header.classList.remove("border-bc-yellow");
         }
       });
     }
   };
</script>