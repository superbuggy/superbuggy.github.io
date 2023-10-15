<script setup lang="ts">
import ProjectList from "./ProjectList.vue";
import ProjectListItem from "./ProjectListItem.vue";

// import { ref } from 'vue'

// const count = ref(0)
</script>

<template>
  <div>
    <aside>
      <ProjectList>
        <ProjectListItem :isFirst="true" >About</ProjectListItem>
        <ProjectListItem>Resumé</ProjectListItem>
        <ProjectListItem>Projects</ProjectListItem>
        <ProjectListItem :isLast="true">Thoughts</ProjectListItem>
      </ProjectList>
      <!-- <ul>
        <li>projects</li>
        <li>projects</li>
      </ul> -->
    </aside>
    <main>
      <h1>James Reichard</h1>
    </main>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  grid-template-rows: 1fr;
  margin: 0;
  padding: 0;
}
main {
  padding-top: 2rem;
  padding-left: 3rem;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
aside {
  min-height: 100vh;
  max-height: 100vh;
  margin: 0;
  padding-top: 7rem;
  grid-column: 1 / 2;
  border-right: 1px solid var(--xanadu);
  background-color: var(--heavy-metal);
}

</style>
