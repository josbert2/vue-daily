<script setup>

    import { HighCode } from 'vue-highlight-code';
    import 'vue-highlight-code/dist/style.css';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

    // Components
    import Header from './components/Layouts/Header.vue';
    import CodeHightLightView from './components/CodeHightLightView.vue';
    import Buttons from './components/ui/Buttons/Buttons.vue';

    const value = `<button class="tw-btn tw-btn">Enviar</button>`;


</script>
<template>
  <div class="lg:ml-72 xl:ml-80">
    <Header />
    <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
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
                    <Buttons
                        :buttons="[
                            { name: 'Enviar', href: '#', current: true }]"
                        :size="2"
                        typeBtn="default"
                    />
                  <div class="my-6 overflow-hidden shadow-md not-prose rounded-2xl bg-zinc-900 dark:ring-1 dark:ring-white/10">
                       <TabGroup>
                            <TabList class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                                <div class="flex w-full gap-4 -mb-px text-xs font-medium" role="tablist" aria-orientation="horizontal">
                                    <div class="flex items-center w-full tabHeader">
                                        <Tab data-headlessui-state="selected"
                                            class="py-3 active transition border-b border-transparent f text-zinc-400 hover:text-zinc-300"
                                            
                                            
                                        
                                        >
                                            CSS
                                        </Tab>
                                        
                                    </div>
                                </div>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <div>
                                        <span
                                            id="headlessui-tabs-panel-:Rqjd6:"
                                            role="tabpanel"
                                            aria-labelledby="headlessui-tabs-tab-:R36jd6:"
                                            tabindex="-1"
                                            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
                                        ></span>
                                        <span
                                            id="headlessui-tabs-panel-:R1ajd6:"
                                            role="tabpanel"
                                            aria-labelledby="headlessui-tabs-tab-:R56jd6:"
                                            tabindex="-1"
                                            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
                                        ></span>
                                        <div id="headlessui-tabs-panel-:R1qjd6:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:R76jd6:" tabindex="0" data-headlessui-state="selected">
                                            <div class="group dark:bg-white/2.5">
                                                <div class="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
                                                    <div class="flex dark"><span class="font-mono text-[0.625rem] font-semibold leading-6 text-emerald-500 dark:text-emerald-400">GET</span></div>
                                                    <span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span class="font-mono text-xs text-zinc-400">/v1/conversations</span>
                                                </div>
                                                <div class="relative">
                                                    <pre class="p-4 overflow-x-auto text-xs text-white">
                                                        <HighCode
                                                        class="code"
                                                        :codeValue="value"
                                                        theme="dark"
                                                        :lang="vue"
                                                        ></HighCode>
                                                    </pre>
                                                    <button
                                                        type="button"
                                                        class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
                                                    >
                                                        <span aria-hidden="false" class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300">
                                                            <svg viewBox="0 0 20 20" aria-hidden="true" class="w-5 h-5 transition-colors fill-zinc-500/20 stroke-zinc-500 group-hover/button:stroke-zinc-400">
                                                                <path stroke-width="0" d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"></path>
                                                                <path
                                                                    fill="none"
                                                                    stroke-linejoin="round"
                                                                    d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
                                                                ></path>
                                                            </svg>
                                                            Copy
                                                        </span>
                                                        <span aria-hidden="true" class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            id="headlessui-tabs-panel-:R2ajd6:"
                                            role="tabpanel"
                                            tabindex="-1"
                                            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;"
                                            aria-labelledby="headlessui-tabs-tab-:R96jd6:"
                                        ></span>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                       </TabGroup>
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
                       <TabGroup>
                            <TabList class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                                <div class="flex w-full gap-4 -mb-px text-xs font-medium" role="tablist" aria-orientation="horizontal">
                                    <div class="flex items-center w-full tabHeader">
                                        <Tab data-headlessui-state="selected"
                                            class="py-3 active transition border-b border-transparent f text-zinc-400 hover:text-zinc-300"
                                            
                                            
                                        
                                        >
                                            CSS
                                        </Tab>
                                        
                                    </div>
                                </div>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <div>
                                        <span
                                            id="headlessui-tabs-panel-:Rqjd6:"
                                            role="tabpanel"
                                            aria-labelledby="headlessui-tabs-tab-:R36jd6:"
                                            tabindex="-1"
                                            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
                                        ></span>
                                        <span
                                            id="headlessui-tabs-panel-:R1ajd6:"
                                            role="tabpanel"
                                            aria-labelledby="headlessui-tabs-tab-:R56jd6:"
                                            tabindex="-1"
                                            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"
                                        ></span>
                                        <div id="headlessui-tabs-panel-:R1qjd6:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:R76jd6:" tabindex="0" data-headlessui-state="selected">
                                            <div class="group dark:bg-white/2.5">
                                                <div class="flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1">
                                                    <div class="flex dark"><span class="font-mono text-[0.625rem] font-semibold leading-6 text-emerald-500 dark:text-emerald-400">GET</span></div>
                                                    <span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span class="font-mono text-xs text-zinc-400">/v1/conversations</span>
                                                </div>
                                                <div class="relative">
                                                    <pre class="p-4 overflow-x-auto text-xs text-white">
                                                        <HighCode
                                                        class="code"
                                                        :codeValue="value"
                                                        theme="dark"
                                                        :lang="vue"
                                                        ></HighCode>
                                                    </pre>
                                                    <button
                                                        type="button"
                                                        class="group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
                                                    >
                                                        <span aria-hidden="false" class="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300">
                                                            <svg viewBox="0 0 20 20" aria-hidden="true" class="w-5 h-5 transition-colors fill-zinc-500/20 stroke-zinc-500 group-hover/button:stroke-zinc-400">
                                                                <path stroke-width="0" d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"></path>
                                                                <path
                                                                    fill="none"
                                                                    stroke-linejoin="round"
                                                                    d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
                                                                ></path>
                                                            </svg>
                                                            Copy
                                                        </span>
                                                        <span aria-hidden="true" class="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0">Copied!</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <span
                                            id="headlessui-tabs-panel-:R2ajd6:"
                                            role="tabpanel"
                                            tabindex="-1"
                                            style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;"
                                            aria-labelledby="headlessui-tabs-tab-:R96jd6:"
                                        ></span>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                       </TabGroup>
                  </div>
                </div>
                
            </article>
        </main>
        
    </div>

  </div>
</template>