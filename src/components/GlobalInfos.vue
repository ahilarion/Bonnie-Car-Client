<script setup>
import SubtitleCustom from "@/components/SubtitleCustom.vue";
</script>

<template>
  <div class="w-full mx-auto flex flex-col items-center justify-start gap-4">
    <slot name="svg"></slot>
    <SubtitleCustom class="text-bc-yellow text-center">
      <slot name="title"></slot>
    </SubtitleCustom>
    <p class="text-bc-white text-center">
      <slot name="p"></slot>
    </p>
  </div>
</template>
