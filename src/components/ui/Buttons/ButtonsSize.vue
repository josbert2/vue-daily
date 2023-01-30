<script setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import CodeHightLightView from '../../CodeHightLightView.vue';

    const value = `
        <button class="tw-btn tw-btn-mini tw-btn-primary">
            Mini    
        </button>
        <button class="tw-btn tw-btn-sm tw-btn-primary">
            Small
        </button>
        <button class="tw-btn tw-btn-primary">
            Normal
        </button>
        <button class="tw-btn tw-btn-lg tw-btn-primary">
            LG
        </button>
        <button class="tw-btn tw-btn-xl tw-btn-primary">
            Large
        </button>
        <button class="tw-btn full-width tw-btn-primary">
            full widht
        </button>
    `
</script>

<template>
    <h2 class="scroll-mt-24">Tamaños:</h2>
    <p class="lead">
        El botón principal es una variante de un botón por defecto, y suele tener un color distintivo, como el color principal de la aplicación o sitio web, para destacarlo y hacerlo más visible. Es utilizado para las acciones más importantes o las acciones que se espera que el usuario realice con más frecuencia.
    </p>

    <div class="flex flex-col gap-5">
        <button class="tw-btn tw-btn-mini tw-btn-primary">
            Mini    
        </button>
        <button class="tw-btn tw-btn-sm tw-btn-primary">
            Small
        </button>
        <button class="tw-btn tw-btn-primary">
            Normal
        </button>
        <button class="tw-btn tw-btn-lg tw-btn-primary">
            LG
        </button>
        <button class="tw-btn tw-btn-xl tw-btn-primary">
            Large
        </button>
        <button class="tw-btn full-width tw-btn-primary">
            full widht
        </button>
    </div>
    <div class="my-6 overflow-hidden shadow-md not-prose rounded-2xl bg-zinc-900 dark:ring-1 dark:ring-white/10">
        <TabGroup>
            <TabList class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <div class="flex w-full gap-4 -mb-px text-xs font-medium" role="tablist" aria-orientation="horizontal">
                    <div class="flex items-center w-full gap-5 tabHeader">
                        <Tab
                            data-headlessui-state=""
                            class="py-3 transition border-b border-transparent f text-zinc-400 hover:text-zinc-300">
                            <span class="py-3 transition border-b border-transparent f text-zinc-400 hover:text-zinc-300">
                                HTML
                            </span>
                        </Tab>
                    </div>
                    
                </div>
            </TabList>
            <TabPanels>
                <TabPanel  >
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
                                    <span class="h-0.5 w-0.5 rounded-full bg-zinc-500"></span><span class="font-mono text-xs text-zinc-400">/s</span>
                                </div>
                                <div class="relative">
                                    <CodeHightLightView :code="value" />
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
</template>