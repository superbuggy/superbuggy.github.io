<script setup lang="ts">
import ProjectList from "./ProjectList.vue";
import ProjectListItem from "./ProjectListItem.vue";
</script>

<template>
  <aside>
    <ProjectList>
      <ProjectListItem path="/" :isFirst="true">About</ProjectListItem>
      <ProjectListItem path="/resume">Resumé</ProjectListItem>
      <ProjectListItem path="/projects">Projects</ProjectListItem>
      <ProjectListItem path="/blog" :isLast="true">Thoughts</ProjectListItem>
    </ProjectList>
  </aside>
</template>

<style scoped>
aside {
  height: 100%;
  /* min-height: 100vh; */
  /* max-height: 100vh; */
  margin: 0;
  padding-top: 7rem;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-right: 1px solid var(--xanadu);
  background-color: var(--heavy-metal);
}
</style>
