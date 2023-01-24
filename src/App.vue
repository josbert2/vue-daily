<script setup>

    import { HighCode } from 'vue-highlight-code';
    import 'vue-highlight-code/dist/style.css';

    // Components
    import Header from './components/Layouts/Header.vue';
    import CodeHightLightView from './components/CodeHightLightView.vue';
    import Buttons from './components/ui/Buttons/Buttons.vue';

    const value = `import { HighCode } from 'vue-highlight-code';
    import 'vue-highlight-code/dist/style.css';
    export default {
        components: {
        HighCode
        },
        data(){
        
        }
    }`;


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
                <h1>API Documentation</h1>
                <p class="lead">Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.</p>
                <div class="flex gap-3 mt-6 mb-16 not-prose">
                    <a
                        class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300"
                        href="/quickstart"
                    >
                        Quickstart
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 -mr-1"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path></svg>
                    </a>
                    <a
                        class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white"
                        href="/sdks"
                    >
                        Explore SDKs
                    </a>
                </div>
                <h2 class="scroll-mt-24">Getting started</h2>
                <p class="lead">
                    To get started, create a new application in your <a href="/#">developer settings</a>, then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your
                    integration is ready to go live, publish it to our <a href="/#">integrations directory</a> to reach the Protocol community.
                </p>
                <div class="not-prose">
                    <a class="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500" href="/sdks">
                        Get your API key
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" class="mt-0.5 h-5 w-5 relative top-px -mr-1">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                        </svg>
                    </a>
                </div>
                <div class="my-16 xl:max-w-none">   
                    <Buttons
                        :buttons="[
                            { name: 'button', href: '#', current: true }]"
                        :size="2"
                        :type="default"
                    />

                    <Buttons
                        :buttons="[
                            { name: 'HTTP', href: '#', current: true },
                            { name: 'SDKs', href: '/sdks' },
                            { name: 'GraphQL', href: '#' },
                        ]"
                        :size="2"
                    />

                  <div class="my-6 overflow-hidden shadow-md not-prose rounded-2xl bg-zinc-900 dark:ring-1 dark:ring-white/10">
                      <div class="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                          <div class="flex w-full gap-4 -mb-px text-xs font-medium" role="tablist" aria-orientation="horizontal">
                              <div class="flex items-center w-full">
                                <button
                                  class="py-3 transition border-b border-transparent f text-zinc-400 hover:text-zinc-300"
                                  id="headlessui-tabs-tab-:R36jd6:"
                                  role="tab"
                                  type="button"
                                  aria-selected="false"
                                  tabindex="-1"
                                  data-headlessui-state=""
                            
                              >
                                  CSS
                              </button>
                              
                              <button
                                  class="py-3 ml-auto transition border-b border-transparent f text-zinc-400 hover:text-zinc-300"
                                  id="headlessui-tabs-tab-:R96jd6:"
                                  role="tab"
                                  type="button"
                                  aria-selected="false"
                                  tabindex="-1"
                                  data-headlessui-state=""
                                  a
                              >
                                  Result
                              </button>
                              </div>
                          </div>
                      </div>
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
                  </div>
                </div>
                
            </article>
        </main>
        
    </div>

  </div>
</template>