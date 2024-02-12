<script setup>
import { defineProps, ref } from "vue";
import { onMounted } from "vue";

const colorText = ref("");
const colorBg = ref("");
const colorBorder = ref("");
const rounded = ref("");

const props = defineProps({
  type: {
    type: String,
    default: "yellow",
  },
});

onMounted(() => {
  if (props.type === "black") {
    colorText.value = "text-bc-yellow";
    colorBg.value = "bg-bc-black";
    colorBorder.value = "border-bc-black";
    rounded.value = "rounded-[40px]";
  } else if (props.type === "yellow") {
    colorText.value = "text-bc-black";
    colorBg.value = "bg-bc-yellow";
    colorBorder.value = "border-bc-yellow";
    rounded.value = "rounded-[40px]";
  } else if (props.type === "square") {
    colorText.value = "text-bc-gray-light";
    colorBg.value = "bg-bc-black";
    colorBorder.value = "border-bc-black";
    rounded.value = "rounded-[12px]";
  } else if (props.type === "transparent") {
    colorText.value = "text-bc-yellow";
    colorBorder.value = "border-bc-gray-light";
    rounded.value = "rounded-[40px]";
  }
});
</script>

<template>
  <button
    :class="`${colorText} ${colorBg} ${colorBorder} ${rounded} mt-4 font-light text-[16px] py-2 px-4 border-solid border`"
  >
    <slot></slot>
  </button>
</template>
