<script setup>
import Annonce from "@/components/Annonce.vue";
import SubtitleCustom from "@/components/SubtitleCustom.vue";
</script>

<template>
  <!-- center the content -->
  <div class="w-full bg-transparent flex flex-col items-center justify-center transition-all">
    <div
      class="relative flex w-[73vw] min-w-[300px] flex-col md:flex-row md:flex-wrap gap-10 md:gap-20 items-center justify-start md:justify-center p-4 md:p-5 m-4"
    >
      <SubtitleCustom class="w-full">Dernières annonces 4 roues</SubtitleCustom>
      <Annonce class="md:hidden" />
      <Annonce class="hidden md:flex max-w-[400px]" />
      <Annonce class="hidden md:flex max-w-[400px]" />
      <Annonce class="hidden md:flex max-w-[400px]" />
    </div>
    <RouterLink to="/annonces" class="bg-bc-yellow text-gray-900 py-3 px-4 text-medium rounded-full">Voir toutes les annonces</RouterLink>
    <div
      class="relative flex w-[73vw] min-w-[300px] flex-col md:flex-row md:flex-wrap gap-10 md:gap-20 items-center justify-start md:justify-center p-4 md:p-5 m-4"
    >
      <SubtitleCustom class="w-full">Dernières annonces 2 roues</SubtitleCustom>
      <Annonce class="md:hidden" />
      <Annonce class="hidden md:flex max-w-[400px]" />
      <Annonce class="hidden md:flex max-w-[400px]" />
      <Annonce class="hidden md:flex max-w-[400px]" />
    </div>
    <RouterLink to="/annonces" class="bg-bc-yellow text-gray-900 py-3 px-4 text-medium rounded-full">Voir toutes les annonces</RouterLink>
  </div>
</template>
