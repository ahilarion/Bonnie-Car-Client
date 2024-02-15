<script setup>
    import GuideCard from "@/components/GuideCard.vue";
    import SubtitleCustom from "@/components/SubtitleCustom.vue";
    import Searchbar from "@/components/Searchbar.vue";
</script>

<template>
    <div class="min-h-[40vh] bg-[url('./assets/img/bg-home.jpg')] bg-center relative flex items-center p-10 mb-12" >
        <div class="absolute w-3/4 bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4">
            <Searchbar/>
        </div>

        <SubtitleCustom class="text-bc-yellow text-[32px]">
            <slot name="title">Nos guides</slot>
        </SubtitleCustom>
    </div>
    <div class="px-10 bg-bc-dark w-full h-full">
        <p class="text-left place-self-start text-lg text-bc-gray-light py-4">NOS GUIDES</p>
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