<script setup> 
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import CodeHightLightView from './CodeHightLightView.vue';


    defineProps({
        tabs: {
            type: Array,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        tabPanels: {
            type: Array,
            required: true
        }
    })
</script>
<template>


    <TabGroup>
        <TabList class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
            <div class="flex w-full gap-4 -mb-px text-xs font-medium" role="tablist" aria-orientation="horizontal">
                <div class="flex items-center w-full gap-5 tabHeader">
                    <Tab v-for="tab in tabs"  
                         data-headlessui-state=""
                        class="py-3 transition border-b border-transparent f text-zinc-400 hover:text-zinc-300">
                        <span class="py-3 transition border-b border-transparent f text-zinc-400 hover:text-zinc-300">
                            {{ tab.name }}
                        </span>
                    </Tab>
                </div>
                
            </div>
        </TabList>
        <TabPanels>
            <TabPanel v-for="tab in tabs" >
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
                                <CodeHightLightView :code="tab.code" />
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

</template>