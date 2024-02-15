<script setup>
    import SubtitleCustom from "@/components/SubtitleCustom.vue";
    import DoubleButton from "@/components/DoubleButton.vue";
    import ButtonCustom from "@/components/ButtonCustom.vue";
</script>

<template>
    <div class="w-100 h-full bg-bc-black z-[55] opacity- relative">
        <div class="min-h-[100vh] absolute h-full bg-bc-gray w-full md:w-[414px] right-0 top-0 flex flex-col gap-5 text-bc-white px-10 font-bold text-4">
            <SubtitleCustom class="text-bc-yellow text-center">
                Filtrer ma recherche
            </SubtitleCustom>

            <SubtitleCustom class="text-bc-yellow">
                Marques/Modèles
            </SubtitleCustom>
            
            <p>Type de véhicules</p>
            <DoubleButton>
                <template #first>2 roues</template>
                <template #second>4 roues</template>
            </DoubleButton>

            <div class="w-[200px] flex flex-col gap-y-2" >
                <div class="flex justify-between">
                    <p>Marque</p>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.14062 12.0454L6.0679 6.47186L1 1.0416" stroke="#FFD719" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="flex justify-between">
                    <p>Modèle</p>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.14062 12.0454L6.0679 6.47186L1 1.0416" stroke="#FFD719" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="flex justify-between">
                    <p>Carburant</p>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.14062 12.0454L6.0679 6.47186L1 1.0416" stroke="#FFD719" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <SubtitleCustom class="text-bc-yellow">
                Caractéristiques
            </SubtitleCustom>

            <p>Année</p>
            <div class="flex gap-x-5">
                <ButtonCustom type="square">
                    Année min
                </ButtonCustom>            
                <ButtonCustom type="square">
                    Année max
                </ButtonCustom>
            </div>

            <p>Kilométrage</p>
            <div class="flex gap-x-5">
                <ButtonCustom type="square">
                    Km min
                </ButtonCustom>            
                <ButtonCustom type="square">
                    Km max
                </ButtonCustom>
            </div>

            <SubtitleCustom class="text-bc-yellow">
                Transmission
            </SubtitleCustom>
            
            <DoubleButton>
                <template #first>Automatique</template>
                <template #second>Manuelle</template>
            </DoubleButton>

            <SubtitleCustom class="text-bc-yellow">
                Prix
            </SubtitleCustom>

            <div class="flex gap-x-5">
                <ButtonCustom type="square">
                    Prix min
                </ButtonCustom>            
                <ButtonCustom type="square">
                    Prix max
                </ButtonCustom>
            </div>

            <ButtonCustom>
                Année max
            </ButtonCustom>
        </div>
    </div>
</template>