<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="my-16">
    <h1 class="text-bc-white">{{ title }}</h1>
    <slot></slot>
  </div>
</template>
