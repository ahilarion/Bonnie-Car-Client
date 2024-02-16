<script setup>
import Banner from "@/components/Banner.vue";
import LastPosts from "@/components/LastPosts.vue";
import GlobalInfos from "@/components/GlobalInfos.vue";
import Annonce from "@/components/Annonce.vue";
import SubtitleCustom from "@/components/SubtitleCustom.vue";
import GuideCard from "@/components/GuideCard.vue";
import Review from "@/components/Review.vue";
import Footer from "@/components/Footer.vue";
import Sponsors from "@/components/Sponsors.vue";
import Partners from "@/components/Partners.vue";
</script>

<template>
  <Banner />
  <LastPosts />
  <GlobalInfos />
  <div
    class="w-full bg-transparent flex flex-col items-center justify-center transition-all"
  >
    <div
      class="relative flex w-[73vw] min-w-[300px] flex-col md:flex-row md:flex-wrap gap-10 md:gap-20 items-center justify-start md:justify-center p-4 md:p-5 m-4"
    >
      <SubtitleCustom class="w-full">Nos derniers guides</SubtitleCustom>
      <GuideCard />
      <GuideCard />
      <GuideCard />
    </div>
    <RouterLink
      to="/annonces"
      class="bg-bc-yellow text-gray-900 py-3 px-4 text-medium rounded-full"
      >Voir tous les guides</RouterLink
    >
  </div>
  <Review />
  <Sponsors />
  <Partners />
  <Footer />
</template>
