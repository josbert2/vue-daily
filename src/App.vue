<script setup>
    import { ref } from 'vue';
    // Components
    import Header from './components/Layouts/Header.vue';
    import Buttons from './components/ui/Buttons/Buttons.vue';
    import Tabs from './components/Tabs.vue';

    import Fotter from './components/Layouts/Footer.vue';

    import { HighCode } from 'vue-highlight-code';
    import 'vue-highlight-code/dist/style.css';
    

    const isLoading = ref(true);
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);


</script>
<template>
    <div class="lg:ml-72 xl:ml-80">
        <Header />
        <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
            
            <div class="" v-if="isLoading">
                <div class="">
                    <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
                        <div class="py-16">
                            <div class="prose dark:prose-invert">
                                <div class="my-16 xl:max-w-none">
                                    <div class="">
                                        <div class="cp-line-title"></div>
                                        <div class="cp-paragraph w-full mt-5"></div>
                                        <div class="cp-line-preview"></div>  
                                        <div class="border-t mt-16 mb-16 border-gray-800/25">
                                        
                                        </div>
                                        <div class="cp-line-title"></div>
                                        <div class="cp-paragraph w-full mt-5"></div>
                                        <div class="cp-line-preview"></div> 
                                        <div class="border-t mt-16 mb-16 border-gray-800/25">
                                        
                                        </div>
                                        <div class="cp-line-title"></div>
                                        <div class="cp-paragraph w-full mt-5"></div>
                                        <div class="cp-line-preview"></div> 
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="" v-else>
                <router-view v-slot="{ Component }">
                    <transition name="fade-enter" mode="out-in">
                        <component :is="Component" class="fade-leave fade-enter" />
                    </transition>
                </router-view>
            </div>
        
            <!--<Fotter/>-->
        </div>

    </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    /* Transición de opacidad */
    transition: opacity 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
    /* Estados inicial y final de la animación */
    opacity: 0;
}
.fade-leave{
    transition: all 0.3s ease-out;
    transition-delay: 2s;
}
.fade-leave{
    /* Estados inicial y final de la animación */
    opacity: 1;
}
</style>