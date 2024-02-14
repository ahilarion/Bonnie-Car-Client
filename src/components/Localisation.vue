<script setup>
    import ButtonCustom from "@/components/ButtonCustom.vue";
    import TitleCustom from "@/components/TitleCustom.vue";
    import SubtitleCustom from "@/components/SubtitleCustom.vue";
</script>

<template>
    <div class="absolute bg-bc-gray-dark w-full z-[55] h-full justify-center flex">
        <div class="flex text-bc-white flex-col items-center justify-center gap-5 h-full w-full lg:w-[33%] px-8 ">
            <TitleCustom class="text-center text-bc-yellow">
                Choisir une localisation
            </TitleCustom>

            <SubtitleCustom class="text-center text-bc-gray-light">
                Historique de recherche
            </SubtitleCustom>
            <div class="flex w-[140px] justify-between">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10" stroke="#FFD719"/>
                    <path d="M11.0016 4.33374C7.32026 4.33374 4.3335 7.3205 4.3335 11.0019C4.3335 14.6832 7.32026 17.67 11.0016 17.67C14.683 17.67 17.6697 14.6832 17.6697 11.0019C17.6697 7.3205 14.683 4.33374 11.0016 4.33374Z" stroke="#FFD719" stroke-miterlimit="10"/>
                    <path d="M11.0024 6.55469V11.5565H14.337" stroke="#FFD719" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Toute la france</p>
            </div>

            <SubtitleCustom class="text-center text-bc-gray-light">
                Suggestions
            </SubtitleCustom>

            <div class="flex w-[140px] justify-between">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.5" stroke="#FFD719"/>
                    <path d="M9.99658 4.67214V3.33301" stroke="#FFD719" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99658 16.6677V15.3286" stroke="#FFD719" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.99649 5.19824C9.04758 5.19824 8.11999 5.47963 7.331 6.00681C6.54201 6.534 5.92707 7.2833 5.56394 8.15998C5.20081 9.03666 5.1058 10.0013 5.29092 10.932C5.47604 11.8627 5.93298 12.7176 6.60396 13.3885C7.27494 14.0595 8.12982 14.5165 9.0605 14.7016C9.99117 14.8867 10.9558 14.7917 11.8325 14.4286C12.7092 14.0654 13.4585 13.4505 13.9857 12.6615C14.5129 11.8725 14.7943 10.9449 14.7943 9.996C14.7943 8.72356 14.2888 7.50323 13.389 6.60347C12.4893 5.70372 11.2689 5.19824 9.99649 5.19824Z" stroke="#FFD719" stroke-miterlimit="10"/>
                    <path d="M15.3286 9.99658H16.6677" stroke="#FFD719" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.3335 9.99658H4.67263" stroke="#FFD719" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p>Autour de moi</p>
            </div>
            <div class="flex w-[140px] justify-between">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.5" stroke="#FFD719"/>
                    <path d="M11.0515 10.0017L10.8601 9.53972L11.0515 10.0017C11.3144 9.89277 11.5532 9.73318 11.7544 9.53198C11.9556 9.33079 12.1152 9.09194 12.2241 8.82907C12.333 8.56619 12.389 8.28445 12.389 7.99992C12.389 7.42528 12.1607 6.87418 11.7544 6.46785C11.3481 6.06153 10.797 5.83325 10.2223 5.83325C9.6477 5.83325 9.09659 6.06152 8.69027 6.46785C8.28394 6.87418 8.05566 7.42528 8.05566 7.99992C8.05566 8.57455 8.28394 9.12565 8.69027 9.53198C9.09659 9.93831 9.6477 10.1666 10.2223 10.1666C10.5069 10.1666 10.7886 10.1105 11.0515 10.0017ZM10.2223 15.902C10.1239 15.7852 10.009 15.6468 9.88139 15.4895C9.45034 14.9584 8.87641 14.2153 8.30348 13.3661C7.72959 12.5155 7.16286 11.5676 6.74113 10.6262C6.31647 9.67831 6.05566 8.77375 6.05566 7.99992C6.05566 6.89485 6.49465 5.83504 7.27605 5.05364C8.05745 4.27224 9.11726 3.83325 10.2223 3.83325C11.3274 3.83325 12.3872 4.27224 13.1686 5.05364C13.95 5.83504 14.389 6.89485 14.389 7.99992C14.389 8.77375 14.1282 9.67831 13.7035 10.6262C13.2818 11.5676 12.7151 12.5155 12.1412 13.3661C11.5682 14.2153 10.9943 14.9584 10.5633 15.4895C10.4356 15.6468 10.3207 15.7852 10.2223 15.902Z" stroke="#FFD719"/>
                </svg>

                <p>Toute la france</p>
            </div>
            
            <div class="text-center flex gap-10">
                <ButtonCustom>
                    Effacer
                </ButtonCustom>

                <ButtonCustom>
                    Appliquer
                </ButtonCustom>
            </div>
        </div>
    </div>
</template>