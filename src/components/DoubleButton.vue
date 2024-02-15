<script setup>

</script>

<template>
    <div class="flex">
        <button class="px-5 py-2.5 bg-bc-yellow rounded-l-3xl text-bc-black"><slot name="first"></slot></button>
        <button class="px-5 py-2.5 bg-bc-black rounded-r-3xl"><slot name="second"></slot></button>
    </div>
</template>