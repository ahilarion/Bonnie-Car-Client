<script setup>
    import InputCustom from "@/components/InputCustom.vue";
    import ButtonCustom from "@/components/ButtonCustom.vue";
    import TitleCustom from "@/components/TitleCustom.vue";
</script>

<template>
    <div class="absolute bg-bc-gray w-[100%] z-[55] h-[100%] flex flex-col px-8 justify-center">
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
            <a href="#" class="absolute right-0 text-end text-bc-white underline">Mot de passe oublié</a>
        </div>
        
        <div class="text-center">
            <ButtonCustom>
                Voir plus
            </ButtonCustom>
        </div>

        <p class="absolute bottom-5 left-2/4 translate-x-[-50%] text-[#7f7f7f]">Vous n'avez pas de compte ? <a href="#" class="underline text-bc-yellow">Inscription</a></p>
    </div>
</template>

<script></script>