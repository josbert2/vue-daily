<script setup>
   import { HighCode } from 'vue-highlight-code';
   import 'vue-highlight-code/dist/style.css';
   defineProps({
      code: {
         type: String,
         required: true
      }
   })

   const value = `<button class="tw-btn tw-btn">Enviar</button>`;
</script>
<template>
   <div class="">
      <pre class="p-4 flex overflow-x-auto text-xs text-white">
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
</template>