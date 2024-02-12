<script setup>
import InputCustom from "@/components/InputCustom.vue";
import Hero from "@/components/Hero.vue";
</script>

<template>
  <div
    class="absolute bg-bc-gray w-[100%] z-[55] h-[100%] flex flex-col px-8 justify-center"
  >
    <p class="text-bc-yellow font-bold text-xl text-center my-12">Bienvenue</p>

    <div class="bg-bc-black rounded-xl mb-5">
      <InputCustom type="email" placeholder="Adresse email" />
    </div>

    <div class="bg-bc-black rounded-xl relative mb-5">
      <svg
        class="absolute top-2/4 translate-y-[-50%] right-8"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9841 5.78027C8.33067 5.78027 4.58301 7.8948 1.6327 12.1239C1.54849 12.2459 1.50234 12.3902 1.50009 12.5384C1.49783 12.6867 1.53958 12.8323 1.62004 12.9568C3.88692 16.5053 7.58442 19.2803 11.9841 19.2803C16.336 19.2803 20.1094 16.4968 22.3805 12.9404C22.4591 12.8183 22.5009 12.6762 22.5009 12.531C22.5009 12.3858 22.4591 12.2436 22.3805 12.1215C20.1043 8.6059 16.3032 5.78027 11.9841 5.78027Z"
          stroke="#FFD719"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.0005 16.2809C14.0719 16.2809 15.7511 14.6017 15.7511 12.5303C15.7511 10.459 14.0719 8.77979 12.0005 8.77979C9.92917 8.77979 8.25 10.459 8.25 12.5303C8.25 14.6017 9.92917 16.2809 12.0005 16.2809Z"
          stroke="#FFD719"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
      <InputCustom type="password" placeholder="Mot de passe" />
    </div>

    <div class="bg-bc-yellow relative">
      <a href="#" class="absolute right-0 text-end text-bc-white underline"
        >Mot de passe oublié</a
      >
    </div>

    <div class="relative w-full">
      <a
        class="bg-bc-yellow p-5 border-text-bc-yellow border-[1px] rounded-[40px] text-center w-auto"
        href="qsd"
        >Voir plus</a
      >
    </div>

    <p class="absolute bottom-5 left-2/4 translate-x-[-50%] text-[#7f7f7f]">
      Vous n'avez pas de compte ?
      <a href="#" class="underline text-bc-yellow">Inscription</a>
    </p>
  </div>
  <!-- <Hero title="mon super titre">
    <p class="text-bc-white">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi culpa unde
      dolor? Magni nulla mollitia earum minima exercitationem ad quia vitae modi
      atque dicta ratione quos, obcaecati iusto quo cumque?
    </p>
  </Hero> -->
</template>
