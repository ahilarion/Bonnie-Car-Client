<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const data = props.data;

const currentImage = ref(0);

const price =
  data && data.price
    ? new Intl.NumberFormat("eu-FR", {
        style: "currency",
        currency: "EUR",
      }).format(data.price)
    : "";

let energy_source = "";
if (data && data.vehicle && data.vehicle.energy_source) {
  if (data.vehicle.energy_source === "Gasoline") {
    energy_source = "Essence";
  } else if (data.vehicle.energy_source === "Diesel") {
    energy_source = "Diesel";
  } else if (data.vehicle.energy_source === "Electricity") {
    energy_source = "Électricité";
  } else if (data.vehicle.energy_source === "Hybrid") {
    energy_source = "Hybride";
  }
}

let transmission = "";
if (data && data.vehicle && data.vehicle.transmission) {
  if (data.vehicle.transmission === "Automatic") {
    transmission = "Boîte automatique";
  } else if (data.vehicle.transmission === "Manual") {
    transmission = "Boîte manuelle";
  }
}

let images = [];
if (data && data.images) {
  images = JSON.parse(data.images);
}

const nextImage = () => {
  currentImage.value =
    currentImage.value === (data && images ? images.length - 1 : 0)
      ? 0
      : currentImage.value + 1;
};
const prevImage = () => {
  currentImage.value =
    currentImage.value === 0
      ? data && images
        ? images.length - 1
        : 0
      : currentImage.value - 1;
};
</script>

<template>
  <div class="rounded-3xl h-full w-full bg-bc-gray-dark min-w-[380px] max-w-[420px]">
    <!-- Partie du haut de l'annonce -->
    <div class="relative">
      <img
        v-for="(image, index) in images"
        :key="index"
        class="rounded-t-3xl object-cover h-[280px] w-full"
        :src="image"
        v-show="currentImage === index"
      />
      <div
        class="h-[60%] bg-gradient-to-b from-[transparent] to-bc-black absolute bottom-0 left-0 w-full"
      ></div>

      <!-- Carousel Here -->2
      <div
        class="absolute bottom-0 left-0 h-full w-full flex overflow-hidden"
        v-if="data.images.length"
      >
        <button
          @click="prevImage"
          class="border-bc-yellow border-[1px] absolute z-10 top-1/2 left-0 ml-3 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white"
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
          class="border-bc-yellow border-[1px] absolute z-10 top-1/2 right-0 mr-3 transform -translate-y-1/2 p-2 bg-bc-black-opacity rounded-full text-bc-white"
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
      </div>
    </div>

    <!-- donnée de l'annonce -->
    <div class="py-[32px] px-[24px]">
      <div class="text-lg font-medium text-bc-white">
        {{ data.vehicle.constructor }}
      </div>
      <div class="text-2xl font-extrabold text-bc-white">
        {{ data.vehicle.model }}
      </div>
      <div class="pt-[24px] pb-[20px] text-2xl font-bold text-bc-yellow">
        {{ price }}
      </div>
      <div class="flex gap-6 flex-wrap">
        <div class="flex gap-3">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M20.7254 13.9715C20.7254 16.6658 19.4819 19.0492 17.513 20.5L16.9948 19.9819L14.8187 17.8057L16.2694 16.3549L17.513 17.5984C18.0311 16.8731 18.4456 15.9404 18.5492 15.0078H16.5803V12.9352H18.5492C18.342 12.0026 18.0311 11.1736 17.513 10.3446L16.2694 11.5881L14.8187 10.1373L16.0622 8.89378C15.3368 8.37565 14.4041 7.96114 13.4715 7.85751V9.82642H11.399V7.85751C10.4663 8.06477 9.63731 8.37565 8.80829 8.89378L11.9171 12.0026C12.1244 12.0026 12.228 11.899 12.4352 11.899C12.9849 11.899 13.5121 12.1173 13.9007 12.506C14.2894 12.8947 14.5078 13.4218 14.5078 13.9715C14.5078 14.5212 14.2894 15.0483 13.9007 15.437C13.5121 15.8257 12.9849 16.044 12.4352 16.044C11.8856 16.044 11.3584 15.8257 10.9697 15.437C10.5811 15.0483 10.3627 14.5212 10.3627 13.9715C10.3627 13.7642 10.3627 13.6606 10.4663 13.4534L7.35751 10.3446C6.83938 11.0699 6.42487 12.0026 6.32124 12.9352H8.29016V15.0078H6.32124C6.5285 15.9404 6.83938 16.7694 7.35751 17.5984L8.60104 16.3549L10.0518 17.8057L7.35751 20.5C5.3886 19.0492 4.14508 16.6658 4.14508 13.9715C4.14508 11.7728 5.0185 9.66418 6.57321 8.10948C8.12791 6.55477 10.2365 5.68135 12.4352 5.68135C14.6339 5.68135 16.7426 6.55477 18.2973 8.10948C19.852 9.66418 20.7254 11.7728 20.7254 13.9715ZM4.87047 3.91969L1.45078 0.5L0 1.95078L3.41969 5.37047L2.07254 6.71762H6.21762V2.57254L4.87047 3.91969Z"
                fill="#EFEFEE"
              />
            </g>
          </svg>
          <div class="font-semibold text-sm text-bc-white">
            {{ data.vehicle.kilometers }} km
          </div>
        </div>

        <div class="flex gap-3">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M19.0936 8.33002C18.799 8.33002 18.5163 8.21296 18.308 8.00459C18.0996 7.79621 17.9825 7.5136 17.9825 7.21891C17.9825 6.92423 18.0996 6.64161 18.308 6.43324C18.5163 6.22487 18.799 6.1078 19.0936 6.1078C19.3883 6.1078 19.6709 6.22487 19.8793 6.43324C20.0877 6.64161 20.2048 6.92423 20.2048 7.21891C20.2048 7.5136 20.0877 7.79621 19.8793 8.00459C19.6709 8.21296 19.3883 8.33002 19.0936 8.33002ZM12.427 8.33002H5.76031V2.77447H12.427M21.0603 5.25225L21.0714 5.24114L16.9381 1.1078L15.7603 2.28558L18.1048 4.63002C17.0603 4.99669 16.3159 6.03002 16.3159 7.21891C16.3159 7.5837 16.3877 7.94491 16.5273 8.28192C16.6669 8.61894 16.8715 8.92516 17.1295 9.1831C17.6504 9.70403 18.3569 9.99669 19.0936 9.99669C19.4936 9.99669 19.8603 9.9078 20.2048 9.76336V17.7745C20.2048 18.0692 20.0877 18.3518 19.8793 18.5601C19.6709 18.7685 19.3883 18.8856 19.0936 18.8856C18.799 18.8856 18.5163 18.7685 18.308 18.5601C18.0996 18.3518 17.9825 18.0692 17.9825 17.7745V12.7745C17.9825 11.5411 16.9825 10.5522 15.7603 10.5522H14.6492V2.77447C14.6492 1.54114 13.6492 0.552246 12.427 0.552246H5.76031C4.52697 0.552246 3.53809 1.54114 3.53809 2.77447V20.5522H14.6492V12.2189H16.3159V17.7745C16.3159 18.5112 16.6085 19.2177 17.1295 19.7387C17.6504 20.2596 18.3569 20.5522 19.0936 20.5522C19.4584 20.5522 19.8196 20.4804 20.1566 20.3408C20.4937 20.2012 20.7999 19.9966 21.0578 19.7387C21.3158 19.4807 21.5204 19.1745 21.66 18.8375C21.7996 18.5005 21.8714 18.1393 21.8714 17.7745V7.21891C21.8714 6.45225 21.5603 5.75225 21.0603 5.25225Z"
                fill="#EFEFEE"
              />
            </g>
          </svg>

          <div class="font-semibold text-sm text-bc-white">
            {{ energy_source }}
          </div>
        </div>

        <div v-if="data.vehicle.is_two_wheeled" class="flex gap-3">
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M22.6734 11.9759V14.1981H18.5845C19.0623 13.187 19.3401 12.0647 19.3401 10.8647C19.3401 6.57586 15.8512 3.08697 11.5623 3.08697H0.451172V0.864746H11.5623C17.0845 0.864746 21.5623 5.34252 21.5623 10.8647C21.5623 11.2425 21.5289 11.6092 21.4956 11.9759H22.6734ZM11.5623 18.6425C7.27339 18.6425 3.7845 15.1536 3.7845 10.8647C3.7845 9.67586 4.06228 8.54252 4.55117 7.53141H0.451172V9.75364H1.62895C1.59562 10.1203 1.56228 10.487 1.56228 10.8647C1.56228 16.387 6.04006 20.8647 11.5623 20.8647H22.6734V18.6425H11.5623ZM16.9623 11.087C15.9289 11.9092 14.5845 11.387 13.7845 10.9203V10.8647C16.8845 8.98697 15.3289 6.29808 15.3289 6.29808C15.3289 6.29808 14.1512 4.24252 14.4623 6.29808C14.6512 7.60919 13.5178 8.50919 12.7178 8.97586L12.6734 8.95364C12.5956 5.30919 9.4845 5.30919 9.4845 5.30919C9.4845 5.30919 7.11784 5.30919 9.05117 6.07586C10.2845 6.56475 10.4956 7.99808 10.5067 8.9203L10.4512 8.95364C7.27339 7.19808 5.71784 9.88697 5.71784 9.88697C5.71784 9.88697 4.52895 11.9425 6.16228 10.6425C7.19562 9.83141 8.54006 10.3536 9.34006 10.8092V10.8647C6.24006 12.7536 7.79561 15.4425 7.79561 15.4425C7.79561 15.4425 8.97339 17.4981 8.67339 15.4314C8.47339 14.1314 9.61784 13.2314 10.4178 12.7536L10.4512 12.787C10.5289 16.4203 13.6401 16.4203 13.6401 16.4203C13.6401 16.4203 16.0067 16.4203 14.0734 15.6536C12.8401 15.1647 12.6289 13.7314 12.6178 12.8092L12.6734 12.787C15.8512 14.5425 17.4067 11.8425 17.4067 11.8425C17.4067 11.8425 18.5956 9.79808 16.9623 11.087Z"
                fill="#EFEFEE"
              />
            </g>
          </svg>

          <div class="font-semibold text-sm text-bc-white">
            {{ data.vehicle.power }} CC
          </div>
        </div>

        <div class="flex gap-3">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M5.64269 4.90625H1.19824V1.90625H5.64269V4.90625ZM1.19824 21.9062H5.64269V18.9062H1.19824V21.9062ZM12.3094 1.90625H7.86491V4.90625H12.3094V1.90625ZM7.86491 21.9062H12.3094V18.9062H7.86491V21.9062ZM14.5316 1.90625V4.90625H18.976V1.90625H14.5316ZM15.6427 10.9062H11.1982V6.90625H8.97602V10.9062H4.53158V6.90625H2.30935V16.9062H4.53158V12.9062H8.97602V16.9062H11.1982V12.9062H17.8649V6.90625H15.6427V10.9062Z"
                fill="#EFEFEE"
              />
            </g>
          </svg>

          <div class="font-semibold text-sm text-bc-white">
            {{ transmission }}
          </div>
        </div>

        <div class="flex gap-3">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M18.1836 18.8125H4.18359V7.8125H18.1836M18.1836 2.8125H17.1836V0.8125H15.1836V2.8125H7.18359V0.8125H5.18359V2.8125H4.18359C3.07359 2.8125 2.18359 3.7125 2.18359 4.8125V18.8125C2.18359 19.3429 2.39431 19.8516 2.76938 20.2267C3.14445 20.6018 3.65316 20.8125 4.18359 20.8125H18.1836C18.714 20.8125 19.2227 20.6018 19.5978 20.2267C19.9729 19.8516 20.1836 19.3429 20.1836 18.8125V4.8125C20.1836 4.28207 19.9729 3.77336 19.5978 3.39829C19.2227 3.02321 18.714 2.8125 18.1836 2.8125ZM15.7136 10.8725L14.6536 9.8125L9.77359 14.6925L7.65359 12.5725L6.59359 13.6325L9.77359 16.8125L15.7136 10.8725Z"
                fill="#EFEFEE"
              />
            </g>
          </svg>

          <div class="font-semibold text-sm text-bc-white">
            {{ data.vehicle.circulation_date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
