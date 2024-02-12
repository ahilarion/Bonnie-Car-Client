<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "test",
  },
});
</script>

<template>
  <input
    class="h-12 rounded-xl bg-[transparent] w-full border-none text-bc-yellow"
    :type="type"
    :placeholder="placeholder"
  />
</template>
