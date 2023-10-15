<template>
  <ul>
    <!-- <template v-for="(_, index) in $slots">
      <slot :isFirst="index === 0" :isLast="index === $slots.length - 1" :slotProps="{isFirst:index === 0, isLast:index === $slots.length - 1}" />
    </template> -->
    <!-- <ProjectListItem v-for="(_, index) in $slots" :isFirst="index === 0" :isLast="index === $slots.length - 1"> -->
    <slot></slot>
    <!-- </ProjectListItem> -->


  </ul>
</template>

<script setup lang="ts">
import ProjectListItem from './ProjectListItem.vue';



</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
