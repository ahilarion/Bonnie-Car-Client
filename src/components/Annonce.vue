<script setup>
import { ref } from "vue";
import ButtonCustom from "@/components/ButtonCustom.vue";
import InputCustom from "@/components/InputCustom.vue";

const currentImage = ref(0);

const posts = [
  {
    title: "First post",
    content:
      "This is the first post lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    mainImage:
      "https://t3.ftcdn.net/jpg/06/37/03/56/360_F_637035669_qBx3qw4rbjCtJ2fU7OPCyEoOq0VRdOIx.jpg",
  },
  {
    title: "Second post",
    content:
      "This is the second post lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    mainImage:
      "https://img.freepik.com/photos-gratuite/couleurs-vibrantes-coulent-dans-motif-vague-abstrait-genere-par-ia_188544-9781.jpg",
  },
  {
    title: "Third post",
    content:
      "This is the third post lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    mainImage:
      "https://t3.ftcdn.net/jpg/05/64/82/08/360_F_564820811_n9WP1mM43pLiQwLkIA07KF9Hat5vkX2v.jpg",
  },
];

const nextImage = () => {
  currentImage.value =
    currentImage.value === posts.length - 1 ? 0 : currentImage.value + 1;
};
const prevImage = () => {
  currentImage.value =
    currentImage.value === 0 ? posts.length - 1 : currentImage.value - 1;
};
</script>

<template>
  <div
    class="relative flex flex-col bg-bc-gray shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <!-- Carousel here -->
    <div class="relative flex overflow-hidden rounded-t-xl" v-if="posts.length">
      <button
        @click="prevImage"
        class="absolute z-10 top-1/2 left-0 ml-3 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        @click="nextImage"
        class="absolute z-10 top-1/2 right-0 mr-3 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="min-w-full transition-opacity duration-500"
        v-show="currentImage === index"
      >
        <img
          :src="post.mainImage"
          alt="carousel"
          class="object-cover h-64 w-full"
        />
      </div>
    </div>
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-bc-white" v-if="posts[currentImage]">
        {{ posts[currentImage].title }}
      </h3>
      <p class="mt-1 text-bc-white" v-if="posts[currentImage]">
        {{ posts[currentImage].content }}
      </p>
    </div>
  </div>
</template>
