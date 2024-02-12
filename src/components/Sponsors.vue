<script setup>

</script>
<template>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="bg-bc-yellow w-full h-[210px] rounded-[35px] overflow-hidden relative flex flex-col items-center">
        <p class="text-xl text-bc-black font-bold text-center">Ils parlent de nous</p>

        <div class="h-3/4 w-3/4">
            <!-- Carousel Here -->
            <button @click="prevImage" class="border-bc-yellow border-[1px] absolute z-10 top-1/2 left-0 ml-4 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button @click="nextImage" class="border-bc-yellow border-[1px] absolute z-10 top-1/2 right-0 mr-4 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>

            <div class="relative h-full w-full flex overflow-hidden" v-if="posts.length">
                <div v-for="(post, index) in posts" :key="index" class="transition-opacity duration-500" v-show="currentImage === index">
                    <img :src="post.mainImage" alt="carousel" class="object-cover w-full">
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
            {
            mainImage: "https://t3.ftcdn.net/jpg/06/37/03/56/360_F_637035669_qBx3qw4rbjCtJ2fU7OPCyEoOq0VRdOIx.jpg"
            },
            {
            mainImage: "https://img.freepik.com/photos-gratuite/couleurs-vibrantes-coulent-dans-motif-vague-abstrait-genere-par-ia_188544-9781.jpg"
            },
            {
            mainImage: "https://t3.ftcdn.net/jpg/05/64/82/08/360_F_564820811_n9WP1mM43pLiQwLkIA07KF9Hat5vkX2v.jpg"
            }
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