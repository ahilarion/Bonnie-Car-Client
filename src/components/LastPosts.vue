<script setup>
import Annonce from "@/components/Annonce.vue";
import SubtitleCustom from "@/components/SubtitleCustom.vue";
import Post from "@/components/Post.vue";

import { onBeforeMount, ref } from "vue";
import http from "@/config/http.js";

let lastCar = ref([]);
let lastMoto = ref([]);

const getCar = async () => {
  const response = await http.get("/post/last-car");
  lastCar.value = response.data;
};

const getMotorcycle = async () => {
  const response = await http.get("/post/last-moto");
  lastMoto.value = response.data;
};

const carOne = ref(null);
const carTwo = ref(null);
const carThree = ref(null);

const motorcycleOne = ref(null);
const motorcycleTwo = ref(null);
const motorcycleThree = ref(null);

onBeforeMount(async () => {
  await getCar();
  await getMotorcycle();

  carOne.value = lastCar.value.data[0];
  carTwo.value = lastCar.value.data[1];
  carThree.value = lastCar.value.data[2];

  motorcycleOne.value = lastMoto.value.data[0];
  motorcycleTwo.value = lastMoto.value.data[1];
  motorcycleThree.value = lastMoto.value.data[2];
});
</script>

<template>
  <!-- center the content -->
  <div
    class="w-full bg-transparent flex flex-col items-center justify-center transition-all"
  >
    <div
      class="relative flex w-[73vw] min-w-[300px] flex-col md:flex-row md:flex-wrap gap-10 md:gap-20 items-center justify-start md:justify-center p-4 md:p-5 m-4"
    >
      <Post :data="carOne" />
      <Post :data="carTwo" class="hidden md:block" />
      <Post :data="carThree" class="hidden md:block" />
    </div>
    <RouterLink
      to="/annonces"
      class="bg-bc-yellow text-gray-900 py-3 px-4 text-medium rounded-full"
      >Voir toutes les annonces</RouterLink
    >
    <div
      class="relative flex w-[73vw] min-w-[300px] flex-col md:flex-row md:flex-wrap gap-10 md:gap-20 items-center justify-start md:justify-center p-4 md:p-5 m-4"
    >
      <Post :data="motorcycleOne" />
      <Post :data="motorcycleTwo" class="hidden md:block" />
      <Post :data="motorcycleThree" class="hidden md:block" />
    </div>
    <RouterLink
      to="/annonces"
      class="bg-bc-yellow text-gray-900 py-3 px-4 text-medium rounded-full"
      >Voir toutes les annonces</RouterLink
    >
  </div>
</template>
