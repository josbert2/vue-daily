<script setup>

      const typeButtons = {
         default: {
            name: 'Default',
            class: 'tw-btn'
         }
      }
   
      defineProps({
         buttons: {
            type: Array,
            required: true
         },
         type: {
            type: String,
            required: true
         },
         size: {
            type: String,
            required: true
         },

      })
</script>

<template>
   <button v-for="button in buttons" :key="button.id" :type="typeButtons[type]" :class="'tw-btn tw-btn-' + size">
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