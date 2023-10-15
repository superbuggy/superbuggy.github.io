<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path
      d="
        M12 16 
        C9.79086 16 8 14.2091 8 12 
        C 8 9.79086 9.79086 8 12 8
        M 12 16
        C 14.2091 16 16 14.2091 16 12 
        C 16 9.79086 14.2091 8 12 8
      "
      stroke-width="2"
    />
    <path
      v-if="!isFirst"
      d="
      M 12 8
      L 12 0"
      stroke-width="2"
    />
    <path
      v-if="!isLast"
      d="
        M 12 16
        L 12 24
      "
      stroke-width="2"
    />
  </svg>
</template>
<script setup lang="ts">
defineProps<{
  isFirst: boolean;
  isLast: boolean;
}>();
</script>
