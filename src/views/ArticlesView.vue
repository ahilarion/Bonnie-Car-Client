<script setup>
    import GuideCard from "@/components/GuideCard.vue";
</script>

<template>
    <div class="px-10 bg-bc-yellow w-full h-full">
        <p class="text-left place-self-start text-lg text-bc-gray-light">NOS GUIDES</p>
        <div class="col-span-3"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-content-between place-items-center gap-5">
            <GuideCard/>
            <GuideCard/>
            <GuideCard/>

            <GuideCard/>
            <GuideCard/>
            <GuideCard/>
        </div>
    </div>
</template>