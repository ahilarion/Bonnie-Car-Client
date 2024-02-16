<template>
  <div
      class="w-full bg-transparent flex flex-col items-center justify-center transition-all"
  >

    <div
        class="relative flex w-[73vw] min-w-[300px] flex-col md:flex-row md:flex-wrap gap-10 items-center justify-start md:justify-center p-4 md:p-5 m-4"
    >
    <p class="text-xl text-bc-yellow font-bold w-full text-left">Ils parlent de nous</p>
    <div class="w-[25rem] md:w-[40rem] relative">
      <!-- Carousel Here -->
      <button @click="prevImage" class="border-bc-yellow border-[1px] absolute z-10 top-1/2 left-0 ml-4 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 19l-7-7 7-7">
          </path>
        </svg>
      </button>
      <button @click="nextImage" class="border-bc-yellow border-[1px] absolute z-10 top-1/2 right-0 mr-4 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5l7 7-7 7">
          </path>
        </svg>
      </button>
      <div class="relative h-full w-full flex justify-center items-center overflow-hidden" v-if="posts.length">
        <div v-for="(post, index) in posts" :key="index" class="transition-opacity duration-500" v-show="currentImage === index">
          <img :src="post.mainImage" alt="carousel" class="object-center object-cover h-10 md:h-20" />
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentImage: 0,
      posts: [
          // image in public/img
        { mainImage: "/img/logo_bfm.png" },
        { mainImage: "/img/lerepaire.png" },
        { mainImage: "/img/logo_decision_ATELIER.png" },
        { mainImage: "/img/logo_fct.png" },
        { mainImage: "/img/logo_JA_1.jpg" },
        { mainImage: "/img/logo_leparisien.png" },
        { mainImage: "/img/pro.largus.fr.png" }
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentImage = this.currentImage === this.posts.length - 1 ? 0 : this.currentImage + 1;
    },
    prevImage() {
      this.currentImage = this.currentImage === 0 ? this.posts.length - 1 : this.currentImage - 1;
    },
  },
};
</script>