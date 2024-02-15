<script setup>
  import Search from "@/components/Search.vue";
  import TitleCustom from "@/components/TitleCustom.vue";
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center bg-bc-gray shadow-sm p-4 h-[70vh] md:p-5 overflow-hidden"
  >
    <div
      class="top-0 left-0 z-10 absolute w-full h-full overflow-hidden"
    >
      <img
        class="absolute w-full h-full object-cover brightness-50"
        src="../assets/img/bg-home.jpg"
        alt="Image"
      />
    </div>
    <div class="relative z-20 flex flex-col items-center justify-center w-[73vw] min-w-[300px]">
      <TitleCustom class="mt-10" color="text-bc-yellow">
        Achetez et vendez votre véhicule en toute sécurité
      </TitleCustom>
      <p class="mt-4 text-xl text-bc-white text-left">Trouvez la voiture de vos rêves parmi nos milliers d'annonces</p>
      <Search />
    </div>
  </div>
</template>
