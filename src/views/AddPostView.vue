<script setup>
import { onBeforeMount, ref } from "vue";
import http from "@/config/http.js";

import TitleCustom from "@/components/TitleCustom.vue";
import InputCustom from "@/components/InputCustom.vue";
import SubtitleCustom from "@/components/SubtitleCustom.vue";
import ButtonCustom from "@/components/ButtonCustom.vue";
import GlobalInfos from "@/components/GlobalInfos.vue";
import Accordion from "@/components/Accordion.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";

const typeVehicle = "car";

const urlImageBg = ref("");
const subtitle = ref("");
const listCategory = ["choix1", "choix2", "choix3", "choix4", "choix5"];
const listYear = ["2001", "2022"];

let lastVehicle = ref([]);
const vehicleOne = ref(null);
const vehicleTwo = ref(null);
const vehicleThree = ref(null);

if (typeVehicle === "car") {
  urlImageBg.value = "redcar.jpg";
  subtitle.value = "Votre 4 roues";
} else if (typeVehicle === "motorcycle") {
  urlImageBg.value = "about.jpg";
  subtitle.value = "Votre 2 roues";
}

const getVehicle = async () => {
  if (typeVehicle === "car") {
    const response = await http.get("/post/last-car");
    lastVehicle.value = response.data;
  } else if (typeVehicle === "motorcycle") {
    const response = await http.get("/post/last-moto");
    lastVehicle.value = response.data;
  }
};

onBeforeMount(async () => {
  await getVehicle();

  vehicleOne.value = lastVehicle.value.data[0];
  vehicleTwo.value = lastVehicle.value.data[1];
  vehicleThree.value = lastVehicle.value.data[2];
});
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
      <div class="bg-bc-gray-dark py-4 px-10 rounded-3xl md:mx-[20%]">
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
  <div class="bg-bc-gray-dark px-10 py-4 md:flex">
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

    <div>
      <iframe
        class="w-full h-52"
        src="https://www.youtube.com/embed/zkNW5iN3fOg?si=7EJaKyF9D8zAHpvI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <SubtitleCustom class="text-bc-yellow text-center py-4">
        Vendez simplement et rapidement
      </SubtitleCustom>

      <p class="text-center text-bc-white">
        La vente de votre moto, prise en charge de A à Z en France.
      </p>
    </div>

    <GlobalInfos class="mt-20">
      <template #svg>
        <svg
          width="130"
          height="100"
          viewBox="0 0 130 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.22245 0H122.189C126.291 0 129.638 3.35282 129.638 7.46217V70.0997C129.638 74.1919 126.291 77.5447 122.189 77.5447H115.495V93.0536C115.495 96.8707 112.371 100 108.561 100H81.3052C77.4948 100 74.3711 96.8707 74.3711 93.0536V77.5447H8.22245C4.12034 77.5447 0.773438 74.1919 0.773438 70.0997V7.46217C0.773438 3.35282 4.12034 0 8.22245 0ZM94.9331 40.87C103.292 40.87 110.123 47.7132 110.123 56.1038V64.804C113.247 65.5261 115.495 68.3459 115.495 71.5612V73.9512H122.189C124.317 73.9512 126.051 72.2146 126.051 70.0997V7.46217C126.051 5.33012 124.317 3.59353 122.189 3.59353H8.22245C6.09416 3.59353 4.36064 5.33012 4.36064 7.46217V70.0997C4.36064 72.2146 6.09416 73.9512 8.22245 73.9512H74.3711C74.3711 72.9367 74.2509 70.925 74.5427 69.9966C75.1777 67.3315 77.2374 65.3886 79.7433 64.804V56.1038C79.7433 47.7304 86.5744 40.87 94.9331 40.87ZM94.9331 44.4635C88.5311 44.4635 83.3133 49.6905 83.3133 56.1038V64.5977H86.8833V56.2586C86.8833 51.8226 90.5049 48.1946 94.9331 48.1946C99.3613 48.1946 102.983 51.8054 102.983 56.2586V64.5977H106.553V56.1038C106.553 49.7077 101.318 44.4635 94.9331 44.4635ZM94.9331 51.771C92.4615 51.771 90.4534 53.7827 90.4534 56.2586V64.5977H99.4128V56.2586C99.4128 53.7999 97.3875 51.771 94.9331 51.771ZM111.925 71.5612C111.925 69.6871 110.5 68.3803 108.784 68.2084H81.3052C79.4 68.2084 78.0441 69.6699 77.9411 71.5268C77.9411 78.6967 77.9411 85.8838 77.9411 93.0536C77.9411 94.8934 79.4515 96.4065 81.3052 96.4065H108.561C110.398 96.4065 111.925 94.8934 111.925 93.0536C111.925 85.8838 111.925 78.7311 111.925 71.5612Z"
            fill="#EFEFEE"
          />
          <path
            d="M97.0789 13.1362H110.106C113.882 13.1362 116.989 16.2483 116.989 20.031C116.989 23.8309 113.882 26.9258 110.106 26.9258H97.0789C93.2857 26.9258 90.1963 23.8309 90.1963 20.031C90.1963 16.2483 93.2857 13.1362 97.0789 13.1362ZM110.106 16.7126H97.0789C95.2596 16.7126 93.7663 18.1913 93.7663 20.031C93.7663 21.8536 95.2596 23.3494 97.0789 23.3494H110.106C111.925 23.3494 113.402 21.8708 113.402 20.031C113.402 18.2084 111.925 16.7126 110.106 16.7126Z"
            fill="#EFEFEE"
          />
          <path
            d="M12.8555 46.0113C12.8555 43.6557 16.4255 43.6557 16.4255 46.0113V52.9061C16.4255 55.2616 12.8555 55.2616 12.8555 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M20.5811 46.0113C20.5811 43.6557 24.1511 43.6557 24.1511 46.0113V52.9061C24.1511 55.2616 20.5811 55.2616 20.5811 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M28.3047 46.0113C28.3047 43.6557 31.8747 43.6557 31.8747 46.0113V52.9061C31.8747 55.2616 28.3047 55.2616 28.3047 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M36.0283 46.0113C36.0283 43.6557 39.5984 43.6557 39.5984 46.0113V52.9061C39.5984 55.2616 36.0283 55.2616 36.0283 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M43.751 46.0113C43.751 43.6557 47.321 43.6557 47.321 46.0113V52.9061C47.321 55.2616 43.751 55.2616 43.751 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M51.4756 46.0113C51.4756 43.6557 55.0456 43.6557 55.0456 46.0113V52.9061C55.0456 55.2616 51.4756 55.2616 51.4756 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M59.1982 46.0113C59.1982 43.6557 62.7854 43.6557 62.7854 46.0113V52.9061C62.7854 55.2616 59.1982 55.2616 59.1982 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M66.9229 46.0113C66.9229 43.6557 70.51 43.6557 70.51 46.0113V52.9061C70.51 55.2616 66.9229 55.2616 66.9229 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M74.6631 46.0113C74.6631 43.6557 78.2331 43.6557 78.2331 46.0113V52.9061C78.2331 55.2616 74.6631 55.2616 74.6631 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M113.28 46.0113C113.28 45.0141 114.087 44.2231 115.065 44.2231C116.061 44.2231 116.85 45.0141 116.85 46.0113V52.9061C116.85 53.9033 116.061 54.6943 115.065 54.6943C114.087 54.6943 113.28 53.9033 113.28 52.9061V46.0113Z"
            fill="#EFEFEE"
          />
          <path
            d="M8.89163 21.9737L16.6153 18.1911C17.7996 17.6065 19.1898 18.5006 19.1726 19.7901V27.3554C19.1726 28.7654 17.6451 29.5907 16.4608 28.8857L8.89163 25.1718C7.55287 24.5184 7.5872 22.6271 8.89163 21.9737ZM13.7318 23.5728L15.6026 24.4841V22.6615L13.7318 23.5728Z"
            fill="#EFEFEE"
          />
          <path
            d="M14.1776 65.1994C11.8262 65.1994 11.8262 61.623 14.1776 61.623H24.2355C26.5869 61.623 26.5869 65.1994 24.2355 65.1994H14.1776Z"
            fill="#EFEFEE"
          />
          <path
            d="M29.9335 65.1994C27.5821 65.1994 27.5821 61.623 29.9335 61.623H36.5243C38.8757 61.623 38.8757 65.1994 36.5243 65.1994H29.9335Z"
            fill="#EFEFEE"
          />
          <path
            d="M94.9337 73.1597C97.903 73.1597 100.289 75.5668 100.289 78.5414C100.289 80.811 98.8642 82.8571 96.7188 83.5964V89.8894C96.7188 92.2449 93.1487 92.2449 93.1487 89.8894V83.5964C91.0033 82.8399 89.5615 80.811 89.5615 78.5414C89.5615 75.5668 91.9644 73.1597 94.9337 73.1597ZM94.9337 76.736C93.9382 76.736 93.1487 77.5441 93.1487 78.5414C93.1487 79.5214 93.9382 80.3295 94.9337 80.3295C95.9121 80.3295 96.7188 79.5214 96.7188 78.5414C96.7188 77.5441 95.9292 76.736 94.9337 76.736Z"
            fill="#EFEFEE"
          />
          <path
            d="M26.5197 11.2959C33.0591 11.2959 39.5812 11.2959 46.1034 11.2959C48.1974 11.2959 49.8966 13.0153 49.8966 15.0958C49.8966 20.4775 49.8966 25.842 49.8966 31.2237C49.8966 33.3213 48.1974 35.0235 46.1034 35.0235C39.5812 35.0235 33.0591 35.0235 26.5197 35.0235C24.4429 35.0235 22.7266 33.3041 22.7266 31.2237C22.7266 25.842 22.7266 20.4775 22.7266 15.0958C22.7266 13.0153 24.4429 11.2959 26.5197 11.2959ZM43.2199 24.9479C40.8685 24.9479 40.8685 21.3716 43.2199 21.3716H46.3265V15.0958C46.3265 14.9754 46.2407 14.8722 46.1034 14.8722H38.1052V31.4472H46.1034C46.2407 31.4472 46.3265 31.3612 46.3265 31.2237V24.9479H43.2199ZM26.2966 21.3716H29.4719C31.8233 21.3716 31.8233 24.9479 29.4719 24.9479H26.2966V31.2237C26.2966 31.3612 26.3996 31.4472 26.5197 31.4472H34.5351V14.8722H26.5197C26.3996 14.8722 26.2966 14.9754 26.2966 15.0958V21.3716Z"
            fill="#EFEFEE"
          />
        </svg>
      </template>
      <template #title>Vendez sereinement</template>
      <template #p> Paiement sécurisé </template>
    </GlobalInfos>
  </div>

  <div class="px-10 py-2 mx-40">
    <TitleCustom class="text-yellow text-center">Mise en vente</TitleCustom>
    <div class="flex flex-wrap">
      <Accordion>
        <template #title> Estimation précise et concurrentielle </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          temporibus fugiat, iusto id earum recusandae eos, sequi quasi, nulla
          nostrum in placeat corrupti vero. Nihil libero repellat doloribus
          perspiciatis tenetur.
        </template>
      </Accordion>

      <Accordion>
        <template #title> Choix du prix d'accompagnement </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam
          explicabo, quo magni dolores harum in minima ut vero, sit hic
          repudiandae beatae ipsa veniam sapiente, distinctio eaque laudantium?
          Repellendus!
        </template>
      </Accordion>

      <Accordion>
        <template #title> Collecte de documents facile </template>
        <template #content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          veritatis fugit ad quo nulla necessitatibus obcaecati laborum culpa
          earum commodi deserunt ipsa, quisquam qui nihil, sequi alias quos,
          consectetur tenetur.
        </template>
      </Accordion>

      <Accordion>
        <template #title>
          Commercialisation sur sites d'annonces de moto
        </template>
        <template #content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus et
          consequuntur, molestias repellat provident commodi accusantium
          voluptatum in ullam id quia. Aperiam doloribus nobis facilis amet?
          Nulla sunt expedita at?
        </template>
      </Accordion>

      <Accordion>
        <template #title>
          Usage maintenu pendant la période de publication
        </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
          sapiente sint. Dolores corrupti at eligendi iste ea, cum facere optio
          dicta autem quaerat atque dolorum obcaecati et culpa nulla odit.
        </template>
      </Accordion>

      <Accordion>
        <template #title> Vente conclue en 2 à 6 semaines </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque enim
          sequi in sit ducimus cumque, est recusandae error blanditiis,
          voluptatem atque, natus amet sunt deleniti? Sed nesciunt iure
          consectetur vitae.
        </template>
      </Accordion>

      <Accordion>
        <template #title>
          Assistance au contrôle technique et documents fournis
        </template>
        <template #content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, modi?
          Repellendus quas aperiam rem. Ea nulla fugiat labore voluptas non
          facilis velit, quisquam necessitatibus quas cupiditate earum, incidunt
          vitae cumque!
        </template>
      </Accordion>

      <Accordion>
        <template #title>
          Suivi post-vente et assistance administrative
        </template>
        <template #content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          suscipit exercitationem ab inventore facilis excepturi similique a
          temporibus doloribus iure! Temporibus rem, quas reprehenderit
          consectetur magni pariatur quo amet corporis?
        </template>
      </Accordion>

      <Accordion>
        <template #title> Statistiques de vente convaincantes </template>
        <template #content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quae
          ipsam quibusdam nihil veniam expedita vitae nulla molestiae blanditiis
          dolore. Necessitatibus asperiores maxime ullam ducimus, possimus
          molestiae velit? Modi, excepturi?
        </template>
      </Accordion>

      <Accordion>
        <template #title>
          Libération du processus de vente avec expertise professionnelle à coût
          abordable
        </template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
          recusandae similique, deserunt veritatis vero velit a fugiat illo
          neque molestiae nisi aperiam rem autem, nesciunt facilis sit quasi
          eveniet pariatur.
        </template>
      </Accordion>
    </div>

    <div class="text-bc-gray-light uppercase py-4">Dernière annonce postée</div>

    <div
      class="w-full bg-transparent flex flex-col items-center justify-center transition-all"
    >
      <div
        class="relative flex w-[73vw] min-w-[300px] flex-col md:flex-row md:flex-wrap gap-10 md:gap-20 items-center justify-start md:justify-center p-4 md:p-5 m-4"
      >
        <Post v-if="vehicleOne" :data="vehicleOne" />
        <Post v-if="vehicleTwo" :data="vehicleTwo" class="hidden md:block" />
        <Post
          v-if="vehicleThree"
          :data="vehicleThree"
          class="hidden md:block"
        />
      </div>
    </div>
  </div>

  <Footer />
</template>
