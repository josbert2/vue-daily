<script setup>
    // Components
    import Header from './components/Layouts/Header.vue';
    import Buttons from './components/ui/Buttons/Buttons.vue';
    import Tabs from './components/Tabs.vue';

    import Fotter from './components/Layouts/Footer.vue';

    import { HighCode } from 'vue-highlight-code';
    import 'vue-highlight-code/dist/style.css';
   



</script>
<template>
    <div class="lg:ml-72 xl:ml-80">
        <Header />
        <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
            <router-view />
            <Fotter/>
        </div>

    </div>
</template>