<script setup>
import { ref } from "vue";

import TitleCustom from "@/components/TitleCustom.vue";
import InputCustom from "@/components/InputCustom.vue";
import SubtitleCustom from "@/components/SubtitleCustom.vue";
import ButtonCustom from "@/components/ButtonCustom.vue";
import GlobalInfos from "@/components/GlobalInfos.vue";

const typeVehicle = "car";

const urlImageBg = ref("");
const subtitle = ref("");
const listCategory = ["choix1", "choix2", "choix3", "choix4", "choix5"];
const listYear = ["2001", "2022"];

if (typeVehicle === "car") {
  urlImageBg.value = "redcar.jpg";
  subtitle.value = "Votre 4 roues";
} else if (typeVehicle === "motorcycle") {
  urlImageBg.value = "about.jpg";
  subtitle.value = "Votre 2 roues";
}
</script>

<template>
  <div class="relative h-[52rem]">
    <img
      class="w-full h-full object-cover"
      :src="'/src/assets/img/' + urlImageBg"
      alt=""
    />
    <div class="absolute top-0 pt-14 px-14 z-20 w-full">
      <TitleCustom class="text-bc-yellow">Déposer une annonce</TitleCustom>
    </div>
    <div class="absolute top-32 pt-14 px-2 z-20 w-full">
      <div class="bg-bc-gray-dark py-4 px-10 rounded-3xl">
        <SubtitleCustom class="text-bc-yellow mb-6 text-center">{{
          subtitle
        }}</SubtitleCustom>
        <div class="flex flex-col w-full gap-2">
          <InputCustom
            placeholder="Catégorie"
            type="select"
            typeInput="select"
            :listChoice="listCategory"
          />
          <InputCustom placeholder="Marque" type="text" />
          <InputCustom placeholder="Modèle" type="text" />
          <InputCustom
            v-if="typeVehicle == 'car'"
            placeholder="Finition et motorisation"
            type="text"
          />
          <InputCustom
            v-if="typeVehicle == 'motorcycle'"
            placeholder="Cylindrée"
            type="text"
          />
          <InputCustom placeholder="Kilométrage" type="text" />
          <InputCustom
            placeholder="Année"
            type="select"
            typeInput="select"
            :listChoice="listYear"
          />
        </div>

        <div class="flex text-bc-white items-center gap-2.5 mt-6">
          <input
            class="border-2 border-bc-yellow bg-[transparent] rounded-sm"
            type="checkbox"
            name="checkConditions"
            id="checkConditions"
          />
          <p>
            J'ai lu et j'accepte les
            <a class="text-bc-yellow" href="#">conditions générales</a> de
            Bonnie&Car ainsi que
            <a class="text-bc-yellow" href="#"
              >la politique de confidentialité</a
            >
            et la charte cookie.
          </p>
        </div>

        <ButtonCustom class="mt-6">
          Estimer mon véhicule gratuitement
        </ButtonCustom>
      </div>
    </div>
    <div class="absolute top-0 z-10 bg-bc-black w-full h-full opacity-85"></div>
  </div>
  <div class="bg-bc-gray-dark px-10 py-4">
    <GlobalInfos class="mb-14">
      <template #svg>
        <svg
          width="61"
          height="100"
          viewBox="0 0 61 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.5549 32.1426C42.4932 32.1426 46.4965 36.1401 46.4965 41.0711C46.4965 46.0022 42.4932 49.9997 37.5549 49.9997C32.6166 49.9997 28.6133 46.0022 28.6133 41.0711C28.6133 36.1401 32.6166 32.1426 37.5549 32.1426ZM42.9199 41.0711C42.9199 38.1124 40.518 35.714 37.5549 35.714C34.5918 35.714 32.1899 38.1124 32.1899 41.0711C32.1899 44.0299 34.5918 46.4283 37.5549 46.4283C40.518 46.4283 42.9199 44.0299 42.9199 41.0711Z"
            fill="#EFEFEE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.8615 0C56.7997 0 60.8031 3.99746 60.8031 8.92857V73.2143C60.8031 78.1454 56.7997 82.1429 51.8615 82.1429H39.3698V87.0786L44.5461 97.4157C44.8233 97.9693 44.7936 98.6266 44.4678 99.1532C44.142 99.6796 43.5665 100 42.9467 100H4.49767C3.57579 100 2.80485 99.3002 2.7174 98.3837L0.0349092 70.2832C0.0324056 70.2564 0.0304389 70.2296 0.0290083 70.2029C-0.208302 65.463 1.01491 60.7645 3.53377 56.7402L3.53824 56.733L14.3066 39.7043V8.92857C14.3066 3.99745 18.31 0 23.2483 0H51.8615ZM17.8833 39.8704C17.9008 39.9709 17.9101 40.0739 17.9101 40.1786V71.4286C17.9101 72.4148 18.7107 73.2143 19.6983 73.2143C20.6859 73.2143 21.4866 72.4148 21.4866 71.4286V68.1664C21.4691 68.0661 21.4599 67.9627 21.4599 67.8571V14.2857C21.4599 13.2995 22.2606 12.5 23.2483 12.5C25.2236 12.5 26.8249 10.9011 26.8249 8.92857C26.8249 7.94236 27.6255 7.14286 28.6132 7.14286H46.4965C47.4842 7.14286 48.2848 7.94236 48.2848 8.92857C48.2848 10.9011 49.8861 12.5 51.8615 12.5C52.8492 12.5 53.6498 13.2995 53.6498 14.2857V67.8571C53.6498 68.8434 52.8492 69.6429 51.8615 69.6429C49.8861 69.6429 48.2848 71.2418 48.2848 73.2143C48.2848 74.2005 47.4842 75 46.4965 75H39.3698V78.5714H51.8615C54.8245 78.5714 57.2264 76.173 57.2264 73.2143V8.92857C57.2264 5.96991 54.8245 3.57143 51.8615 3.57143H23.2483C20.2852 3.57143 17.8833 5.96991 17.8833 8.92857V39.8704ZM39.3698 71.4286H44.9335C45.5805 68.9186 47.5595 66.9425 50.0731 66.2964V15.8464C47.5595 15.2004 45.5805 13.2243 44.9335 10.7143H30.1762C29.5292 13.2243 27.5503 15.2004 25.0366 15.8464V53.5909C26.5356 52.4579 28.4033 51.7857 30.4282 51.7857C35.3667 51.7857 39.3698 55.7832 39.3698 60.7143V71.4286ZM6.56677 58.6329L14.3335 46.3512V71.4286C14.3335 74.3873 16.7354 76.7857 19.6983 76.7857C22.6613 76.7857 25.0632 74.3873 25.0632 71.4286V60.7143C25.0632 57.7557 27.4653 55.3571 30.4282 55.3571C33.3913 55.3571 35.7932 57.7557 35.7932 60.7143V87.5C35.7932 87.7773 35.8579 88.0507 35.982 88.2986L40.053 96.4286H6.12362L3.5994 69.9852C3.40733 65.9893 4.4417 62.0298 6.56462 58.6364L6.56677 58.6329Z"
            fill="#EFEFEE"
          />
        </svg>
      </template>
      <template #title>Vendez votre moto plus cher</template>
      <template #p>
        Nous vous conseillons. Vous fixez le prix de vente
      </template>
    </GlobalInfos>

    <iframe
      class="w-full h-52 md:h-96"
      src="https://www.youtube.com/embed/zkNW5iN3fOg?si=7EJaKyF9D8zAHpvI"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <SubtitleCustom class="text-bc-yellow text-center py-4">
      Vendez simplement et rapidement
    </SubtitleCustom>
  </div>
</template>
