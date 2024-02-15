<script setup>
import SubtitleCustom from "@/components/SubtitleCustom.vue";
</script>

<template>
  <div class="w-[380px] flex flex-col items-center justify-start gap-4">
    <slot name="svg"></slot>
    <SubtitleCustom class="text-bc-yellow py-4 text-center">
      <slot name="title"></slot>
    </SubtitleCustom>
    <p class="text-bc-white">
      <slot name="p"></slot>
    </p>
  </div>
</template>
