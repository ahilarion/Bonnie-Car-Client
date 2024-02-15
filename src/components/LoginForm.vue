<script setup>
    import InputCustom from "@/components/InputCustom.vue";
    import ButtonCustom from "@/components/ButtonCustom.vue";
    import TitleCustom from "@/components/TitleCustom.vue";
</script>

<template>
    <div class="absolute bg-bc-gray w-full h-full justify-center flex">
        <div class="flex flex-col px-8 justify-center h-full w-full lg:w-[33%] align-middle">
            <TitleCustom class="text-center text-bc-yellow">
                Bienvenue
            </TitleCustom>
            
            <InputCustom
                type="email"
                placeholder="Adresse mail"
            />

            <InputCustom
                type="password"
                placeholder="Mot de passe"
                typeInput="iconRight"
            />

            <div class="bg-bc-yellow relative">
                <a href="/password-reset" class="absolute right-0 text-end text-bc-white underline">Mot de passe oublié</a>
            </div>
            
            <div class="text-center mt-10">
                <ButtonCustom>
                    Se connecter
                </ButtonCustom>
            </div>
        </div>

        <p class="absolute bottom-5 left-2/4 translate-x-[-50%] text-[#7f7f7f]">Vous n'avez pas de compte ? <a href="./inscription" class="underline text-bc-yellow">Inscription</a></p>
    </div>
</template>