<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "text-bc-white",
  },
});
</script>

<template>
  <h2 class="md:text-4xl font-black text-left" :class="props.color">
    <slot></slot>
  </h2>
</template>
