<script setup>
import { defineProps } from "vue";

const props = defineProps({
  typeInput: {
    type: String,
    default: "normal",
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  listChoice: {
    type: Array,
    default: () => ["choix1", "choix2", "choix3", "choix4", "choix5"],
  },
});
</script>

<template>
  <!-- Input Normal -->
  <div v-if="props.typeInput === 'normal'" class="bg-bc-black rounded-xl mb-5">
    <input
      class="h-12 rounded-xl bg-[transparent] w-full border-none text-bc-yellow placeholder:text-bc-white placeholder:text-opacity-50"
      :type="type"
      :placeholder="placeholder"
    />
  </div>

  <!-- Input avec icon à droite -->
  <div
    v-else-if="props.typeInput === 'iconRight'"
    class="bg-bc-black rounded-xl relative mb-5"
  >
    <svg
      class="absolute top-2/4 translate-y-[-50%] right-4"
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
    <input
      class="h-12 rounded-xl bg-[transparent] w-full border-none text-bc-yellow pr-12 placeholder:text-bc-white placeholder:text-opacity-50"
      :type="type"
      :placeholder="placeholder"
    />
  </div>

  <!-- Input avec icon à gauche -->
  <div
    v-else-if="props.typeInput === 'iconLeft'"
    class="bg-bc-black rounded-[50px] relative mb-5"
  >
    <svg
      class="absolute top-2/4 translate-y-[-50%] left-[15%]"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C11.337 12 10.7011 11.7366 10.2322 11.2678C9.76339 10.7989 9.5 10.163 9.5 9.5C9.5 8.83696 9.76339 8.20107 10.2322 7.73223C10.7011 7.26339 11.337 7 12 7C12.663 7 13.2989 7.26339 13.7678 7.73223C14.2366 8.20107 14.5 8.83696 14.5 9.5C14.5 9.8283 14.4353 10.1534 14.3097 10.4567C14.1841 10.76 13.9999 11.0356 13.7678 11.2678C13.5356 11.4999 13.26 11.6841 12.9567 11.8097C12.6534 11.9353 12.3283 12 12 12ZM12 2.5C10.1435 2.5 8.36301 3.2375 7.05025 4.55025C5.7375 5.86301 5 7.64348 5 9.5C5 14.75 12 22.5 12 22.5C12 22.5 19 14.75 19 9.5C19 7.64348 18.2625 5.86301 16.9497 4.55025C15.637 3.2375 13.8565 2.5 12 2.5Z"
        fill="#FFD719"
      />
    </svg>

    <input
      class="h-12 bg-[transparent] w-full border-none text-bc-yellow text-center px-[25%] placeholder:text-bc-white placeholder:text-opacity-50"
      :type="type"
      :placeholder="placeholder"
    />
  </div>

  <!-- Le textarea -->
  <div
    v-else-if="props.typeInput === 'textarea'"
    class="bg-bc-black rounded-xl relative mb-5"
  >
    <textarea
      class="rounded-xl bg-[transparent] w-full border-none text-bc-yellow placeholder:text-bc-white placeholder:text-opacity-50"
      rows="5"
      :placeholder="placeholder"
    ></textarea>
  </div>

  <!-- Le select -->
  <select
    v-else-if="props.typeInput === 'select'"
    class="py-3 px-4 pe-9 block w-full border-gray-200 border-none rounded-lg bg-bc-black text-bc-white text-opacity-50 placeholder:text-bc-white placeholder:text-opacity-50"
  >
    <option selected>{{ placeholder }}</option>
    <option v-for="(option, index) in props.listChoice" :key="index">
      {{ option }}
    </option>
  </select>
</template>
