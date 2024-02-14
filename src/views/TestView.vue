<script setup>
import Post from "@/components/Post.vue";
import Sponsors from "@/components/Sponsors.vue";
import LoginForm from "@/components/LoginForm.vue";
import Caracteristic from "@/components/Caracteristic.vue";
import Footer from "@/components/Footer.vue";
import GlobalInfos from "@/components/GlobalInfos.vue";
import Review from "@/components/Review.vue";

// donnée pour le post
const dataPost = {
  uuid: "4c137cca-f81a-4261-98e8-9fb5ba38d243",
  title: "Voiture à vendre",
  description: "Une belle voiture de sport en très bon état.",
  price: 24500.0,
  images: [
    "https://pic.clubic.com/v1/images/1983321/raw?fit=max&width=1200&hash=ffccb3710b200e00009fb793ba878b165407e002",
    "https://www.ford.fr/content/dam/guxeu/rhd/central/cars/2020-mustang-mach-1/launch/gallery/exterior/Ford-Mach1-eu-SHOT_02_Mach_1_Dynamic_Car_to_Car-16x9-2160x1215-Gallery_D_T_M-2.jpg.renditions.original.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlXcSd59b931PihtKV-9ZziwV6HlNfmKM7MUbPdDr3YiwSzKVWBRTh5rKlhvbAbw3Jvs&usqp=CAU",
  ],
  vehicle: {
    uuid: "e5aa972a-a5db-4442-a6b2-bdd590db6afe",
    constructor: "Ford",
    model: "Mustang",
    is_two_wheeled: false,
    original_price: 35000.0,
    type: "Sport",
    energy_source: "Gasoline",
    transmission: "Automatic",
    cylinder_capacity: 1596,
    power: 310,
    torque: 320,
    year_of_manufacture: 2019,
    production_year: 2019,
    circulation_date: "2019-07-15",
    technical_revision: "2022-07-15",
    number_of_owners: 1,
    kilometers: 20000,
    color: "Red",
    number_of_doors: 2,
    seats: 4,
    vehicle_length: 4784,
    condition: "Excellent",
    description: "Une belle voiture de sport en rouge en excellent état.",
  },
  published_at: "2023-04-20T14:30:00+00:00",
};
</script>

<template>
  <!-- <Sponsors /> -->
  <Post :data="dataPost" class="mt-20" />
  <!-- <LoginForm /> -->
  <!-- <Caracteristic /> -->
  <!-- <Footer /> -->
  <!-- <GlobalInfos /> -->
  <!-- <Review /> -->
</template>
