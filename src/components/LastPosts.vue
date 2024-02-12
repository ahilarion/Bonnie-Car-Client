<script setup>
import Annonce from "@/components/Annonce.vue";
import SubtitleCustom from "@/components/SubtitleCustom.vue";
</script>

<template>
  <div
    class="relative flex flex-col gap-5 items-center justify-start p-4 md:p-5 m-4"
  >
    <SubtitleCustom class="w-full">Dernières annonces 4 roues</SubtitleCustom>
    <Annonce />
  </div>
</template>
