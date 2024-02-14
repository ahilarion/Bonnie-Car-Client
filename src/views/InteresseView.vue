<script setup>
    import InputCustom from "@/components/InputCustom.vue";
    import ButtonCustom from "@/components/ButtonCustom.vue";
    import TitleCustom from "@/components/TitleCustom.vue";
    import SubtitleCustom from "@/components/SubtitleCustom.vue";
</script>

<template>
    <div class="w-full min-h-[100vh] bg-bc-gray-dark flex bg-center">
        <div class="flex flex-col m-auto px-8 justify-center h-full w-full lg:w-[33%] align-middle p-10">
            <TitleCustom class="lg:text-center text-bc-yellow">
                Cette annonce m'intéresse
            </TitleCustom>

            <SubtitleCustom class="text-center text-bc-yellow mb-10">
                Formulaire
            </SubtitleCustom>

            <InputCustom
                placeholder="Nom"
            />
            <InputCustom
                type="email"
                placeholder="Adresse mail"
            />
            <InputCustom
                placeholder="Votre numéro de téléphone"
            />
            <InputCustom placeholder="Votre message" typeInput="textarea" />
            
            <div class="flex text-bc-white items-center gap-2.5">
                <input class="border-2 border-bc-yellow bg-[transparent] rounded-sm" type="checkbox" name="checkConditions" id="checkConditions">
                <p>J'ai lu et j'accepte les <a class="text-bc-yellow" href="#">conditions générales</a> de Bonnie&Car ainsi que <a class="text-bc-yellow" href="#">la politique de confidentialité</a> et la charte cookie.</p>
            </div>

            <div class="text-center mt-5">
                <ButtonCustom>
                    Envoyer mes coordonnées
                </ButtonCustom>
            </div>
        </div>
    </div>
</template>