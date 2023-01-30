<script setup>
    // Components
    import Header from '../components/Layouts/Header.vue';
    import Buttons from '../components/ui/Buttons/Buttons.vue';
    import Tabs from '../components/Tabs.vue';
    
    import { HighCode } from 'vue-highlight-code';
    import 'vue-highlight-code/dist/style.css';
    import data from '../components/ui/Buttons/code/data.js';

    const objectData = data;
</script>
<template>
   <main class="py-16">
        <article class="prose dark:prose-invert">
            <div class="absolute inset-0 mx-0 overflow-hidden -z-10 max-w-none">
                <div class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                    <div class="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
                        <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5">
                            <defs>
                                <pattern id=":R11d6:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4"><path d="M.5 56V.5H72" fill="none"></path></pattern>
                            </defs>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#:R11d6:)"></rect>
                            <svg x="-12" y="4" class="overflow-visible">
                                <rect stroke-width="0" width="73" height="57" x="288" y="168"></rect>
                                <rect stroke-width="0" width="73" height="57" x="144" y="56"></rect>
                                <rect stroke-width="0" width="73" height="57" x="504" y="168"></rect>
                                <rect stroke-width="0" width="73" height="57" x="720" y="336"></rect>
                            </svg>
                        </svg>
                    </div>
                    <svg viewBox="0 0 1113 440" aria-hidden="true" class="absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden">
                        <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
                    </svg>
                </div>
            </div>
            
            
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
                <h2 class="scroll-mt-24">Disabled</h2>
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
                            { name: 'HTML', code: objectData['buttons']['disabled']['html'], current: true },
                            { name: 'CSS',  code: objectData['buttons']['disabled']['css'], }
                        ]"
                    />
                </div>
            </div>
            
        </article>
    </main>
        
</template>