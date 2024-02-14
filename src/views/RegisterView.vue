<script setup>
    import InputCustom from "@/components/InputCustom.vue";
    import ButtonCustom from "@/components/ButtonCustom.vue";
    import TitleCustom from "@/components/TitleCustom.vue";
</script>

<template>
    <div class="absolute bg-bc-gray w-full z-[55] h-full justify-center flex">
        <div class="flex flex-col px-8 justify-center h-full w-full lg:w-[33%] align-middle">
            <TitleCustom class="text-center text-bc-yellow">
                Mot de passe oublié
            </TitleCustom>

            <InputCustom
                type="email"
                placeholder="Adresse mail"
            />

            <InputCustom
                type="password"
                placeholder="Mot de passe"
                typeInput="iconRight"
                class="mb-0"
            />
            <p class="text-bc-white mb-2.5">8 caractères minimum</p>

            <InputCustom
                type="password"
                placeholder="Mot de passe"
                typeInput="iconRight"
                class="mb-0"
            />
            <p class="text-bc-white mb-10">8 caractères minimum</p>

            <div class="flex text-bc-white items-center gap-2.5">
                <input class="border-2 border-bc-yellow bg-[transparent] rounded-sm" type="checkbox" name="checkConditions" id="checkConditions">
                <p>J'ai lu et j'accepte les <a class="text-bc-yellow" href="#">conditions générales</a> de Bonnie&Car ainsi que <a class="text-bc-yellow" href="#">la politique de confidentialité</a> et la charte cookie.</p>
            </div>
            
            <div class="text-center mt-5">
                <ButtonCustom>
                    Valider l'inscription
                </ButtonCustom>
            </div>
        </div>

        <p class="absolute bottom-5 left-2/4 translate-x-[-50%] text-[#7f7f7f]">Vous avez déja un compte ? <a href="#" class="underline text-bc-yellow">Connexion</a></p>
    </div>
</template>