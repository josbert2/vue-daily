<script setup>
      const props = defineProps({
         buttons: {
            type: Array,
            required: true
         },
         typeBtn: {
            type: String,
            required: true
         },
         size: {
            type: String,
            required: true
         },

      })
      const typeButtons = {
         default: {
            name: 'Default',
            class: 'tw-btn'
         },
         defaultGray: {
            name: 'Default Gray',
            class: 'tw-btn-gray'
         },
         primary: {
            name: 'Primary',
            class: 'tw-btn-primary'
         },
         disabled: {
            name: 'Disabled',
            class: 'tw-btn-disabled'
         },
      }
</script>

<template>
   <button v-for="button in buttons" 
           v-if="typeButtons[props.typeBtn]" :key="button.id" 
           :class="'tw-btn ' + (typeButtons[props.typeBtn] ? typeButtons[props.typeBtn].class : '') + ' '">
      {{ button.name }}
   </button>
</template>
<script>
import "@/assets/components/buttons/index.scss"
export default {
  // ...
}
</script>
<style lang="scss" scoped></style>