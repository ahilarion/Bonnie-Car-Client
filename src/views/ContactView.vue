<script setup>
    import InputCustom from "@/components/InputCustom.vue";
    import ButtonCustom from "@/components/ButtonCustom.vue";
    import TitleCustom from "@/components/TitleCustom.vue";
    import SubtitleCustom from "@/components/SubtitleCustom.vue";
</script>

<template>
    <div class="w-full min-h-[100vh] flex bg-center bg-[url('https://media.istockphoto.com/id/1455559262/fr/photo/motard-dans-les-alpes-autrichiennes.jpg?s=2048x2048&w=is&k=20&c=ikx5LKqfo_Q6ePVaFAdnqh5Qrwzjzq2FdFrdn1Spwnc=')]">
        <div class="h-full w-full p-5">
            <TitleCustom class="lg:text-center text-bc-yellow">
                Nous contacter
            </TitleCustom>
            <div class="bg-bc-gray-dark rounded-3xl flex flex-col m-auto px-8 justify-center h-full w-full lg:w-[33%] align-middle p-10">
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
                    placeholder="Object"
                />
                <InputCustom placeholder="Votre message" typeInput="textarea" />
                
                
                <div class="text-center mt-5">
                    <ButtonCustom>
                        Envoyer mon message
                    </ButtonCustom>
                </div>
            </div>
        </div>
    </div>
</template>