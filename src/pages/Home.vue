<script setup>
       import data from '../data/index';
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
                    
                    
                    <div class="my-16 xl:max-w-none">
                        <h2 id="resources" class="scroll-mt-24">
                            <a class="no-underline group text-inherit hover:text-inherit" href="/#resources">
                                <div
                                    class="absolute mt-1 ml-[calc(-1*var(--width))] hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]"
                                >
                                    <div class="block w-5 h-5 transition rounded-lg group/anchor bg-zinc-50 ring-1 ring-inset ring-zinc-300 hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                                        <svg viewBox="0 0 20 20" fill="none" stroke-linecap="round" aria-hidden="true" class="w-5 h-5 transition stroke-zinc-500 dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white">
                                            <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"></path>
                                        </svg>
                                    </div>
                                </div>
                                Componentes
                            </a>
                        </h2>
                       
                        <div class="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-zinc-900/5 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
                            
                            <div v-for="item in data['components']" class="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                                <div class="pointer-events-none">
                                    <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                                        <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5">
                                            <defs>
                                                <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern>
                                            </defs>
                                            <rect width="100%" height="100%" stroke-width="0" fill="url(#:R56hd6:)"></rect>
                                            <svg x="50%" y="16" class="overflow-visible">
                                                <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
                                                <rect stroke-width="0" width="73" height="57" x="72" y="168"></rect>
                                            </svg>
                                        </svg>
                                    </div>
                                    <div
                                        class="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                                        style="mask-image: radial-gradient(180px at 0px 0px, white, transparent); -webkit-mask-image: radial-gradient(180px at 0px 0px, white, transparent);"
                                    ></div>
                                    <div
                                        class="absolute inset-0 transition duration-300 opacity-0 rounded-2xl mix-blend-overlay group-hover:opacity-100"
                                        style="mask-image: radial-gradient(180px at 0px 0px, white, transparent); -webkit-mask-image: radial-gradient(180px at 0px 0px, white, transparent);"
                                    >
                                        <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10">
                                            <defs>
                                                <pattern id=":R1d6hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern>
                                            </defs>
                                            <rect width="100%" height="100%" stroke-width="0" fill="url(#:R1d6hd6:)"></rect>
                                            <svg x="50%" y="16" class="overflow-visible">
                                                <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
                                                <rect stroke-width="0" width="73" height="57" x="72" y="168"></rect>
                                            </svg>
                                        </svg>
                                    </div>
                                </div>
                                <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
                                <div class="relative px-4 pt-16 pb-4 rounded-2xl">
                                    <div
                                        class="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400"
                                    >
                                        <svg
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                            class="w-5 h-5 transition-colors duration-300 fill-zinc-700/10 stroke-zinc-700 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                                        >
                                            <path
                                                stroke-width="0"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
                                            ></path>
                                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"></path>
                                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
                                        </svg>
                                    </div>
                                    
                                    <h3 class="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                                       
                                        <a href="/contacts">
                                          <span class="absolute inset-0 rounded-2xl"></span>{{ item.name }}
                                       </a>
                                    </h3>
                                    <router-link :to="{ name: 'Buttons' }" class="absolute inset-0 rounded-2xl">
                                    
                                    </router-link>
                                    <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400"><!--Description--></p>
                                </div>
                            
                            </div>
                        
                        </div>
                    </div>
                </article>
            </main>
</template>