<script setup>
    import InputCustom from "@/components/InputCustom.vue";
    import ButtonCustom from "@/components/ButtonCustom.vue";
    import TitleCustom from "@/components/TitleCustom.vue";
</script>

<template>
    <div class="absolute bg-bc-gray w-full h-full justify-center flex">
        <div class="flex flex-col px-8 justify-center h-full w-full lg:w-[33%] align-middle">
            <TitleCustom class="text-center text-bc-yellow">
                Mot de passe oublié
            </TitleCustom>

            <p class="text-center text-bc-white">Vous allez recevoir un e-mail pour modifier votre mot de passe.</p>
            
            <InputCustom
                type="email"
                placeholder="Adresse mail"
                class="mt-5"
            />
            
            <div class="text-center mt-5">
                <ButtonCustom>
                    Réinitialiser le mot de passe
                </ButtonCustom>
            </div>
        </div>

        <p class="absolute bottom-5 left-2/4 translate-x-[-50%] text-[#7f7f7f]">Vous avez déja un compte ? <a href="./se-connecter" class="underline text-bc-yellow">Connexion</a></p>
    </div>
</template>