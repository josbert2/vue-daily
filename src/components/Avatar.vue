<script setup>
    // Components
    import Header from '../components/Layouts/Header.vue';
    import Decorator from '../decoration/index.vue';

    import Buttons from '../components/ui/Buttons/Buttons.vue';
    import ButtonDisabled from '../components/ui/Buttons/ButtonDisabled.vue';
    import ButtonSize  from '../components/ui/Buttons/ButtonsSize.vue';
    import ButtonColors from '../components/ui/Buttons/ButtonsColor.vue';




    import Tabs from '../components/Tabs.vue';
    
    import { HighCode } from 'vue-highlight-code';
    import 'vue-highlight-code/dist/style.css';
    import data from '../components/ui/Buttons/code/data.js';

    const objectData = data;
</script>
<template>
 <main class="py-16">
        <article class="prose dark:prose-invert">
            <Decorator />
            
            
            <div class="my-16 xl:max-w-none">   
                <h2 class="scroll-mt-24">Default</h2>
                <p class="lead">
                    Un botón por defecto es un componente de interfaz de usuario estándar que permite a los usuarios interactuar con la aplicación. Se usa la clase <br> <code>tw-btn</code> por defecto para usar dicho elemento.
                </p>
                <div class="flex gap-5">
                    <Buttons
                        :buttons="[
                            { name: 'Enviar', href: '#', current: true }]"
                        :size="2"
                        typeBtn="default"
                    />
                    <Buttons
                    :buttons="[
                        { name: 'Enviar', href: '#', current: true }]"
                    :size="2"
                    typeBtn="defaultGray"
                />
                </div>
                <div class="my-6 overflow-hidden shadow-md not-prose rounded-2xl bg-zinc-900 dark:ring-1 dark:ring-white/10">
                    <Tabs 
                        :tabs="[
                            { name: 'HTML', code: objectData['buttons']['default']['html'], current: true },
                            { name: 'CSS',  code: objectData['buttons']['default']['css'], }
                        ]"
                    />
                </div>
            </div>

            <div class="my-16 xl:max-w-none">   
                <h2 class="scroll-mt-24">Primary Color</h2>
                <p class="lead">
                    El botón principal es una variante de un botón por defecto, y suele tener un color distintivo, como el color principal de la aplicación o sitio web, para destacarlo y hacerlo más visible. Es utilizado para las acciones más importantes o las acciones que se espera que el usuario realice con más frecuencia.
                </p>
                <Buttons
                    :buttons="[
                        { name: 'Enviar', href: '#', current: true }]"
                    :size="2"
                    typeBtn="primary"
                />
                <div class="my-6 overflow-hidden shadow-md not-prose rounded-2xl bg-zinc-900 dark:ring-1 dark:ring-white/10">
                    <Tabs 
                        :tabs="[
                            { name: 'HTML', code: objectData['buttons']['default']['html'], current: true },
                            { name: 'CSS',  code: objectData['buttons']['default']['css'], }
                        ]"
                    />
                </div>
            </div>

            <div class="my-16 xl:max-w-none">   
                <ButtonDisabled />
            </div>

            <div class="my-16 xl:max-w-none">   
                <ButtonSize />
            </div>

            <div class="my-16 xl:max-w-none">   
                <ButtonColors />
            </div>
            
        </article>
    </main>

</template>