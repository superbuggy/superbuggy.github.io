<template>
  <ul>
    <template v-for="(slotName) of Object.keys($slots)">
      <slot :name="slotName" />
    </template>
  </ul>
</template>

<script setup lang="ts">
// import { useSlots } from "vue";

// const slots = useSlots();
// const slotNames = Object.keys(slots) as "default"[];
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
